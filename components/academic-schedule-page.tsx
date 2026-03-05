"use client";

import Image from "next/image";
import { 
  BookOpen, 
  PenLine, 
  Trophy,
  Download,
  Clock,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function AcademicSchedulePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPtDYzoi2LpsaB0MOYzoqWr3SQLZUM8NezA&s"
            alt="Academic Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-950/90 to-slate-900/95" />

        {/* Decorative Corners */}
        <div className="absolute top-10 left-10 w-48 h-48 border-l-2 border-t-2 border-blue-400/30" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border-r-2 border-b-2 border-blue-400/30" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
          <Badge variant="outline" className="mb-6 border-blue-400/50 text-blue-300 bg-blue-950/30">
            <Star className="h-3 w-3 mr-2 fill-blue-400 text-blue-400" />
            Est. 1984 • Kharian Cantt • APSACS
          </Badge>

          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light text-white mb-4">
            Academic <em className="italic text-blue-300">Schedule</em>
          </h1>

          <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto my-8" />

          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-slate-400 font-light">
            Organized Learning • Structured Curriculum
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-blue-300 animate-bounce">
          <Clock className="h-5 w-5" />
        </div>
      </section>

      {/* Key Academic Events Section */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.4em] uppercase text-blue-600 font-bold block mb-4">
              Important Dates
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900">
              Key <em className="italic text-blue-600">Academic Events</em>
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mx-auto mt-6" />
          </div>

          {/* Event Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Academic Year Start */}
            <div className="group bg-slate-50 p-10 border-l-4 border-blue-600 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center mb-6">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-serif text-2xl font-normal text-slate-900 mb-4">
                Academic Year Start
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 mb-4">
                Classes commence with orientation sessions for all students and faculty members.
              </p>
              <div className="text-sm font-semibold text-blue-600 mt-4">
                April 1, 2026
              </div>
            </div>

            {/* Card 2: Mid-Term Exams */}
            <div className="group bg-slate-50 p-10 border-l-4 border-blue-600 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center mb-6">
                <PenLine className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-serif text-2xl font-normal text-slate-900 mb-4">
                Mid-Term Exams
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 mb-4">
                Comprehensive assessment of student progress across all subjects and classes.
              </p>
              <div className="text-sm font-semibold text-blue-600 mt-4">
                July 15 - August 10, 2026
              </div>
            </div>

            {/* Card 3: Final Examinations */}
            <div className="group bg-slate-50 p-10 border-l-4 border-blue-600 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center mb-6">
                <Trophy className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-serif text-2xl font-normal text-slate-900 mb-4">
                Final Examinations
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 mb-4">
                Board and annual examinations for all classes following APSACS guidelines.
              </p>
              <div className="text-sm font-semibold text-blue-600 mt-4">
                November 1 - December 15, 2026
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule Table Section */}
      <section className="bg-slate-900 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.4em] uppercase text-blue-300 font-bold block mb-4">
              Daily Timetable
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-white">
              Class <em className="italic text-blue-300">Schedule</em>
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mx-auto mt-6" />
          </div>

          {/* Schedule Table */}
          <div className="overflow-x-auto rounded-lg border border-blue-900/30">
            <table className="w-full bg-slate-900/50">
              <thead>
                <tr className="bg-slate-900 border-b-2 border-blue-600">
                  <th className="px-6 py-5 text-left text-[11px] tracking-[0.2em] uppercase text-blue-300 font-semibold">
                    Class
                  </th>
                  <th className="px-6 py-5 text-left text-[11px] tracking-[0.2em] uppercase text-blue-300 font-semibold">
                    Monday - Thursday
                  </th>
                  <th className="px-6 py-5 text-left text-[11px] tracking-[0.2em] uppercase text-blue-300 font-semibold">
                    Friday
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-blue-900/20 hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-blue-300">EYS-1</td>
                  <td className="px-6 py-4 text-sm text-slate-300">8:00-12:00</td>
                  <td className="px-6 py-4 text-sm text-slate-300">8:00-11:40</td>
                </tr>
                <tr className="border-b border-blue-900/20 hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-blue-300">EYS-2</td>
                  <td className="px-6 py-4 text-sm text-slate-300">8:00-12:30</td>
                  <td className="px-6 py-4 text-sm text-slate-300">8:00-11:50</td>
                </tr>
                <tr className="border-b border-blue-900/20 hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-blue-300">PRE</td>
                  <td className="px-6 py-4 text-sm text-slate-300">8:00-13:00</td>
                  <td className="px-6 py-4 text-sm text-slate-300">8:00-12:00</td>
                </tr>
                <tr className="border-b border-blue-900/20 hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-blue-300">1-3</td>
                  <td className="px-6 py-4 text-sm text-slate-300">07:55-01:45</td>
                  <td className="px-6 py-4 text-sm text-slate-300">07:55-12:20</td>
                </tr>
                <tr className="border-b border-blue-900/20 hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-blue-300">4-8 (BOYS)</td>
                  <td className="px-6 py-4 text-sm text-slate-300">07:55-02:00</td>
                  <td className="px-6 py-4 text-sm text-slate-300">07:55-12:20</td>
                </tr>
                <tr className="border-b border-blue-900/20 hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-blue-300">4-8 (GIRLS)</td>
                  <td className="px-6 py-4 text-sm text-slate-300">07:55-01:50</td>
                  <td className="px-6 py-4 text-sm text-slate-300">07:55-12:30</td>
                </tr>
                <tr className="border-b border-blue-900/20 hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-blue-300">APSIS</td>
                  <td className="px-6 py-4 text-sm text-slate-300">07:55-02:00</td>
                  <td className="px-6 py-4 text-sm text-slate-300">07:55-12:20</td>
                </tr>
                <tr className="border-b border-blue-900/20 hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-blue-300">11-12 (GIRLS)</td>
                  <td className="px-6 py-4 text-sm text-slate-300">07:55-02:05</td>
                  <td className="px-6 py-4 text-sm text-slate-300">07:55-12:35</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-blue-300">11-12 (BOYS)</td>
                  <td className="px-6 py-4 text-sm text-slate-300">07:55-02:10</td>
                  <td className="px-6 py-4 text-sm text-slate-300">07:55-12:40</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table Note */}
          <div className="mt-8 text-center">
            <p className="text-xs text-slate-400 leading-relaxed max-w-2xl mx-auto">
              All timings are subject to change based on seasonal adjustments and special events.
              <br />
              Please refer to school notices for the most current schedule information.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-slate-900 py-24 px-6 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <div className="w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="text-[10px] tracking-[0.4em] uppercase text-blue-300 font-bold block mb-4">
            Plan Your Schedule
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6">
            Download Full <em className="italic text-blue-300">Academic Calendar</em>
          </h2>
          <p className="text-sm tracking-wider uppercase text-slate-400 mb-12">
            Complete schedule with holidays and special events
          </p>

          <div className="relative inline-block">
            {/* Animated Border */}
            <div className="absolute -inset-2 border border-blue-400/30 animate-pulse" />
            
            <Button
              size="lg"
              className="relative bg-transparent border-2 border-blue-600 text-blue-300 hover:bg-blue-600 hover:text-white transition-all duration-300 text-xs tracking-[0.3em] uppercase px-12 py-6"
            >
              Download PDF
              <Download className="ml-3 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
