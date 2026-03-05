import { Metadata } from "next";
import FeedbackPage from "@/components/feedback-page";

export const metadata: Metadata = {
  title: "Feedback | Garrison Academy Kharian Cantt",
  description: "Share your valuable feedback about Garrison Academy. Help us improve our academics, facilities, staff services, and overall student experience. Your opinion matters to us.",
  keywords: ["GAK Feedback", "School Feedback", "Parent Feedback", "Student Feedback", "Academy Review", "Educational Feedback", "School Improvement", "Garrison Academy Opinion", "APSACS Feedback", "School Survey"],
};

export default function Feedback() {
  return <FeedbackPage />;
}
