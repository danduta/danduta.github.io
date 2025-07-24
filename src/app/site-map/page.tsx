import Link from "next/link";
import { Terminal } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap - Dan Duta | Software Engineer",
  description: "A complete overview of all pages and resources available on this site.",
};

export default function SitemapPage() {
  return (
    <div className="relative min-h-screen bg-white text-gray-800 font-mono">
      <div className="relative max-w-4xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
        <div className="flex items-center gap-2 mb-8 text-brand-orange">
          <Terminal className="w-5 h-5" />
          <span className="text-sm">duta.dev ~ sitemap</span>
        </div>

        <div className="mb-8">
          <div className="text-sm text-gray-500 mb-2">→ ls --sitemap</div>
          <h1 className="text-3xl font-bold mb-2 text-brand-purple">Sitemap</h1>
          <p className="text-md text-muted-foreground">
            A complete overview of all pages and resources available on this site.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="mt-12">
            <div className="text-sm text-gray-500 mb-4">→ cd ..</div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-brand-orange/50 hover:bg-brand-orange/5 transition-colors"
            >
              <Terminal className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          <footer className="mt-16 text-center text-gray-500">
            <div className="flex justify-center space-x-4 sm:space-x-6 mb-4 sm:mb-6">
              <SocialLink icon={<GitHubLogoIcon />} href="https://github.com/danduta" label="My github link" />
              <SocialLink
                icon={<LinkedInLogoIcon />}
                href="https://www.linkedin.com/in/dan-duta/"
                label="My Linkedin link"
              />
            </div>
            <p className="text-sm sm:text-base text-zinc-600">Made with ❤️ by Dan Duta </p>
          </footer>

          <div className="mt-12 flex items-center gap-2 text-gray-500">
            <span>→</span>
            <div className="w-3 h-6 bg-brand-orange/50 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, href, label }) => (
  <a href={href} aria-label={label} className="text-brand-orange hover:text-brand-orange/80 transition-colors">
    {icon}
  </a>
);
