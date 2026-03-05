import AdmissionPage from "@/components/admission-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admissions 2026 | Garrison Academy Kharian Cantt",
  description:
    "Apply for admission to Garrison Academy Kharian Cantt. Complete admission process, eligibility criteria, required documents, and online application form for Session 2026.",
  keywords: [
    "GAK Admission",
    "Apply Online",
    "School Admission",
    "Garrison Academy Application",
    "APSACS Admission",
    "Kharian School",
    "Admission 2026",
    "Eligibility Criteria",
  ],
}

export default function Admission() {
  return <AdmissionPage />
}
