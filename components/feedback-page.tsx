"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  MessageSquare,
  Star,
  ChevronDown,
  Send,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    rating: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        category: "",
        rating: "",
        message: "",
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPtDYzoi2LpsaB0MOYzoqWr3SQLZUM8NezA&s"
            alt="Feedback Background"
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
            Your <em className="italic text-blue-300">Feedback</em>
          </h1>

          <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto my-8" />

          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-slate-400 font-light">
            We Value Your Opinion
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-blue-300 animate-bounce">
          <ChevronDown className="h-5 w-5" />
        </div>
      </section>

      {/* Feedback Form Section */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.4em] uppercase text-blue-600 font-bold block mb-4">
              Share Your Thoughts
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900">
              Feedback <em className="italic text-blue-600">Form</em>
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mx-auto mt-6" />
          </div>

          {/* Success Message */}
          {isSubmitted && (
            <div className="mb-8 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg flex items-center gap-4 animate-in fade-in slide-in-from-top-2 duration-500">
              <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Thank you for your feedback!</h3>
                <p className="text-sm text-slate-600">Your response has been submitted successfully.</p>
              </div>
            </div>
          )}

          {/* Form Container */}
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-xs tracking-[0.2em] uppercase text-slate-900 font-semibold mb-3">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-4 text-sm text-slate-700 bg-slate-50 border border-slate-200 border-l-4 border-l-blue-600 focus:outline-none focus:bg-white focus:border-slate-300 focus:border-l-blue-800 transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xs tracking-[0.2em] uppercase text-slate-900 font-semibold mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-4 text-sm text-slate-700 bg-slate-50 border border-slate-200 border-l-4 border-l-blue-600 focus:outline-none focus:bg-white focus:border-slate-300 focus:border-l-blue-800 transition-all"
                />
              </div>

              {/* Category Dropdown */}
              <div>
                <label htmlFor="category" className="block text-xs tracking-[0.2em] uppercase text-slate-900 font-semibold mb-3">
                  Feedback Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 text-sm text-slate-700 bg-slate-50 border border-slate-200 border-l-4 border-l-blue-600 focus:outline-none focus:bg-white focus:border-slate-300 focus:border-l-blue-800 transition-all"
                >
                  <option value="">Select Category</option>
                  <option value="academics">Academics</option>
                  <option value="facilities">Facilities</option>
                  <option value="staff">Staff & Faculty</option>
                  <option value="administration">Administration</option>
                  <option value="student-life">Student Life</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Rating Radio Buttons */}
              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-slate-900 font-semibold mb-4">
                  Overall Experience Rating *
                </label>
                <div className="flex flex-wrap gap-6">
                  {[
                    { id: "excellent", label: "Excellent", value: "excellent" },
                    { id: "good", label: "Good", value: "good" },
                    { id: "average", label: "Average", value: "average" },
                    { id: "poor", label: "Poor", value: "poor" },
                  ].map((option) => (
                    <div key={option.id} className="flex items-center gap-2">
                      <input
                        type="radio"
                        id={option.id}
                        name="rating"
                        value={option.value}
                        checked={formData.rating === option.value}
                        onChange={handleChange}
                        required
                        className="w-4 h-4 cursor-pointer accent-blue-600"
                      />
                      <label
                        htmlFor={option.id}
                        className="text-sm text-slate-700 cursor-pointer hover:text-blue-600 transition-colors"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-xs tracking-[0.2em] uppercase text-slate-900 font-semibold mb-3">
                  Your Feedback *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share your valuable feedback..."
                  required
                  rows={6}
                  className="w-full px-4 py-4 text-sm text-slate-700 bg-slate-50 border border-slate-200 border-l-4 border-l-blue-600 focus:outline-none focus:bg-white focus:border-slate-300 focus:border-l-blue-800 transition-all resize-vertical"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all text-xs tracking-[0.3em] uppercase py-6 group"
              >
                <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                Submit Feedback
              </Button>
            </form>
          </div>

          {/* Info Section */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-slate-50 border-l-4 border-blue-600 p-8">
              <div className="flex items-start gap-4">
                <MessageSquare className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-xl text-slate-900 mb-2">Why Your Feedback Matters</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    At Garrison Academy Kharian Cantt, we are committed to continuous improvement. Your feedback helps us understand what were doing well and where we can enhance our services, facilities, and overall educational experience. Every comment is reviewed by our administration team and contributes to making GAK a better institution for our students and community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
