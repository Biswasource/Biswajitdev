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
//import { MdVerified } from "react-icons/md";
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

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sentences.length);
    }, 2500); // Change sentence every 2.5s
    return () => clearInterval(timer);
  }, []);

  const speakName = () => {
    // Stop if already speaking
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance("Biswajit Das");
    utterance.lang = "en-IN"; // Indian English accent (can use "en-US" or others)
    utterance.rate = 1; // speed (1 is normal)
    utterance.pitch = 1.1; // pitch for tone
    utterance.volume = 1; // volume 0–1

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="min-h-screen  bg-white text-zinc-800 font-mono">
      <header className="flex justify-center border-b border-zinc-200 bg-white">
        <div className="flex items-center justify-between w-full max-w-3xl py-3 px-4 sm:py-4 sm:px-8">
          {/* Logo */}
          <div className="flex items-center gap-4 sm:gap-10">
            <span className="font-bold text-lg sm:text-xl tracking-tight cl sm:text-3xl">
              BD
            </span>
          </div>

          {/* Nav Links */}
          <nav className="flex items-center gap-2 sm:gap-6 text-xs sm:text-sm text-zinc-600 title">
            <a href="" className="hover:text-black">
              <Link to="/blog">Blog</Link>
            </a>
            <a href="#" className="hover:text-black">
              Components
            </a>

            {/* Right Icons */}
            <div className="flex items-center gap-2 sm:gap-3 rounded-xl">
              {/* Search */}
              <div className="relative rounded-2xl">
                <FaSearch className="absolute left-1.5 top-1 text-sm sm:text-sm text-black" />
                <input
                  type="text"
                  placeholder="Ctrl K"
                  className="pl-5 pr-2 py-1 text-xs sm:text-xs border border-gray-400 rounded-xl w-20 sm:w-24 text-center bg-zinc-100"
                />
              </div>

              {/* GitHub */}
              <button className="p-1 border rounded-full hover:bg-zinc-100">
                <FaGithub className="text-black text-lg sm:text-xl" />
              </button>

              {/* Theme Toggle */}
              <button className="p-1.5 sm:p-2 border rounded-md hover:bg-zinc-100 text-sm sm:text-base">
                ☀️
              </button>
            </div>
          </nav>
        </div>
      </header>

      <BackgroundGrid>
        {/* Main Container */}
        <main className="flex justify-center px-6 bebas-neue-regular z-99 mt-5">
          <div className="w-full max-w-3xl">
            {/* Profile Section */}
            <section className="relative border-b border-zinc-200 py-2 flex  sm:flex-row items-center gap-2 sm:gap-6">
              {/* Avatar */}
              <img
                src="./me.jpg"
                alt="avatar"
                className="w-32 h-32 sm:w-36 sm:h-36 mr-2 rounded-full border-4 border-white shadow-md object-cover"
              />

              {/* Info */}
              <div className="relative text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl font-bold flex items-center justify-center sm:justify-start gap-2">
                  Biswajit Das
                  <MdVerified className="text-sky-500 text-xl sm:text-2xl" />
                  {/* Speaker icon */}
                  <button
                    onClick={speakName}
                    className="text-gray-600 hover:text-black transition-colors"
                    aria-label="Speak Biswajit Das"
                  >
                    <FaVolumeUp
                      className={`text-lg sm:text-xl transition-transform duration-300 ${
                        isSpeaking ? "text-gray-400" : "text-gray-500"
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
                    className="absolute font-arial text-sm text-left sm:text-sm title"
                  >
                    {sentences[index]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </section>

            <section className="py-4  relative mt-3">
              <ul className="text-zinc-900 text-[16px] space-y-0.1">
                <li className="cl flex items-center gap-2 font-thin text-md">
                  <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-zinc-50 border-[4px] border-white shadow-[inset_0_0_0_1px_#e5e5e5]">
                    <div className="absolute inset-0.5 rounded border border-zinc-200" />
                    <FaCode className="text-zinc-600 text-sm" />
                  </div>
                  <span className="text-black text-[14.5px] title">
                    Backend Developer
                  </span>
                </li>
                <li className="cl flex items-center gap-2 font-thin text-sm">
                  <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-zinc-50 border-[4px] border-white shadow-[inset_0_0_0_1px_#e5e5e5]">
                    <div className="absolute inset-0.5 rounded border border-zinc-200" />
                    <FaInfoCircle className="text-zinc-600 text-sm" />
                  </div>
                  <span className="text-black text-[14.5px] title">
                    Founder{" "}
                    <a
                      href="https://uivault.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold cursor-pointer hover:underline "
                    >
                      @uivault
                    </a>
                  </span>
                </li>
                <li className="cl flex items-center gap-2 font-thin text-sm">
                  <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-zinc-50 border-[4px] border-white shadow-[inset_0_0_0_1px_#e5e5e5]">
                    <div className="absolute inset-0.5 rounded border border-zinc-200" />
                    <FaMapMarkerAlt className="text-zinc-600 text-sm" />
                  </div>
                  <span className="text-black text-[14.5px] title">
                    Cuttack,Odisha
                  </span>
                </li>
                <li className="cl flex items-center gap-2 font-thin text-sm text-black">
                  <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-zinc-50 border-[4px] border-white shadow-[inset_0_0_0_1px_#e5e5e5]">
                    <div className="absolute inset-0.5 rounded border border-zinc-200" />
                    <FaPhone className="text-zinc-600 text-sm" />
                  </div>
                  <a
                    href="https://wa.me/919348269040"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black text-[14.5px] hover:underline title"
                  >
                    +91 9348269040
                  </a>
                </li>
                <li className="cl flex items-center gap-2 font-thin text-sm">
                  <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-zinc-50 border-[4px] border-white shadow-[inset_0_0_0_1px_#e5e5e5]">
                    <div className="absolute inset-0.5 rounded border border-zinc-200" />
                    <FaEnvelope className="text-zinc-600 text-sm" />
                  </div>
                  <a
                    href="mailto:biswajit9348das@gmail.com"
                    className="text-black text-[14.5px] hover:underline title"
                  >
                    biswajit9348das@gmail.com
                  </a>
                </li>
                <li className="cl flex items-center gap-2 font-thin text-sm">
                  <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-zinc-50 border-[4px] border-white shadow-[inset_0_0_0_1px_#e5e5e5]">
                    <div className="absolute inset-0.5 rounded border border-zinc-200" />
                    <FaGlobe className="text-zinc-600 text-sm" />
                  </div>
                  <span className="text-black text-[14.5px] title">
                    biswajitdev.in
                  </span>
                </li>
                <li className="cl flex items-center gap-2 font-thin text-sm">
                  <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-zinc-50 border-[4px] border-white shadow-[inset_0_0_0_1px_#e5e5e5]">
                    <div className="absolute inset-0.5 rounded border border-zinc-200" />
                    <FaGenderless className="text-zinc-600 text-sm" />
                  </div>
                  <span className="text-black text-[14.5px] title">he/him</span>
                </li>
              </ul>
            </section>
          </div>
        </main>
        <AboutSocialLinks />
        <GithubContribution />
        <TechStack />
        <ExperienceSection />
        <ProjectSection />
        <EducationSection />
      </BackgroundGrid>
    </div>
  );
}
