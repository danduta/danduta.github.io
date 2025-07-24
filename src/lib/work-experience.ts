import { CardSpotlightProps } from "@/components/CardSpotLight";

export const workExperience: CardSpotlightProps[] = [
  {
    title: "Bolt",
    years: "May 2023 – Present",
    position: "Software Engineer",
    projectType: "app",
    description:
      "Engineer in the Delivery Pricing domain for the Bolt Food app. Led effort-based earnings and automated courier earnings, both significantly boosting profitability. Built models influencing courier behaviour and reduced human configuration in pricing systems.",
    techs: ["TypeScript", "Node.js", "React"],
    image: "/assets/bolt.png",
  },
  {
    title: "London Stock Exchange Group",
    years: "Jan 2023 – May 2024",
    position: "Senior Software Engineer",
    projectType: "app",
    description:
      "Worked in Risk Management on microservices for EquityClear, RepoClear, and Collateral Management. Migrated services to AWS, improved performance by up to 1500%, and developed the Margin Simulator with distributed master-worker design.",
    techs: ["Java", "Spring", "AWS"],
    image: "/assets/lseg.png",
  },
  {
    title: "Adobe",
    years: "Dec 2021 – Jan 2023",
    position: "Software Development Engineer",
    projectType: "app",
    description:
      "Contributed to Adobe Experience Platform and the Skybridge initiative for HIPAA compliance. Managed one of the largest Kafka-on-Kubernetes clusters globally. Led university engagement programs and launched student outreach initiatives.",
    techs: ["Java", "Spring", "Kafka", "Kubernetes", "ADX"],
    image: "/assets/adobe.svg",
  },
  {
    title: "AMIQ EDA",
    years: "Jul 2020 – Nov 2021",
    position: "R&D Engineer",
    projectType: "app",
    description:
      "Enhanced Eclipse DVT IDE's performance and responsiveness. Delivered major UX improvements including better signal tracing and semantic hyperlinking. Worked closely with top semiconductor clients for debugging and feature development.",
    techs: ["Java", "Eclipse RCP", "JUnit", "SWT"],
    image: "/assets/amiq.png",
  },
  {
    title: "2Space",
    years: "Oct 2019 – Dec 2021",
    position: "Fullstack Developer",
    projectType: "other",
    description:
      "Developed software for rocket engine testing and control. Helped the startup win Innovation Labs 2021 and participate in the European Rocketry Challenge.",
    techs: ["C++", "Python", "InfluxDB"],
    type: "client",
    image: "/assets/2space.png",
  },
  {
    title: "Mentor Graphics",
    years: "Jul 2019 – Oct 2019",
    position: "Embedded Software Engineering Intern",
    projectType: "other",
    description:
      "Developed OTA update solution for Renesas boards on Automotive Grade Linux. Integrated secure firmware update features and improved bootloader configuration.",
    techs: ["C++", "Yocto", "Python", "Bash"],
    image: "/assets/mentor.png",
  }
];

export const technologies: string[][] = [
  ["TypeScript",
    "Java"],
  ["Node.js",
    "Express",
    "Next.js",
    "React"],
  ["Spring"],
  ["Kafka",
    "RabbitMQ"],
  ["Redis",
    "PostgreSQL"],
  ["OpenAPI"],
  ["Kubernetes",
    "AWS",
    "Google Cloud Platform",
    "Terraform",
    "Helm"],
];