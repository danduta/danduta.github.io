"use client";

import { CubeIcon, FileTextIcon, GlobeIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import Modal from "./Modal"; // You'll need to create this component
import Button from "./Button";
import { motion } from "framer-motion";

export interface CardSpotlightProps {
  title: string;
  years: string;
  position: string;
  link?: string;
  description: string;
  type?: "personal" | "client";
  projectType: "website" | "app" | "other";
  moreInfo?: React.ReactNode;
  techs?: string[];
  image?: string;
}

const ProjectIcon: React.FC<{ projectType: CardSpotlightProps["projectType"], image?: CardSpotlightProps["image"] }> = ({ projectType, image }) => {
  if (image) {
    return <img src={image} className="h-12 text-brand-blue mr-2" />;
  }

  switch (projectType) {
    case "website":
      return <GlobeIcon className="h-6 w-6 sm:h-8 sm:w-8 text-brand-blue mr-2" />;
    case "app":
      return <CubeIcon className="h-6 w-6 sm:h-8 sm:w-8 text-brand-blue mr-2" />;
    default:
      return <FileTextIcon className="h-6 w-6 sm:h-8 sm:w-8 text-brand-blue mr-2" />;
  }
};

export default function CardSpotlight({
  title,
  years,
  position,
  link,
  description,
  type,
  projectType,
  moreInfo,
  techs,
  image
}: CardSpotlightProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="group bg-gray-50 rounded-lg border border-gray-200 p-6 hover:border-brand-orange/50 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-brand-purple mb-2 flex items-center gap-3">
            <ProjectIcon projectType={projectType} image={image} />
            {title}
            <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">{years}</span>
          </h3>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-brand-blue">{position}</span>
            {type && <span className="text-gray-500">•</span>}
            {type && <span className="text-gray-500">{type}</span>}
          </div>
        </div>
        {link && (
          <div className="flex gap-3">
            <a
              href={link}
              className="text-gray-400 hover:text-brand-orange transition-colors"
              aria-label={`More info on ${title}`}
            >
              <ExternalLinkIcon className="w-5 h-5" />
            </a>
          </div>
        )}
      </div>

      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

      {(link || moreInfo) && <div className="flex justify-end space-x-2 items-center mt-auto">
        <motion.div whileHover={{ translateX: 10 }} transition={{ type: "spring", stiffness: 400, damping: 100 }}>
          <Button
            icon={link ? <ExternalLinkIcon className="w-4 h-4" /> : <FileTextIcon />}
            href={link}
            onClick={link ? undefined : openModal}
          >
            {link ? `open --url ${title.toLowerCase()}` : `more --info ${title.toLowerCase()}`}
          </Button>
        </motion.div>
      </div>}
      {techs && (
        <div className="flex flex-wrap gap-1 mt-2">
          {techs.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-brand-blue/10 text-brand-blue px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{moreInfo}</div>
        </Modal>
      )}
    </div>
  );
}
