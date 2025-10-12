import React from "react";
import ExpressLogo from "../../public/express-svgrepo-com.svg";
import JavaScript from "../../public/javascript-svgrepo-com.svg";
import MongoDB from "../../public/mongo-svgrepo-com.svg";
import Nodejs from "../../public/nodejs-svgrepo-com.svg";
import pgsql from "../../public/pgsql-svgrepo-com.svg";
import python from "../../public/python-svgrepo-com.svg";
import react from "../../public/react-svgrepo-com.svg";
import redux from "../../public/redux-svgrepo-com.svg";
import tailwind from "../../public/tailwind-svgrepo-com.svg";
import typescript from "../../public/typescript-logo-svgrepo-com.svg";
import shadcn from "../../public/shadcn-ui-light.svg";
import radix from "../../public/radixui-light.svg";
import motion from "../../public/motion.svg";
import reactrouter from "../../public/react-router-light.svg";
import git from "../../public/git.svg";

const logos = [
  { src: ExpressLogo, name: "Express" },
  { src: JavaScript, name: "JavaScript" },
  { src: MongoDB, name: "MongoDB" },
  { src: Nodejs, name: "Node.js" },
  { src: pgsql, name: "PostgreSQL" },
  { src: python, name: "Python" },
  { src: react, name: "React" },
  { src: redux, name: "Redux" },
  { src: tailwind, name: "Tailwind" },
  { src: typescript, name: "TypeScript" },
  { src: shadcn, name: "shadcn/UI" },
  { src: radix, name: "Radix UI" },
  { src: motion, name: "Framer Motion" },
  { src: reactrouter, name: "React Router" },
  { src: git, name: "Git" },
];

function StackSection() {
  return (
    <section className="w-full flex flex-col items-center py-3 px-4 relative">
      <div className="w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-left text-black title">Stack</h2>
      </div>

      <div className="w-full max-w-3xl bg-white/70 backdrop-blur-sm rounded-xl p-3 mt-2">
        <div
          className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-8 gap-4"
          style={{ placeItems: "start" }}
        >
          {logos.map((logo, index) => (
            <div key={index} className="relative group title">
              <img
                src={logo.src}
                alt={logo.name}
                className="w-9 h-9 object-contain hover:scale-110 transition-transform duration-200 cursor-pointer"
              />
              {/* Tooltip */}
              <div
                className="absolute left-1/2 -top-8 transform -translate-x-1/2 
                              bg-black text-white text-xs rounded px-5 py-2 
                              opacity-0 group-hover:opacity-100 
                              transition-opacity duration-200 pointer-events-none z-10"
              >
                {logo.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StackSection;
