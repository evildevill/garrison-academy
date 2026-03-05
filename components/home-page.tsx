"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Star,
  UserPlus,
  Info,
  Download,
  FileText,
  Medal,
  GraduationCap,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Trophy,
  Book,
  School,
  Dumbbell,
  Sparkles,
  Library,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

type Album = {
  id: string
  title: string
  icon: React.ReactNode
  count: number
  photos: Array<{
    src: string
    alt: string
    caption?: string
  }>
}

const albums: Album[] = [
  {
    id: "campus",
    title: "Campus Life",
    icon: <School className="h-5 w-5" />,
    count: 8,
    photos: [
      {
        src: "https://scontent.fisb5-1.fna.fbcdn.net/v/t39.30808-6/645747575_122096820885230091_7344120855758286231_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeGyw56_8FZeEtIb0j9f6Bzta89kZsLw3eprz2RmwvDd6tQvsEErPvXpd6nYj52-i-FbemSvHyVDBaSBtB0Ir1tr&_nc_ohc=yqUCqtd6ewcQ7kNvwHKftJW&_nc_oc=Adk604ej2H6jBa22IegWF3Lx6BLMlkjAC7sdDD5WQoUkAnl6hFbz4nH2Hs5dIHM9qr9V3WsgkoVjpx6naRepc9fF&_nc_zt=23&_nc_ht=scontent.fisb5-1.fna&_nc_gid=yB3YWXEtK4lBVFCHn4I9vg&_nc_ss=8&oh=00_Afw86gvEehWerpmVc01qLZyYzozawFLLF7SvcfBe1Vv1cA&oe=69AB51E0",
        alt: "Main Campus Building",
        caption: "Main Campus Building - Kharian Cantt",
      },
      {
        src: "https://scontent.flhe1-1.fna.fbcdn.net/v/t39.30808-6/645756655_122096821209230091_5915409649397279398_n.jpg?stp=c256.0.1536.1536a_dst-jpg_s206x206_tt6&_nc_cat=104&ccb=1-7&_nc_sid=507b6b&_nc_eui2=AeEioDvrfiC2GknxSw06RAg--GrsBvgpvNr4auwG-Cm82j_lfHYZi2z1yjefZG1u2NZ-l9lAOqU88X7uvGFPrjbi&_nc_ohc=TnTn0afHfVkQ7kNvwGmKmdZ&_nc_oc=AdkB_iSApxJyV2LsBVgDFbp7p4PtnklGcorGx3lMDF87rBvCNFYDippAvjMy-bqjo1U&_nc_zt=23&_nc_ht=scontent.flhe1-1.fna&_nc_gid=cu4JQAHQfENqt3XXMbs2yg&_nc_ss=8&oh=00_AfwPSou2Cigv4UMzStA7T855iOvGhMZuwc6G8KUO9-HbUA&oe=69ADA284",
        alt: "Campus Grounds",
      },
      {
        src: "https://scontent.flhe1-1.fna.fbcdn.net/v/t39.30808-6/645723342_122096820099230091_2973091913396593841_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeF-CnE3-dyw7-wyiBYQmM0lHa81P61ehkcdrzU_rV6GR5Z-Z6pGJevaZHyK6z63VB00FslUYkEVQ0j1RQ_tgEu_&_nc_ohc=_10ilDFzMGQQ7kNvwFIRPqn&_nc_oc=AdlQdQnfJa6yugvUEh_e87tZD7VYyLo10PNY7YUetanM42JQJQI6p5-MuM-VMCKYUzY&_nc_zt=23&_nc_ht=scontent.flhe1-1.fna&_nc_gid=cu4JQAHQfENqt3XXMbs2yg&_nc_ss=8&oh=00_Afy8x3Xmrs5ExHHR2q4bugd-ij6UBeEwRMXCpqz0DrLAZw&oe=69AD99F3",
        alt: "Main Entrance Gate",
      },
    ],
  },
  {
    id: "sports",
    title: "Sports & Athletics",
    icon: <Dumbbell className="h-5 w-5" />,
    count: 8,
    photos: [
      {
        src: "https://scontent.fisb5-1.fna.fbcdn.net/v/t39.30808-6/571242231_1199036545615453_1198883309021807956_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFpo062DkvXSnydTVtn90eGRhI8g7n4umpGEjyDufi6an-D3w3I0pObvjxmZa9Pv6IVmZRGgUGSnNlFSxQq4Ce7&_nc_ohc=ihJKBMDO-xMQ7kNvwEBKpXc&_nc_oc=AdlMO9COYWMJJoatiuQAGTJbbJQE1sjAcxceI84sanwr1zn_Tec4xD9m8QJ4C6UvB8kBavgmeXc7OL9VD397vIy8&_nc_zt=23&_nc_ht=scontent.fisb5-1.fna&_nc_gid=Dd2tUloldMduvQ02SJaAxQ&_nc_ss=8&oh=00_AftGPckTUZ6kWGAMxphGPayAN-HSqjAlzJrndtrErad2Tw&oe=69AA44C5",
        alt: "Sports Day",
        caption: "Sports Day Highlights - Annual Sports Gala",
      },
    ],
  },
  {
    id: "academics",
    title: "Academics",
    icon: <GraduationCap className="h-5 w-5" />,
    count: 8,
    photos: [
      {
        src: "https://scontent.fisb5-2.fna.fbcdn.net/v/t39.30808-6/564657558_1187953733390401_9005086009789306466_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEgm60c47uJ8gMiMwxVVofqJfQ9xVaHOCcl9D3FVoc4J9jc8cmvBoGxrO_q08qzh6ixjpGpqx4cfJ22VRIfxsWK&_nc_ohc=LVpj2C21xNYQ7kNvwF2NyGU&_nc_oc=AdlDOlZTyae4kPTZh77Vpjd11_hik4HEgcx6hTD9UNTf8u_7iVZR375gc0xGT0wNgV0hWmKsIAmZ0ZL0lGdi-Uto&_nc_zt=23&_nc_ht=scontent.fisb5-2.fna&_nc_gid=rAqY0ODJvNdwlSBoFsxYww&_nc_ss=8&oh=00_AfvRoH_ww4KJI_FHf1_yT73aCAwNIBYSFW3k0ZTfKZBnyw&oe=69AA2EF9",
        alt: "Classrooms",
        caption: "Modern Classrooms - Smart Learning Environment",
      },
    ],
  },
  {
    id: "achievements",
    title: "Achievements",
    icon: <Trophy className="h-5 w-5" />,
    count: 8,
    photos: [
      {
        src: "https://scontent.fisb6-2.fna.fbcdn.net/v/t39.30808-6/546453338_1158373363015105_7546858607408825037_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFqqHl0DizEuCPtHZEiC1MU_rrWfguvn2L-utZ-C6-fYr-aRmvS0pojsYX4aG76uB7T6n_P-R3i52DS4YonrSMT&_nc_ohc=qzjZV6BKJMAQ7kNvwHlRj_4&_nc_oc=AdmPfKGi1P-YhqwFw-uFcdjuGRM_nN82cm5FLbbYZuhXlS4-KrqOgZUz-vmqOoHGiiTj0nJLA7Lv7NZbHM47BNFV&_nc_zt=23&_nc_ht=scontent.fisb6-2.fna&_nc_gid=g8J7k1NbPnIw_ydrlqbNtQ&_nc_ss=8&oh=00_AfsRM4XCKa92KnAQiMA1RTJE-xJzLOVEKSSvEG6_RL2amw&oe=69AA3932",
        alt: "High Achievers",
        caption: "Board Exam Top Positions - FBISE 2025",
      },
    ],
  },
]

