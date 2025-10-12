import { useState } from "react";
import { FaGraduationCap, FaExternalLinkAlt } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function EducationSection() {
  const [expandedIdxs, setExpandedIdxs] = useState([0, 1, 2]); // initially expanded

  const toggleAccordion = (idx) => {
    if (expandedIdxs.includes(idx)) {
      setExpandedIdxs(expandedIdxs.filter((i) => i !== idx));
    } else {
      setExpandedIdxs([...expandedIdxs, idx]);
    }
  };

  const education = [
    {
      year: "2026 (Expected)",
      degree: "BCA – Lakhsya Institute of Technology",
      logo: "./bca-logo.png", // optional logo
      description: [
        "Completed full-stack projects using MERN stack. 💻",
        "Built a real-time Student Management System with automated reports. 🧠",
        "Explore new technologies every day to grow consistently. 🚀",
        "Freelanced for coaching center websites using modern stacks. 🧑‍💼",
        "Started building a personal UI component library and CLI tools. 🧩",
      ],
      tags: ["MERN Stack", "Firebase", "TypeScript", "React Native", "Next.js"],
    },
    {
      year: "2022",
      degree: "12th – Stewart Science College, Cuttack",
      logo: "./school12-logo.png",
      description: [
        "Stream: Science (Mathematics, Physics, Biology). 📚",
        "Expected first prize in academic excellence. 🎖️",
        "Participated in long jump and shuttle run events. 🏃‍♂️",
      ],
      tags: ["Mathematics", "Physics", "Biology", "Sports"],
    },
    {
      year: "2020",
      degree: "10th – Saraswati Sishu Vidya Mandir",
      logo: "./school10-logo.png",
      description: [
        "Achieved distinction in all subjects (75%+). 🏅",
        "Secured 1st position in inter-school math quizzes. 🥇",
        "Participated in science exhibition with a logic gates simulation project. 🔬",
        "Won long jump and recognized as a sports athlete. 👟",
      ],
      tags: ["Mathematics", "Science", "Sports"],
    },
  ];

  return (
    <div className="min-h-screen text-gray-900 px-6 relative mt-3">
      <div className="max-w-3xl w-full mx-auto mt-4">
        <h1 className="text-3xl font-bold border-gray-300 mt-5 cl">
          Education
        </h1>

        {education.map((edu, idx) => {
          const isExpanded = expandedIdxs.includes(idx);
          return (
            <div
              key={idx}
              className="p-3 rounded-md text-gray-900 border-gray-400 transition-shadow border-b-1 duration-300 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center gap-2 mt-2">
                <div
                  className="flex justify-between items-center w-full py-2 px-2 hover:bg-gray-100 rounded-md cursor-pointer"
                  onClick={() => toggleAccordion(idx)}
                >
                  <div className="flex items-center gap-3">
                    {edu.logo && (
                      <img
                        src={edu.logo}
                        className="h-9 w-9 rounded-full mt-1"
                        alt={edu.degree}
                      />
                    )}
                    <div>
                      <h2 className="text-[17.5px] font-bold cl">
                        {edu.degree}
                      </h2>
                      <p className="text-gray-600 text-sm cl cursor-pointer">
                        {edu.year}
                      </p>
                    </div>
                  </div>

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
                        visible: { transition: { staggerChildren: 0.1 } },
                      }}
                    >
                      {edu.description.map((desc, i) => (
                        <motion.li
                          key={i}
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 },
                          }}
                          transition={{ duration: 0.1, ease: "easeOut" }}
                        >
                          • {desc}
                        </motion.li>
                      ))}
                    </motion.ul>

                    <div className="flex flex-wrap gap-2 mt-6 text-sm">
                      {edu.tags.map((tag) => (
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
