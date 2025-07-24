import CardSpotlight from "@/components/CardSpotLight";
import { workExperience } from "@/lib/work-experience";
import { Terminal } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Experience - Dan Duta",
  description: "A collection of my personal projects and work experience in web development and software engineering.",
};

export default function ProjectsPage() {

  return (
    <div className="relative min-h-screen bg-white text-gray-800 font-mono">
      <div className="relative max-w-4xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
        <div className="flex items-center gap-2 mb-8 text-brand-orange">
          <Terminal className="w-5 h-5" />
          <span className="text-sm">duta.dev/experience ~ main</span>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-brand-orange hover:text-brand-orange/80 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <h1 className="text-4xl font-bold text-brand-purple mb-8">Work Experience</h1>

        <div className="space-y-8">
          {workExperience.map((experience) => (
            <CardSpotlight key={experience.title} {...experience} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}
