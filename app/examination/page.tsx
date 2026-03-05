import { Metadata } from "next";
import ExaminationPage from "@/components/examination-page";

export const metadata: Metadata = {
  title: "Examination Portal | Garrison Academy Kharian Cantt",
  description: "Access examination schedules, syllabi, datesheets, and results for Middle, Matric, and College sections. FBISE announcements, exam plans, and important notices for all classes at Garrison Academy.",
  keywords: ["GAK Examination", "School Exams", "FBISE Datesheet", "Exam Syllabus", "Matric Exams", "College Exams", "Middle Section Exams", "Academic Assessment", "Exam Portal", "Garrison Academy Exams"],
};

export default function Examination() {
  return <ExaminationPage />;
}
