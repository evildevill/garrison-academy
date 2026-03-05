"use client";

import React, { useState } from "react";
import { 
  UserCheck,
  FileEdit,
  Calendar,
  Trophy,
  Award,
  Star,
  Medal,
  LaptopIcon,
  Cpu,
  Settings,
  TrendingUp,
  Quote} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface AchievementCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  points: number;
  badgeIcon: React.ReactNode;
  backMessage: string;
  backPoints: string;
}

interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
  medal?: string;
}

const achievementCards: AchievementCard[] = [
  {
    id: "attendance",
    icon: <UserCheck className="h-10 w-10" />,
    title: "Attendance",
    points: 85,
    badgeIcon: <Award className="h-8 w-8" />,
    backMessage: "+10 Points Earned!",
    backPoints: "Keep up the good streak!",
  },
  {
    id: "assignments",
    icon: <FileEdit className="h-10 w-10" />,
    title: "Assignments",
    points: 72,
    badgeIcon: <Star className="h-8 w-8" />,
    backMessage: "Badge Unlocked!",
    backPoints: "Assignment Ace",
  },
  {
    id: "events",
    icon: <Calendar className="h-10 w-10" />,
    title: "Events",
    points: 43,
    badgeIcon: <Medal className="h-8 w-8" />,
    backMessage: "+5 Points Earned!",
    backPoints: "Great Participation!",
  },
];

const leaderboardData: LeaderboardEntry[] = [
  { rank: 1, name: "Sarah A.", points: 210, medal: "🥇" },
  { rank: 2, name: "Bilal H.", points: 182, medal: "🥈" },
  { rank: 3, name: "Maryam K.", points: 174, medal: "🥉" },
  { rank: 4, name: "Ali Khan", points: 162 },
  { rank: 5, name: "Anum R.", points: 159 },
];

const motivationQuotes = [
  "Success consists of going from failure to failure without loss of enthusiasm.",
  "The only limit to your impact is your imagination and commitment.",
  "Progress, not perfection: every step counts!",
  "You don't have to be great to start, but you have to start to be great.",
];

