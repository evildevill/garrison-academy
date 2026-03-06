import { Metadata } from "next";
import LoginPage from "@/components/login-page";

export const metadata: Metadata = {
  title: "Portal Login | Garrison Academy Kharian Cantt",
  description:
    "Login to Garrison Academy Kharian Cantt (GAK) Portal. Secure access for students, teachers, administrators, and specialists. Enter your full name, B-Form number, and role to access your dashboard. Track attendance, assignments, grades, and academic progress. Manage classes and communicate with students and staff.",
  keywords: [
    "GAK login",
    "student portal",
    "teacher portal",
    "admin login",
    "Garrison Academy login",
    "school portal",
    "dashboard access",
    "B-Form login",
    "secure portal",
    "education portal",
  ],
};

export default function Login() {
  return <LoginPage />;
}
