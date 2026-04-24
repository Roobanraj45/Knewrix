
'use server';

export type EnquiryData = {
  name: string;
  email: string;
  phone?: string;
  company_name?: string;
  address?: string;
  enquiry_type?: string;
  subject?: string;
  message: string;
  attachment?: string;
  status: string;
  created_at: string;
};

export async function submitEnquiry(data: Omit<EnquiryData, 'status' | 'created_at'>) {
  try {
    // Using the Firebase REST API endpoint for the provided database URL
    const databaseUrl = 'https://studio-2506567351-f45ca-default-rtdb.firebaseio.com/enquiries.json';
    
    const enquiry: EnquiryData = {
      ...data,
      status: 'New',
      created_at: new Date().toISOString(),
    };

    const response = await fetch(databaseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enquiry),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Firebase REST API error:', errorText);
      return { success: false, error: 'Failed to submit enquiry' };
    }

    return { success: true };
  } catch (error) {
    console.error('Error submitting enquiry:', error);
    return { success: false, error: 'Failed to submit enquiry' };
  }
}
