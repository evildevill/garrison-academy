"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Star,
  ChevronDown,
  FileText,
  Paperclip,
  PenLine,
  MessageCircle,
  CheckCircle2,
  Baby,
  GraduationCap,
  Building2,
  Shield,
  Info,
  IdCard,
  FileCheck,
  School,
  Camera,
  Heart,
  MapPin,
  Medal,
  Phone,
  Mail,
  Clock,
  Upload,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function AdmissionPage() {
  const [selectedSection, setSelectedSection] = useState("")
  const [selectedClass, setSelectedClass] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)

  // Class mapping for dynamic dropdown
  const classMap: Record<string, { classes: string[]; streams: string[] }> = {
    preschool: { classes: ["Playground (PG)", "Kindergarten (KG)", "Prep"], streams: [] },
    junior: { classes: ["Class 1", "Class 2", "Class 3"], streams: [] },
    middle: { classes: ["Class 4", "Class 5", "Class 6", "Class 7", "Class 8"], streams: [] },
    senior: {
      classes: ["Class 9", "Class 10"],
      streams: ["Computer Science", "Biology (Pre-Medical)"],
    },
    college: {
      classes: ["Class 11 (F.Sc Year 1)", "Class 12 (F.Sc Year 2)"],
      streams: ["Pre-Medical (Biology)", "Computer Science", "Pre-Engineering"],
    },
  }

  const handleSectionChange = (value: string) => {
    setSelectedSection(value)
    setSelectedClass("")
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowSuccess(true)
    // Scroll to success banner
    window.scrollTo({ top: 0, behavior: "smooth" })
    // Reset form
    e.currentTarget.reset()
    setSelectedSection("")
    setSelectedClass("")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] overflow-hidden bg-slate-900">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPtDYzoi2LpsaB0MOYzoqWr3SQLZUM8NezA&s"
            alt="GAK Admissions"
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
        <div className="relative z-10 flex min-h-[75vh] items-center justify-center px-4 text-center">
          <div className="mx-auto max-w-4xl">
            <Badge className="mb-6 border-blue-400/40 bg-blue-500/10 text-blue-300">
              <Star className="h-3 w-3" />
              Admissions 2026 · Kharian Cantt · APSACS
            </Badge>

            <h1 className="mb-4 font-serif text-5xl font-light text-white md:text-7xl">
              Begin Your
              <br />
              <span className="italic text-blue-300">Journey Here</span>
            </h1>

            <div className="mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>

            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Applications Now Open · All Sections · Session 2026
            </p>
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-slate-500 animate-bounce">
          <ChevronDown className="h-5 w-5" />
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        </div>
      </section>

      {/* Admission Process Section */}
      <section className="bg-slate-900 py-20 px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-300">
              How to Apply
            </span>
            <h2 className="font-serif text-4xl font-normal text-white md:text-5xl">
              Admission <span className="italic text-blue-300">Process</span>
            </h2>
            <div className="mx-auto mt-6 h-0.5 w-12 bg-blue-400"></div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-blue-500/20 md:grid-cols-5">
            {[
              {
                num: "01",
                icon: <FileText className="h-6 w-6" />,
                title: "Fill Application",
                description: "Complete the online form below with accurate student and parent details.",
              },
              {
                num: "02",
                icon: <Paperclip className="h-6 w-6" />,
                title: "Submit Documents",
                description: "Upload or bring required documents to the campus administration office.",
              },
              {
                num: "03",
                icon: <PenLine className="h-6 w-6" />,
                title: "Entrance Test",
                description: "Appear for the written entrance assessment on the scheduled date.",
              },
              {
                num: "04",
                icon: <MessageCircle className="h-6 w-6" />,
                title: "Interview",
                description: "Selected candidates and parents attend a short interview with the Principal.",
              },
              {
                num: "05",
                icon: <CheckCircle2 className="h-6 w-6" />,
                title: "Confirmation",
                description: "Receive offer letter and complete fee deposit to confirm enrolment.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-900 p-9 text-center transition-all hover:bg-slate-800"
              >
                <div className="mb-3 font-serif text-5xl font-light text-blue-500/20">{step.num}</div>
                <div className="mb-4 flex justify-center text-blue-400">{step.icon}</div>
                <h4 className="mb-2 font-serif text-lg font-normal text-white">{step.title}</h4>
                <p className="text-xs leading-relaxed text-slate-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria Section */}
      <section className="bg-slate-50 py-20 px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600">
              Who Can Apply
            </span>
            <h2 className="font-serif text-4xl font-normal text-slate-900 md:text-5xl">
              Eligibility <span className="italic text-blue-700">Criteria</span>
            </h2>
            <div className="mx-auto mt-6 h-0.5 w-12 bg-blue-600"></div>
          </div>

          <div className="grid gap-px bg-slate-300 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Baby className="h-5 w-5" />,
                level: "Pre-School",
                classes: "PG · KG · Prep",
                requirements: [
                  "PG: Minimum age 3 years as of 1st January of the session year.",
                  "KG: Minimum age 4 years; successful completion of PG or equivalent.",
                  "Prep: Minimum age 5 years; completion of KG or equivalent level.",
                  "No formal academic test; simple verbal interaction and basic activity assessment.",
                  "Original Birth Certificate (B-Form) mandatory.",
                  "Child must be fully toilet-trained for PG admission.",
                ],
              },
              {
                icon: <Star className="h-5 w-5" />,
                level: "Junior & Middle",
                classes: "Classes 1 – 8",
                requirements: [
                  "Class 1: Age 6+ years; successful completion of Prep or equivalent.",
                  "Classes 2–8: Promotion certificate or result card from previous class required.",
                  "Minimum 50% marks in previous annual examination.",
                  "Written entrance test in English, Urdu, and Mathematics.",
                  "Transfer Certificate (TC) from previous school is mandatory.",
                  "Applicants previously enrolled in a recognised APSACS school given preference.",
                ],
              },
              {
                icon: <GraduationCap className="h-5 w-5" />,
                level: "Senior",
                classes: "Classes 9 & 10",
                requirements: [
                  "Must have passed Class 8 with minimum 55% marks from a recognised board or school.",
                  "Transfer Certificate and detailed marks sheet required.",
                  "Entrance test covering English, Mathematics, and General Science.",
                  "Stream allocation (Computer / Biology) based on test merit and seat availability.",
                  "Character certificate from previous institution required.",
                  "Domicile or residential proof in Kharian / Cantonment area preferred.",
                ],
              },
              {
                icon: <Building2 className="h-5 w-5" />,
                level: "College",
                classes: "Classes 11 & 12 (F.Sc)",
                requirements: [
                  "Minimum 60% aggregate in Matriculation (SSC) from a recognised Board.",
                  "Minimum 55% in Science subjects for Pre-Medical and Pre-Engineering streams.",
                  "Minimum 50% for Computer Science stream.",
                  "Official Matric result card / DMC is mandatory at time of application.",
                  "Entrance test and interview for stream finalisation.",
                  "Character certificate and TC from last attended institution required.",
                ],
              },
              {
                icon: <Shield className="h-5 w-5" />,
                level: "Defence Priority",
                classes: "All Sections",
                requirements: [
                  "Children of serving Armed Forces personnel given first priority in all sections.",
                  "Children of retired Armed Forces personnel considered in second priority category.",
                  "Service Book / PPO or retirement certificate required as proof.",
                  "Relaxation of up to 5% in minimum marks criteria applicable for this category.",
                  "Reserved seats available in each section for defence families.",
                ],
              },
              {
                icon: <Info className="h-5 w-5" />,
                level: "General Rules",
                classes: "All Applicants",
                requirements: [
                  "All admissions are subject to seat availability in the respective section.",
                  "GAK reserves the right to reject any application without providing reasons.",
                  "Submission of false documents will result in immediate cancellation.",
                  "Incomplete applications will not be processed.",
                  "Final decision on stream allocation rests with the Principal.",
                  "Fee once deposited is non-refundable except in exceptional circumstances.",
                ],
              },
            ].map((category, idx) => (
              <div
                key={idx}
                className="group bg-white p-12 transition-transform hover:-translate-y-1"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-px w-4 bg-blue-600"></div>
                  <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-blue-600">
                    {category.icon}
                    {category.level}
                  </div>
                </div>

                <h3 className="mb-1 font-serif text-2xl font-normal text-slate-900">
                  {category.level}
                </h3>
                <p className="mb-6 text-xs uppercase tracking-wider text-slate-600">
                  {category.classes}
                </p>

                <ul className="space-y-3">
                  {category.requirements.map((req, ridx) => (
                    <li key={ridx} className="flex items-start gap-3 text-xs text-slate-600">
                      <span className="mt-1 text-[6px] text-blue-600">◆</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="relative overflow-hidden bg-slate-900 py-20 px-4 md:px-6">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[280px] font-normal leading-none text-white/[0.015] pointer-events-none">
          GAK
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-300">
              What to Bring
            </span>
            <h2 className="font-serif text-4xl font-normal text-white md:text-5xl">
              Required <span className="italic text-blue-300">Documents</span>
            </h2>
            <div className="mx-auto mt-6 h-0.5 w-12 bg-blue-400"></div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-blue-500/20 md:grid-cols-4">
            {[
              {
                icon: <IdCard className="h-6 w-6" />,
                title: "B-Form / CNIC",
                description: "Child's original B-Form. CNIC copies of both parents. NADRA-verified documents only.",
                required: "Mandatory",
              },
              {
                icon: <FileCheck className="h-6 w-6" />,
                title: "Academic Records",
                description:
                  "Previous class result card, detailed marks sheet (DMC) or promotion certificate from last attended school.",
                required: "Mandatory",
              },
              {
                icon: <School className="h-6 w-6" />,
                title: "Transfer Certificate",
                description:
                  "Original TC from the last attended institution, signed and stamped by the Head of Institution.",
                required: "Mandatory",
              },
              {
                icon: <Camera className="h-6 w-6" />,
                title: "Passport Photos",
                description:
                  "Four recent passport-size photographs of the student on white background, taken within 3 months.",
                required: "Mandatory",
              },
              {
                icon: <Heart className="h-6 w-6" />,
                title: "Medical Certificate",
                description:
                  "Fitness certificate from a registered medical practitioner. Vaccination record for Pre-School applicants.",
                required: "Mandatory",
              },
              {
                icon: <MapPin className="h-6 w-6" />,
                title: "Domicile / Residence",
                description:
                  "Utility bill or any official document confirming residential address within the applicable catchment area.",
                required: "Required",
              },
              {
                icon: <Medal className="h-6 w-6" />,
                title: "Character Certificate",
                description:
                  "Issued by the last attended school. Required for Classes 4 and above. Must be within one academic year.",
                required: "Classes 4+",
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Defence Documents",
                description:
                  "Service Book, PPO, or retirement certificate for Armed Forces families applying under priority category.",
                required: "If Applicable",
              },
            ].map((doc, idx) => (
              <div
                key={idx}
                className="bg-slate-900 p-9 text-center transition-all hover:bg-slate-800"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center border border-blue-500/30 text-blue-400">
                  {doc.icon}
                </div>
                <h4 className="mb-3 font-serif text-lg font-normal text-white">{doc.title}</h4>
                <p className="mb-4 text-xs leading-relaxed text-slate-400">{doc.description}</p>
                <div className="inline-block border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-[9px] uppercase tracking-wider text-blue-400">
                  {doc.required}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="bg-white py-20 px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600">
              Session 2026
            </span>
            <h2 className="font-serif text-4xl font-normal text-slate-900 md:text-5xl">
              Application <span className="italic text-blue-700">Form</span>
            </h2>
            <div className="mx-auto mt-6 h-0.5 w-12 bg-blue-600"></div>
          </div>

          <div className="grid gap-12 lg:grid-cols-[340px_1fr]">
            {/* Sidebar */}
            <aside className="space-y-5 lg:sticky lg:top-8 lg:self-start">
              <div className="border-l-4 border-blue-600 bg-slate-900 p-11">
                <h4 className="mb-5 font-serif text-2xl font-normal text-blue-300">
                  Admission Office
                </h4>
                <div className="space-y-5">
                  {[
                    {
                      icon: <Clock className="h-4 w-4" />,
                      label: "Application Deadline",
                      value: "30th March 2026",
                    },
                    {
                      icon: <Clock className="h-4 w-4" />,
                      label: "Office Hours",
                      value: "Mon – Sat · 8:00 AM to 2:00 PM",
                    },
                    {
                      icon: <Phone className="h-4 w-4" />,
                      label: "Contact Number",
                      value: "+92-53-XXXXXXX",
                    },
                    {
                      icon: <Mail className="h-4 w-4" />,
                      label: "Email",
                      value: "admissions@gak.edu.pk",
                    },
                    {
                      icon: <MapPin className="h-4 w-4" />,
                      label: "Address",
                      value: "Garrison Academy Kharian, Cantonment, Punjab, Pakistan",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0"
                    >
                      <div className="mt-0.5 shrink-0 text-blue-400">{item.icon}</div>
                      <div>
                        <div className="mb-1 text-[9px] uppercase tracking-wider text-slate-500">
                          {item.label}
                        </div>
                        <p className="text-sm text-slate-300">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-blue-200 bg-blue-50 p-6">
                <p className="text-xs leading-relaxed text-slate-600">
                  <strong className="font-semibold text-slate-900">Please Note:</strong> Submission
                  of this form does not guarantee admission. All applications are reviewed subject to
                  seat availability, entrance test results, and eligibility verification.
                </p>
              </div>
            </aside>

            {/* Form */}
            <div>
              {/* Success Banner */}
              {showSuccess && (
                <div className="mb-8 flex items-center gap-4 border-l-4 border-blue-600 bg-blue-50 p-6">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-blue-600" />
                  <div>
                    <h4 className="mb-1 font-serif text-xl font-normal text-slate-900">
                      Application Submitted Successfully
                    </h4>
                    <p className="text-sm text-slate-600">
                      Our admissions team will contact you within 3–5 working days. Please retain
                      your application reference number.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-12">
                {/* Section 1: Applying For */}
                <div className="border-b border-slate-200 pb-12">
                  <div className="mb-8 flex items-center gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-slate-900 font-bold text-blue-300">
                      1
                    </div>
                    <h3 className="font-serif text-2xl font-normal text-slate-900">Applying For</h3>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-[9px] font-bold uppercase tracking-widest text-slate-900">
                        Section <span className="text-blue-600">*</span>
                      </label>
                      <select
                        required
                        value={selectedSection}
                        onChange={(e) => handleSectionChange(e.target.value)}
                        className="w-full appearance-none border border-blue-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-blue-600 focus:bg-white"
                      >
                        <option value="">Select Section</option>
                        <option value="preschool">Pre-School (PG / KG / Prep)</option>
                        <option value="junior">Junior Section (Class 1 – 3)</option>
                        <option value="middle">Middle Section (Class 4 – 8)</option>
                        <option value="senior">Senior Section (Class 9 – 10)</option>
                        <option value="college">College Section (Class 11 – 12)</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] font-bold uppercase tracking-widest text-slate-900">
                        Class / Level <span className="text-blue-600">*</span>
                      </label>
                      <select
                        required
                        value={selectedClass}
                        onChange={(e) => setSelectedClass(e.target.value)}
                        className="w-full appearance-none border border-blue-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-blue-600 focus:bg-white"
                      >
                        <option value="">
                          {selectedSection ? "Select Class / Level" : "Select Section First"}
                        </option>
                        {selectedSection &&
                          classMap[selectedSection]?.classes.map((cls) => (
                            <option key={cls} value={cls}>
                              {cls}
                            </option>
                          ))}
                      </select>
                    </div>

                    {selectedSection && classMap[selectedSection]?.streams.length > 0 && (
                      <>
                        <div className="space-y-2">
                          <label className="text-[9px] font-bold uppercase tracking-widest text-slate-900">
                            Preferred Stream <span className="text-blue-600">*</span>
                          </label>
                          <select
                            required
                            className="w-full appearance-none border border-blue-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-blue-600 focus:bg-white"
                          >
                            <option value="">Select Stream</option>
                            {classMap[selectedSection].streams.map((stream) => (
                              <option key={stream} value={stream}>
                                {stream}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[9px] font-bold uppercase tracking-widest text-slate-900">
                            Campus Preference <span className="text-blue-600">*</span>
                          </label>
                          <select
                            required
                            className="w-full appearance-none border border-blue-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-blue-600 focus:bg-white"
                          >
                            <option value="">Select Campus</option>
                            <option value="boys">Boys Campus</option>
                            <option value="girls">Girls Campus</option>
                          </select>
                        </div>
                      </>
                    )}

                    <div className="space-y-2">
                      <label className="text-[9px] font-bold uppercase tracking-widest text-slate-900">
                        Session Year <span className="text-blue-600">*</span>
                      </label>
                      <select
                        required
                        defaultValue="2026"
                        className="w-full appearance-none border border-blue-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-blue-600 focus:bg-white"
                      >
                        <option value="2026">2026 – 2027</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] font-bold uppercase tracking-widest text-slate-900">
                        Application Category <span className="text-blue-600">*</span>
                      </label>
                      <select
                        required
                        className="w-full appearance-none border border-blue-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-blue-600 focus:bg-white"
                      >
                        <option value="">Select Category</option>
                        <option value="fresh">Fresh Admission</option>
                        <option value="transfer">Transfer from Another School</option>
                        <option value="defence">Defence Family Priority</option>
                        <option value="sibling">Sibling of Current Student</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 2: Student Information */}
                <div className="border-b border-slate-200 pb-12">
                  <div className="mb-8 flex items-center gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-slate-900 font-bold text-blue-300">
                      2
                    </div>
                    <h3 className="font-serif text-2xl font-normal text-slate-900">
                      Student Information
                    </h3>
                  </div>

                  <div className="space-y-5">
                    <div className="grid gap-5 md:grid-cols-3">
                      <div className="space-y-2">
                        <label className="text-[9px] font-bold uppercase tracking-widest text-slate-900">
                          First Name <span className="text-blue-600">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ahmad"
                          className="w-full border border-blue-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-blue-600 focus:bg-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-bold uppercase tracking-widest text-slate-900">
                          Middle Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Ali"
                          className="w-full border border-blue-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-blue-600 focus:bg-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-bold uppercase tracking-widest text-slate-900">
                          Last Name / Surname <span className="text-blue-600">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Khan"
                          className="w-full border border-blue-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-blue-600 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-3">
                      <div className="space-y-2">
                        <label className="text-[9px] font-bold uppercase tracking-widest text-slate-900">
                          Date of Birth <span className="text-blue-600">*</span>
                        </label>
                        <input
                          type="date"
                          required
                          className="w-full border border-blue-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-blue-600 focus:bg-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-bold uppercase tracking-widest text-slate-900">
                          Gender <span className="text-blue-600">*</span>
                        </label>
                        <select
                          required
                          className="w-full appearance-none border border-blue-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-blue-600 focus:bg-white"
                        >
                          <option value="">Select</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-bold uppercase tracking-widest text-slate-900">
                          Nationality <span className="text-blue-600">*</span>
                        </label>
                        <select
                          required
                          defaultValue="pakistani"
                          className="w-full appearance-none border border-blue-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-blue-600 focus:bg-white"
                        >
                          <option value="pakistani">Pakistani</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-[9px] font-bold uppercase tracking-widest text-slate-900">
                          B-Form / CNIC No. <span className="text-blue-600">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="XXXXX-XXXXXXX-X"
                          className="w-full border border-blue-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-blue-600 focus:bg-white"
                        />
                        <p className="text-xs text-slate-500">
                          13-digit National Identity number with dashes
                        </p>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-bold uppercase tracking-widest text-slate-900">
                          Religion <span className="text-blue-600">*</span>
                        </label>
                        <select
                          required
                          className="w-full appearance-none border border-blue-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-blue-600 focus:bg-white"
                        >
                          <option value="">Select</option>
                          <option value="islam">Islam</option>
                          <option value="christianity">Christianity</option>
                          <option value="hinduism">Hinduism</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-[9px] font-bold uppercase tracking-widest text-slate-900">
                          Previous School / Institution
                        </label>
                        <input
                          type="text"
                          placeholder="Name of last attended school"
                          className="w-full border border-blue-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-blue-600 focus:bg-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-bold uppercase tracking-widest text-slate-900">
                          Last Class Attended
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Class 5 / Prep / KG"
                          className="w-full border border-blue-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-blue-600 focus:bg-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3: Parent/Guardian Information */}
                <div className="border-b border-slate-200 pb-12">
                  <div className="mb-8 flex items-center gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-slate-900 font-bold text-blue-300">
                      3
                    </div>
                    <h3 className="font-serif text-2xl font-normal text-slate-900">
                      Parent / Guardian Information
                    </h3>
                  </div>

                  <div className="space-y-5">
                    <div className="grid gap-5 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-[9px] font-bold uppercase tracking-widest text-slate-900">
                          Fathers Full Name <span className="text-blue-600">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Full name as on CNIC"
                          className="w-full border border-blue-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-blue-600 focus:bg-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-bold uppercase tracking-widest text-slate-900">
                          Fathers CNIC No. <span className="text-blue-600">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="XXXXX-XXXXXXX-X"
                          className="w-full border border-blue-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-blue-600 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-[9px] font-bold uppercase tracking-widest text-slate-900">
                          Primary Contact Number <span className="text-blue-600">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+92 3XX XXXXXXX"
                          className="w-full border border-blue-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-blue-600 focus:bg-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-bold uppercase tracking-widest text-slate-900">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="parent@email.com"
                          className="w-full border border-blue-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-blue-600 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] font-bold uppercase tracking-widest text-slate-900">
                        Residential Address <span className="text-blue-600">*</span>
                      </label>
                      <textarea
                        required
                        placeholder="House No., Street, Mohalla / Sector, City, District"
                        rows={3}
                        className="w-full resize-y border border-blue-200 bg-slate-50 px-4 py-3 text-sm leading-relaxed text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-blue-600 focus:bg-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 4: Document Uploads */}
                <div className="border-b border-slate-200 pb-12">
                  <div className="mb-8 flex items-center gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-slate-900 font-bold text-blue-300">
                      4
                    </div>
                    <h3 className="font-serif text-2xl font-normal text-slate-900">
                      Document Uploads
                    </h3>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    {[
                      {
                        label: "Student's B-Form (Scan / Photo)",
                        required: true,
                        hint: "PDF, JPG, PNG · Max 5MB",
                      },
                      {
                        label: "Father's CNIC (Both Sides)",
                        required: true,
                        hint: "PDF, JPG, PNG · Max 5MB",
                      },
                      {
                        label: "Last Academic Result / DMC",
                        required: true,
                        hint: "PDF, JPG, PNG · Max 5MB",
                      },
                      {
                        label: "Student Passport Photo",
                        required: true,
                        hint: "Recent passport-size photo (white background)",
                      },
                    ].map((doc, idx) => (
                      <div key={idx} className="space-y-2">
                        <label className="text-[9px] font-bold uppercase tracking-widest text-slate-900">
                          {doc.label} {doc.required && <span className="text-blue-600">*</span>}
                        </label>
                        <label className="flex cursor-pointer flex-col items-center justify-center border border-dashed border-blue-300 bg-slate-50 p-7 text-center transition-all hover:border-blue-600 hover:bg-blue-50">
                          <input
                            type="file"
                            className="hidden"
                            accept=".pdf,.jpg,.jpeg,.png"
                            required={doc.required}
                          />
                          <Upload className="mb-2 h-7 w-7 text-blue-400 opacity-50" />
                          <p className="mb-1 text-xs text-slate-600">Click to upload or drag & drop</p>
                          <span className="text-[10px] uppercase tracking-wider text-blue-600">
                            {doc.hint}
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 5: Declaration */}
                <div>
                  <div className="mb-8 flex items-center gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-slate-900 font-bold text-blue-300">
                      5
                    </div>
                    <h3 className="font-serif text-2xl font-normal text-slate-900">Declaration</h3>
                  </div>

                  <div className="mb-8 border border-blue-200 bg-blue-50/50 p-8">
                    <p className="text-xs leading-relaxed text-slate-600">
                      I, the undersigned parent/guardian, hereby declare that all information provided
                      in this application form is{" "}
                      <strong className="font-semibold text-slate-900">
                        true, accurate, and complete
                      </strong>{" "}
                      to the best of my knowledge. I understand that submission of false, misleading,
                      or incomplete information will result in the{" "}
                      <strong className="font-semibold text-slate-900">
                        immediate cancellation of admission
                      </strong>{" "}
                      without refund. I agree to abide by all rules, regulations, and the code of
                      conduct of{" "}
                      <strong className="font-semibold text-slate-900">
                        Garrison Academy Kharian Cantonment (GAK)
                      </strong>{" "}
                      and APSACS, and confirm that the student will adhere to all academic and
                      disciplinary standards set by the institution.
                    </p>
                  </div>

                  <label className="mb-8 flex cursor-pointer items-start gap-4">
                    <input type="checkbox" required className="mt-1 h-5 w-5 shrink-0 accent-blue-600" />
                    <span className="text-xs leading-relaxed text-slate-600">
                      I have read, understood, and agree to the above declaration. I confirm all
                      information and documents submitted are genuine.{" "}
                      <span className="text-blue-600">*</span>
                    </span>
                  </label>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-[9px] font-bold uppercase tracking-widest text-slate-900">
                        Parent / Guardian Full Name <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Sign with full name"
                        className="w-full border border-blue-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-blue-600 focus:bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-bold uppercase tracking-widest text-slate-900">
                        Date of Submission <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        className="w-full border border-blue-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-blue-600 focus:bg-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex flex-wrap items-center justify-between gap-6 pt-8">
                  <p className="max-w-xs text-xs text-slate-500">
                    All fields marked with <span className="text-blue-600">◆</span> are mandatory.
                    Incomplete forms will not be processed. You will receive a confirmation email upon
                    successful submission.
                  </p>
                  <Button
                    type="submit"
                    size="lg"
                    className="border-2 border-blue-600 bg-transparent text-blue-600 hover:bg-blue-600 hover:text-white"
                  >
                    Submit Application
                    <CheckCircle2 className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Footer */}
      <section className="relative overflow-hidden bg-slate-900 py-20 px-4 text-center md:px-6">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 blur-3xl"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl">
          <span className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-300">
            We Are Here to Help
          </span>
          <h2 className="mb-6 font-serif text-4xl font-normal text-white md:text-5xl">
            Have <span className="italic text-blue-300">Questions?</span>
          </h2>
          <p className="mb-12 text-sm uppercase tracking-wider text-slate-400">
            Our admissions team is available to guide you through every step
          </p>

          <div className="grid gap-px bg-blue-500/20 md:grid-cols-3">
            {[
              { icon: <Phone className="h-5 w-5" />, label: "Call Us", value: "+92-53-XXXXXXX" },
              { icon: <Mail className="h-5 w-5" />, label: "Email Us", value: "admissions@gak.edu.pk" },
              { icon: <Clock className="h-5 w-5" />, label: "Office Hours", value: "Mon – Sat · 8AM – 2PM" },
            ].map((contact, idx) => (
              <div key={idx} className="bg-slate-900 p-8 text-center">
                <div className="mb-3 flex justify-center text-blue-400">{contact.icon}</div>
                <div className="mb-2 text-[9px] uppercase tracking-widest text-slate-500">
                  {contact.label}
                </div>
                <p className="text-sm text-slate-300">{contact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
