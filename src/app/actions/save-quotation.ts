
'use server';

export type QuotationData = {
  quotationNumber: string;
  date: string;
  clientName: string;
  clientEmail: string;
  clientAddress?: string;
  items: Array<{
    description: string;
    quantity: number;
    unitPrice: number;
  }>;
  subtotal: number;
  gst: number;
  total: number;
  notes?: string;
  created_at: string;
};

export async function saveQuotation(data: QuotationData) {
  try {
    const databaseUrl = 'https://studio-2506567351-f45ca-default-rtdb.firebaseio.com/quotations.json';
    
    const response = await fetch(databaseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Firebase Error:', errorText);
      return { success: false, error: 'Failed to save quotation' };
    }

    return { success: true };
  } catch (error) {
    console.error('Error saving quotation:', error);
    return { success: false, error: 'System error' };
  }
}

export async function getNextQuotationNumber() {
  try {
    const databaseUrl = 'https://studio-2506567351-f45ca-default-rtdb.firebaseio.com/quotations.json';
    const response = await fetch(databaseUrl);
    const data = await response.json();
    
    let count = 0;
    if (data) {
      count = Object.keys(data).length;
    }
    
    const nextNumber = (count + 1).toString().padStart(6, '0');
    return `KNX-${nextNumber}`;
  } catch (error) {
    console.error('Error fetching count:', error);
    return `KNX-${Math.floor(100000 + Math.random() * 900000)}`;
  }
}
