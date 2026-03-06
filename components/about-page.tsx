"use client"

import Image from "next/image"
import Link from "next/link"
import { 
  GraduationCap, 
  Award, 
  TrendingUp,
  BookOpen,
  Lightbulb,
  Target,
  Heart,
  Globe,
  Shield,
  Trophy,
  Star,
  School,
  LibraryBig,
  Microscope,
  LaptopMinimal,
  Dumbbell,
  Bus,
  Utensils,
  Building,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] overflow-hidden bg-slate-900">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPtDYzoi2LpsaB0MOYzoqWr3SQLZUM8NezA&s"
            alt="GAK Campus"
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
        <div className="relative z-10 flex min-h-[70vh] items-center justify-center px-4 text-center">
          <div className="mx-auto max-w-4xl">
            <Badge className="mb-6 border-blue-400/40 bg-blue-500/10 text-blue-300">
              <Star className="h-3 w-3" />
              Est. 1975 · Kharian Cantt · APSACS
            </Badge>

            <h1 className="mb-4 font-serif text-5xl font-light text-white md:text-7xl">
              Know Our <span className="italic text-blue-300">Institution</span>
            </h1>

            <div className="mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>

            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Excellence Through Discipline · Character · Innovation
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-slate-50 py-20 px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="relative">
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/campus/middle-campus.jpeg"
                  alt="GAK Campus"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  quality={50}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-lg bg-blue-600 p-6 text-center shadow-lg">
                <div className="font-serif text-4xl font-bold text-white">50+</div>
                <div className="text-xs font-semibold uppercase tracking-wide text-blue-100">
                  Years of Excellence
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center">
              <span className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600">
                About GAK
              </span>
              <h2 className="mb-6 font-serif text-4xl font-normal text-slate-900 md:text-5xl">
                Shaping <span className="italic text-blue-700">Tomorrows Leaders</span>
              </h2>
              <p className="mb-4 text-base leading-relaxed text-slate-700">
                Garrison Academy Kharian Cantt (GAK) is an elite institution founded in 1975 under the Army Public
                Schools & Colleges System (APSACS). Located in the heart of Kharian Cantonment, we have been
                nurturing young minds for over five decades.
              </p>
              <p className="mb-4 leading-relaxed text-slate-600">
                Our comprehensive academic programs span from primary through higher secondary levels, providing a
                structured environment that fosters both academic excellence and moral integrity. With a team of{" "}
                <span className="font-semibold text-blue-600">150+ highly qualified educators</span>, we ensure every
                student receives personalized attention and guidance.
              </p>
              <p className="leading-relaxed text-slate-600">
                At GAK, education transcends textbooks. We cultivate critical thinking, leadership, and a sense of
                national pride, preparing students to excel in an ever-evolving world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 py-16 px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-px bg-blue-500/20 md:grid-cols-4">
            {[
              { value: "3,000+", label: "Students" },
              { value: "150+", label: "Faculty Members" },
              { value: "50+", label: "Years of Excellence" },
              { value: "98%", label: "Success Rate" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-slate-900 p-12 text-center transition-all hover:bg-slate-800"
              >
                <div className="mb-2 font-serif text-5xl font-light text-blue-300">{stat.value}</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Goals Section */}
      <section className="bg-white py-20 px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600">
              Our Objectives
            </span>
            <h2 className="font-serif text-4xl font-normal text-slate-900 md:text-5xl">
              Academic <span className="italic text-blue-700">Goals</span>
            </h2>
            <div className="mx-auto mt-6 h-0.5 w-12 bg-blue-600"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Lightbulb className="h-6 w-6" />,
                title: "Critical Thinking",
                description:
                  "Develop analytical and problem-solving skills through inquiry-based learning and real-world applications.",
              },
              {
                icon: <BookOpen className="h-6 w-6" />,
                title: "Academic Excellence",
                description:
                  "Maintain rigorous standards aligned with national curricula, ensuring students excel in board examinations.",
              },
              {
                icon: <Heart className="h-6 w-6" />,
                title: "Moral Values",
                description:
                  "Instill integrity, empathy, and ethical responsibility through character-building activities and mentorship.",
              },
              {
                icon: <Globe className="h-6 w-6" />,
                title: "Global Citizenship",
                description:
                  "Foster cultural awareness and respect for diversity, preparing students for a connected world.",
              },
              {
                icon: <Target className="h-6 w-6" />,
                title: "Leadership Development",
                description:
                  "Cultivate leadership qualities through student councils, team projects, and community service initiatives.",
              },
              {
                icon: <TrendingUp className="h-6 w-6" />,
                title: "Lifelong Learning",
                description:
                  "Inspire curiosity and a passion for continuous self-improvement beyond formal education.",
              },
            ].map((goal, idx) => (
              <div
                key={idx}
                className="group rounded-lg border-l-4 border-blue-600 bg-slate-50 p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-600">
                  {goal.icon}
                </div>
                <h3 className="mb-3 font-serif text-xl font-normal text-slate-900">{goal.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="bg-slate-50 py-20 px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600">
              Campus Life
            </span>
            <h2 className="font-serif text-4xl font-normal text-slate-900 md:text-5xl">
              A Glimpse of <span className="italic text-blue-700">Our Campus</span>
            </h2>
            <div className="mx-auto mt-6 h-0.5 w-12 bg-blue-600"></div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
            {[
              { src: "/campus/pre-school.jpeg", alt: "Pre-School Campus" },
              { src: "/campus/junior-section.jpeg", alt: "Junior Section Campus" },
              { src: "/campus/middle-campus.jpeg", alt: "Middle Campus" },
              { src: "/campus/senior-girls.jpeg", alt: "Senior Girls Campus" },
              { src: "/campus/senior-boys.jpeg", alt: "Senior Boys Campus" },
              { src: "/campus/college-girls.jpeg", alt: "College Girls Campus" },
              { src: "/campus/college-boys.jpeg", alt: "College Boys Campus" },
            ].map((image, idx) => (
              <div
                key={idx}
                className="group relative h-64 overflow-hidden rounded-lg bg-blue-50 shadow-md"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={50}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-blue-900 py-20 px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-300">
              Proud Milestones
            </span>
            <h2 className="font-serif text-4xl font-normal text-white md:text-5xl">
              Our <span className="italic text-blue-300">Achievements</span>
            </h2>
            <div className="mx-auto mt-6 h-0.5 w-12 bg-blue-400"></div>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {[
              {
                icon: <Trophy className="h-8 w-8" />,
                title: "Board Examination Excellence",
                description:
                  "Consistently securing top positions in FBISE examinations, with multiple students achieving A+ grades annually.",
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Inter-School Competitions",
                description:
                  "Winners of numerous debates, science fairs, and art competitions at district and provincial levels.",
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Sports Championships",
                description:
                  "Regional champions in cricket, football, and athletics, representing Garrison Schools at national events.",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Character & Discipline",
                description:
                  "Recognized for fostering discipline and moral values, producing responsible citizens and leaders.",
              },
              {
                icon: <GraduationCap className="h-8 w-8" />,
                title: "University Placements",
                description:
                  "Alumni admitted to prestigious universities including NUST, LUMS, and international institutions.",
              },
              {
                icon: <School className="h-8 w-8" />,
                title: "Community Impact",
                description:
                  "Active participation in social welfare, environmental campaigns, and national service initiatives.",
              },
            ].map((achievement, idx) => (
              <div
                key={idx}
                className="flex gap-6 border-b border-white/10 pb-8 transition-transform hover:translate-x-2"
              >
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-blue-400 bg-blue-800/50 text-blue-300">
                  {achievement.icon}
                </div>
                <div>
                  <h4 className="mb-2 font-serif text-xl font-normal text-white">
                    {achievement.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-blue-200/70">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="bg-white py-20 px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600">
              World-Class Infrastructure
            </span>
            <h2 className="font-serif text-4xl font-normal text-slate-900 md:text-5xl">
              Campus <span className="italic text-blue-700">Facilities</span>
            </h2>
            <div className="mx-auto mt-6 h-0.5 w-12 bg-blue-600"></div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-blue-500/10 md:grid-cols-4">
            {[
              { icon: <LibraryBig className="h-7 w-7" />, title: "Library", description: "Extensive collection" },
              { icon: <Microscope className="h-7 w-7" />, title: "Science Labs", description: "Modern equipment" },
              {
                icon: <LaptopMinimal className="h-7 w-7" />,
                title: "Computer Labs",
                description: "Latest technology",
              },
              { icon: <Dumbbell className="h-7 w-7" />, title: "Sports Complex", description: "Multi-sport facilities" },
              { icon: <Building className="h-7 w-7" />, title: "Auditorium", description: "500+ seating capacity" },
              { icon: <Bus className="h-7 w-7" />, title: "Transport", description: "Safe & reliable" },
              { icon: <Utensils className="h-7 w-7" />, title: "Cafeteria", description: "Hygienic meals" },
              { icon: <School className="h-7 w-7" />, title: "Classrooms", description: "Air-conditioned" },
            ].map((facility, idx) => (
              <div
                key={idx}
                className="group bg-white p-10 text-center transition-all hover:-translate-y-2 hover:bg-blue-50"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-600 transition-all group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                  {facility.icon}
                </div>
                <h4 className="mb-2 font-serif text-base font-normal text-slate-900">
                  {facility.title}
                </h4>
                <p className="text-xs text-slate-600">{facility.description}</p>
              </div>
            ))}
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
            Join Our Community
          </span>
          <h2 className="mb-6 font-serif text-4xl font-normal text-white md:text-5xl">
            Be Part of Our <span className="italic text-blue-300">Legacy</span>
          </h2>
          <p className="mb-10 text-sm uppercase tracking-wider text-slate-400">
            Admissions for 2026 are now open
          </p>

          <div className="relative inline-block">
            <div className="absolute inset-0 -m-2 animate-pulse rounded-lg border border-blue-400/30"></div>
            <Button
              size="lg"
              className="relative bg-transparent border-2 border-blue-500 text-blue-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all"
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
