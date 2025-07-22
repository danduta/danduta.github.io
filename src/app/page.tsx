/* eslint-disable @next/next/no-img-element */

import CardSpotlight from "@/components/CardSpotLight";
import { FileTextIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Button from "@/components/Button";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Terminal } from "lucide-react";
import { Metadata } from "next";
import Footer, { SocialLink } from "@/components/Footer";
import ASCIIBackground from "@/components/ASCIIBackground";

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
              <Button href="mailto:dan@duta.dev" icon={<EnvelopeClosedIcon />}>
                contact --email
                <br />
                <span className="text-[#858585]">Get in touch via email</span>
              </Button>
            </div>
            <div className="flex flex-col gap-4">
              <Button href="/resume.pdf" icon={<FileTextIcon />}>
                resume --download
                <br />
                <span className="text-[#858585]">Download my resume</span>
              </Button>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-sm text-gray-500 mb-4">→ featured-projects --list</h2>
          <div className="space-y-8">
            <CardSpotlight
              title="Pokeforge"
              year="2024"
              status="Finished"
              link="https://pokeforge.com"
              description="Pokeforge transforms your favorite Pokémon TCG Pocket cards into beautiful wallpapers. "
              type="personal"
              projectType="app"
              techs={["Next.js", "React", "TypeScript", "Tailwind CSS"]}
            />
            <CardSpotlight
              title="Elevora"
              year="2024"
              status="In Progress"
              link="https://elevora.app"
              description="Elevora is a platform that allows businesses to create giveaways or waitlists where users can increase their rank or chance by inviting friends and completing tasks"
              type="personal"
              projectType="app"
              techs={["Next.js", "React", "TypeScript", "NestJS", "Node.js"]}
            />
            <CardSpotlight
              title="Kboom"
              year="2023-2024"
              status="In Progress"
              link="https://app.kboom.gg/"
              description="Kboom is a platform that helps esports clubs generate engagement and loyalty with their fans."
              type="client"
              projectType="app"
              techs={["Next.js", "React", "Django", "NestJS"]}
              myImplication="Developed frontend with React/Next.js and contributed to Django backend."
            />
            <CardSpotlight
              title="Tornado.fun"
              year="2024"
              status="Finished"
              link="https://tornado.fun"
              description="Tornado.fun is an app that allows you to create crypto tokens on the Blast blockchain."
              type="client"
              projectType="app"
              myImplication="Built React frontend with Web3 integration, contributed to NestJS backend."
              techs={["Next.js", "React", "TypeScript", "web3", "GraphQL"]}
            />
            <CardSpotlight
              title="Parakeet"
              year="2020-2023"
              status="Finished"
              description="Parakeet is a Twitter giveaway bot. It's an app that allows you to manage hundreds of Twitter accounts and enter twitter giveaways with them."
              type="personal"
              projectType="app"
              link="https://thibault.sh/blog/parakeet"
              techs={["Next.js", "React", "TypeScript", "Node.js", "Electron", "Puppeteer"]}
            />
          </div>
          <div className="mt-6">
            <Button href="/projects" variant="secondary">
              View all projects →
            </Button>
          </div>
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
