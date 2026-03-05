import { Metadata } from "next";
import UniformPage from "@/components/uniform-page";

export const metadata: Metadata = {
  title: "School Uniforms | Garrison Academy Kharian Cantt",
  description: "Official school uniform dress code for all sections at Garrison Academy. View detailed specifications for Junior, Middle, Senior, and College uniforms including blazers, formal attire, and accessories.",
  keywords: ["GAK Uniform", "School Dress Code", "Official Uniform", "School Attire", "Garrison Academy Uniform", "APSACS Uniform", "School Blazer", "Formal Dress", "Student Uniform", "Uniform Guide"],
};

export default function Uniform() {
  return <UniformPage />;
}
