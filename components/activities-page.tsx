"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Trophy,
  Palette,
  FlaskConical,
  Images,
  ChevronDown,
  Star,
  Users,
  MapPin,
  Calendar,
  Dumbbell,
  Award,
  Mic,
  Newspaper,
  Lightbulb,
  BookOpen,
  Globe,
  Laptop,
  Atom,
  Brush,
  Code,
  Sprout,
  UserCircle,
  ArrowRight,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ActivitiesPage() {
  const [activeSection, setActiveSection] = useState("sports");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[82vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-950/90 to-slate-900/95" />

        {/* Decorative Corners */}
        <div className="absolute top-20 left-12 w-48 h-48 border-l-2 border-t-2 border-blue-400/30" />
        <div className="absolute bottom-12 right-12 w-48 h-48 border-r-2 border-b-2 border-blue-400/30" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
          <Badge variant="outline" className="mb-8 border-blue-400/50 text-blue-300 bg-blue-950/30 px-6 py-2">
            Sports • Co-Curricular • Exhibitions • Campus Life
          </Badge>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white mb-4">
            Beyond the<br />
            <em className="italic text-blue-300">Classroom</em>
          </h1>

          <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto my-8" />

          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-slate-400 font-light">
            Where Character is Built • Spirit is Forged • Talent Takes Flight
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-blue-300 animate-bounce">
          <ChevronDown className="h-5 w-5" />
          <span className="text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        </div>
      </section>

      {/* Sticky Section Navigation */}
      <nav className="sticky top-0 z-40 bg-slate-900 border-b border-slate-800 overflow-x-auto">
        <div className="flex items-center justify-center min-w-max px-6">
          <button
            onClick={() => scrollToSection("sports")}
            className={`flex items-center gap-2 px-6 py-4 text-[9px] tracking-[0.3em] uppercase font-semibold border-b-2 transition-all whitespace-nowrap ${
              activeSection === "sports"
                ? "text-blue-300 border-blue-600"
                : "text-slate-400 border-transparent hover:text-blue-300 hover:border-blue-600"
            }`}
          >
            <Trophy className="h-3 w-3" />
            Sports
          </button>
          <div className="w-px h-4 bg-slate-700 flex-shrink-0" />
          <button
            onClick={() => scrollToSection("cca")}
            className={`flex items-center gap-2 px-6 py-4 text-[9px] tracking-[0.3em] uppercase font-semibold border-b-2 transition-all whitespace-nowrap ${
              activeSection === "cca"
                ? "text-blue-300 border-blue-600"
                : "text-slate-400 border-transparent hover:text-blue-300 hover:border-blue-600"
            }`}
          >
            <Palette className="h-3 w-3" />
            Co-Curricular
          </button>
          <div className="w-px h-4 bg-slate-700 flex-shrink-0" />
          <button
            onClick={() => scrollToSection("exhibitions")}
            className={`flex items-center gap-2 px-6 py-4 text-[9px] tracking-[0.3em] uppercase font-semibold border-b-2 transition-all whitespace-nowrap ${
              activeSection === "exhibitions"
                ? "text-blue-300 border-blue-600"
                : "text-slate-400 border-transparent hover:text-blue-300 hover:border-blue-600"
            }`}
          >
            <FlaskConical className="h-3 w-3" />
            Exhibitions
          </button>
          <div className="w-px h-4 bg-slate-700 flex-shrink-0" />
          <button
            onClick={() => scrollToSection("gallery")}
            className={`flex items-center gap-2 px-6 py-4 text-[9px] tracking-[0.3em] uppercase font-semibold border-b-2 transition-all whitespace-nowrap ${
              activeSection === "gallery"
                ? "text-blue-300 border-blue-600"
                : "text-slate-400 border-transparent hover:text-blue-300 hover:border-blue-600"
            }`}
          >
            <Images className="h-3 w-3" />
            Gallery
          </button>
        </div>
      </nav>

      {/* Overview Strip */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-px bg-blue-200">
            {/* Card 1 */}
            <div className="group bg-white p-11 text-center relative hover:bg-blue-50 hover:-translate-y-1 transition-all cursor-default">
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform" />
              <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-serif text-xl text-slate-900 mb-2">Sports</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cricket, Football, Athletics, Badminton & more — competing at district and inter-school level.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white p-11 text-center relative hover:bg-blue-50 hover:-translate-y-1 transition-all cursor-default">
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform" />
              <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto mb-6">
                <Palette className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-serif text-xl text-slate-900 mb-2">Co-Curricular</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Debate, Art, Science Club, Literary Society, Quiz competitions, and student councils.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white p-11 text-center relative hover:bg-blue-50 hover:-translate-y-1 transition-all cursor-default">
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform" />
              <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto mb-6">
                <FlaskConical className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-serif text-xl text-slate-900 mb-2">Exhibitions</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Annual Science & Technology Fairs, Art Exhibitions, and Project Display competitions.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group bg-white p-11 text-center relative hover:bg-blue-50 hover:-translate-y-1 transition-all cursor-default">
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform" />
              <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto mb-6">
                <Images className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-serif text-xl text-slate-900 mb-2">Campus Life</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                A vibrant school community — ceremonies, National Days, and moments that define the GAK experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section id="sports" className="scroll-mt-20 bg-slate-900 py-24 px-6 relative overflow-hidden">
        {/* Decorative Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[260px] text-white/[0.015] pointer-events-none whitespace-nowrap select-none">
          SPORTS
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.4em] uppercase text-blue-300 font-bold block mb-4">
              Inter-School • District • APSACS Level
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-white">
              Sports <em className="italic text-blue-300">Programme</em>
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mx-auto mt-6" />
          </div>

          {/* Sports Categories Grid */}
          <div className="grid md:grid-cols-3 gap-px bg-blue-900/20 mb-12">
            {/* Cricket */}
            <div className="group bg-slate-900 overflow-hidden hover:-translate-y-1 transition-all">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 to-slate-900/90" />
                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <div className="text-center">
                    <Trophy className="h-12 w-12 text-blue-400/20 mx-auto mb-3" />
                    <span className="text-xs tracking-[0.3em] uppercase text-white/20">Cricket Photo</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="font-serif text-2xl text-white">Cricket</h3>
                  <span className="text-[8px] tracking-[0.4em] uppercase text-blue-300">Schools Pride Sport</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-[8px] uppercase border-slate-700 text-slate-300">
                    <Trophy className="h-2.5 w-2.5 mr-1.5 text-blue-400" />
                    Inter-School Champions 2024
                  </Badge>
                  <Badge variant="outline" className="text-[8px] uppercase border-slate-700 text-slate-300">
                    <Users className="h-2.5 w-2.5 mr-1.5 text-blue-400" />
                    Senior & Junior Teams
                  </Badge>
                  <Badge variant="outline" className="text-[8px] uppercase border-slate-700 text-slate-300">
                    <MapPin className="h-2.5 w-2.5 mr-1.5 text-blue-400" />
                    Home Ground On-Campus
                  </Badge>
                  <Badge variant="outline" className="text-[8px] uppercase border-slate-700 text-slate-300">
                    <Calendar className="h-2.5 w-2.5 mr-1.5 text-blue-400" />
                    Annual Cricket Gala
                  </Badge>
                </div>
              </div>
            </div>

            {/* Football */}
            <div className="group bg-slate-900 overflow-hidden hover:-translate-y-1 transition-all">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 to-slate-900/90" />
                <div className="w-full h-full bg-gradient-to-br from-blue-950 to-slate-900 flex items-center justify-center">
                  <div className="text-center">
                    <Trophy className="h-12 w-12 text-blue-400/20 mx-auto mb-3" />
                    <span className="text-xs tracking-[0.3em] uppercase text-white/20">Football Photo</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="font-serif text-2xl text-white">Football</h3>
                  <span className="text-[8px] tracking-[0.4em] uppercase text-blue-300">District Level Competitors</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-[8px] uppercase border-slate-700 text-slate-300">
                    <Trophy className="h-2.5 w-2.5 mr-1.5 text-blue-400" />
                    District Level Competition
                  </Badge>
                  <Badge variant="outline" className="text-[8px] uppercase border-slate-700 text-slate-300">
                    <Users className="h-2.5 w-2.5 mr-1.5 text-blue-400" />
                    Boys & Girls Teams
                  </Badge>
                  <Badge variant="outline" className="text-[8px] uppercase border-slate-700 text-slate-300">
                    <Star className="h-2.5 w-2.5 mr-1.5 text-blue-400" />
                    APSACS Inter-School
                  </Badge>
                  <Badge variant="outline" className="text-[8px] uppercase border-slate-700 text-slate-300">
                    <Dumbbell className="h-2.5 w-2.5 mr-1.5 text-blue-400" />
                    Fitness & Conditioning
                  </Badge>
                </div>
              </div>
            </div>

            {/* Athletics */}
            <div className="group bg-slate-900 overflow-hidden hover:-translate-y-1 transition-all">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 to-slate-900/90" />
                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <div className="text-center">
                    <Trophy className="h-12 w-12 text-blue-400/20 mx-auto mb-3" />
                    <span className="text-xs tracking-[0.3em] uppercase text-white/20">Athletics / Sports Day</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="font-serif text-2xl text-white">Athletics & Field</h3>
                  <span className="text-[8px] tracking-[0.4em] uppercase text-blue-300">Annual Sports Gala</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-[8px] uppercase border-slate-700 text-slate-300">
                    100m • 200m • 400m
                  </Badge>
                  <Badge variant="outline" className="text-[8px] uppercase border-slate-700 text-slate-300">
                    High Jump • Long Jump
                  </Badge>
                  <Badge variant="outline" className="text-[8px] uppercase border-slate-700 text-slate-300">
                    Shot Put • Discus
                  </Badge>
                  <Badge variant="outline" className="text-[8px] uppercase border-slate-700 text-slate-300">
                    <Award className="h-2.5 w-2.5 mr-1.5 text-blue-400" />
                    Relay Races
                  </Badge>
                </div>
              </div>
            </div>

            {/* Badminton */}
            <div className="group bg-slate-900 overflow-hidden hover:-translate-y-1 transition-all">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 to-slate-900/90" />
                <div className="w-full h-full bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center">
                  <div className="text-center">
                    <Trophy className="h-12 w-12 text-blue-400/20 mx-auto mb-3" />
                    <span className="text-xs tracking-[0.3em] uppercase text-white/20">Badminton Photo</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="font-serif text-2xl text-white">Badminton</h3>
                  <span className="text-[8px] tracking-[0.4em] uppercase text-blue-300">Indoor Sport Excellence</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-[8px] uppercase border-slate-700 text-slate-300">
                    Singles & Doubles
                  </Badge>
                  <Badge variant="outline" className="text-[8px] uppercase border-slate-700 text-slate-300">
                    Boys & Girls
                  </Badge>
                  <Badge variant="outline" className="text-[8px] uppercase border-slate-700 text-slate-300">
                    Indoor Court
                  </Badge>
                  <Badge variant="outline" className="text-[8px] uppercase border-slate-700 text-slate-300">
                    <Trophy className="h-2.5 w-2.5 mr-1.5 text-blue-400" />
                    APSACS Level
                  </Badge>
                </div>
              </div>
            </div>

            {/* Other Sports */}
            <div className="group bg-slate-900 overflow-hidden hover:-translate-y-1 transition-all">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 to-slate-900/90" />
                <div className="w-full h-full bg-gradient-to-br from-blue-950 to-slate-950 flex items-center justify-center">
                  <div className="text-center">
                    <Trophy className="h-12 w-12 text-blue-400/20 mx-auto mb-3" />
                    <span className="text-xs tracking-[0.3em] uppercase text-white/20">Multi-Sport Photo</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="font-serif text-2xl text-white">Other Sports</h3>
                  <span className="text-[8px] tracking-[0.4em] uppercase text-blue-300">Chess • Table Tennis • Tug of War</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-[8px] uppercase border-slate-700 text-slate-300">
                    Chess Club
                  </Badge>
                  <Badge variant="outline" className="text-[8px] uppercase border-slate-700 text-slate-300">
                    Table Tennis
                  </Badge>
                  <Badge variant="outline" className="text-[8px] uppercase border-slate-700 text-slate-300">
                    Tug of War
                  </Badge>
                  <Badge variant="outline" className="text-[8px] uppercase border-slate-700 text-slate-300">
                    Volleyball
                  </Badge>
                </div>
              </div>
            </div>

            {/* PT & Martial Arts */}
            <div className="group bg-slate-900 overflow-hidden hover:-translate-y-1 transition-all">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 to-slate-900/90" />
                <div className="w-full h-full bg-gradient-to-br from-slate-900 to-blue-950 flex items-center justify-center">
                  <div className="text-center">
                    <Trophy className="h-12 w-12 text-blue-400/20 mx-auto mb-3" />
                    <span className="text-xs tracking-[0.3em] uppercase text-white/20">PT / Martial Arts Photo</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="font-serif text-2xl text-white">PT & Martial Arts</h3>
                  <span className="text-[8px] tracking-[0.4em] uppercase text-blue-300">Discipline Through Body</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-[8px] uppercase border-slate-700 text-slate-300">
                    Taekwondo
                  </Badge>
                  <Badge variant="outline" className="text-[8px] uppercase border-slate-700 text-slate-300">
                    Daily PT Programme
                  </Badge>
                  <Badge variant="outline" className="text-[8px] uppercase border-slate-700 text-slate-300">
                    <Award className="h-2.5 w-2.5 mr-1.5 text-blue-400" />
                    Self-Defence Training
                  </Badge>
                  <Badge variant="outline" className="text-[8px] uppercase border-slate-700 text-slate-300">
                    Parade & Drill
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Sports Achievements */}
          <div className="mt-12">
            <div className="text-[10px] tracking-[0.4em] uppercase text-blue-300 font-bold text-center mb-7">
              Sports Achievements — 2024–25
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-blue-900/20">
              <div className="bg-slate-900 p-9 text-center relative before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-blue-400 before:to-transparent">
                <div className="font-serif text-5xl font-light text-blue-300">12</div>
                <div className="text-[9px] tracking-[0.2em] uppercase text-slate-400 mt-2 font-semibold">Trophies Won</div>
                <div className="text-xs text-slate-500 mt-1">Inter-School & District Level</div>
              </div>
              <div className="bg-slate-900 p-9 text-center relative before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-blue-400 before:to-transparent">
                <div className="font-serif text-5xl font-light text-blue-300">3</div>
                <div className="text-[9px] tracking-[0.2em] uppercase text-slate-400 mt-2 font-semibold">District Championships</div>
                <div className="text-xs text-slate-500 mt-1">Cricket • Athletics • Badminton</div>
              </div>
              <div className="bg-slate-900 p-9 text-center relative before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-blue-400 before:to-transparent">
                <div className="font-serif text-5xl font-light text-blue-300">200+</div>
                <div className="text-[9px] tracking-[0.2em] uppercase text-slate-400 mt-2 font-semibold">Student Athletes</div>
                <div className="text-xs text-slate-500 mt-1">Across all sections</div>
              </div>
              <div className="bg-slate-900 p-9 text-center relative before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-blue-400 before:to-transparent">
                <div className="font-serif text-5xl font-light text-blue-300">8</div>
                <div className="text-[9px] tracking-[0.2em] uppercase text-slate-400 mt-2 font-semibold">Sports Disciplines</div>
                <div className="text-xs text-slate-500 mt-1">Boys & Girls programmes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Co-Curricular Activities Section */}
      <section id="cca" className="scroll-mt-20 bg-slate-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.4em] uppercase text-blue-600 font-bold block mb-4">
              Nurturing Every Talent
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900">
              Co-Curricular <em className="italic text-blue-600">Activities</em>
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mx-auto mt-6" />
          </div>

          {/* Featured Intro */}
          <div className="grid lg:grid-cols-[55%_45%] border border-blue-200 overflow-hidden mb-12">
            <div className="relative min-h-[400px]">
              <div className="w-full h-full bg-gradient-to-br from-slate-900 to-blue-950 flex items-center justify-center">
                <div className="text-center">
                  <Palette className="h-12 w-12 text-blue-400/20 mx-auto mb-3" />
                  <span className="text-xs tracking-[0.3em] uppercase text-white/20">Debate / CCA Event Photo</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-14 flex flex-col justify-center">
              <span className="text-[10px] tracking-[0.4em] uppercase text-blue-600 font-bold block mb-4">
                The GAK CCA Programme
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-slate-900 mb-5 leading-tight">
                Cultivating Minds<br />
                <em className="italic text-blue-600">Beyond Textbooks</em>
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-7">
                The Co-Curricular Activities programme at GAK ensures every student discovers their unique talent and voice. From the rigour of inter-school debates to the creativity of the art room, our CCA calendar is rich, purposeful, and deeply integrated with the APSACS mission of holistic development.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="text-[9px] uppercase bg-blue-50 text-slate-700 border border-blue-200">
                  <Mic className="h-2.5 w-2.5 mr-1.5 text-blue-600" />
                  Debate Society
                </Badge>
                <Badge className="text-[9px] uppercase bg-blue-50 text-slate-700 border border-blue-200">
                  <Newspaper className="h-2.5 w-2.5 mr-1.5 text-blue-600" />
                  Literary Circle
                </Badge>
                <Badge className="text-[9px] uppercase bg-blue-50 text-slate-700 border border-blue-200">
                  <FlaskConical className="h-2.5 w-2.5 mr-1.5 text-blue-600" />
                  Science Club
                </Badge>
                <Badge className="text-[9px] uppercase bg-blue-50 text-slate-700 border border-blue-200">
                  <Brush className="h-2.5 w-2.5 mr-1.5 text-blue-600" />
                  Art Club
                </Badge>
                <Badge className="text-[9px] uppercase bg-blue-50 text-slate-700 border border-blue-200">
                  <Lightbulb className="h-2.5 w-2.5 mr-1.5 text-blue-600" />
                  Quiz Team
                </Badge>
                <Badge className="text-[9px] uppercase bg-blue-50 text-slate-700 border border-blue-200">
                  <Newspaper className="h-2.5 w-2.5 mr-1.5 text-blue-600" />
                  School Magazine
                </Badge>
                <Badge className="text-[9px] uppercase bg-blue-50 text-slate-700 border border-blue-200">
                  <Code className="h-2.5 w-2.5 mr-1.5 text-blue-600" />
                  IT Club
                </Badge>
                <Badge className="text-[9px] uppercase bg-blue-50 text-slate-700 border border-blue-200">
                  <Sprout className="h-2.5 w-2.5 mr-1.5 text-blue-600" />
                  Eco Club
                </Badge>
              </div>
            </div>
          </div>

          {/* CCA Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-blue-200">
            {/* Debate Society */}
            <div className="group bg-white overflow-hidden hover:-translate-y-1 transition-all">
              <div className="h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-slate-900 to-blue-950 flex items-center justify-center">
                  <div className="text-center">
                    <Mic className="h-10 w-10 text-blue-400/20 mx-auto mb-2" />
                    <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">Debate Photo</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-[8px] tracking-[0.4em] uppercase text-blue-600 font-bold block mb-2">Oratory</span>
                <h4 className="font-serif text-xl text-slate-900 mb-2">Debate Society</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Students sharpen arguments and represent GAK at district and APSACS inter-school debate competitions.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="outline" className="text-[8px] uppercase text-slate-600 border-slate-300">English</Badge>
                  <Badge variant="outline" className="text-[8px] uppercase text-slate-600 border-slate-300">Urdu</Badge>
                  <Badge variant="outline" className="text-[8px] uppercase text-slate-600 border-slate-300">Inter-School</Badge>
                </div>
              </div>
            </div>

            {/* Science Club */}
            <div className="group bg-white overflow-hidden hover:-translate-y-1 transition-all">
              <div className="h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-950 to-slate-900 flex items-center justify-center">
                  <div className="text-center">
                    <FlaskConical className="h-10 w-10 text-blue-400/20 mx-auto mb-2" />
                    <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">Science Club Photo</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-[8px] tracking-[0.4em] uppercase text-blue-600 font-bold block mb-2">STEM</span>
                <h4 className="font-serif text-xl text-slate-900 mb-2">Science Club</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Experiments, innovations, and hands-on projects preparing students for science fairs and research challenges.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="outline" className="text-[8px] uppercase text-slate-600 border-slate-300">Physics</Badge>
                  <Badge variant="outline" className="text-[8px] uppercase text-slate-600 border-slate-300">Chemistry</Badge>
                  <Badge variant="outline" className="text-[8px] uppercase text-slate-600 border-slate-300">Biology</Badge>
                </div>
              </div>
            </div>

            {/* Art Club */}
            <div className="group bg-white overflow-hidden hover:-translate-y-1 transition-all">
              <div className="h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-slate-900 to-blue-950 flex items-center justify-center">
                  <div className="text-center">
                    <Brush className="h-10 w-10 text-blue-400/20 mx-auto mb-2" />
                    <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">Art Club Photo</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-[8px] tracking-[0.4em] uppercase text-blue-600 font-bold block mb-2">Creative Arts</span>
                <h4 className="font-serif text-xl text-slate-900 mb-2">Art Club</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Calligraphy, painting, and sketching — students exhibit their work at the Annual Art Exhibition every spring.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="outline" className="text-[8px] uppercase text-slate-600 border-slate-300">Calligraphy</Badge>
                  <Badge variant="outline" className="text-[8px] uppercase text-slate-600 border-slate-300">Painting</Badge>
                  <Badge variant="outline" className="text-[8px] uppercase text-slate-600 border-slate-300">Sketching</Badge>
                </div>
              </div>
            </div>

            {/* Quiz Competitions */}
            <div className="group bg-white overflow-hidden hover:-translate-y-1 transition-all">
              <div className="h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center">
                  <div className="text-center">
                    <Lightbulb className="h-10 w-10 text-blue-400/20 mx-auto mb-2" />
                    <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">Quiz Competition Photo</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-[8px] tracking-[0.4em] uppercase text-blue-600 font-bold block mb-2">Academic</span>
                <h4 className="font-serif text-xl text-slate-900 mb-2">Quiz Competitions</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  From general knowledge to subject Olympiads — GAK students regularly win at district and provincial quiz tournaments.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="outline" className="text-[8px] uppercase text-slate-600 border-slate-300">General Knowledge</Badge>
                  <Badge variant="outline" className="text-[8px] uppercase text-slate-600 border-slate-300">Olympiads</Badge>
                </div>
              </div>
            </div>

            {/* Literary Circle */}
            <div className="group bg-white overflow-hidden hover:-translate-y-1 transition-all">
              <div className="h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-slate-900 to-blue-950 flex items-center justify-center">
                  <div className="text-center">
                    <Newspaper className="h-10 w-10 text-blue-400/20 mx-auto mb-2" />
                    <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">Literary Society Photo</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-[8px] tracking-[0.4em] uppercase text-blue-600 font-bold block mb-2">Literature</span>
                <h4 className="font-serif text-xl text-slate-900 mb-2">Literary Circle</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Poetry, creative writing, and the school magazine — published bi-annually for the whole GAK community.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="outline" className="text-[8px] uppercase text-slate-600 border-slate-300">Poetry</Badge>
                  <Badge variant="outline" className="text-[8px] uppercase text-slate-600 border-slate-300">Magazine</Badge>
                  <Badge variant="outline" className="text-[8px] uppercase text-slate-600 border-slate-300">Creative Writing</Badge>
                </div>
              </div>
            </div>

            {/* IT & Coding Club */}
            <div className="group bg-white overflow-hidden hover:-translate-y-1 transition-all">
              <div className="h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center">
                  <div className="text-center">
                    <Code className="h-10 w-10 text-blue-400/20 mx-auto mb-2" />
                    <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">IT Club Photo</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-[8px] tracking-[0.4em] uppercase text-blue-600 font-bold block mb-2">Technology</span>
                <h4 className="font-serif text-xl text-slate-900 mb-2">IT & Coding Club</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Robotics, programming basics, and digital literacy workshops equipping students with 21st-century skills.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="outline" className="text-[8px] uppercase text-slate-600 border-slate-300">Coding</Badge>
                  <Badge variant="outline" className="text-[8px] uppercase text-slate-600 border-slate-300">Robotics</Badge>
                  <Badge variant="outline" className="text-[8px] uppercase text-slate-600 border-slate-300">Digital Literacy</Badge>
                </div>
              </div>
            </div>

            {/* Eco Club */}
            <div className="group bg-white overflow-hidden hover:-translate-y-1 transition-all">
              <div className="h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-emerald-900 to-slate-900 flex items-center justify-center">
                  <div className="text-center">
                    <Sprout className="h-10 w-10 text-blue-400/20 mx-auto mb-2" />
                    <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">Eco Club Photo</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-[8px] tracking-[0.4em] uppercase text-blue-600 font-bold block mb-2">Environment</span>
                <h4 className="font-serif text-xl text-slate-900 mb-2">Eco Club</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Tree plantation drives, awareness campaigns, and sustainability projects building responsible citizens.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="outline" className="text-[8px] uppercase text-slate-600 border-slate-300">Plantation</Badge>
                  <Badge variant="outline" className="text-[8px] uppercase text-slate-600 border-slate-300">Awareness</Badge>
                  <Badge variant="outline" className="text-[8px] uppercase text-slate-600 border-slate-300">Sustainability</Badge>
                </div>
              </div>
            </div>

            {/* Student Council */}
            <div className="group bg-white overflow-hidden hover:-translate-y-1 transition-all">
              <div className="h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-slate-900 to-blue-950 flex items-center justify-center">
                  <div className="text-center">
                    <UserCircle className="h-10 w-10 text-blue-400/20 mx-auto mb-2" />
                    <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">Student Council Photo</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-[8px] tracking-[0.4em] uppercase text-blue-600 font-bold block mb-2">Leadership</span>
                <h4 className="font-serif text-xl text-slate-900 mb-2">Student Council</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Elected student leaders manage events and represent peer voices under the mentorship of school administration.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="outline" className="text-[8px] uppercase text-slate-600 border-slate-300">Head Boy/Girl</Badge>
                  <Badge variant="outline" className="text-[8px] uppercase text-slate-600 border-slate-300">Prefects</Badge>
                  <Badge variant="outline" className="text-[8px] uppercase text-slate-600 border-slate-300">Council</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exhibitions Section */}
      <section id="exhibitions" className="scroll-mt-20 bg-slate-950 py-24 px-6 relative overflow-hidden">
       {/* Decorative Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 -translate-y-1/4 translate-x-1/4 bg-blue-500/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.4em] uppercase text-blue-300 font-bold block mb-4">
              Annual Showcases
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-white">
              Exhibitions <em className="italic text-blue-300">& Fairs</em>
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mx-auto mt-6" />
          </div>

          {/* Photo Showcase */}
          <div className="grid lg:grid-cols-2 gap-px bg-blue-900/20 mb-12">
            {/* Main Exhibition */}
            <div className="relative min-h-[420px] overflow-hidden group">
              <div className="w-full h-full bg-gradient-to-br from-slate-900 to-blue-950 flex items-center justify-center">
                <div className="text-center">
                  <FlaskConical className="h-12 w-12 text-blue-400/20 mx-auto mb-3" />
                  <span className="text-xs tracking-[0.3em] uppercase text-white/20">Science Exhibition Photo</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <h3 className="font-serif text-3xl text-white mb-2">Annual Science & Technology Exhibition</h3>
                <span className="text-[9px] tracking-[0.3em] uppercase text-blue-300">GAKs Flagship Academic Showcase</span>
              </div>
            </div>

            {/* Side Items */}
            <div className="flex flex-col gap-px">
              {/* Art Exhibition */}
              <div className="relative flex-1 min-h-[139px] overflow-hidden group">
                <div className="w-full h-full bg-gradient-to-br from-slate-900 to-blue-950 flex items-center justify-center">
                  <div className="text-center">
                    <Brush className="h-8 w-8 text-blue-400/20 mx-auto mb-2" />
                    <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">Art Exhibition Photo</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h4 className="font-serif text-lg text-white">Annual Art Exhibition</h4>
                  <span className="text-[8px] tracking-[0.3em] uppercase text-blue-300">Student Artwork Showcase</span>
                </div>
              </div>

              {/* Innovation Fair */}
              <div className="relative flex-1 min-h-[139px] overflow-hidden group">
                <div className="w-full h-full bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center">
                  <div className="text-center">
                    <Lightbulb className="h-8 w-8 text-blue-400/20 mx-auto mb-2" />
                    <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">Project Display Photo</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h4 className="font-serif text-lg text-white">Innovation & Project Fair</h4>
                  <span className="text-[8px] tracking-[0.3em] uppercase text-blue-300">Student Inventions</span>
                </div>
              </div>

              {/* Book Fair */}
              <div className="relative flex-1 min-h-[139px] overflow-hidden group">
                <div className="w-full h-full bg-gradient-to-br from-slate-900 to-blue-950 flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="h-8 w-8 text-blue-400/20 mx-auto mb-2" />
                    <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">Book Fair Photo</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h4 className="font-serif text-lg text-white">Book & Reading Fair</h4>
                  <span className="text-[8px] tracking-[0.3em] uppercase text-blue-300">Literacy & Knowledge</span>
                </div>
              </div>
            </div>
          </div>

          {/* Exhibition Cards */}
          <div className="grid md:grid-cols-3 gap-px bg-blue-900/20">
            {/* Science & Technology Fair */}
            <div className="bg-white/5 p-10 relative hover:bg-white/10 transition-all before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-blue-400 before:to-transparent">
              <div className="w-14 h-14 border border-blue-800 flex items-center justify-center mb-5">
                <Atom className="h-5 w-5 text-blue-400" />
              </div>
              <h4 className="font-serif text-2xl text-white mb-3">Science & Technology Fair</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Original projects, models, and experiments from Class 5 upward. Best entries forwarded to district and APSACS-level competitions across Physics, Chemistry, Biology, and Computing.
              </p>
              <Badge variant="outline" className="text-[9px] uppercase border-blue-800 text-blue-300">
                <Calendar className="h-2.5 w-2.5 mr-1.5" />
                March / April
              </Badge>
            </div>

            {/* Annual Art Exhibition */}
            <div className="bg-white/5 p-10 relative hover:bg-white/10 transition-all before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-blue-400 before:to-transparent">
              <div className="w-14 h-14 border border-blue-800 flex items-center justify-center mb-5">
                <Brush className="h-5 w-5 text-blue-400" />
              </div>
              <h4 className="font-serif text-2xl text-white mb-3">Annual Art Exhibition</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                A curated showcase of calligraphy, oil & watercolour painting, pencil sketching, and Islamic geometric design — open to parents, alumni, and the wider community.
              </p>
              <Badge variant="outline" className="text-[9px] uppercase border-blue-800 text-blue-300">
                <Calendar className="h-2.5 w-2.5 mr-1.5" />
                February
              </Badge>
            </div>

            {/* Innovation & Project Display */}
            <div className="bg-white/5 p-10 relative hover:bg-white/10 transition-all before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-blue-400 before:to-transparent">
              <div className="w-14 h-14 border border-blue-800 flex items-center justify-center mb-5">
                <Lightbulb className="h-5 w-5 text-blue-400" />
              </div>
              <h4 className="font-serif text-2xl text-white mb-3">Innovation & Project Display</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                A cross-subject project fair for Middle and Senior sections combining Science, Mathematics, and Technology — judged by faculty and visiting experts.
              </p>
              <Badge variant="outline" className="text-[9px] uppercase border-blue-800 text-blue-300">
                <Calendar className="h-2.5 w-2.5 mr-1.5" />
                January
              </Badge>
            </div>

            {/* Book & Reading Festival */}
            <div className="bg-white/5 p-10 relative hover:bg-white/10 transition-all before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-blue-400 before:to-transparent">
              <div className="w-14 h-14 border border-blue-800 flex items-center justify-center mb-5">
                <BookOpen className="h-5 w-5 text-blue-400" />
              </div>
              <h4 className="font-serif text-2xl text-white mb-3">Book & Reading Festival</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                A week-long celebration of reading, literature, and language. Features book fairs, storytelling for junior sections, and reading challenges with prize ceremonies.
              </p>
              <Badge variant="outline" className="text-[9px] uppercase border-blue-800 text-blue-300">
                <Calendar className="h-2.5 w-2.5 mr-1.5" />
                November
              </Badge>
            </div>

            {/* Social Studies & Geography Fair */}
            <div className="bg-white/5 p-10 relative hover:bg-white/10 transition-all before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-blue-400 before:to-transparent">
              <div className="w-14 h-14 border border-blue-800 flex items-center justify-center mb-5">
                <Globe className="h-5 w-5 text-blue-400" />
              </div>
              <h4 className="font-serif text-2xl text-white mb-3">Social Studies & Geography Fair</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Students present maps, models, and multimedia on Pakistani geography, history, and world cultures — encouraging national identity and global awareness.
              </p>
              <Badge variant="outline" className="text-[9px] uppercase border-blue-800 text-blue-300">
                <Calendar className="h-2.5 w-2.5 mr-1.5" />
                October
              </Badge>
            </div>

            {/* IT & Digital Showcase */}
            <div className="bg-white/5 p-10 relative hover:bg-white/10 transition-all before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-blue-400 before:to-transparent">
              <div className="w-14 h-14 border border-blue-800 flex items-center justify-center mb-5">
                <Laptop className="h-5 w-5 text-blue-400" />
              </div>
              <h4 className="font-serif text-2xl text-white mb-3">IT & Digital Showcase</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                College and Senior students present websites, apps, and multimedia projects. Includes a Coding Competition and Digital Poster Design category each year.
              </p>
              <Badge variant="outline" className="text-[9px] uppercase border-blue-800 text-blue-300">
                <Calendar className="h-2.5 w-2.5 mr-1.5" />
                December
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Mosaic Section */}
      <section id="gallery" className="scroll-mt-20 bg-slate-900 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.4em] uppercase text-blue-300 font-bold block mb-4">
              Moments & Memories
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-white">
              Activity <em className="italic text-blue-300">Gallery</em>
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mx-auto mt-6" />
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-4 grid-rows-2 gap-1 h-[440px]">
            {/* Wide item 1 */}
            <div className="col-span-2 relative overflow-hidden group">
              <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-center">
                  <Trophy className="h-10 w-10 text-blue-400/20 mx-auto mb-2" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">Sports Gala</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 z-10 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                <span className="text-[9px] tracking-[0.3em] uppercase text-blue-300">Annual Sports Gala</span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="relative overflow-hidden group">
              <div className="w-full h-full bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center">
                <div className="text-center">
                  <FlaskConical className="h-10 w-10 text-blue-400/20 mx-auto mb-2" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">Science Fair</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 z-10 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                <span className="text-[9px] tracking-[0.3em] uppercase text-blue-300">Science Exhibition</span>
              </div>
            </div>

            {/* Item 3 */}
            <div className="relative overflow-hidden group">
              <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-center">
                  <Award className="h-10 w-10 text-blue-400/20 mx-auto mb-2" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">Prize Distribution</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 z-10 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                <span className="text-[9px] tracking-[0.3em] uppercase text-blue-300">Prize Distribution</span>
              </div>
            </div>

            {/* Tall item */}
            <div className="row-span-2 relative overflow-hidden group">
              <div className="w-full h-full bg-gradient-to-br from-slate-900 to-blue-950 flex items-center justify-center">
                <div className="text-center">
                  <Mic className="h-10 w-10 text-blue-400/20 mx-auto mb-2" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">Debate / CCA</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 z-10 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                <span className="text-[9px] tracking-[0.3em] uppercase text-blue-300">Debate Competition</span>
              </div>
            </div>

            {/* Wide item 2 */}
            <div className="col-span-2 relative overflow-hidden group">
              <div className="w-full h-full bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center">
                <div className="text-center">
                  <Trophy className="h-10 w-10 text-blue-400/20 mx-auto mb-2" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">Cricket / Sports</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 z-10 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                <span className="text-[9px] tracking-[0.3em] uppercase text-blue-300">Cricket Championship</span>
              </div>
            </div>

            {/* Item 4 */}
            <div className="relative overflow-hidden group">
              <div className="w-full h-full bg-gradient-to-br from-emerald-900 to-slate-900 flex items-center justify-center">
                <div className="text-center">
                  <Brush className="h-10 w-10 text-blue-400/20 mx-auto mb-2" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">Art Exhibition</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 z-10 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                <span className="text-[9px] tracking-[0.3em] uppercase text-blue-300">Art Exhibition</span>
              </div>
            </div>

            {/* Item 5 */}
            <div className="relative overflow-hidden group">
              <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-center">
                  <Star className="h-10 w-10 text-blue-400/20 mx-auto mb-2" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">National Day</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 z-10 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                <span className="text-[9px] tracking-[0.3em] uppercase text-blue-300">Independence Day</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA Section */}
      <section className="relative bg-slate-950 py-24 px-6 overflow-hidden text-center">
        {/* Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-[10px] tracking-[0.4em] uppercase text-blue-300 font-bold block mb-4">
            Get Involved
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6">
            Every Student<br />
            <em className="italic text-blue-300">Has a Stage</em>
          </h2>
          <p className="text-sm tracking-wider uppercase text-slate-400 mb-12">
            Join the GAK Family — where the classroom is only the beginning
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="relative inline-block">
              <div className="absolute -inset-2 border border-blue-400/30 animate-pulse" />
              <Link href="/admission">
                <Button
                  size="lg"
                  className="relative bg-transparent border-2 border-blue-600 text-blue-300 hover:bg-blue-600 hover:text-white transition-all duration-300 text-xs tracking-[0.3em] uppercase px-12 py-6"
                >
                  Apply for Admission
                  <ArrowRight className="ml-3 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-700 text-slate-300 hover:border-blue-600 hover:text-blue-300 transition-all text-xs tracking-[0.3em] uppercase px-12 py-6 bg-transparent"
              >
                Contact Us
                <Mail className="ml-3 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
