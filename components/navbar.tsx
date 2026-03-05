"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Search, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/campuses", label: "Campuses" },
  { href: "/admission", label: "Admission" },
  { href: "/scholarship", label: "Scholarship" },
  { href: "/uniform", label: "Uniform" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/feedback", label: "Feedback" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Topbar */}
      <div className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-2 py-2 text-xs md:flex-row md:text-sm">
            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                Kharian Cantonment, Punjab, Pakistan
              </span>
              <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                info@garrisonacademy.edu.pk
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Phone className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                +92 (537) 530-101
              </span>
              <Link 
                href="/portal" 
                className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Parent Portal
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${isScrolled
          ? "bg-white/95 shadow-sm backdrop-blur-md dark:bg-slate-950/95"
          : "bg-white dark:bg-slate-950"
          }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 transition-transform group-hover:scale-105">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGj6k_DPxBE1Xepp3q1Qz8atQ9ICHMr6GnEg&s"
                alt="GAK Logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
            </div>
            <div className="hidden font-serif text-base font-bold leading-tight text-slate-900 dark:text-slate-100 md:block">
              Garrison Academy
              <br />
              <span className="text-sm font-normal text-slate-600 dark:text-slate-400">Kharian Cantt</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-blue-600 dark:bg-blue-400" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right section: Actions and Mobile Menu */}
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-700 dark:text-slate-300"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left font-serif">Navigation</SheetTitle>
                  <SheetDescription className="text-left">
                    Garrison Academy Kharian Cantt
                  </SheetDescription>
                </SheetHeader>
                <nav className="mt-8 space-y-2">
                  {menuItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center justify-between rounded-lg p-3 text-sm font-medium transition-colors ${isActive
                          ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                          : "hover:bg-slate-100 dark:hover:bg-slate-800"
                          }`}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <Badge className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                            Active
                          </Badge>
                        )}
                      </Link>
                    )
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}
