
'use server';

import { db } from '@/lib/external-firebase';
import { ref, push, set } from 'firebase/database';

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
    const enquiriesRef = ref(db, 'enquiries');
    const newEnquiryRef = push(enquiriesRef);
    
    const enquiry: EnquiryData = {
      ...data,
      status: 'New',
      created_at: new Date().toISOString(),
    };

    await set(newEnquiryRef, enquiry);
    return { success: true };
  } catch (error) {
    console.error('Error submitting enquiry:', error);
    return { success: false, error: 'Failed to submit enquiry' };
  }
}
