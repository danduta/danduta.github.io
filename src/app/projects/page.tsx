import CardSpotlight from "@/components/CardSpotLight";
import { Terminal } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projects - Dan Duta",
  description: "A collection of my personal and client projects in web development and software engineering.",
};

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-white text-gray-800 font-mono">
      <div className="relative max-w-4xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
        <div className="flex items-center gap-2 mb-8 text-brand-orange">
          <Terminal className="w-5 h-5" />
          <span className="text-sm">duta.dev/projects ~ main</span>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-brand-orange hover:text-brand-orange/80 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <h1 className="text-4xl font-bold text-brand-purple mb-8">All Projects</h1>

        <div className="space-y-8">
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
            title="Peoplesphere"
            year="2022-2023"
            status="Discontinued"
            link="https://peoplespheres.com/fr/"
            description="Peoplesphere is a startup that centralizes HR data in France."
            type="client"
            projectType="app"
            myImplication="Developed MVP frontend with React, Redux, and Redux Saga. Conducted code reviews and unit testing."
            techs={["Next.js", "React", "TypeScript", "Node.js", "Redux"]}
          />
          <CardSpotlight
            title="Minting Bot"
            year="2022"
            status="Discontinued"
            link="https://github.com/thibaultmthh/parakeet-minter-cli"
            description="An Ethereum-based minting bot, designed for NFT releases with optimized gas management."
            type="personal"
            projectType="app"
            techs={["Node.js", "Ethereum", "Web3", "ethers"]}
          />
          <CardSpotlight
            title="Portfolio V1"
            year="2021-2022"
            status="Finished"
            link="https://v1.thibault.sh"
            description="Portfolio inspired by Lee Robinson Portfolio"
            type="personal"
            projectType="website"
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
          <CardSpotlight
            title="Seig Robotics"
            year="2019"
            status="Discontinued"
            link="https://x.com/SeigRobotics"
            description="Seig Robotics was a desktop app to manage multiple Twitter profiles and enter Twitter giveaways."
            type="client"
            projectType="app"
            myImplication="Created MVP with Python/Flask, built Electron desktop app, and implemented Shopify licensing."
            techs={["Python", "Flask", "Electron", "Shopify"]}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}
