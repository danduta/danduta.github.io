import { technologies } from "@/lib/work-experience";

const categoryColors = [
  "bg-blue-100 text-blue-800 border-blue-200", // Languages
  "bg-green-100 text-green-800 border-green-200", // Frontend/Backend
  "bg-purple-100 text-purple-800 border-purple-200", // Frameworks
  "bg-orange-100 text-orange-800 border-orange-200", // Message Queues
  "bg-red-100 text-red-800 border-red-200", // Databases
  "bg-yellow-100 text-yellow-800 border-yellow-200", // Standards
  "bg-indigo-100 text-indigo-800 border-indigo-200", // Infrastructure/Cloud
];

const categoryLabels = [
  "Languages",
  "Frontend/Backend",
  "Frameworks",
  "Message Queues",
  "Databases",
  "Standards",
  "Infrastructure & Cloud"
];

export default function TechCarousel() {
  // Flatten all technologies with their category info
  const allTechs = technologies.flatMap((category, categoryIndex) =>
    category.map(tech => ({
      name: tech,
      categoryIndex,
      color: categoryColors[categoryIndex] || categoryColors[0]
    }))
  );

  // Duplicate the array to create seamless loop
  const duplicatedTechs = [...allTechs, ...allTechs];

  return (
    <div className="w-full overflow-hidden bg-gray-50 py-6 border border-gray-200 rounded-lg">    
      <div className="relative">
        <div className="flex animate-scroll space-x-3 px-6">
          {duplicatedTechs.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className={`
                flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border
                ${tech.color}
                whitespace-nowrap
              `}
            >
              {tech.name}
            </div>
          ))}
        </div>
        
        {/* Gradient overlays for fade effect */}
        <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
      </div>
      
      {/* Legend */}
      <div className="mt-4 px-6">
        <div className="flex flex-wrap gap-2">
          {categoryLabels.map((label, index) => (
            <div key={label} className="flex items-center gap-1">
              <div className={`w-3 h-3 rounded-full ${categoryColors[index]?.split(' ')[0] || 'bg-gray-300'}`} />
              <span className="text-xs text-gray-600">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 