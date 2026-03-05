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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPtDYzoi2LpsaB0MOYzoqWr3SQLZUM8NezA&s"
                  alt="GAK Campus"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
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
              "https://scontent.fisb5-1.fna.fbcdn.net/v/t39.30808-6/645747575_122096820885230091_7344120855758286231_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeGyw56_8FZeEtIb0j9f6Bzta89kZsLw3eprz2RmwvDd6tQvsEErPvXpd6nYj52-i-FbemSvHyVDBaSBtB0Ir1tr&_nc_ohc=yqUCqtd6ewcQ7kNvwHKftJW&_nc_oc=Adk604ej2H6jBa22IegWF3Lx6BLMlkjAC7sdDD5WQoUkAnl6hFbz4nH2Hs5dIHM9qr9V3WsgkoVjpx6naRepc9fF&_nc_zt=23&_nc_ht=scontent.fisb5-1.fna&_nc_gid=yB3YWXEtK4lBVFCHn4I9vg&_nc_ss=8&oh=00_Afw86gvEehWerpmVc01qLZyYzozawFLLF7SvcfBe1Vv1cA&oe=69AB51E0",
              "https://scontent.fisb5-1.fna.fbcdn.net/v/t39.30808-6/571242231_1199036545615453_1198883309021807956_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFpo062DkvXSnydTVtn90eGRhI8g7n4umpGEjyDufi6an-D3w3I0pObvjxmZa9Pv6IVmZRGgUGSnNlFSxQq4Ce7&_nc_ohc=ihJKBMDO-xMQ7kNvwEBKpXc&_nc_oc=AdlMO9COYWMJJoatiuQAGTJbbJQE1sjAcxceI84sanwr1zn_Tec4xD9m8QJ4C6UvB8kBavgmeXc7OL9VD397vIy8&_nc_zt=23&_nc_ht=scontent.fisb5-1.fna&_nc_gid=Dd2tUloldMduvQ02SJaAxQ&_nc_ss=8&oh=00_AftGPckTUZ6kWGAMxphGPayAN-HSqjAlzJrndtrErad2Tw&oe=69AA44C5",
              "https://scontent.fisb5-2.fna.fbcdn.net/v/t39.30808-6/564657558_1187953733390401_9005086009789306466_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEgm60c47uJ8gMiMwxVVofqJfQ9xVaHOCcl9D3FVoc4J9jc8cmvBoGxrO_q08qzh6ixjpGpqx4cfJ22VRIfxsWK&_nc_ohc=LVpj2C21xNYQ7kNvwF2NyGU&_nc_oc=AdlDOlZTyae4kPTZh77Vpjd11_hik4HEgcx6hTD9UNTf8u_7iVZR375gc0xGT0wNgV0hWmKsIAmZ0ZL0lGdi-Uto&_nc_zt=23&_nc_ht=scontent.fisb5-2.fna&_nc_gid=rAqY0ODJvNdwlSBoFsxYww&_nc_ss=8&oh=00_AfvRoH_ww4KJI_FHf1_yT73aCAwNIBYSFW3k0ZTfKZBnyw&oe=69AA2EF9",
              "https://scontent.fisb6-2.fna.fbcdn.net/v/t39.30808-6/546453338_1158373363015105_7546858607408825037_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFqqHl0DizEuCPtHZEiC1MU_rrWfguvn2L-utZ-C6-fYr-aRmvS0pojsYX4aG76uB7T6n_P-R3i52DS4YonrSMT&_nc_ohc=qzjZV6BKJMAQ7kNvwHlRj_4&_nc_oc=AdmPfKGi1P-YhqwFw-uFcdjuGRM_nN82cm5FLbbYZuhXlS4-KrqOgZUz-vmqOoHGiiTj0nJLA7Lv7NZbHM47BNFV&_nc_zt=23&_nc_ht=scontent.fisb6-2.fna&_nc_gid=g8J7k1NbPnIw_ydrlqbNtQ&_nc_ss=8&oh=00_AfsRM4XCKa92KnAQiMA1RTJE-xJzLOVEKSSvEG6_RL2amw&oe=69AA3932",
              "https://scontent.fisb5-2.fna.fbcdn.net/v/t39.30808-6/558950122_1181935743992200_834310144761887162_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFWyyhqH75bYQG_3p30cOkN6XYoie1b5G3pdiiJ7VvkbajT0eH7Sn_q6OeTRwGNs1_FiVEl_LeJMVncy-ziE2Su&_nc_ohc=1-AaNsxMjgUQ7kNvwEdcwck&_nc_oc=AdnBtb-9cw4rmNO_gUPofmtZxnJyS-rX2t1PiWQbIdvWwbQ8-7q905dZTAw1m7D31wTW8FIpO0fyaOgZwoC8CUZK&_nc_zt=23&_nc_ht=scontent.fisb5-2.fna&_nc_gid=YZKwfShFZr8Q4I4r3eYBfg&_nc_ss=8&oh=00_AfsysEqot2li270tOVrmDSHijiAWlZNoOzQleplTULEHjg&oe=69AA78DD",
              "https://scontent.fisb5-1.fna.fbcdn.net/v/t39.30808-6/598814184_1236092361909871_8093136160072890080_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGOrNKRSoWQDTOksnj9n0WJYJdw84mjVSNgl3DziaNVI5SD3iiUxtlmmloArgPt8J0S2J7rdzOn1i-rlFjpxg21&_nc_ohc=L0xQmTEpN5AQ7kNvwFbTzY2&_nc_oc=AdkkvnVlAsb7RODWbPjtzk8-AFeUdfoA151EAVbbXKf_WIErpQxlT9MLLhwdwttScGZHiWeIfTspUMBlXEPEEzpN&_nc_zt=23&_nc_ht=scontent.fisb5-1.fna&_nc_gid=sayDCcpZ0dpUjWI4cZkbNA&_nc_ss=8&oh=00_AfupThGZHQbPtDR3sGmr_dQCzDwnJZksKnsjUVV4bk1fcQ&oe=69AA49DF",
            ].map((src, idx) => (
              <div
                key={idx}
                className="group relative h-64 overflow-hidden rounded-lg bg-blue-50 shadow-md"
              >
                <Image
                  src={src}
                  alt={`Campus Image ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
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
