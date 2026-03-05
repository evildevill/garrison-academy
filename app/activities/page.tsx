import type { Metadata } from "next";
import ActivitiesPage from "@/components/activities-page";

export const metadata: Metadata = {
  title: "Activities & Co-Curricular | Garrison Academy Kharian Cantt",
  description:
    "Explore the vibrant activities and co-curricular programs at Garrison Academy including sports, debate, science club, art, exhibitions, and more. Where character is built beyond the classroom.",
  keywords: [
    "GAK Activities",
    "School Sports",
    "Co-Curricular Activities",
    "Science Club",
    "Debate Society",
    "Art Club",
    "Sports Programme",
    "Student Activities",
    "School Exhibitions",
    "APSACS Sports"
  ],
};

export default function Activities() {
  return <ActivitiesPage />;
}
