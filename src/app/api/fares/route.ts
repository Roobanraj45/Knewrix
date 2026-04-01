import { NextRequest, NextResponse } from 'next/server';
import { initializeFirebase } from '@/firebase';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';
import { calculateFare } from '@/lib/fare-calculations';

/**
 * REST API for Fare Fetching.
 * GET /api/fares?routeId=...&classId=...&operatorId=...
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const routeId = searchParams.get('routeId');
  const classId = searchParams.get('classId');
  const operatorId = searchParams.get('operatorId');

  // 1. Validate Input Parameters
  if (!routeId || !classId || !operatorId) {
    return NextResponse.json(
      { error: "Missing required parameters: routeId, classId, and operatorId are all required." },
      { status: 400 }
    );
  }

  try {
    const { firestore } = initializeFirebase();
    
    // 2. Fetch Fare Details from Database
    const faresRef = collection(firestore, 'fares');
    const q = query(
      faresRef,
      where('routeId', '==', routeId),
      where('classId', '==', classId),
      where('operatorId', '==', operatorId),
      limit(1)
    );

    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      return NextResponse.json(
        { error: "No fare record found for the provided route, class, and operator." },
        { status: 404 }
      );
    }

    const fareData = snapshot.docs[0].data();
    
    // 3. Calculate Fare Components (using internal logic if missing in DB)
    const distance = fareData.distance || 0;
    const baseFare = fareData.adultFare || fareData.totalFare || 0;
    const components = calculateFare(baseFare, distance);

    // 4. Return Structured JSON Response
    return NextResponse.json({
      operatorId: fareData.operatorId || operatorId,
      routeId: fareData.routeId || routeId,
      classId: fareData.classId || classId,
      tripId: fareData.tripId || "",
      tripCode: fareData.tripCode || "N/A",
      
      fromPlaceId: fareData.fromPlaceId || "",
      toPlaceId: fareData.toPlaceId || "",
      
      fromPlaceName: fareData.fromPlaceName || "Origin",
      toPlaceName: fareData.toPlaceName || "Destination",
      
      fromPlaceLGName: fareData.fromPlaceLGName || "",
      toPlaceLGName: fareData.toPlaceLGName || "",
      
      fromStageNumber: fareData.fromStageNumber || 0,
      toStageNumber: fareData.toStageNumber || 0,
      stageCount: fareData.stageCount || 0,
      distance: distance,
      
      adultFare: fareData.adultFare || components.adultFare,
      childFare: fareData.childFare || components.childFare,
      luggageFare: fareData.luggageFare || components.luggageFare,
      
      tollCharge: fareData.tollCharge || components.tollCharge,
      serviceCharge: fareData.serviceCharge || components.serviceCharge,
      infraFee: fareData.infraFee || components.infraFee,
      totalFare: fareData.totalFare || components.totalFare,
      
      lowestClassTotalFare: fareData.lowestClassTotalFare || 0,
      isActive: fareData.isActive ?? true,
      
      createdAt: fareData.createdAt || new Date().toISOString(),
      updatedAt: fareData.updatedAt || new Date().toISOString(),
      syncStatus: fareData.syncStatus || "synced"
    });

  } catch (error: any) {
    return NextResponse.json(
      { error: "Internal Server Error", message: error.message },
      { status: 500 }
    );
  }
}
