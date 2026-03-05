import { Metadata } from "next";
import ScholarshipPage from "@/components/scholarship-page";

export const metadata: Metadata = {
  title: "Scholarship Program | Garrison Academy Kharian Cantt",
  description: "Celebrating academic excellence at Garrison Academy. View our scholarship recipients and top performers across Classes IX, X, XI, and XII. Recognizing exceptional students who demonstrate outstanding dedication to their studies.",
  keywords: ["GAK Scholarships", "Academic Merit", "Top Students", "Scholarship Program", "Academic Excellence", "School Achievers", "Matric Toppers", "College Toppers", "Garrison Academy Merit", "APSACS Scholarships"],
};

export default function Scholarship() {
  return <ScholarshipPage />;
}
