"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Star,
  ChevronDown,
  Baby,
  BookOpen,
  GraduationCap,
  Building2,
  Sparkles,
  Heart,
  Shapes,
  Palette,
  FlaskConical,
  Laptop,
  Venus,
  Mars,
  Microscope,
  Calculator,
  ArrowRight,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function CampusesPage() {
  const [activeSection, setActiveSection] = useState("preschool")

  // Scroll to section handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Account for sticky nav height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setActiveSection(id)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] overflow-hidden bg-slate-900">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPtDYzoi2LpsaB0MOYzoqWr3SQLZUM8NezA&s"
            alt="GAK Campuses"
            fill
            className="object-cover opacity-[0.12]"
            priority
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95" />

        {/* Decorative Corners */}
        <div className="absolute left-10 top-10 h-32 w-32 border-l-2 border-t-2 border-blue-500/30"></div>
        <div className="absolute bottom-10 right-10 h-32 w-32 border-b-2 border-r-2 border-blue-500/30"></div>

        {/* Content */}
        <div className="relative z-10 flex min-h-[80vh] items-center justify-center px-4 text-center">
          <div className="mx-auto max-w-4xl">
            <Badge className="mb-6 border-blue-400/40 bg-blue-500/10 text-blue-300">
              <Star className="h-3 w-3" />
              Est. 1975 · Kharian Cantt · APSACS
            </Badge>

            <h1 className="mb-4 font-serif text-5xl font-light text-white md:text-7xl">
              Our <span className="italic text-blue-300">Campuses</span>
            </h1>

            <div className="mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>

            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Seven Campuses · One Legacy of Excellence
            </p>
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-slate-500 animate-bounce">
          <ChevronDown className="h-5 w-5" />
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        </div>
      </section>

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-slate-900/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-1 overflow-x-auto px-4">
          {[
            { id: "preschool", label: "Pre-School", icon: <Baby className="h-4 w-4" /> },
            { id: "junior", label: "Junior", icon: <Star className="h-4 w-4" /> },
            { id: "middle", label: "Middle", icon: <BookOpen className="h-4 w-4" /> },
            { id: "senior", label: "Senior", icon: <GraduationCap className="h-4 w-4" /> },
            { id: "college", label: "College", icon: <Building2 className="h-4 w-4" /> },
          ].map((item, idx, arr) => (
            <div key={item.id} className="flex items-center">
              <button
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 whitespace-nowrap px-6 py-4 text-[10px] font-semibold uppercase tracking-wider transition-colors border-b-2 ${
                  activeSection === item.id
                    ? "border-blue-500 text-blue-400"
                    : "border-transparent text-slate-400 hover:text-blue-300"
                }`}
              >
                {item.icon}
                {item.label}
              </button>
              {idx < arr.length - 1 && (
                <div className="h-5 w-px bg-slate-700/50"></div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Pre-School Section */}
      <section
        id="preschool"
        className="scroll-mt-20 bg-white py-20 px-4 md:px-6"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600">
              PG · KG · Prep · The Very First Step
            </span>
            <h2 className="font-serif text-4xl font-normal text-slate-900 md:text-5xl">
              Pre-School <span className="italic text-blue-700">Section</span>
            </h2>
            <div className="mx-auto mt-6 h-0.5 w-12 bg-blue-600"></div>
          </div>

          <div className="grid gap-12 overflow-hidden rounded-lg border border-slate-200 bg-slate-50 lg:grid-cols-2">
            {/* Image */}
            <div className="relative min-h-[400px] bg-slate-200 lg:min-h-[520px]">
              <Image
                src="/campus/pre-school.jpeg"
                alt="Pre-School Campus"
                fill
                className="object-cover"
                priority
                quality={50}
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center p-12">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-px w-5 bg-blue-600"></div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-blue-600">
                  Playground · Kindergarten · Prep
                </span>
              </div>

              <h3 className="mb-6 font-serif text-3xl font-normal text-slate-900 md:text-4xl">
                Pre-School Campus
                <br />
                <span className="italic text-blue-700">
                  First Steps, Lifelong Foundations
                </span>
              </h3>

              <p className="mb-6 text-sm leading-relaxed text-slate-600">
                Before books, there is wonder. Our Pre-School Section welcomes the very youngest
                members of the GAK family into a safe, colourful, and nurturing world. Through
                structured play, storytelling, and guided exploration, children in PG, KG, and Prep
                develop the social, emotional, and early academic skills that set the stage for a
                lifetime of learning.
              </p>

              {/* Programme Steps */}
              <div className="mb-8 space-y-4">
                {[
                  {
                    icon: <Sparkles className="h-5 w-5" />,
                    title: "Playgroup (PG)",
                    description: "Sensory play and social interaction",
                  },
                  {
                    icon: <Heart className="h-5 w-5" />,
                    title: "Kindergarten (KG)",
                    description: "Basic literacy and numeracy skills",
                  },
                  {
                    icon: <Shapes className="h-5 w-5" />,
                    title: "Prep Class",
                    description: "Readiness for primary education",
                  },
                  {
                    icon: <Palette className="h-5 w-5" />,
                    title: "Creative Activities",
                    description: "Art, music, and movement programmes",
                  },
                ].map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 border-b border-slate-200 pb-4 last:border-0"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-slate-200 bg-blue-50 text-blue-600">
                      {step.icon}
                    </div>
                    <div>
                      <h5 className="mb-1 font-serif text-lg font-semibold text-slate-900">
                        {step.title}
                      </h5>
                      <p className="text-xs text-slate-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex gap-6 border-t border-slate-200 pt-6">
                <div className="flex-1">
                  <div className="font-serif text-3xl font-semibold text-slate-900">600+</div>
                  <div className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-blue-600">
                    Students
                  </div>
                </div>
                <div className="flex-1 border-l border-slate-200 pl-6">
                  <div className="font-serif text-3xl font-semibold text-slate-900">25+</div>
                  <div className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-blue-600">
                    Teachers
                  </div>
                </div>
                <div className="flex-1 border-l border-slate-200 pl-6">
                  <div className="font-serif text-3xl font-semibold text-slate-900">18</div>
                  <div className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-blue-600">
                    Classrooms
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Junior Section */}
      <section
        id="junior"
        className="scroll-mt-20 bg-slate-50 py-20 px-4 md:px-6"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600">
              Classes 1 – 3 · Foundation Years
            </span>
            <h2 className="font-serif text-4xl font-normal text-slate-900 md:text-5xl">
              Junior <span className="italic text-blue-700">Section</span>
            </h2>
            <div className="mx-auto mt-6 h-0.5 w-12 bg-blue-600"></div>
          </div>

          <div className="grid gap-12 overflow-hidden rounded-lg border border-slate-200 bg-white lg:grid-cols-2">
            {/* Info (reversed order on desktop) */}
            <div className="flex flex-col justify-center p-12 lg:order-1">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-px w-5 bg-blue-600"></div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-blue-600">
                  Class 1 to Class 3
                </span>
              </div>

              <h3 className="mb-6 font-serif text-3xl font-normal text-slate-900 md:text-4xl">
                Junior Campus
                <br />
                <span className="italic text-blue-700">Where Every Journey Begins</span>
              </h3>

              <p className="mb-8 text-sm leading-relaxed text-slate-600">
                The Junior Section lays the cornerstone of a students academic life. Classes 1
                through 3 are shaped around play-based and structured learning that builds literacy,
                numeracy, and the love of discovery. Our young scholars are nurtured in a warm,
                disciplined environment fully aligned with the APSACS curriculum.
              </p>

              {/* Stats */}
              <div className="flex gap-6 border-t border-slate-200 pt-6">
                <div className="flex-1">
                  <div className="font-serif text-3xl font-semibold text-slate-900">800+</div>
                  <div className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-blue-600">
                    Students
                  </div>
                </div>
                <div className="flex-1 border-l border-slate-200 pl-6">
                  <div className="font-serif text-3xl font-semibold text-slate-900">35+</div>
                  <div className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-blue-600">
                    Teachers
                  </div>
                </div>
                <div className="flex-1 border-l border-slate-200 pl-6">
                  <div className="font-serif text-3xl font-semibold text-slate-900">24</div>
                  <div className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-blue-600">
                    Classrooms
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative min-h-[400px] bg-slate-200 lg:order-2 lg:min-h-[520px]">
              <Image
                src="/campus/junior-section.jpeg"
                alt="Junior Campus"
                fill
                className="object-cover"
                priority
                quality={50}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Middle Section */}
      <section
        id="middle"
        className="scroll-mt-20 bg-white py-20 px-4 md:px-6"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600">
              Classes 4 – 8 · The Formative Years
            </span>
            <h2 className="font-serif text-4xl font-normal text-slate-900 md:text-5xl">
              Middle <span className="italic text-blue-700">Section</span>
            </h2>
            <div className="mx-auto mt-6 h-0.5 w-12 bg-blue-600"></div>
          </div>

          <div className="grid gap-12 overflow-hidden rounded-lg border border-slate-200 bg-slate-50 lg:grid-cols-2">
            {/* Image */}
            <div className="relative min-h-[400px] bg-slate-200 lg:min-h-[520px]">
              <Image
                src="/campus/middle-campus.jpeg"
                alt="Middle Campus"
                fill
                className="object-cover"
                priority
                quality={50}
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center p-12">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-px w-5 bg-blue-600"></div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-blue-600">
                  Class 4 to Class 8
                </span>
              </div>

              <h3 className="mb-6 font-serif text-3xl font-normal text-slate-900 md:text-4xl">
                Middle Campus
                <br />
                <span className="italic text-blue-700">
                  Building the Foundation of Excellence
                </span>
              </h3>

              <p className="mb-8 text-sm leading-relaxed text-slate-600">
                Spanning Classes 4 to 8, the Middle Section is where academic seriousness takes root.
                Students develop critical reasoning, strong subject-specific knowledge, and the
                disciplined habits that will carry them through Matriculation and beyond. A balanced
                co-curricular programme ensures character grows alongside intellect.
              </p>

              {/* Stats */}
              <div className="flex gap-6 border-t border-slate-200 pt-6">
                <div className="flex-1">
                  <div className="font-serif text-3xl font-semibold text-slate-900">900+</div>
                  <div className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-blue-600">
                    Students
                  </div>
                </div>
                <div className="flex-1 border-l border-slate-200 pl-6">
                  <div className="font-serif text-3xl font-semibold text-slate-900">40+</div>
                  <div className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-blue-600">
                    Teachers
                  </div>
                </div>
                <div className="flex-1 border-l border-slate-200 pl-6">
                  <div className="font-serif text-3xl font-semibold text-slate-900">30</div>
                  <div className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-blue-600">
                    Classrooms
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Senior Section */}
      <section
        id="senior"
        className="scroll-mt-20 bg-slate-50 py-20 px-4 md:px-6"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600">
              Classes 9 & 10 · Matriculation · Two Campuses
            </span>
            <h2 className="font-serif text-4xl font-normal text-slate-900 md:text-5xl">
              Senior <span className="italic text-blue-700">Section</span>
            </h2>
            <div className="mx-auto mt-6 h-0.5 w-12 bg-blue-600"></div>
          </div>

          <div className="grid gap-px bg-slate-300 md:grid-cols-2">
            {/* Senior Girls */}
            <div className="group bg-white transition-transform hover:-translate-y-1">
              {/* Image */}
              <div className="relative h-80 bg-slate-200">
                <Image
                  src="/campus/senior-girls.jpeg"
                  alt="Senior Girls Campus"
                  fill
                  className="object-cover"
                  priority
                  quality={50}
                />
              </div>

              {/* Body */}
              <div className="p-10">
                <Badge className="mb-4 border-blue-200 bg-blue-50 text-blue-700">
                  <Venus className="h-3 w-3" />
                  Girls Campus
                </Badge>

                <h4 className="mb-3 font-serif text-2xl font-normal text-slate-900 md:text-3xl">
                  Senior Section
                  <br />
                  <span className="italic text-blue-700">Girls Campus</span>
                </h4>

                <p className="mb-5 text-sm leading-relaxed text-slate-600">
                  Our Senior Girls Campus offers a focused, empowering environment for Classes 9 and
                  10. Students choose between the Computer Science and Biology streams, both preparing
                  them for outstanding Matriculation Board results.
                </p>

                {/* Streams */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {[
                    { icon: <Laptop className="h-3 w-3" />, label: "Computer Science" },
                    { icon: <FlaskConical className="h-3 w-3" />, label: "Biology" },
                  ].map((stream, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 border border-slate-200 bg-blue-50/50 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-900"
                    >
                      <span className="text-blue-600">{stream.icon}</span>
                      {stream.label}
                    </div>
                  ))}
                </div>

                {/* Footer Stats */}
                <div className="flex items-start justify-between border-t border-slate-200 pt-5">
                  <div>
                    <div className="font-serif text-2xl font-semibold text-slate-900">400+</div>
                    <div className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-blue-600">
                      Students
                    </div>
                  </div>
                  <div>
                    <div className="font-serif text-2xl font-semibold text-slate-900">20+</div>
                    <div className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-blue-600">
                      Faculty
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Senior Boys */}
            <div className="group bg-white transition-transform hover:-translate-y-1">
              {/* Image */}
              <div className="relative h-80 bg-slate-200">
                <Image
                  src="/campus/senior-boys.jpeg"
                  alt="Senior Boys Campus"
                  fill
                  className="object-cover"
                  priority
                  quality={50}
                />
              </div>

              {/* Body */}
              <div className="p-10">
                <Badge className="mb-4 border-slate-300 bg-slate-100 text-slate-900">
                  <Mars className="h-3 w-3" />
                  Boys Campus
                </Badge>

                <h4 className="mb-3 font-serif text-2xl font-normal text-slate-900 md:text-3xl">
                  Senior Section
                  <br />
                  <span className="italic text-blue-700">Boys Campus</span>
                </h4>

                <p className="mb-5 text-sm leading-relaxed text-slate-600">
                  The Senior Boys Campus shapes Classes 9 and 10 students with rigour, ambition, and
                  purpose. With Computer Science and Biology streams on offer, students are equipped
                  with the knowledge and discipline to excel in Board examinations.
                </p>

                {/* Streams */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {[
                    { icon: <Laptop className="h-3 w-3" />, label: "Computer Science" },
                    { icon: <FlaskConical className="h-3 w-3" />, label: "Biology" },
                  ].map((stream, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 border border-slate-200 bg-blue-50/50 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-900"
                    >
                      <span className="text-blue-600">{stream.icon}</span>
                      {stream.label}
                    </div>
                  ))}
                </div>

                {/* Footer Stats */}
                <div className="flex items-start justify-between border-t border-slate-200 pt-5">
                  <div>
                    <div className="font-serif text-2xl font-semibold text-slate-900">450+</div>
                    <div className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-blue-600">
                      Students
                    </div>
                  </div>
                  <div>
                    <div className="font-serif text-2xl font-semibold text-slate-900">22+</div>
                    <div className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-blue-600">
                      Faculty
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* College Section */}
      <section
        id="college"
        className="scroll-mt-20 bg-white py-20 px-4 md:px-6"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600">
              Classes 11 & 12 · F.Sc · Two Campuses
            </span>
            <h2 className="font-serif text-4xl font-normal text-slate-900 md:text-5xl">
              College <span className="italic text-blue-700">Section</span>
            </h2>
            <div className="mx-auto mt-6 h-0.5 w-12 bg-blue-600"></div>
          </div>

          <div className="grid gap-px bg-slate-300 md:grid-cols-2">
            {/* College Girls */}
            <div className="group bg-white transition-transform hover:-translate-y-1">
              {/* Image */}
              <div className="relative h-80 bg-slate-200">
                <Image
                  src="/campus/college-girls.jpeg"
                  alt="College Girls Campus"
                  fill
                  className="object-cover"
                  priority
                  quality={50}
                />
              </div>

              {/* Body */}
              <div className="p-10">
                <Badge className="mb-4 border-blue-200 bg-blue-50 text-blue-700">
                  <Venus className="h-3 w-3" />
                  Girls Campus
                </Badge>

                <h4 className="mb-3 font-serif text-2xl font-normal text-slate-900 md:text-3xl">
                  College Section
                  <br />
                  <span className="italic text-blue-700">Girls Campus</span>
                </h4>

                <p className="mb-5 text-sm leading-relaxed text-slate-600">
                  The College Girls Campus prepares Classes 11 and 12 students for higher education
                  excellence. With Pre-Medical, Pre-Engineering, and Computer Science streams, our
                  scholars are guided toward top-tier universities and professional success.
                </p>

                {/* Streams */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {[
                    { icon: <Microscope className="h-3 w-3" />, label: "Pre-Medical" },
                    { icon: <Calculator className="h-3 w-3" />, label: "Pre-Engineering" },
                    { icon: <Laptop className="h-3 w-3" />, label: "Computer Science" },
                  ].map((stream, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 border border-slate-200 bg-blue-50/50 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-900"
                    >
                      <span className="text-blue-600">{stream.icon}</span>
                      {stream.label}
                    </div>
                  ))}
                </div>

                {/* Footer Stats */}
                <div className="flex items-start justify-between border-t border-slate-200 pt-5">
                  <div>
                    <div className="font-serif text-2xl font-semibold text-slate-900">350+</div>
                    <div className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-blue-600">
                      Students
                    </div>
                  </div>
                  <div>
                    <div className="font-serif text-2xl font-semibold text-slate-900">18+</div>
                    <div className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-blue-600">
                      Faculty
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* College Boys */}
            <div className="group bg-white transition-transform hover:-translate-y-1">
              {/* Image */}
              <div className="relative h-80 bg-slate-200">
                <Image
                  src="/campus/college-boys.jpeg"
                  alt="College Boys Campus"
                  fill
                  className="object-cover"
                  priority
                  quality={50}
                />
              </div>

              {/* Body */}
              <div className="p-10">
                <Badge className="mb-4 border-slate-300 bg-slate-100 text-slate-900">
                  <Mars className="h-3 w-3" />
                  Boys Campus
                </Badge>

                <h4 className="mb-3 font-serif text-2xl font-normal text-slate-900 md:text-3xl">
                  College Section
                  <br />
                  <span className="italic text-blue-700">Boys Campus</span>
                </h4>

                <p className="mb-5 text-sm leading-relaxed text-slate-600">
                  The College Boys Campus offers rigorous academic programmes across Pre-Medical,
                  Pre-Engineering, and Computer Science streams. Students are moulded into future
                  leaders, innovators, and professionals ready to excel in Pakistans top universities.
                </p>

                {/* Streams */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {[
                    { icon: <Microscope className="h-3 w-3" />, label: "Pre-Medical" },
                    { icon: <Calculator className="h-3 w-3" />, label: "Pre-Engineering" },
                    { icon: <Laptop className="h-3 w-3" />, label: "Computer Science" },
                  ].map((stream, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 border border-slate-200 bg-blue-50/50 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-900"
                    >
                      <span className="text-blue-600">{stream.icon}</span>
                      {stream.label}
                    </div>
                  ))}
                </div>

                {/* Footer Stats */}
                <div className="flex items-start justify-between border-t border-slate-200 pt-5">
                  <div>
                    <div className="font-serif text-2xl font-semibold text-slate-900">380+</div>
                    <div className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-blue-600">
                      Students
                    </div>
                  </div>
                  <div>
                    <div className="font-serif text-2xl font-semibold text-slate-900">20+</div>
                    <div className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-blue-600">
                      Faculty
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-slate-900 py-20 px-4 text-center md:px-6">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 blur-3xl"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-300">
            Admissions Open
          </span>
          <h2 className="mb-6 font-serif text-4xl font-normal text-white md:text-5xl">
            Find Your <span className="italic text-blue-300">Campus</span>
            <br />
            at GAK
          </h2>
          <p className="mb-10 text-sm uppercase tracking-wider text-slate-400">
            Applications for 2026 are now being accepted across all campuses
          </p>

          <div className="relative inline-block">
            <div className="absolute inset-0 -m-2 animate-pulse rounded-lg border border-blue-400/30"></div>
            <Button
              size="lg"
              className="relative border-2 border-blue-500 bg-transparent text-blue-300 transition-all hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              asChild
            >
              <Link href="/admission">
                Apply for Admission
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
