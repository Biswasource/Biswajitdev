import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Experience() {
  const [expandedIdxs, setExpandedIdxs] = useState([0, 1]); // expanded by default

  const toggleAccordion = (idx) => {
    if (expandedIdxs.includes(idx)) {
      setExpandedIdxs(expandedIdxs.filter((i) => i !== idx));
    } else {
      setExpandedIdxs([...expandedIdxs, idx]);
    }
  };

  const experiences = [
    {
      company: "Hyperdigitech",
      logo: "./hbt.png",
      role: "Backend Developer",
      duration: "01.2022 — 04.2023",
      description: [
        "Worked on a Salon SaaS platform providing complete management solutions.",
        "Developed scalable RESTful APIs using Node.js and Express for salon operations.",
        "Containerized applications using Docker for easy deployment.",
        "Implemented CI/CD pipelines with Jenkins for automated builds and deployments.",
        "Managed databases including MongoDB and PostgreSQL, ensuring data integrity.",
        "Optimized server performance and ensured high availability for production applications.",
        "Collaborated with frontend developers to integrate APIs and real-time features.",
      ],
    },
    {
      company: "Freelancing",
      logo: "./tungtung.webp",
      role: "Full Stack Developer",
      duration: "05.2023 — Present",
      description: [
        "Worked on multiple client projects, building responsive and interactive web applications.",
        "Implemented end-to-end solutions using MERN stack, integrating APIs and databases.",
        "Collaborated with clients to understand requirements and deliver custom solutions.",
        "Optimized websites for SEO and performance using Next.js and Tailwind CSS.",
        "Maintained code quality using ESLint and Prettier.",
      ],
    },
  ];

  // Variant for header and role animation on scroll
  const scrollVariant = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  // Variant for list items animation
  const listVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen text-gray-900 px-6 relative mt-2">
      <div className="max-w-3xl w-full mx-auto bg-white">
        <h1 className="text-3xl font-bold border-gray-300 pb-4 mt-3">
          Experience
        </h1>

        {experiences.map((exp, idx) => {
          const isExpanded = expandedIdxs.includes(idx);
          return (
            <motion.div
              key={idx}
              className="p-3 rounded-md text-gray-900 mb-3 border-gray-400 transition-shadow border-b-1 duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={scrollVariant}
              transition={{ duration: 0.4, delay: idx * 0.2 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <img
                    src={exp.logo}
                    className="h-8 w-8 rounded-full mt-1"
                    alt={exp.company}
                  />
                  <h2 className="text-[17.5px] font-bold cl">{exp.company}</h2>
                </div>
              </div>

              {/* Role & Duration */}
              <div className="flex items-center gap-2 mt-2">
                <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-zinc-50 border-[4px] border-white shadow-[inset_0_0_0_1px_#e5e5e5]">
                  <div className="absolute inset-0.5 rounded-md border border-zinc-200" />
                  <FaCode className="text-gray-500" />
                </div>

                <div
                  className="flex justify-between items-center w-full py-2 px-2 hover:bg-gray-100 rounded-md"
                  onClick={() => toggleAccordion(idx)}
                >
                  <div>
                    <h3 className="text-base font-semibold mt-2 cl cursor-pointer">
                      {exp.role}
                    </h3>
                    <p className="text-gray-600 text-sm cl cursor-pointer">
                      {exp.duration}
                    </p>
                  </div>
                  {/* Expand/Collapse Icon */}
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isExpanded ? (
                      <FiChevronUp size={20} />
                    ) : (
                      <FiChevronDown size={20} />
                    )}
                  </motion.div>
                </div>
              </div>

              {/* Expandable Section */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden mt-4 ml-6"
                  >
                    <motion.ul
                      className="space-y-2 text-gray-800 title text-sm"
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.1,
                          },
                        },
                      }}
                    >
                      {exp.description.map((desc, i) => (
                        <motion.li
                          key={i}
                          variants={listVariant}
                          transition={{ duration: 0.1, ease: "easeOut" }}
                        >
                          • {desc}
                        </motion.li>
                      ))}
                    </motion.ul>

                    <div className="flex flex-wrap gap-2 mt-6 text-sm">
                      {[
                        "React.js",
                        "Next.js",
                        "Node.js",
                        "Express",
                        "MongoDB",
                        "Tailwind CSS",
                        "MERN Stack",
                        "UI/UX Design",
                        "API Integration",
                        "Freelancing",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 px-3 py-1 rounded-full border border-gray-300 text-sm title"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
