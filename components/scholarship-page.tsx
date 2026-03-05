"use client";

import React from "react";
import Image from "next/image";
import { 
  Award,
  Trophy,
  Star,
  ChevronDown,
  Medal,
  GraduationCap,
  Users
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Achiever {
  position: "1st" | "2nd" | "3rd";
  name: string;
  percentage: string;
  stream: string;
  medal: string;
}

const classIXAchievers: Achiever[] = [
  { position: "1st", name: "Eshaal Maqsood", percentage: "96.35%", stream: "Pre-Medical", medal: "🥇" },
  { position: "2nd", name: "Areesha Ali", percentage: "96.01%", stream: "Pre-Medical", medal: "🥈" },
  { position: "3rd", name: "Ayesha Riaz", percentage: "95.96%", stream: "Pre-Medical", medal: "🥉" },
];

const classXAchievers: Achiever[] = [
  { position: "1st", name: "Maheen Fatima", percentage: "96.00%", stream: "Pre-Medical", medal: "🥇" },
  { position: "2nd", name: "Aneeqa Haider", percentage: "96.00%", stream: "Pre-Medical", medal: "🥈" },
  { position: "3rd", name: "Eman Fatima", percentage: "95.91%", stream: "Pre-Medical", medal: "🥉" },
];

const classXIAchievers: Achiever[] = [
  { position: "1st", name: "Maryam Tehseen", percentage: "95.80%", stream: "Pre-Medical", medal: "🥇" },
  { position: "2nd", name: "Fatima Shahzad", percentage: "95.25%", stream: "Pre-Medical", medal: "🥈" },
  { position: "3rd", name: "Rahat Mutaza", percentage: "94.85%", stream: "Pre-Medical", medal: "🥉" },
];

const classXIIAchievers: Achiever[] = [
  { position: "1st", name: "Aleezy Wasee", percentage: "93.91%", stream: "Pre-Medical", medal: "🥇" },
  { position: "2nd", name: "Wazzuha Mouzzam", percentage: "92.82%", stream: "Pre-Medical", medal: "🥈" },
  { position: "3rd", name: "Mahnoor Khalid", percentage: "92.82%", stream: "Pre-Medical", medal: "🥉" },
];

export default function ScholarshipPage() {
  const renderAchieverCard = (achiever: Achiever) => (
    <div
      key={`${achiever.position}-${achiever.name}`}
      className="bg-white border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-400"
    >
      {/* Image Placeholder */}
      <div className="w-full aspect-square bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center">
        <Users className="h-20 w-20 text-blue-200" />
      </div>

      {/* Content */}
      <div className="p-8 text-center">
        {/* Position Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 text-[10px] font-bold tracking-wider uppercase mb-4">
          <span>{achiever.medal}</span>
          <span>{achiever.position} Position</span>
        </div>

        {/* Name */}
        <h4 className="font-serif text-xl font-semibold text-slate-900 mb-3">
          {achiever.name}
        </h4>

        {/* Percentage */}
        <div className="text-4xl font-bold text-blue-600 mb-2">
          {achiever.percentage}
        </div>

        {/* Stream Label */}
        <div className="text-[11px] tracking-wider uppercase text-slate-600 font-semibold">
          {achiever.stream}
        </div>
      </div>
    </div>
  );

  const renderClassSection = (classNum: string, achievers: Achiever[]) => (
    <div className="mb-24 last:mb-0">
      {/* Class Header */}
      <div className="text-center mb-12">
        <h3 className="font-serif text-3xl md:text-4xl font-normal text-slate-900">
          Class <em className="italic text-blue-600">{classNum}</em>
        </h3>
        <div className="w-10 h-px bg-blue-600 mx-auto mt-4" />
      </div>

      {/* Achievers Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {achievers.map(renderAchieverCard)}
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPtDYzoi2LpsaB0MOYzoqWr3SQLZUM8NezA&s"
            alt="Scholarship Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-950/90 to-slate-900/95" />

        {/* Decorative Corners */}
        <div className="absolute top-8 left-8 w-40 h-40 border-l-2 border-t-2 border-blue-400/30" />
        <div className="absolute bottom-8 right-8 w-40 h-40 border-r-2 border-b-2 border-blue-400/30" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
          <Badge variant="outline" className="mb-6 border-blue-400/50 text-blue-300 bg-blue-950/30">
            <Star className="h-3 w-3 mr-2 fill-blue-400 text-blue-400" />
            Excellence in Education • Est. 1984 • APSACS
          </Badge>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4">
            Scholarship <em className="italic text-blue-300">Program</em>
          </h1>

          <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto my-8" />

          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-slate-400 font-light">
            Recognizing Excellence • Celebrating Achievement
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-blue-300 animate-bounce">
          <ChevronDown className="h-5 w-5" />
        </div>
      </section>

      {/* Scholarship Section */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.4em] uppercase text-blue-600 font-bold block mb-4">
              Academic Merit
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900">
              Scholarship <em className="italic text-blue-600">Recognition</em>
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mx-auto mt-6" />
          </div>

          {/* Introduction Text */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-sm md:text-base leading-relaxed text-slate-600 mb-4">
              Garrison Academy honors top performers across all classes. Our scholarship program recognizes and celebrates students who demonstrate{" "}
              <strong className="text-slate-900 font-semibold">exceptional academic excellence</strong> and consistent dedication to their studies.
            </p>
          </div>

          {/* Class Sections */}
          <div>
            {renderClassSection("IX", classIXAchievers)}
            {renderClassSection("X", classXAchievers)}
            {renderClassSection("XI", classXIAchievers)}
            {renderClassSection("XII", classXIIAchievers)}
          </div>

          {/* Stats Section */}
          <div className="mt-20 pt-16 border-t border-slate-200">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-slate-50 border border-slate-200">
                <Trophy className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="font-serif text-4xl font-bold text-slate-900 mb-2">12</div>
                <div className="text-sm text-slate-600 uppercase tracking-wider">
                  Top Achievers
                </div>
              </div>

              <div className="text-center p-8 bg-slate-50 border border-slate-200">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="font-serif text-4xl font-bold text-slate-900 mb-2">4</div>
                <div className="text-sm text-slate-600 uppercase tracking-wider">
                  Class Levels
                </div>
              </div>

              <div className="text-center p-8 bg-slate-50 border border-slate-200">
                <Medal className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="font-serif text-4xl font-bold text-slate-900 mb-2">92%+</div>
                <div className="text-sm text-slate-600 uppercase tracking-wider">
                  Excellence Standard
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-br from-slate-900 to-blue-950 p-12 relative overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <GraduationCap className="h-16 w-16 text-blue-300 mx-auto mb-6" />
              <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">
                Strive for <em className="italic text-blue-300">Excellence</em>
              </h3>
              <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed">
                Join these outstanding scholars by demonstrating dedication, hard work, and academic excellence. Every achievement begins with determination.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
