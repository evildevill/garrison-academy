"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ShirtIcon,
  Star,
  ChevronDown,
  Download,
  CheckCircle2,
  Users
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface DressCodeItem {
  title: string;
  items: string[];
}

interface UniformSection {
  title: string;
  subtitle: string;
  imagePlaceholder: string;
  dressCode: DressCodeItem[];
}

const uniformSections: UniformSection[] = [
  {
    title: "Junior",
    subtitle: "Section",
    imagePlaceholder: "Junior Uniform",
    dressCode: [
      {
        title: "Boys & Girls (Classes I-V)",
        items: [
          "Dark Green Blazer with Golden School Badge",
          "White Shirt",
          "Black Pants / White Shalwar Kameez",
          "Black School Shoes",
          "Optional Tie / Green Sash (for Class 3)",
        ],
      },
    ],
  },
  {
    title: "Middle",
    subtitle: "Section",
    imagePlaceholder: "Middle Section Uniform",
    dressCode: [
      {
        title: "Boys Uniform (Classes VI-VIII)",
        items: [
          "Dark Green Formal Blazer",
          "White Formal Shirt",
          "Black Formal Pants",
          "School Tie",
          "Black Polished Shoes",
        ],
      },
      {
        title: "Girls Uniform (Classes VI-VIII)",
        items: [
          "Dark Green Blazer",
          "White Formal Shirt",
          "White Formal Shalwar",
          "White Dupatta with Green Strips",
          "Black School Shoes",
        ],
      },
    ],
  },
  {
    title: "Senior",
    subtitle: "Section",
    imagePlaceholder: "Senior Section Uniform",
    dressCode: [
      {
        title: "Boys Uniform (Classes IX-X)",
        items: [
          "Dark Green Formal Blazer",
          "White Dress Shirt",
          "Black Formal Pants",
          "Official School Tie",
          "Black Polished Formal Shoes",
        ],
      },
      {
        title: "Girls Uniform (Classes IX-X)",
        items: [
          "Dark Green Blazer",
          "White Formal Shirt",
          "White Formal Shalwar",
          "White Dupatta",
          "Black Formal Shoes",
        ],
      },
    ],
  },
  {
    title: "College",
    subtitle: "Section",
    imagePlaceholder: "College Section Uniform",
    dressCode: [
      {
        title: "Boys Uniform (Classes XI-XII)",
        items: [
          "Dark Green Blazer",
          "White Formal Shirt",
          "Black Formal Pants",
          "Official School Tie",
          "Black Polished Shoes",
        ],
      },
      {
        title: "Girls Uniform (Classes XI-XII)",
        items: [
          "White Formal Shirt",
          "White Formal Shalwar",
          "White Dupatta with Green and White Strips",
          "Black Formal Shoes",
        ],
      },
    ],
  },
];

export default function UniformPage() {
  const renderUniformSection = (section: UniformSection, index: number) => {
    const isEven = index % 2 === 0;

    return (
      <div key={section.title} className="mb-24">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="font-serif text-3xl md:text-4xl font-normal text-slate-900">
            {section.title} <em className="italic text-blue-600">{section.subtitle}</em>
          </h3>
        </div>

        {/* Uniform Layout */}
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? 'lg:flex lg:flex-row-reverse' : ''}`}>
          {/* Image */}
          <div className="relative h-96 bg-gradient-to-br from-blue-50 to-slate-100 overflow-hidden group">
            <div className="absolute inset-0 flex items-center justify-center">
              <ShirtIcon className="h-32 w-32 text-blue-200" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Dress Code */}
          <div className="space-y-8">
            {section.dressCode.map((code, idx) => (
              <div key={idx}>
                <h4 className="flex items-center gap-3 font-serif text-xl text-slate-900 mb-4">
                  <span className="text-blue-600 text-sm">●</span>
                  {code.title}
                </h4>
                <ul className="space-y-2 pl-6">
                  {code.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="relative text-sm text-slate-600 leading-relaxed pl-6"
                    >
                      <CheckCircle2 className="absolute left-0 top-0.5 h-4 w-4 text-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPtDYzoi2LpsaB0MOYzoqWr3SQLZUM8NezA&s"
            alt="School Uniforms Background"
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
            School <em className="italic text-blue-300">Uniforms</em>
          </h1>

          <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto my-8" />

          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-slate-400 font-light">
            Tradition • Pride • Identity
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-blue-300 animate-bounce">
          <ChevronDown className="h-5 w-5" />
        </div>
      </section>

      {/* Uniforms Section */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="text-[10px] tracking-[0.4em] uppercase text-blue-600 font-bold block mb-4">
              Dress Code
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900">
              Official <em className="italic text-blue-600">Uniforms</em>
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mx-auto mt-6" />
          </div>

          {/* Uniform Sections */}
          <div>
            {uniformSections.map((section, index) => renderUniformSection(section, index))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-blue-950 py-24 px-6 text-center">
        {/* Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />

        {/* Animated Border */}
        <div className="absolute inset-8 border border-blue-400/20 animate-pulse" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-[10px] tracking-[0.4em] uppercase text-blue-300 font-bold block mb-4">
            Uniform Details
          </span>
          
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-white mb-4">
            Get Your <em className="italic text-blue-300">Uniform Guide</em>
          </h2>

          <p className="text-sm text-slate-400 tracking-wider uppercase mb-12">
            Complete specifications and purchasing information
          </p>

          <div className="relative inline-block">
            {/* Animated border wrapper */}
            <div className="absolute -inset-2 border border-blue-400/30 animate-pulse" />
            
            <Button
              asChild
              className="relative bg-transparent border-2 border-blue-600 text-blue-300 hover:bg-blue-600 hover:text-white transition-all text-xs tracking-[0.3em] uppercase px-12 py-6"
            >
              <Link href="/pdf/APSACS-School-Uniform-Updated.pdf" target="_blank">
                <Download className="h-4 w-4 mr-2" />
                Download Guide
              </Link>
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-16 pt-12 border-t border-blue-400/20">
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-white/5 p-6 border border-blue-400/10">
                <ShirtIcon className="h-8 w-8 text-blue-400 mb-3" />
                <h4 className="font-serif text-lg text-white mb-2">Official Attire</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  All uniforms must meet official GAK standards and specifications.
                </p>
              </div>

              <div className="bg-white/5 p-6 border border-blue-400/10">
                <CheckCircle2 className="h-8 w-8 text-blue-400 mb-3" />
                <h4 className="font-serif text-lg text-white mb-2">Quality Assured</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Only authorized vendors supply approved uniform materials.
                </p>
              </div>

              <div className="bg-white/5 p-6 border border-blue-400/10">
                <Users className="h-8 w-8 text-blue-400 mb-3" />
                <h4 className="font-serif text-lg text-white mb-2">For All Sections</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Comprehensive dress code from Junior to College sections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
