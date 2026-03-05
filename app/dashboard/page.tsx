import { Metadata } from "next";
import DashboardPage from "@/components/dashboard-page";

export const metadata: Metadata = {
  title: "Engineering Achievement Portal | Garrison Academy Kharian Cantt",
  description: "Track your academic progress with our gamified engineering achievement portal. View your attendance points, assignment badges, event participation, leaderboard rankings, and career roadmaps for Computer Science, Electrical, and Mechanical Engineering.",
  keywords: ["GAK Dashboard", "Student Portal", "Achievement Tracking", "Engineering Careers", "Academic Progress", "Gamified Learning", "Leaderboard", "Career Roadmap", "Student Dashboard", "Engineering Portal"],
};

export default function Dashboard() {
  return <DashboardPage />;
}
