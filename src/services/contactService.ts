import { hygraphClient } from '@/lib/hygraph';
import { gql } from 'graphql-request';
import type { CMS_Contact, ContactDetails } from './types/contact';

// This query fetches the 'email', 'mobile', and 'socialMedia' fields for all 'Contact' entries.
const GET_CONTACT_DETAILS_QUERY = gql`
  query GetContactDetails {
    contacts {
      id
      email
      mobile
    }
  }
`;

/**
 * Fetches and processes contact details from Hygraph.
 * It transforms the comma-separated 'email' and 'mobile' string fields into arrays.
 * @returns {Promise<ContactDetails[]>} A promise that resolves to an array of processed contact objects.
 */
export async function fetchAndProcessContactDetails(): Promise<ContactDetails[]> {
  try {
    const { contacts } = await hygraphClient.request<{ contacts: CMS_Contact[] }>(GET_CONTACT_DETAILS_QUERY);

    // Process the data to convert comma-separated strings into arrays and handle nulls
    const processedContacts: ContactDetails[] = contacts.map(contact => ({
      id: contact.id,
      email: contact.email ? contact.email.split(',').map(s => s.trim()) : [],
      mobile: contact.mobile ? contact.mobile.split(',').map(s => s.trim()) : [],
      socialMedia: contact.socialMedia || [],
    }));

    console.log('Fetched and processed contacts from service:', processedContacts);
    return processedContacts;
  } catch (error) {
    console.error('Failed to fetch and process contact details:', error);
    // In a real-world app, you might want to handle this error more gracefully
    return [];
  }
}