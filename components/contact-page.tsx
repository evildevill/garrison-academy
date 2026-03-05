"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Star,
  ChevronDown,
  CheckCircle2,
  MessageSquare
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
    console.log("Contact form submitted:", formData);
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-900 via-blue-950 to-slate-900">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPtDYzoi2LpsaB0MOYzoqWr3SQLZUM8NezA&s"
            alt="Contact Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-900/95 via-blue-950/90 to-slate-900/95" />

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
            Contact <em className="italic text-blue-300">Us</em>
          </h1>

          <div className="w-16 h-px bg-linear-to-r from-transparent via-blue-400 to-transparent mx-auto my-8" />

          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-slate-400 font-light">
            Get in Touch • We&apos;re Here to Help
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-blue-300 animate-bounce">
          <ChevronDown className="h-5 w-5" />
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.4em] uppercase text-blue-600 font-bold block mb-4">
              Reach Out to Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900">
              Let&apos;s <em className="italic text-blue-600">Connect</em>
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mx-auto mt-6" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-3xl text-slate-900 mb-6">
                  Get in <em className="italic text-blue-600">Touch</em>
                </h3>
                <p className="text-base text-slate-600 leading-relaxed mb-8">
                  We&apos;re here to answer any questions you may have about Garrison Academy Kharian Cantt. 
                  Feel free to reach out through any of the channels below or fill out the contact form.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Address */}
                <div className="bg-slate-50 border border-slate-200 p-6 hover:border-blue-400 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Address</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Garrison Academy Kharian Cantt<br />
                        Kharian Cantonment<br />
                        District Gujrat, Punjab<br />
                        Pakistan
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-slate-50 border border-slate-200 p-6 hover:border-blue-400 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Phone</h4>
                      <p className="text-sm text-slate-600">
                        <a href="tel:+92537100000" className="hover:text-blue-600 transition-colors">
                          +92 (537) 100-000
                        </a>
                      </p>
                      <p className="text-sm text-slate-600">
                        <a href="tel:+92537100001" className="hover:text-blue-600 transition-colors">
                          +92 (537) 100-001
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-slate-50 border border-slate-200 p-6 hover:border-blue-400 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Email</h4>
                      <p className="text-sm text-slate-600">
                        <a href="mailto:info@gak.edu.pk" className="hover:text-blue-600 transition-colors">
                          info@gak.edu.pk
                        </a>
                      </p>
                      <p className="text-sm text-slate-600">
                        <a href="mailto:admissions@gak.edu.pk" className="hover:text-blue-600 transition-colors">
                          admissions@gak.edu.pk
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-slate-50 border border-slate-200 p-6 hover:border-blue-400 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Office Hours</h4>
                      <p className="text-sm text-slate-600">
                        Monday - Friday: 8:00 AM - 3:00 PM<br />
                        Saturday: 8:00 AM - 12:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-slate-50 border-l-4 border-blue-600 p-8">
                <h3 className="flex items-center gap-3 font-serif text-2xl text-slate-900 mb-6">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                  Send a Message
                </h3>

                {/* Success Message */}
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-600 flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">Message Sent!</h4>
                      <p className="text-xs text-slate-600">We&apos;ll get back to you soon.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs tracking-wider uppercase text-slate-900 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-sm text-slate-700 bg-white border border-slate-200 border-l-4 border-l-blue-600 focus:outline-none focus:border-slate-300 focus:border-l-blue-800 transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs tracking-wider uppercase text-slate-900 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-sm text-slate-700 bg-white border border-slate-200 border-l-4 border-l-blue-600 focus:outline-none focus:border-slate-300 focus:border-l-blue-800 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs tracking-wider uppercase text-slate-900 font-semibold mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-sm text-slate-700 bg-white border border-slate-200 border-l-4 border-l-blue-600 focus:outline-none focus:border-slate-300 focus:border-l-blue-800 transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="admission">Admission Inquiry</option>
                      <option value="academic">Academic Information</option>
                      <option value="facilities">Facilities & Campus</option>
                      <option value="general">General Question</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs tracking-wider uppercase text-slate-900 font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 text-sm text-slate-700 bg-white border border-slate-200 border-l-4 border-l-blue-600 focus:outline-none focus:border-slate-300 focus:border-l-blue-800 transition-all resize-vertical"
                      placeholder="Type your message here..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all text-xs tracking-[0.3em] uppercase py-6 group"
                  >
                    <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-slate-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl md:text-4xl text-slate-900 mb-4">
              Find <em className="italic text-blue-600">Us</em>
            </h3>
            <p className="text-sm text-slate-600">
              Located in the heart of Kharian Cantonment
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-slate-200 rounded-lg overflow-hidden shadow-lg" style={{ height: "450px" }}>
            <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-slate-300 to-slate-200">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <p className="text-slate-700 font-semibold">Garrison Academy Kharian Cantt</p>
                <p className="text-sm text-slate-600 mt-2">District Gujrat, Punjab, Pakistan</p>
                <a
                  href="https://maps.google.com/?q=Garrison+Academy+Kharian+Cantt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-br from-slate-900 to-blue-950 py-20 px-6 text-center relative overflow-hidden">
        {/* Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-500/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Ready to <em className="italic text-blue-300">Join Us?</em>
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Take the first step towards an excellent education. Our admissions team is ready to guide you through the process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              className="bg-blue-600 text-white hover:bg-blue-700 transition-all px-8 py-6 text-xs tracking-[0.2em] uppercase"
            >
              <a href="/admission">Apply Now</a>
            </Button>
            <Button
              asChild
              className="bg-transparent border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white transition-all px-8 py-6 text-xs tracking-[0.2em] uppercase"
            >
              <a href="/about">Learn More</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
