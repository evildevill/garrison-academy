"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const platformLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About GAK" },
    { href: "/campuses", label: "Campuses" },
    { href: "/admission", label: "Admissions" },
    { href: "/scholarship", label: "Scholarship" },
    { href: "/uniform", label: "Uniform" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/login", label: "Portal Login" },
    { href: "/feedback", label: "Feedback" },
    { href: "/contact", label: "Contact Us" },
  ]

  const portalLinks = [
    { href: "#", label: "GAK Secretariat" },
    { href: "#", label: "Webmail" },
    { href: "#", label: "eSM Portal" },
    { href: "#", label: "AIS System" },
    { href: "#", label: "Careers" },
    { href: "#", label: "Departments" },
  ]

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <g fill="none" fillRule="evenodd">
            <g fill="#ffffff" fillOpacity="0.4">
              <path d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z" />
            </g>
          </g>
        </svg>
      </div>

      <div className="relative z-10 px-4 md:px-6">
        <div className="mx-auto max-w-7xl py-12 md:py-16">
          {/* Main footer content */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-12">
            {/* Column 1: About */}
            <div className="lg:col-span-4">
              <div className="mb-4 flex items-center gap-2">
                <div className="relative h-12 w-12">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGj6k_DPxBE1Xepp3q1Qz8atQ9ICHMr6GnEg&s"
                    alt="GAK Logo"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="font-serif text-base font-bold leading-tight text-white">
                  Garrison Academy
                  <br />
                  <span className="text-sm font-normal text-slate-400">Kharian Cantt</span>
                </div>
              </div>

              <p className="mb-6 text-slate-400">
                Committed to nurturing disciplined, academically excellent, and morally upright citizens. Serving the
                Kharian Cantonment community with pride since 1975.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-2">
              <h3 className="mb-6 text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-3">
                {platformLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Portals */}
            <div className="lg:col-span-2">
              <h3 className="mb-6 text-lg font-semibold text-white">Portals</h3>
              <ul className="space-y-3">
                {portalLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div className="lg:col-span-4">
              <h3 className="mb-6 text-lg font-semibold text-white">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
                  <span className="text-sm text-slate-400">info@garrisonacademy.edu.pk</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
                  <span className="text-sm text-slate-400">+92 (537) 530-101</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
                  <span className="text-sm text-slate-400">Secretariat Block, Kharian Cantt, Pakistan</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
                  <span className="text-sm text-slate-400">Mon – Sat: 7:30 AM – 2:30 PM</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-slate-800" />

          {/* Bottom bar */}
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
            <p>
              © {currentYear} Garrison Academy Kharian. All rights reserved.
            </p>
            <p className="text-slate-500">
              Designed with ❤ for excellence in education
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