export default function HomePage() {
  const [activeAlbum, setActiveAlbum] = useState("campus")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string; caption?: string }>({ src: "", alt: "", caption: "" })
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  const openLightbox = (album: Album, index: number) => {
    const photo = album.photos[index]
    setLightboxImage(photo)
    setCurrentPhotoIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const navigateLightbox = (direction: number) => {
    const currentAlbum = albums.find((a) => a.id === activeAlbum)
    if (!currentAlbum) return

    const newIndex = (currentPhotoIndex + direction + currentAlbum.photos.length) % currentAlbum.photos.length
    setCurrentPhotoIndex(newIndex)
    setLightboxImage(currentAlbum.photos[newIndex])
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://scontent.fisb5-1.fna.fbcdn.net/v/t39.30808-6/645784934_122096820621230091_1506649007018132908_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeG_1vxae4DQY7rwKa7SqhwxmTMFHahgNTOZMwUdqGA1M3F-hGAcJhe7HJRSrodjuoSv_nJmGa0OFy_4GKsmx17F&_nc_ohc=MsnQ_n6Zk7wQ7kNvwELp9u4&_nc_oc=AdlRI7cjMGPkKouvdFD1xnGMKpopZyu8fD-hd59YQhchzMHISUtmYugCf7WSTFiTq5-q-1Xx5ar-nZ4X0BMoG_8k&_nc_zt=23&_nc_ht=scontent.fisb5-1.fna&_nc_gid=B66EBijQr5T9hUGJ7IJiwg&_nc_ss=8&oh=00_AfzjBzLuZczuxolppi7YL2q_4juPYgCVKk6L_lQcopm21g&oe=69AB64E7"
            alt="GAK Campus"
            fill
            className="object-cover brightness-110"
            priority
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/75 to-slate-900/90" />

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            <g fill="none" fillRule="evenodd">
              <g fill="#ffffff" fillOpacity="0.4">
                <path d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z" />
              </g>
            </g>
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-[600px] items-center justify-center px-4 text-center text-white md:px-6">
          <div className="mx-auto max-w-4xl">
            <Badge className="mb-6 bg-blue-500/20 border-blue-400/40 text-blue-200 hover:bg-blue-500/30">
              <Star className="h-3 w-3" />
              Excellence in Education since 1975
            </Badge>

            <div className="mb-6 flex justify-center">
              <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-3 border-blue-400/70 bg-white/10 shadow-2xl backdrop-blur-sm">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGj6k_DPxBE1Xepp3q1Qz8atQ9ICHMr6GnEg&s"
                  alt="GAK Emblem"
                  width={128}
                  height={128}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>

            <h1 className="mb-2 font-serif text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
              Garrison Academy
              <br />
              Kharian Cantt
            </h1>

            <p className="mb-4 text-sm font-medium uppercase tracking-widest opacity-85 md:text-base">
              School & College System
            </p>

            <p className="mb-8 font-serif text-2xl italic text-blue-200 md:text-3xl lg:text-4xl">
              &ldquo;I Shall Rise & Shine&rdquo;
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                <UserPlus className="h-4 w-4" />
                Log In
              </Button>
              <Button size="lg" variant="outline" className="border-white/45 bg-transparent text-white hover:bg-white/10">
                <Info className="h-4 w-4" />
                More Information
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="overflow-hidden bg-blue-600">
        <div className="flex">
          <div className="flex-shrink-0 bg-slate-900 px-5 py-3 text-xs font-bold uppercase tracking-wider text-blue-200">
            Latest
          </div>
          <div className="animate-marquee whitespace-nowrap py-3 pl-5 text-sm font-semibold text-white">
            📌 Admissions Open for Session 2026–27 &nbsp;|&nbsp; 📋 Datesheet for Final Exams has been uploaded on the portal &nbsp;|&nbsp; 🏆 Congratulations to our House Winners — Jhelum House leads this term! &nbsp;|&nbsp; 🎓 GAK students secure top positions in Board Examinations &nbsp;|&nbsp; 📅 Parent-Teacher Meeting scheduled for 15th March 2026 &nbsp;|&nbsp; 🏅 Science project wins Gold at Provincial-level competition in Lahore
          </div>
        </div>
      </div>

      {/* Quick Access */}
      <section className="bg-slate-50 py-14 px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="mb-2 font-serif text-3xl font-bold text-slate-900">Quick Access</h2>
            <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-blue-500 to-blue-600" />
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { icon: <Download className="h-6 w-6" />, label: "Quick Links" },
              { icon: <Download className="h-6 w-6" />, label: "Downloads" },
              { icon: <FileText className="h-6 w-6" />, label: "Examinations" },
              { icon: <Medal className="h-6 w-6" />, label: "Scholarships" },
              { icon: <GraduationCap className="h-6 w-6" />, label: "Admissions" },
              { icon: <MessageSquare className="h-6 w-6" />, label: "Feedback" },
            ].map((item, idx) => (
              <Link
                key={idx}
                href="#"
                className="group flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-6 text-center transition-all hover:border-blue-600 hover:bg-blue-50 hover:shadow-md hover:-translate-y-1"
              >
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 transition-all group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white">
                  {item.icon}
                </div>
                <span className="text-sm font-semibold text-slate-700">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="relative">
              <div className="relative h-96 overflow-hidden rounded-2xl shadow-xl lg:h-full">
                <Image
                  src="https://scontent.fisb5-1.fna.fbcdn.net/v/t39.30808-6/645747575_122096820885230091_7344120855758286231_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeGyw56_8FZeEtIb0j9f6Bzta89kZsLw3eprz2RmwvDd6tQvsEErPvXpd6nYj52-i-FbemSvHyVDBaSBtB0Ir1tr&_nc_ohc=yqUCqtd6ewcQ7kNvwHKftJW&_nc_oc=Adk604ej2H6jBa22IegWF3Lx6BLMlkjAC7sdDD5WQoUkAnl6hFbz4nH2Hs5dIHM9qr9V3WsgkoVjpx6naRepc9fF&_nc_zt=23&_nc_ht=scontent.fisb5-1.fna&_nc_gid=yB3YWXEtK4lBVFCHn4I9vg&_nc_ss=8&oh=00_Afw86gvEehWerpmVc01qLZyYzozawFLLF7SvcfBe1Vv1cA&oe=69AB51E0"
                  alt="GAK Campus"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-xl bg-blue-600 p-6 text-center shadow-lg">
                <div className="font-serif text-3xl font-black text-white">50+</div>
                <div className="text-xs font-semibold uppercase tracking-wide text-blue-100">Years of Excellence</div>
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center">
              <h2 className="mb-4 font-serif text-3xl font-bold text-slate-900 md:text-4xl">
                Shaping Future Leaders Since 1975
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-slate-700">
                Garrison Academy Kharian Cantt is one of Punjab&apos;s most respected institutions, dedicated to holistic education within a disciplined military cantonment environment.
              </p>
              <p className="mb-6 leading-relaxed text-slate-600">
                We provide world-class academic programs from primary through higher secondary levels, nurturing students in an environment that values academic excellence, moral integrity, and national pride. Our faculty of 150+ highly qualified educators ensures every student receives the personal attention they deserve.
              </p>

              <div className="mb-8 grid grid-cols-2 gap-3">
                {[
                  "Experienced Faculty",
                  "Modern Labs & Library",
                  "Sports & Co-curriculars",
                  "Merit Scholarships",
                  "Safe Campus Environment",
                  "Digital Learning Tools",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <CheckCircle className="h-5 w-5 shrink-0 text-green-600" />
                    {feature}
                  </div>
                ))}
              </div>

              <div>
                <Button className="bg-blue-600 hover:bg-blue-500">
                  Learn More About GAK
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-slate-50 py-20 px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="mb-2 font-serif text-3xl font-bold text-slate-900">Life at GAK</h2>
            <p className="text-sm text-slate-600">
              Browse our photo albums — campus life, sports, events, academics & achievements
            </p>
            <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-blue-500 to-blue-600" />
          </div>

          {/* Album Tabs */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {albums.map((album) => (
              <button
                key={album.id}
                onClick={() => setActiveAlbum(album.id)}
                className={`flex items-center gap-2 rounded-full border-2 px-5 py-2 text-sm font-semibold transition-all ${
                  activeAlbum === album.id
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:border-blue-600 hover:bg-blue-50"
                }`}
              >
                {album.icon}
                {album.title}
              </button>
            ))}
          </div>

          {/* Album Content */}
          {albums.map(
            (album) =>
              activeAlbum === album.id && (
                <div key={album.id} className="animate-fadeIn">
                  <div className="mb-5 flex items-center justify-between border-b-2 border-blue-200 pb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-700 to-blue-900 text-yellow-400">
                        {album.icon}
                      </div>
                      <div>
                        <div className="font-serif text-xl font-bold text-green-700">{album.title}</div>
                        <div className="text-sm font-medium text-blue-900">{album.count} Photos</div>
                      </div>
                    </div>
                    <Link
                      href="#"
                      className="flex items-center gap-2 rounded-full border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-900 transition-all hover:border-blue-900 hover:bg-blue-900 hover:text-white"
                    >
                      <Sparkles className="h-4 w-4" />
                      View Full Album
                    </Link>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {album.photos.map((photo, idx) => (
                      <div
                        key={idx}
                        className="group relative h-48 cursor-pointer overflow-hidden rounded-xl bg-slate-200"
                        onClick={() => openLightbox(album, idx)}
                      >
                        <Image src={photo.src} alt={photo.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                            <div className="font-semibold">{photo.alt}</div>
                            {photo.caption && <div className="text-xs opacity-75">{photo.caption}</div>}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
          )}
        </div>
      </section>

      {/* Stats Strip */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 py-16 px-4 md:px-6">
        <div className="absolute inset-0 opacity-5">
          <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            <g fill="none" fillRule="evenodd">
              <g fill="#ffffff" fillOpacity="0.3">
                <path d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z" />
              </g>
            </g>
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-3 lg:grid-cols-5">
            {[
              { value: "3,200+", label: "Students Enrolled" },
              { value: "150+", label: "Faculty Members" },
              { value: "98%", label: "Board Pass Rate" },
              { value: "50+", label: "Years of Excellence" },
              { value: "25+", label: "Clubs & Societies" },
            ].map((stat, idx) => (
              <div key={idx} className="text-white">
                <div className="mb-2 font-serif text-4xl font-black text-blue-200 md:text-5xl">{stat.value}</div>
                <div className="text-sm font-medium uppercase tracking-wide opacity-85">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-900 py-20 px-4 text-white md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-2 font-serif text-3xl font-bold">Why Choose GAK?</h2>
            <p className="text-sm text-slate-400">A world-class education experience rooted in discipline and values</p>
            <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-blue-400 to-blue-500" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Book className="h-5 w-5" />,
                title: "Academic Excellence",
                description: "Rigorous curriculum aligned with board standards, taught by highly qualified educators committed to every student's success.",
                image: "https://scontent.fisb6-2.fna.fbcdn.net/v/t39.30808-6/546453338_1158373363015105_7546858607408825037_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFqqHl0DizEuCPtHZEiC1MU_rrWfguvn2L-utZ-C6-fYr-aRmvS0pojsYX4aG76uB7T6n_P-R3i52DS4YonrSMT&_nc_ohc=qzjZV6BKJMAQ7kNvwHlRj_4&_nc_oc=AdmPfKGi1P-YhqwFw-uFcdjuGRM_nN82cm5FLbbYZuhXlS4-KrqOgZUz-vmqOoHGiiTj0nJLA7Lv7NZbHM47BNFV&_nc_zt=23&_nc_ht=scontent.fisb6-2.fna&_nc_gid=g8J7k1NbPnIw_ydrlqbNtQ&_nc_ss=8&oh=00_AfsRM4XCKa92KnAQiMA1RTJE-xJzLOVEKSSvEG6_RL2amw&oe=69AA3932",
              },
              {
                icon: <Dumbbell className="h-5 w-5" />,
                title: "Sports & Athletics",
                description: "Comprehensive sports programs including cricket, football, athletics, and more — nurturing champions on and off the field.",
                image: "https://scontent.fisb5-2.fna.fbcdn.net/v/t39.30808-6/558950122_1181935743992200_834310144761887162_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFWyyhqH75bYQG_3p30cOkN6XYoie1b5G3pdiiJ7VvkbajT0eH7Sn_q6OeTRwGNs1_FiVEl_LeJMVncy-ziE2Su&_nc_ohc=1-AaNsxMjgUQ7kNvwEdcwck&_nc_oc=AdnBtb-9cw4rmNO_gUPofmtZxnJyS-rX2t1PiWQbIdvWwbQ8-7q905dZTAw1m7D31wTW8FIpO0fyaOgZwoC8CUZK&_nc_zt=23&_nc_ht=scontent.fisb5-2.fna&_nc_gid=YZKwfShFZr8Q4I4r3eYBfg&_nc_ss=8&oh=00_AfsysEqot2li270tOVrmDSHijiAWlZNoOzQleplTULEHjg&oe=69AA78DD",
              },
              {
                icon: <Library className="h-5 w-5" />,
                title: "Modern Facilities",
                description: "Well-equipped science labs, a rich library, computer suites, and dedicated spaces for arts, debate, and creative learning.",
                image: "https://scontent.fisb5-1.fna.fbcdn.net/v/t39.30808-6/598814184_1236092361909871_8093136160072890080_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGOrNKRSoWQDTOksnj9n0WJYJdw84mjVSNgl3DziaNVI5SD3iiUxtlmmloArgPt8J0S2J7rdzOn1i-rlFjpxg21&_nc_ohc=L0xQmTEpN5AQ7kNvwFbTzY2&_nc_oc=AdkkvnVlAsb7RODWbPjtzk8-AFeUdfoA151EAVbbXKf_WIErpQxlT9MLLhwdwttScGZHiWeIfTspUMBlXEPEEzpN&_nc_zt=23&_nc_ht=scontent.fisb5-1.fna&_nc_gid=sayDCcpZ0dpUjWI4cZkbNA&_nc_ss=8&oh=00_AfupThGZHQbPtDR3sGmr_dQCzDwnJZksKnsjUVV4bk1fcQ&oe=69AA49DF",
              },
            ].map((feature, idx) => (
              <div key={idx} className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all hover:bg-white/10 hover:shadow-xl hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <Image src={feature.image} alt={feature.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 font-serif text-lg font-bold">{feature.title}</h3>
                  <p className="text-sm leading-relaxed opacity-75">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-20 px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-2 font-serif text-3xl font-bold text-slate-900">What Our Community Says</h2>
            <p className="text-sm text-slate-600">Voices from students, parents, and alumni</p>
            <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-blue-500 to-blue-600" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote: "GAK gave me the discipline and academic foundation I needed to excel at university level. The teachers truly care about every student's growth.",
                name: "Ahmad Raza",
                role: "Alumni — Class of 2022",
                initial: "A",
              },
              {
                quote: "As a parent, I feel complete confidence knowing my children are in the safe, structured, and nurturing environment that Garrison Academy provides.",
                name: "Sadia Khalid",
                role: "Parent — Grade 8 & 10",
                initial: "S",
              },
              {
                quote: "The sports programs at GAK are exceptional. I represented Punjab in athletics thanks to the coaching and encouragement I received here.",
                name: "Usman Tariq",
                role: "Student — Grade 11",
                initial: "U",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="rounded-xl border-t-4 border-blue-600 bg-white p-6 shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="mb-4 font-serif text-4xl leading-none text-blue-200">&ldquo;</div>
                <p className="mb-5 italic leading-relaxed text-slate-700">{testimonial.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 font-bold text-white">
                    {testimonial.initial}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-xs font-medium text-blue-900">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={closeLightbox}
        >
          <div className="relative max-w-5xl w-11/12" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              onClick={() => navigateLightbox(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={() => navigateLightbox(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="relative h-[70vh]">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                fill
                className="rounded-xl object-contain"
              />
            </div>

            {lightboxImage.caption && (
              <div className="mt-4 text-center text-sm italic text-white/75">{lightboxImage.caption}</div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
