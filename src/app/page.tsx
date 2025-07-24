/* eslint-disable @next/next/no-img-element */

import FadeOutEducationCard from "@/components/FadeOutEducationCard";
import { FileTextIcon, GitHubLogoIcon, LinkedInLogoIcon, RocketIcon } from "@radix-ui/react-icons";
import Button from "@/components/Button";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { GraduationCapIcon, Terminal } from "lucide-react";
import { Metadata } from "next";
import Footer, { SocialLink } from "@/components/Footer";
import ASCIIBackground from "@/components/ASCIIBackground";
import TechCarousel from "@/components/TechCarousel";
import { education } from "@/lib/education";
import ExperienceSection from "@/components/ExperienceSection";

export const metadata: Metadata = {
  title: "Dan Duta | Software Engineer",
  description:
    "Passionate fullstack engineer with expertise in React, Next.js, and Node.js. Currently working at mobility company Bolt.",
  openGraph: {
    type: "website",
    title: "Dan Duta - Software Engineer",
    description:
    "Passionate fullstack engineer with expertise in React, Next.js, and Node.js. Currently working at mobility company Bolt.",
  },
};

export default function Home() {

  return (
    <div className="relative min-h-screen bg-white text-gray-800 font-mono">
      <ASCIIBackground />
      <div className="relative max-w-4xl mx-auto px-4 py-8 sm:px-6 sm:py-12 z-10">
        <div className="flex items-center gap-2 mb-8 text-brand-orange">
          <Terminal className="w-5 h-5" />
          <span className="text-sm">duta.dev ~ main</span>
        </div>
        <header className="mb-10">
          <div className="text-sm text-gray-500 mb-2">→ whoami</div>
          <img src="/assets/logo.png" alt="Dan Duta" />

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <p className="text-gray-700 leading-relaxed mb-4">
              Hi! I&apos;m a passionate software engineer with expertise in building scalable and efficient web applications. I&apos;m
              currently working at mobility company Bolt. My tools of choice are TypeScript with React, Next.js, and Node.js.
            </p>
            
            <div className="flex gap-3">
              <SocialLink
                icon={<GitHubLogoIcon className="size-5" />}
                href="https://github.com/danduta"
                label="My GitHub link"
              />
              <SocialLink
                icon={<LinkedInLogoIcon className="size-5" />}
                href="https://www.linkedin.com/in/dan-duta/"
                label="My LinkedIn link"
              />
            </div>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-sm text-gray-500 mb-4">→ navigation --list</h2>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex flex-col gap-4">
              <Button href="mailto:dan@duta.dev" icon={<EnvelopeClosedIcon className="w-4 h-4"/>}>
                contact --email
                <br />
                <span className="text-[#858585]">Get in touch via email</span>
              </Button>
            </div>
            <div className="flex flex-col gap-4">
              <Button href="/assets/resume.pdf" icon={<FileTextIcon className="w-4 h-4"/>}>
                resume --download
                <br />
                <span className="text-[#858585]">Download my resume</span>
              </Button>
            </div>
            <div className="flex flex-col gap-4">
              <Button href="#experience" icon={<RocketIcon className="w-4 h-4"/>}>
                work-experience --list
                <br />
                <span className="text-[#858585]">Where I worked</span>
              </Button>
            </div>
            <div className="flex flex-col gap-4">
               <Button href="#education" icon={<GraduationCapIcon className="w-4 h-4"/>}>
                 education --list
                 <br />
                 <span className="text-[#858585]">Where I studied</span>
               </Button>
             </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-sm text-gray-500 mb-4">→ tech-stack --list --animate</h2>
          <TechCarousel />
        </section>

        <ExperienceSection />

        <section id="education" className="mb-12">
          <h2 className="text-sm text-gray-500 mb-4">→ education --list --sortBy=year --desc</h2>
          <div className="space-y-8">
            {education.slice(0, 2).map((edu, index) => (
              <FadeOutEducationCard 
                key={edu.institution} 
                {...edu} 
                fadeOut={index === 1 && education.length > 2}
                linkTo="/education"
              />
            ))}
          </div>
          {education.length > 2 && (
            <div className="mt-6">
              <Button href="/education" variant="secondary">
                View all education →
              </Button>
            </div>
          )}
        </section>

        <Footer />

        <div className="mt-12 flex items-center gap-2 text-gray-500">
          <span>→</span>
          <div className="w-3 h-6 bg-brand-orange/50 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
