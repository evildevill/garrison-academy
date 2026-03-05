import type { Metadata } from "next";
import AcademicSchedulePage from "@/components/academic-schedule-page";

export const metadata: Metadata = {
  title: "Academic Schedule 2026 | Garrison Academy Kharian Cantt",
  description:
    "View the complete academic schedule for Garrison Academy Kharian including key dates, daily timetables, examination schedules, and important events for the 2026 academic year.",
  keywords: [
    "Academic Schedule",
    "GAK Schedule",
    "School Timetable",
    "Examination Dates",
    "Academic Calendar",
    "Class Timings",
    "APSACS Schedule",
    "Garrison Academy Calendar"
  ],
};

export default function AcademicSchedule() {
  return <AcademicSchedulePage />;
}
