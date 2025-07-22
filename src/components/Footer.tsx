import Link from "next/link";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ icon, href, label }) => (
  <a href={href} aria-label={label} className="text-brand-orange hover:text-brand-orange/80 transition-colors">
    {icon}
  </a>
);

export default function Footer() {
  return (
    <footer className="mt-12 text-center text-gray-500">
      <div className="flex justify-center space-x-4 sm:space-x-6 mb-2 sm:mb-4">
        <SocialLink icon={<GitHubLogoIcon />} href="https://github.com/danduta" label="My GitHub link" />
        <SocialLink
          icon={<LinkedInLogoIcon />}
          href="https://www.linkedin.com/in/dan-duta/"
          label="My LinkedIn link"
        />
      </div>
      <nav className="mb-4">
        <Link href="/" className="text-sm text-brand-orange hover:text-brand-orange/80 mx-2">
          Home
        </Link>
        <Link href="/site-map" className="text-sm text-brand-orange hover:text-brand-orange/80 mx-2">
          Sitemap
        </Link>
        <Link href="/contact" className="text-sm text-brand-orange hover:text-brand-orange/80 mx-2">
          Contact
        </Link>
      </nav>
      <p className="text-sm sm:text-base text-zinc-600">Made with ❤️ by Dan Duta</p>
    </footer>
  );
}