export default function DashboardPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"cs" | "ee" | "me">("cs");
  const [currentQuote, setCurrentQuote] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % motivationQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[46vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          <Badge className="mb-6 bg-blue-950/50 border-blue-400/50 text-blue-300 px-8 py-2 text-xs tracking-[0.4em] uppercase">
            Achievement Portal
          </Badge>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4">
            Engineering <em className="italic text-blue-300">Achievement</em> Portal
          </h1>

          <p className="text-sm md:text-base text-slate-300 tracking-wider mb-8">
            Level Up • Track Progress • Unlock Badges
          </p>

          <Button
            onClick={() => scrollToSection("dashboard")}
            className="bg-transparent border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white transition-all px-10 py-6 text-xs tracking-[0.2em] uppercase"
          >
            Enter Dashboard
          </Button>
        </div>
      </section>

      {/* Dashboard Section */}
      <section id="dashboard" className="bg-slate-50 py-20 px-6 -mt-10 relative z-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-slate-900 text-center mb-12">
            Your Gamified Dashboard
          </h2>

          {/* Achievement Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {achievementCards.map((card) => (
              <div
                key={card.id}
                className="relative h-64 cursor-pointer"
                style={{ perspective: "1000px" }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className="relative w-full h-full transition-transform duration-500"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: hoveredCard === card.id ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Front Side */}
                  <div
                    className="absolute inset-0 backface-hidden bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="text-blue-600 mb-4">{card.icon}</div>
                    <h3 className="text-xl font-semibold text-slate-900 tracking-wide mb-2">
                      {card.title}
                    </h3>
                    <div className="text-5xl font-bold text-blue-600 mb-1">
                      {card.points}
                    </div>
                    <div className="text-sm text-slate-600 uppercase tracking-wider">
                      Points
                    </div>
                    
                    {/* Badge Icon */}
                    {hoveredCard === card.id && (
                      <div className="absolute -top-4 -right-4 text-blue-600 animate-pulse">
                        {card.badgeIcon}
                      </div>
                    )}
                  </div>

                  {/* Back Side */}
                  <div
                    className="absolute inset-0 backface-hidden bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center rotate-y-180"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div className="text-blue-600 mb-4 animate-bounce">{card.badgeIcon}</div>
                    <div className="text-xl font-semibold text-slate-900 mb-2">
                      {card.backMessage}
                    </div>
                    <div className="text-lg font-medium text-blue-600">
                      {card.backPoints}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto text-center">
            <div className="text-base font-semibold text-slate-700 tracking-wider mb-3">
              Annual Progress
            </div>
            <div className="w-full h-5 bg-slate-200 rounded-full overflow-hidden shadow-inner mb-2">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                style={{ width: "70%" }}
              />
            </div>
            <div className="text-sm font-medium text-blue-600 tracking-wider">
              70% Complete
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section id="leaderboard" className="bg-white py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="flex items-center justify-center gap-3 font-serif text-4xl text-slate-900 mb-8">
            <Trophy className="h-8 w-8 text-blue-600" />
            Leaderboard
          </h2>

          <div className="bg-slate-50 rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-800 text-blue-300">
                  <th className="py-3 px-4 text-xs font-bold tracking-[0.2em] uppercase text-left">
                    Rank
                  </th>
                  <th className="py-3 px-4 text-xs font-bold tracking-[0.2em] uppercase text-left">
                    Name
                  </th>
                  <th className="py-3 px-4 text-xs font-bold tracking-[0.2em] uppercase text-right">
                    Points
                  </th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((entry) => (
                  <tr
                    key={entry.rank}
                    className={`transition-all hover:bg-blue-50 ${
                      entry.rank === 1
                        ? "bg-yellow-100 font-bold"
                        : entry.rank === 2
                        ? "bg-slate-200 font-semibold"
                        : entry.rank === 3
                        ? "bg-orange-200 font-semibold text-white"
                        : "bg-white"
                    }`}
                  >
                    <td className="py-3 px-4 text-sm border-b border-slate-200">
                      {entry.medal ? `${entry.medal} ${entry.rank}` : entry.rank}
                    </td>
                    <td className="py-3 px-4 text-sm border-b border-slate-200">
                      {entry.name}
                    </td>
                    <td className="py-3 px-4 text-sm border-b border-slate-200 text-right">
                      {entry.points}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Career Roadmap Section */}
      <section id="roadmap" className="bg-slate-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="flex items-center justify-center gap-3 font-serif text-4xl text-slate-900 mb-8">
            <TrendingUp className="h-8 w-8 text-blue-600" />
            Career Roadmap
          </h2>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveTab("cs")}
              className={`flex items-center gap-2 px-8 py-3 rounded-t-xl font-bold tracking-wide transition-all ${
                activeTab === "cs"
                  ? "bg-blue-100 text-slate-900 border-2 border-blue-600 border-b-0"
                  : "bg-white text-slate-600 hover:bg-blue-50"
              }`}
            >
              <LaptopIcon className="h-5 w-5" />
              Computer Science
            </button>
            <button
              onClick={() => setActiveTab("ee")}
              className={`flex items-center gap-2 px-8 py-3 rounded-t-xl font-bold tracking-wide transition-all ${
                activeTab === "ee"
                  ? "bg-blue-100 text-slate-900 border-2 border-blue-600 border-b-0"
                  : "bg-white text-slate-600 hover:bg-blue-50"
              }`}
            >
              <Cpu className="h-5 w-5" />
              Electrical
            </button>
            <button
              onClick={() => setActiveTab("me")}
              className={`flex items-center gap-2 px-8 py-3 rounded-t-xl font-bold tracking-wide transition-all ${
                activeTab === "me"
                  ? "bg-blue-100 text-slate-900 border-2 border-blue-600 border-b-0"
                  : "bg-white text-slate-600 hover:bg-blue-50"
              }`}
            >
              <Settings className="h-5 w-5" />
              Mechanical
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-b-xl rounded-tr-xl shadow-lg p-8">
            {activeTab === "cs" && (
              <div>
                <ul className="space-y-3 text-base text-slate-700 leading-relaxed mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">→</span>
                    <span><strong className="text-blue-600">F.Sc/ICS</strong> (Math, Physics, Computer)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">→</span>
                    <span><strong className="text-blue-600">BS in CS/SE/IT</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">→</span>
                    <span><strong className="text-blue-600">Internships</strong> (Coding Bootcamps, Hackathons)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">→</span>
                    <span><strong className="text-blue-600">Specialize</strong> in Web, AI, Data, Mobile, Cloud</span>
                  </li>
                </ul>
                <p className="text-sm text-blue-600 font-medium">
                  Path: School → College → University → Job
                </p>
              </div>
            )}

            {activeTab === "ee" && (
              <div>
                <ul className="space-y-3 text-base text-slate-700 leading-relaxed mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">→</span>
                    <span><strong className="text-blue-600">F.Sc Pre-Engineering</strong> (Math, Physics, Chemistry)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">→</span>
                    <span><strong className="text-blue-600">Bachelors</strong>: BSc/B.E/B.Tech in EE, Electronics, Telecomm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">→</span>
                    <span><strong className="text-blue-600">Industrial training + Labs</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">→</span>
                    <span><strong className="text-blue-600">Join</strong> Power, Telecom, Electronics, Automation sectors</span>
                  </li>
                </ul>
                <p className="text-sm text-blue-600 font-medium">
                  Path: School → College → Uni → Industry
                </p>
              </div>
            )}

            {activeTab === "me" && (
              <div>
                <ul className="space-y-3 text-base text-slate-700 leading-relaxed mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">→</span>
                    <span><strong className="text-blue-600">F.Sc Pre-Engineering</strong> (Math, Physics, Chemistry)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">→</span>
                    <span><strong className="text-blue-600">Bachelors</strong> in Mechanical / Mechatronics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">→</span>
                    <span><strong className="text-blue-600">Hands on Experience</strong>: CAD, Robotics, Manufacturing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">→</span>
                    <span>Jobs: <strong className="text-blue-600">Automotive, Energy, Manufacturing, Aviation</strong></span>
                  </li>
                </ul>
                <p className="text-sm text-blue-600 font-medium">
                  Path: School → College → University → Industry
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Motivation Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-16 px-6">
        <div className="max-w-2xl mx-auto text-center text-white">
          <Quote className="h-8 w-8 text-blue-300 mx-auto mb-6" />
          <div className="relative min-h-[100px] flex items-center justify-center">
            <p className="text-2xl md:text-3xl font-semibold italic leading-relaxed transition-opacity duration-500">
              &quot;{motivationQuotes[currentQuote]}&quot;
            </p>
          </div>
          <p className="text-sm text-blue-300 mt-6 font-serif tracking-wider">
            — Engineering Portal
          </p>
        </div>
      </section>
    </div>
  );
}
