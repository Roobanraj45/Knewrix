/**
 * @fileOverview Business logic for fare component calculations.
 */

export interface FareComponents {
  adultFare: number;
  childFare: number;
  luggageFare: number;
  tollCharge: number;
  serviceCharge: number;
  infraFee: number;
  totalFare: number;
}

export function calculateFare(baseFare: number, distance: number): FareComponents {
  // Example logic: components derived from base fare and distance
  const adultFare = baseFare;
  const childFare = Math.floor(baseFare * 0.5);
  const luggageFare = distance > 100 ? 50 : 20;
  const tollCharge = distance > 200 ? 100 : 0;
  const serviceCharge = 15;
  const infraFee = 10;
  
  const totalFare = adultFare + childFare + luggageFare + tollCharge + serviceCharge + infraFee;

  return {
    adultFare,
    childFare,
    luggageFare,
    tollCharge,
    serviceCharge,
    infraFee,
    totalFare
  };
}
