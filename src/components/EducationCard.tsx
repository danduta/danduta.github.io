"use client";

import { FileTextIcon } from "@radix-ui/react-icons";
import { GraduationCap } from "lucide-react";
import { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";
import { motion } from "framer-motion";
import { EducationProps } from "@/lib/education";

export default function EducationCard({
  institution,
  degree,
  field,
  years,
  location,
  thesis,
  achievements,
  gpa,
}: EducationProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="group bg-gray-50 rounded-lg border border-gray-200 p-6 hover:border-brand-orange/50 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-brand-purple mb-2 flex items-center gap-3">
            <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-brand-blue" />
            {institution}
            <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">{years}</span>
          </h3>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-brand-blue font-medium">{degree}</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-600">{field}</span>
            {location && (
              <>
                <span className="text-gray-500">•</span>
                <span className="text-gray-500">{location}</span>
              </>
            )}
          </div>
          {gpa && (
            <div className="text-sm text-gray-600 mt-1">
              GPA: <span className="font-medium text-brand-purple">{gpa}</span>
            </div>
          )}
        </div>
      </div>

      {thesis && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-brand-purple mb-2">Graduation Thesis</h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            <span className="font-medium">{thesis.title}</span>
            <br />
            {thesis.description}
          </p>
          {thesis.technologies && (
            <div className="flex flex-wrap gap-1 mt-2">
              {thesis.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-brand-blue/10 text-brand-blue px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {achievements && achievements.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-brand-purple mb-2">Achievements</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {achievements.slice(0, 2).map((achievement, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-1 h-1 bg-brand-orange rounded-full"></span>
                {achievement}
              </li>
            ))}
            {achievements.length > 2 && (
              <li className="text-gray-500 text-xs">
                +{achievements.length - 2} more achievements
              </li>
            )}
          </ul>
        </div>
      )}

      <div className="flex justify-end space-x-2 items-center mt-auto">
        <motion.div whileHover={{ translateX: 10 }} transition={{ type: "spring", stiffness: 400, damping: 100 }}>
          <Button
            icon={<FileTextIcon className="w-4 h-4" />}
            onClick={openModal}
          >
            more --details {institution.toLowerCase().replace(/\s+/g, '-')}
          </Button>
        </motion.div>
      </div>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-brand-purple mb-2">{degree} in {field}</h3>
              <p className="text-gray-600">{institution} • {years}</p>
              {gpa && <p className="text-sm text-gray-600 mt-1">GPA: {gpa}</p>}
            </div>
            
            {thesis && (
              <div>
                <h4 className="font-medium text-brand-purple mb-2">Graduation Thesis</h4>
                <h5 className="font-medium mb-2">{thesis.title}</h5>
                <p className="text-gray-600 leading-relaxed mb-3">{thesis.description}</p>
                {thesis.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {thesis.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm bg-brand-blue/10 text-brand-blue px-3 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {achievements && achievements.length > 0 && (
              <div>
                <h4 className="font-medium text-brand-purple mb-2">Achievements & Recognition</h4>
                <ul className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <span className="w-2 h-2 bg-brand-orange rounded-full"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
} 