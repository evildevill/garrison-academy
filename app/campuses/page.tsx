import CampusesPage from "@/components/campuses-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Campuses | Garrison Academy Kharian Cantt",
  description:
    "Explore all seven campuses of Garrison Academy Kharian Cantt. From Pre-School to College, discover our comprehensive educational facilities serving Classes PG through F.Sc.",
  keywords: [
    "GAK Campuses",
    "Pre-School GAK",
    "Junior Campus",
    "Middle Campus",
    "Senior Campus",
    "College Campus",
    "Girls Campus",
    "Boys Campus",
    "APSACS Schools",
  ],
}

export default function Campuses() {
  return <CampusesPage />
}
