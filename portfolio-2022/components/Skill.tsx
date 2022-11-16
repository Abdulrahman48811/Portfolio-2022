import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -120 : 120,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src={urlFor(skill?.image).url()} 
        className="rounded-full border border-gray-800  w-12 h-12 md:w-24 md:h-24 xl:w-29
    xl:h-29 filter group-hover:grayscale transition duration-300 ease-in-out" 
      />  
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300
    ease-in-out group-hover:bg-black h-12 w-12 md:w-24 md:h-24 xl:w-29 xl:h-29 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-white opacity-100">
            {skill.progress}%
            <h1 className="text-xs font-mono">{skill?.title}</h1>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
