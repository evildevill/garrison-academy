"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  FileText,
  Star,
  Download,
  Bell,
  Newspaper,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ExaminationPage() {
  const [middleClass, setMiddleClass] = useState("");
  const [middleSubject, setMiddleSubject] = useState("");
  const [middleDoc, setMiddleDoc] = useState("");

  const [matricClass, setMatricClass] = useState("");
  const [matricSubject, setMatricSubject] = useState("");
  const [matricDoc, setMatricDoc] = useState("");

  const [collegeClass, setCollegeClass] = useState("");
  const [collegeStream, setCollegeStream] = useState("");
  const [collegeSubject, setCollegeSubject] = useState("");
  const [collegeDoc, setCollegeDoc] = useState("");

  const handleMiddleView = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Middle Section:", { middleClass, middleSubject, middleDoc });
    // Handle document view logic here
  };

  const handleMatricView = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Matric Section:", { matricClass, matricSubject, matricDoc });
    // Handle document view logic here
  };

  const handleCollegeView = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("College Section:", { collegeClass, collegeStream, collegeSubject, collegeDoc });
    // Handle document view logic here
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPtDYzoi2LpsaB0MOYzoqWr3SQLZUM8NezA&s"
            alt="Examination Background"
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
            Examination <em className="italic text-blue-300">Portal</em>
          </h1>

          <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto my-8" />

          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-slate-400 font-light">
            Schedules • Syllabi • Results
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-blue-300 animate-bounce">
          <ChevronDown className="h-5 w-5" />
        </div>
      </section>

      {/* Main Exam Section */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="text-[10px] tracking-[0.4em] uppercase text-blue-600 font-bold block mb-4">
              Academic Assessment
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900">
              Examination <em className="italic text-blue-600">Center</em>
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mx-auto mt-6" />
          </div>

          {/* Middle Section (Classes IV-VIII) */}
          <div className="mb-28">
            <div className="text-center mb-14">
              <h3 className="font-serif text-3xl md:text-4xl font-normal text-slate-900">
                Middle <em className="italic text-blue-600">Section</em> (Classes IV-VIII)
              </h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form Container */}
              <form onSubmit={handleMiddleView} className="bg-slate-50 p-10 border-l-4 border-blue-600">
                <h4 className="font-serif text-2xl text-slate-900 mb-8">Request Documents</h4>

                <div className="space-y-5">
                  <div>
                    <label htmlFor="class-middle" className="block text-[11px] tracking-wider uppercase text-slate-900 font-semibold mb-2">
                      Select Class *
                    </label>
                    <select
                      id="class-middle"
                      value={middleClass}
                      onChange={(e) => setMiddleClass(e.target.value)}
                      required
                      className="w-full px-4 py-3 text-sm text-slate-700 bg-white border border-blue-200 focus:outline-none focus:bg-white focus:border-blue-600 focus:border-l-4 transition-all"
                    >
                      <option value="">Choose Class</option>
                      <option value="class4">Class IV</option>
                      <option value="class5">Class V</option>
                      <option value="class6">Class VI</option>
                      <option value="class7">Class VII</option>
                      <option value="class8">Class VIII</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject-middle" className="block text-[11px] tracking-wider uppercase text-slate-900 font-semibold mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject-middle"
                      value={middleSubject}
                      onChange={(e) => setMiddleSubject(e.target.value)}
                      required
                      className="w-full px-4 py-3 text-sm text-slate-700 bg-white border border-blue-200 focus:outline-none focus:bg-white focus:border-blue-600 focus:border-l-4 transition-all"
                    >
                      <option value="">Choose Subject</option>
                      <option value="english">English</option>
                      <option value="urdu-a">Urdu A</option>
                      <option value="urdu-b">Urdu B</option>
                      <option value="math">Mathematics</option>
                      <option value="science">Science</option>
                      <option value="geography">Geography</option>
                      <option value="islamiyat">Islamiyat</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="doc-middle" className="block text-[11px] tracking-wider uppercase text-slate-900 font-semibold mb-2">
                      Document Type *
                    </label>
                    <select
                      id="doc-middle"
                      value={middleDoc}
                      onChange={(e) => setMiddleDoc(e.target.value)}
                      required
                      className="w-full px-4 py-3 text-sm text-slate-700 bg-white border border-blue-200 focus:outline-none focus:bg-white focus:border-blue-600 focus:border-l-4 transition-all"
                    >
                      <option value="">Select Type</option>
                      <option value="syllabus">Syllabus</option>
                      <option value="datesheet">Datesheet</option>
                      <option value="plan">Exam Plan</option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all text-xs tracking-[0.3em] uppercase py-6 mt-3"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    View Document
                  </Button>
                </div>
              </form>

              {/* Results Box */}
              <div className="bg-slate-900 p-10 text-white">
                <h4 className="flex items-center gap-3 font-serif text-2xl text-blue-300 mb-6">
                  <FileText className="h-5 w-5" />
                  Available Documents
                </h4>

                <div className="space-y-3">
                  <div className="bg-white/5 p-4 border-l-2 border-blue-400 text-sm leading-relaxed">
                    <strong className="text-blue-300">Mid-Term Exams 2026</strong><br />
                    <span className="text-slate-300">Scheduled: July 15 - August 10</span><br />
                    <span className="text-slate-400">View Datesheet & Syllabus</span>
                  </div>

                  <div className="bg-white/5 p-4 border-l-2 border-blue-400 text-sm leading-relaxed">
                    <strong className="text-blue-300">Annual Exams 2026</strong><br />
                    <span className="text-slate-300">Scheduled: November 1 - December 15</span><br />
                    <span className="text-slate-400">View Complete Exam Plan</span>
                  </div>

                  <div className="bg-white/5 p-4 border-l-2 border-blue-400 text-sm leading-relaxed">
                    <strong className="text-blue-300">Class Wise Schedules</strong><br />
                    <span className="text-slate-300">All subjects covered</span><br />
                    <span className="text-slate-400">Updated Regularly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Matric Section (Classes IX-X) */}
          <div className="mb-28">
            <div className="text-center mb-14">
              <h3 className="font-serif text-3xl md:text-4xl font-normal text-slate-900">
                Matric <em className="italic text-blue-600">Section</em> (Classes IX-X)
              </h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form Container */}
              <form onSubmit={handleMatricView} className="bg-slate-50 p-10 border-l-4 border-blue-600">
                <h4 className="font-serif text-2xl text-slate-900 mb-8">Request Exam Documents</h4>

                <div className="space-y-5">
                  <div>
                    <label htmlFor="class-matric" className="block text-[11px] tracking-wider uppercase text-slate-900 font-semibold mb-2">
                      Select Class *
                    </label>
                    <select
                      id="class-matric"
                      value={matricClass}
                      onChange={(e) => setMatricClass(e.target.value)}
                      required
                      className="w-full px-4 py-3 text-sm text-slate-700 bg-white border border-blue-200 focus:outline-none focus:bg-white focus:border-blue-600 focus:border-l-4 transition-all"
                    >
                      <option value="">Choose Class</option>
                      <option value="class9">Class IX</option>
                      <option value="class10">Class X</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject-matric" className="block text-[11px] tracking-wider uppercase text-slate-900 font-semibold mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject-matric"
                      value={matricSubject}
                      onChange={(e) => setMatricSubject(e.target.value)}
                      required
                      className="w-full px-4 py-3 text-sm text-slate-700 bg-white border border-blue-200 focus:outline-none focus:bg-white focus:border-blue-600 focus:border-l-4 transition-all"
                    >
                      <option value="">Select Subject</option>
                      <option value="english">English</option>
                      <option value="urdu">Urdu</option>
                      <option value="math">Mathematics</option>
                      <option value="physics">Physics</option>
                      <option value="chemistry">Chemistry</option>
                      <option value="biology">Biology</option>
                      <option value="pakistan-studies">Pakistan Studies</option>
                      <option value="computer">Computer</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="doc-matric" className="block text-[11px] tracking-wider uppercase text-slate-900 font-semibold mb-2">
                      Document Type *
                    </label>
                    <select
                      id="doc-matric"
                      value={matricDoc}
                      onChange={(e) => setMatricDoc(e.target.value)}
                      required
                      className="w-full px-4 py-3 text-sm text-slate-700 bg-white border border-blue-200 focus:outline-none focus:bg-white focus:border-blue-600 focus:border-l-4 transition-all"
                    >
                      <option value="">Select Type</option>
                      <option value="syllabus">FBISE Syllabus</option>
                      <option value="datesheet">FBISE Datesheet</option>
                      <option value="plan">Prep Plan</option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all text-xs tracking-[0.3em] uppercase py-6 mt-3"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    View Document
                  </Button>
                </div>
              </form>

              {/* Results Box with News */}
              <div className="space-y-0">
                <div className="bg-slate-900 p-10 text-white">
                  <h4 className="flex items-center gap-3 font-serif text-2xl text-blue-300 mb-6">
                    <FileText className="h-5 w-5" />
                    Board Announcements
                  </h4>
                </div>

                {/* News Box */}
                <div className="bg-slate-950 p-10 text-white">
                  <h4 className="flex items-center gap-3 font-serif text-xl text-blue-300 mb-6">
                    <Newspaper className="h-5 w-5" />
                    FBISE Updates
                  </h4>

                  <div className="space-y-3">
                    <div className="bg-white/10 p-4 border-l-2 border-blue-400">
                      <div className="text-[10px] text-blue-300 font-semibold mb-2 tracking-wider">MARCH 3, 2026</div>
                      <p className="text-sm leading-relaxed">
                        <strong className="text-white">Datesheet Released</strong><br />
                        <span className="text-slate-300">FBISE has released official matric datesheet for 2026 examinations.</span>
                      </p>
                    </div>

                    <div className="bg-white/10 p-4 border-l-2 border-blue-400">
                      <div className="text-[10px] text-blue-300 font-semibold mb-2 tracking-wider">FEBRUARY 28, 2026</div>
                      <p className="text-sm leading-relaxed">
                        <strong className="text-white">Syllabus Update</strong><br />
                        <span className="text-slate-300">Latest FBISE syllabus now available for download from official board portal.</span>
                      </p>
                    </div>

                    <div className="bg-white/10 p-4 border-l-2 border-blue-400">
                      <div className="text-[10px] text-blue-300 font-semibold mb-2 tracking-wider">FEBRUARY 20, 2026</div>
                      <p className="text-sm leading-relaxed">
                        <strong className="text-white">Exam Center Info</strong><br />
                        <span className="text-slate-300">School designated as official FBISE examination center for 2026.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* College Section (Classes XI-XII) */}
          <div className="mb-0">
            <div className="text-center mb-14">
              <h3 className="font-serif text-3xl md:text-4xl font-normal text-slate-900">
                College <em className="italic text-blue-600">Section</em> (Classes XI-XII)
              </h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form Container */}
              <form onSubmit={handleCollegeView} className="bg-slate-50 p-10 border-l-4 border-blue-600">
                <h4 className="font-serif text-2xl text-slate-900 mb-8">Request Exam Materials</h4>

                <div className="space-y-5">
                  <div>
                    <label htmlFor="class-college" className="block text-[11px] tracking-wider uppercase text-slate-900 font-semibold mb-2">
                      Select Class *
                    </label>
                    <select
                      id="class-college"
                      value={collegeClass}
                      onChange={(e) => setCollegeClass(e.target.value)}
                      required
                      className="w-full px-4 py-3 text-sm text-slate-700 bg-white border border-blue-200 focus:outline-none focus:bg-white focus:border-blue-600 focus:border-l-4 transition-all"
                    >
                      <option value="">Choose Class</option>
                      <option value="class11">Class XI</option>
                      <option value="class12">Class XII</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="stream-college" className="block text-[11px] tracking-wider uppercase text-slate-900 font-semibold mb-2">
                      Stream *
                    </label>
                    <select
                      id="stream-college"
                      value={collegeStream}
                      onChange={(e) => setCollegeStream(e.target.value)}
                      required
                      className="w-full px-4 py-3 text-sm text-slate-700 bg-white border border-blue-200 focus:outline-none focus:bg-white focus:border-blue-600 focus:border-l-4 transition-all"
                    >
                      <option value="">Choose Stream</option>
                      <option value="pre-eng">Pre-Engineering</option>
                      <option value="pre-med">Pre-Medical</option>
                      <option value="computer-science">Computer Science</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject-college" className="block text-[11px] tracking-wider uppercase text-slate-900 font-semibold mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject-college"
                      value={collegeSubject}
                      onChange={(e) => setCollegeSubject(e.target.value)}
                      required
                      className="w-full px-4 py-3 text-sm text-slate-700 bg-white border border-blue-200 focus:outline-none focus:bg-white focus:border-blue-600 focus:border-l-4 transition-all"
                    >
                      <option value="">Select Subject</option>
                      <option value="english">English</option>
                      <option value="urdu">Urdu</option>
                      <option value="math">Mathematics</option>
                      <option value="physics">Physics</option>
                      <option value="chemistry">Chemistry</option>
                      <option value="biology">Biology</option>
                      <option value="computer">Computer</option>
                      <option value="islamiyat">Islamiyat</option>
                      <option value="pakistan-studies">Pakistan Studies</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="doc-college" className="block text-[11px] tracking-wider uppercase text-slate-900 font-semibold mb-2">
                      Document Type *
                    </label>
                    <select
                      id="doc-college"
                      value={collegeDoc}
                      onChange={(e) => setCollegeDoc(e.target.value)}
                      required
                      className="w-full px-4 py-3 text-sm text-slate-700 bg-white border border-blue-200 focus:outline-none focus:bg-white focus:border-blue-600 focus:border-l-4 transition-all"
                    >
                      <option value="">Select Type</option>
                      <option value="syllabus">Syllabus</option>
                      <option value="datesheet">Datesheet</option>
                      <option value="plan">Study Plan</option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all text-xs tracking-[0.3em] uppercase py-6 mt-3"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    View Document
                  </Button>
                </div>
              </form>

              {/* Results Box with News */}
              <div className="space-y-0">
                <div className="bg-slate-900 p-10 text-white">
                  <h4 className="flex items-center gap-3 font-serif text-2xl text-blue-300 mb-6">
                    <FileText className="h-5 w-5" />
                    College Updates
                  </h4>
                </div>

                {/* News Box */}
                <div className="bg-slate-950 p-10 text-white">
                  <h4 className="flex items-center gap-3 font-serif text-xl text-blue-300 mb-6">
                    <Bell className="h-5 w-5" />
                    Important Notices
                  </h4>

                  <div className="space-y-3">
                    <div className="bg-white/10 p-4 border-l-2 border-blue-400">
                      <div className="text-[10px] text-blue-300 font-semibold mb-2 tracking-wider">MARCH 1, 2026</div>
                      <p className="text-sm leading-relaxed">
                        <strong className="text-white">Mid-Term Schedule</strong><br />
                        <span className="text-slate-300">College mid-term examinations scheduled for April 2026. See detailed plan attached.</span>
                      </p>
                    </div>

                    <div className="bg-white/10 p-4 border-l-2 border-blue-400">
                      <div className="text-[10px] text-blue-300 font-semibold mb-2 tracking-wider">FEBRUARY 25, 2026</div>
                      <p className="text-sm leading-relaxed">
                        <strong className="text-white">Study Materials</strong><br />
                        <span className="text-slate-300">Complete syllabi and study guides now available in college portal.</span>
                      </p>
                    </div>

                    <div className="bg-white/10 p-4 border-l-2 border-blue-400">
                      <div className="text-[10px] text-blue-300 font-semibold mb-2 tracking-wider">FEBRUARY 18, 2026</div>
                      <p className="text-sm leading-relaxed">
                        <strong className="text-white">Exam Center Rules</strong><br />
                        <span className="text-slate-300">Important guidelines for college examination center released by administration.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
