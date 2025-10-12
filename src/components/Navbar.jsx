import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaEnvelope,
  FaGlobe,
  FaPhone,
  FaMapMarkerAlt,
  FaCode,
  FaInfoCircle,
  FaGenderless,
  FaSearch,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundGrid from "../Background/GridBackGround";
import AboutSocialLinks from "../pages/AboutSocialLinks";
import GithubContribution from "../pages/GithubContribution";
import TechStack from "../pages/Stack";
import ExperienceSection from "../pages/Experience";
import ProjectSection from "../pages/ProjectSection";
import EducationSection from "../pages/EducationSection";
import { FaVolumeUp } from "react-icons/fa";
import { Link } from "react-router";

export default function Profile() {
  const sentences = [
    "Creating with code. Small details matter.",
    "Backend Developer & Designer",
    "Frontend Developer",
  ];

  const [index, setIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedTheme);
  }, []);

  // Save theme to localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sentences.length);
    }, 2500); // Change sentence every 2.5s
    return () => clearInterval(timer);
  }, []);

  const speakName = () => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance("Biswajit Das");
    utterance.lang = "en-IN";
    utterance.rate = 1;
    utterance.pitch = 1.1;
    utterance.volume = 1;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div
      className={`${
        darkMode ? "bg-black text-white" : "bg-white text-zinc-800"
      } min-h-screen font-mono`}
    >
      <header
        className={`flex justify-center border-b ${
          darkMode ? "border-zinc-700" : "border-zinc-200"
        } ${darkMode ? "bg-black" : "bg-white"}`}
      >
        <div className="flex items-center justify-between w-full max-w-3xl py-3 px-4 sm:py-4 sm:px-8">
          <div className="flex items-center gap-4 sm:gap-10">
            <span className="font-bold text-lg sm:text-xl tracking-tight sm:text-3xl">
              BD
            </span>
          </div>

          <nav
            className={`flex items-center gap-2 sm:gap-6 text-xs sm:text-sm title ${
              darkMode ? "text-white" : "text-zinc-600"
            }`}
          >
            <Link to="/blog" className="hover:text-gray-300">
              Blog
            </Link>
            <a href="#" className="hover:text-gray-300">
              Components
            </a>

            <div className="flex items-center gap-2 sm:gap-3 rounded-xl">
              <div className="relative rounded-2xl">
                <FaSearch className="absolute left-1.5 top-1 text-sm sm:text-sm text-white" />
                <input
                  type="text"
                  placeholder="Ctrl K"
                  className="pl-5 pr-2 py-1 text-xs sm:text-xs border rounded-xl w-20 sm:w-24 text-center bg-zinc-800 text-white border-zinc-600"
                />
              </div>

              <button className="p-1 border rounded-full hover:bg-zinc-700">
                <FaGithub className="text-white text-lg sm:text-xl" />
              </button>

              <button
                className="p-1.5 sm:p-2 border rounded-md hover:bg-zinc-700 text-sm sm:text-base"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? "☀️" : "🌙"}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <BackgroundGrid darkMode={darkMode}>
        <main className="flex justify-center px-6 bebas-neue-regular z-99 mt-5">
          <div className="w-full max-w-3xl md:px-3">
            <section
              className={`relative border-b pb-10 ${
                darkMode ? "border-zinc-700 bg-black" : "border-zinc-200"
              } py-2 flex sm:flex-row items-center gap-2 sm:gap-6`}
            >
              <img
                src="./me.jpg"
                alt="avatar"
                className="w-32 h-32 sm:w-36 sm:h-36 mr-2 rounded-full border-4 border-white shadow-md object-cover"
              />

              <div className="relative text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl font-bold flex items-center justify-center sm:justify-start gap-2">
                  Biswajit Das
                  <MdVerified className="text-sky-500 text-xl sm:text-2xl" />
                  <button
                    onClick={speakName}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Speak Biswajit Das"
                  >
                    <FaVolumeUp
                      className={`text-lg sm:text-xl transition-transform duration-300 ${
                        isSpeaking ? "text-gray-400" : "text-white"
                      }`}
                    />
                  </button>
                </h1>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="absolute font-arial text-left text-sm sm:text-sm"
                  >
                    {sentences[index]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </section>

            <section
              className={`py-4 relative pt-5 ${
                darkMode ? "bg-black" : "bg-white"
              }`}
            >
              <ul className="space-y-1.5 title">
                {[
                  { icon: FaCode, text: "Backend Developer" },
                  {
                    icon: FaInfoCircle,
                    text: (
                      <>
                        Founder{" "}
                        <a
                          href="https://uivault.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold hover:underline"
                        >
                          @uivault
                        </a>
                      </>
                    ),
                  },
                  { icon: FaMapMarkerAlt, text: "Cuttack, Odisha" },
                  {
                    icon: FaPhone,
                    text: (
                      <a
                        href="https://wa.me/919348269040"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        +91 9348269040
                      </a>
                    ),
                  },
                  {
                    icon: FaEnvelope,
                    text: (
                      <a
                        href="mailto:biswajit9348das@gmail.com"
                        className="hover:underline"
                      >
                        biswajit9348das@gmail.com
                      </a>
                    ),
                  },
                  { icon: FaGlobe, text: "biswajitdev.in" },
                  { icon: FaGenderless, text: "he/him" },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={idx}
                      className="flex items-center gap-2 font-thin text-sm"
                    >
                      <div
                        className={`relative flex items-center justify-center w-8 h-8 rounded-xl ${
                          darkMode
                            ? "bg-neutral-900 border-zinc-950"
                            : "bg-zinc-50 border-gray-200"
                        } shadow-[inset_0_0_0_1px_#e5e5e5]`}
                      >
                        <div className="absolute inset-1 rounded-md border border-zinc-500" />
                        <Icon
                          className={`${
                            darkMode ? "text-white" : "text-zinc-700"
                          } text-sm`}
                        />
                      </div>
                      <span
                        className={`${
                          darkMode ? "text-white" : "text-black"
                        } text-[14.5px]`}
                      >
                        {item.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
        </main>

        <AboutSocialLinks darkMode={darkMode} />
        <GithubContribution darkMode={darkMode} />
        <TechStack darkMode={darkMode} />
        <ExperienceSection darkMode={darkMode} />
        <ProjectSection darkMode={darkMode} />
        <EducationSection darkMode={darkMode} />
      </BackgroundGrid>
    </div>
  );
}
