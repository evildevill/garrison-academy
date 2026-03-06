"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { 
  User,
  IdCard,
  Shield,
  LogIn,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  Lock,
  Star
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PortalSession {
  user: {
    fullName: string;
    bForm: string;
    role: string;
  };
  loginTime: number;
}

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    bForm: "",
    role: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ message: "", type: "" });
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [currentSession, setCurrentSession] = useState<PortalSession | null>(() => {
    // Initialize from localStorage
    if (typeof window !== "undefined") {
      const session = localStorage.getItem("portal-session");
      if (session) {
        return JSON.parse(session);
      }
    }
    return null;
  });

  // Update showUserInfo when currentSession changes
  useEffect(() => {
    setShowUserInfo(currentSession !== null);
  }, [currentSession]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear feedback when user types
    if (feedback.message) {
      setFeedback({ message: "", type: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback({ message: "Verifying credentials...", type: "info" });

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Validate fields
    const fullName = formData.fullName.trim();
    const rawBForm = formData.bForm;
    const role = formData.role.toLowerCase();

    if (!fullName || !rawBForm || !role) {
      setFeedback({ message: "All fields are required.", type: "error" });
      setIsSubmitting(false);
      return;
    }

    // Clean B-Form (Remove dashes/spaces)
    const bForm = rawBForm.replace(/\D/g, "");

    if (bForm.length < 13) {
      setFeedback({ message: "B-Form number must be 13 digits.", type: "error" });
      setIsSubmitting(false);
      return;
    }

    // Create session object
    const session: PortalSession = {
      user: {
        fullName,
        bForm,
        role
      },
      loginTime: new Date().getTime()
    };

    // Save to localStorage
    localStorage.setItem("portal-session", JSON.stringify(session));
    
    setFeedback({ message: `Welcome, ${fullName}! Login successful.`, type: "success" });
    setCurrentSession(session);
    setShowUserInfo(true);
    setIsSubmitting(false);

    // Redirect based on role after 2 seconds
    setTimeout(() => {
      if (role === "student" || role === "teacher" || role === "admin" || role === "other") {
        router.push("/dashboard");
      }
    }, 2000);
  };

  const handleLogout = () => {
    localStorage.removeItem("portal-session");
    setCurrentSession(null);
    setShowUserInfo(false);
    setFormData({ fullName: "", bForm: "", role: "" });
    setFeedback({ message: "Logged out successfully.", type: "info" });
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "student":
        return <User className="h-5 w-5" />;
      case "teacher":
        return <IdCard className="h-5 w-5" />;
      case "admin":
        return <Shield className="h-5 w-5" />;
      default:
        return <User className="h-5 w-5" />;
    }
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case "student":
        return "bg-blue-100 text-blue-700 border-blue-300";
      case "teacher":
        return "bg-green-100 text-green-700 border-green-300";
      case "admin":
        return "bg-purple-100 text-purple-700 border-purple-300";
      default:
        return "bg-slate-100 text-slate-700 border-slate-300";
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-900 via-blue-950 to-slate-900">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPtDYzoi2LpsaB0MOYzoqWr3SQLZUM8NezA&s"
            alt="Login Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-900/95 via-blue-950/90 to-slate-900/95" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 text-center">
          <Badge variant="outline" className="mb-4 border-blue-400/50 text-blue-300 bg-blue-950/30">
            <Star className="h-3 w-3 mr-2 fill-blue-400 text-blue-400" />
            Secure Portal Access
          </Badge>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-white mb-3">
            Portal <em className="italic text-blue-300">Login</em>
          </h1>

          <div className="w-16 h-px bg-linear-to-r from-transparent via-blue-400 to-transparent mx-auto my-6" />

          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-slate-400 font-light">
            Access Your Dashboard
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-blue-300 animate-bounce">
          <ChevronDown className="h-5 w-5" />
        </div>
      </section>

      {/* Login Content */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-2xl mx-auto">
          {/* User Info Display (if logged in) */}
          {showUserInfo && currentSession ? (
            <div className="bg-slate-50 border-l-4 border-blue-600 p-8 mb-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    {getRoleIcon(currentSession.user.role)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg">Currently Logged In</h3>
                    <p className="text-xs text-slate-600">
                      {new Date(currentSession.loginTime).toLocaleString()}
                    </p>
                  </div>
                </div>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  size="sm"
                  className="border-red-300 text-red-600 hover:bg-red-50"
                >
                  Logout
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-slate-200">
                  <span className="text-xs tracking-wider uppercase text-slate-600 font-semibold">
                    Full Name
                  </span>
                  <span className="text-sm text-slate-900 font-medium">
                    {currentSession.user.fullName}
                  </span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-slate-200">
                  <span className="text-xs tracking-wider uppercase text-slate-600 font-semibold">
                    B-Form Number
                  </span>
                  <span className="text-sm text-slate-900 font-mono">
                    {currentSession.user.bForm}
                  </span>
                </div>

                <div className="flex items-center justify-between py-3">
                  <span className="text-xs tracking-wider uppercase text-slate-600 font-semibold">
                    Role
                  </span>
                  <Badge className={`${getRoleBadgeColor(currentSession.user.role)} border`}>
                    {getRoleIcon(currentSession.user.role)}
                    <span className="ml-2 capitalize">{currentSession.user.role}</span>
                  </Badge>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <Button
                  onClick={() => router.push("/dashboard")}
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-all text-xs tracking-[0.2em] uppercase py-5"
                >
                  Go to Dashboard →
                </Button>
              </div>
            </div>
          ) : (
            // Login Form
            <div className="bg-slate-50 border-l-4 border-blue-600 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl text-slate-900">Login to Portal</h2>
                  <p className="text-xs text-slate-600">Enter your credentials to continue</p>
                </div>
              </div>

              {/* Feedback Message */}
              {feedback.message && (
                <div
                  className={`mb-6 p-4 border-l-4 flex items-center gap-3 ${
                    feedback.type === "success"
                      ? "bg-green-50 border-green-600"
                      : feedback.type === "error"
                      ? "bg-red-50 border-red-600"
                      : "bg-blue-50 border-blue-600"
                  }`}
                >
                  {feedback.type === "success" ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                  ) : feedback.type === "error" ? (
                    <AlertCircle className="h-5 w-5 text-red-600 shrink-0" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-blue-600 shrink-0" />
                  )}
                  <div>
                    <p
                      className={`text-sm font-medium ${
                        feedback.type === "success"
                          ? "text-green-900"
                          : feedback.type === "error"
                          ? "text-red-900"
                          : "text-blue-900"
                      }`}
                    >
                      {feedback.message}
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs tracking-wider uppercase text-slate-900 font-semibold mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm text-slate-700 bg-white border border-slate-200 border-l-4 border-l-blue-600 focus:outline-none focus:border-slate-300 focus:border-l-blue-800 transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* B-Form Number */}
                <div>
                  <label
                    htmlFor="bForm"
                    className="block text-xs tracking-wider uppercase text-slate-900 font-semibold mb-2"
                  >
                    B-Form Number *
                  </label>
                  <input
                    type="text"
                    id="bForm"
                    name="bForm"
                    value={formData.bForm}
                    onChange={handleChange}
                    required
                    maxLength={17}
                    className="w-full px-4 py-3 text-sm text-slate-700 bg-white border border-slate-200 border-l-4 border-l-blue-600 focus:outline-none focus:border-slate-300 focus:border-l-blue-800 transition-all font-mono"
                    placeholder="1234-5678901-2 (13 digits)"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Enter your 13-digit B-Form number (dashes optional)
                  </p>
                </div>

                {/* Role Selection */}
                <div>
                  <label
                    htmlFor="role"
                    className="block text-xs tracking-wider uppercase text-slate-900 font-semibold mb-2"
                  >
                    Role *
                  </label>
                  <div className="relative">
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-sm text-slate-700 bg-white border border-slate-200 border-l-4 border-l-blue-600 focus:outline-none focus:border-slate-300 focus:border-l-blue-800 transition-all appearance-none pr-10"
                    >
                      <option value="">Select your role</option>
                      <option value="student">Student</option>
                      <option value="teacher">Teacher</option>
                      <option value="admin">Administrator</option>
                      <option value="other">Other (Specialist/Counselor)</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all text-xs tracking-[0.3em] uppercase py-6 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 mr-2 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    <>
                      <LogIn className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Login to Portal
                    </>
                  )}
                </Button>
              </form>

              {/* Info Box */}
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong className="text-slate-900">Note:</strong> This is a demo login page. 
                  Your credentials will be saved locally in your browser. For security, use valid 
                  B-Form numbers only.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-slate-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-center font-serif text-3xl text-slate-900 mb-8">
            Portal <em className="italic text-blue-600">Features</em>
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 border border-slate-200 hover:border-blue-400 transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Student Dashboard</h4>
              <p className="text-sm text-slate-600">
                Track attendance, assignments, and academic progress in real-time.
              </p>
            </div>

            <div className="bg-white p-6 border border-slate-200 hover:border-blue-400 transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <IdCard className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Teacher Portal</h4>
              <p className="text-sm text-slate-600">
                Manage classes, grade assignments, and communicate with students.
              </p>
            </div>

            <div className="bg-white p-6 border border-slate-200 hover:border-blue-400 transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Admin Access</h4>
              <p className="text-sm text-slate-600">
                Full control over applications, reports, and user management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-br from-slate-900 to-blue-950 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-serif text-3xl text-white mb-4">
            Need <em className="italic text-blue-300">Help?</em>
          </h3>
          <p className="text-slate-300 mb-8">
            Contact our support team for assistance with login or account issues.
          </p>
          <Button
            asChild
            className="bg-transparent border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white transition-all px-8 py-5 text-xs tracking-[0.2em] uppercase"
          >
            <a href="/contact">Contact Support</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
