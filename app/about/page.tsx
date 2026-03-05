import AboutPage from "@/components/about-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Garrison Academy Kharian Cantt",
  description:
    "Learn about Garrison Academy Kharian Cantt - over 50 years of excellence in education. Discover our mission, achievements, facilities, and commitment to shaping tomorrow's leaders.",
  keywords: [
    "Garrison Academy",
    "GAK",
    "Kharian Cantt",
    "APSACS",
    "Army Public School",
    "About GAK",
    "School History",
    "Academic Excellence",
  ],
}

export default function About() {
  return <AboutPage />
}
