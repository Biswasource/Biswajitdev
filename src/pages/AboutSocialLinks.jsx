import React from "react";
import { motion } from "framer-motion";

const socials = [
  {
    name: "LinkedIn",
    user: "ncdai",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
  },
  {
    name: "GitHub",
    user: "ncdai",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "X (Formerly Twitter)",
    user: "@iamncdai",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/95/X_logo_2023.svg",
  },
  {
    name: "daily.dev",
    user: "@ncdai",
    img: "https://daily.dev/favicon-96x96.png",
  },
  {
    name: "Discord",
    user: "Quaric",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg",
  },
  {
    name: "YouTube",
    user: "@ncdai",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_2024.svg",
  },
];

const AboutSocialLinks = () => {
  const blurVariant = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, delay: i * 0.03 },
    }),
  };

  const paragraphs = [
    <>
      Hello, World! I am <span className="font-semibold">Biswajit Das</span> — a
      Full-Stack Developer passionate about crafting scalable, high-performance,
      and user-focused web applications with modern, intuitive design and clean
      architecture.
    </>,
    <>
      With deep experience in the{" "}
      <span className="font-semibold text-black">MERN stack</span>, I specialize
      in building robust and elegant solutions using React, Node.js, Express,
      and MongoDB. I’m also exploring TypeScript, Next.js, and Supabase to push
      my development boundaries even further.
    </>,
    <>
      I’ve built several end-to-end products — from real-time applications to
      complex management systems — including{" "}
      <a
        href="#"
        className="text-black font-semibold underline underline-offset-3"
      >
        Quexer Vendor Shipping Portal
      </a>
      , a full-featured platform integrated with WooCommerce, Delhivery One API,
      and Razorpay to streamline vendor shipping and payment workflows.
    </>,
    <>
      I’m also passionate about open-source development and UI engineering,
      currently building{" "}
      <a
        href="#"
        className="text-black font-semibold underline underline-offset-3"
      >
        ui-vault
      </a>{" "}
      — a CLI for developers to quickly add themed React components with
      IntelliSense support. Beyond coding, I love exploring creative UI
      animations and enhancing UX accessibility.
    </>,
  ];

  return (
    <div className="flex justify-center items-center px-4 sm:px-6 py-8 relative">
      <div className="w-full max-w-3xl bg-white rounded-2xl p-2 sm:p-2 md:p-0">
        {/* Social Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x rounded-xl overflow-hidden cl cursor-pointer">
          {socials.map((s, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-4 p-4 sm:p-6 hover:bg-gray-50 transition"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              custom={i}
              variants={blurVariant}
            >
              <img
                src={s.img}
                alt={s.name}
                className="w-10 h-10 object-contain"
              />
              <div>
                <p className="font-semibold text-black">{s.name}</p>
                <p className="text-black text-sm">{s.user}</p>
              </div>
              <div className="ml-auto text-gray-400 text-lg">↗</div>
            </motion.div>
          ))}
        </div>

        {/* About Section */}
        <div className="mt-10 title">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold mb-4 text-black"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            custom={0}
            variants={blurVariant}
          >
            About
          </motion.h2>

          {paragraphs.map((para, i) => (
            <motion.p
              key={i}
              className={`leading-relaxed mb-4 text-sm sm:text-sm ${
                i === 0 ? "text-black" : "text-gray-900"
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              custom={i + 1}
              variants={blurVariant}
            >
              {para}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSocialLinks;
