export interface EducationProps {
  institution: string;
  degree: string;
  field: string;
  years: string;
  location?: string;
  thesis?: {
    title: string;
    description: string;
    technologies?: string[];
  };
  achievements?: string[];
  gpa?: string;
}

export const education: EducationProps[] = [
  {
    institution: "Politehnica University of Bucharest",
    degree: "Bachelor of Science",
    field: "Computer Science and Engineering",
    years: "Sept. 2018 – July 2022",
    location: "Bucharest, Romania",
    thesis: {
      title: "Resilient data processing engine using Kafka and Spark",
      description:
        "Designed and implemented a fault-tolerant data processing engine that leverages Kafka for ingestion and Spark for distributed computation. Focused on data resilience, scalability, and real-time analytics.",
      technologies: ["Kafka", "Spark"],
    },
    achievements: [
      "Undergraduate Teaching Assistant for Computer Programming",
      "Undergraduate Teaching Assistant for Introduction to Operating Systems",
    ],
  }
];