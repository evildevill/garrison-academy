import { Metadata } from "next";
import ContactPage from "@/components/contact-page";

export const metadata: Metadata = {
  title: "Contact Us | Garrison Academy Kharian Cantt",
  description:
    "Get in touch with Garrison Academy Kharian Cantt (GAK). Contact us for admissions inquiries, academic information, or general questions. Located in Kharian Cantonment, District Gujrat, Punjab. Phone: +92 (537) 100-000. Email: info@gak.edu.pk. Office hours: Monday-Friday 8:00 AM - 3:00 PM, Saturday 8:00 AM - 12:00 PM.",
  keywords: [
    "contact GAK",
    "Garrison Academy contact",
    "school inquiry Kharian",
    "admission contact",
    "GAK phone number",
    "GAK email",
    "school location Kharian",
    "education inquiry",
    "contact form",
    "school office hours",
  ],
};

export default function Contact() {
  return <ContactPage />;
}
