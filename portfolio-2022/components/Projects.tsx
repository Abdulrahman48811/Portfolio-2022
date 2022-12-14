import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import { SocialIcon } from "react-social-icons";
type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative  overflow-hidden flex flex-col text-left md:flex-row 
    max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-1xl sm:text-2xl">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
            scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen h-screen object-cover sm:w-screen sm:h-screen xl:max-w-screen-lg xl:max-l-screen-lg flex-shrink-0 snap-center flex flex-col space-y-5 items-center
             justify-center p-20 md:p-44"
          >
            <motion.img
              initial={{
                y: -300,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt=""
              className="sm:rounded-lg"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-1xl sm:text-3xl font-semibold text-center">
                <span className="underline decoration-[#f7ab0a]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>
              <div className="flex items-center justify-center space-x-4">
                {project?.technologies.map((technology) => (
                  <img
                    className="h-7 w-7 rounded-full sm:h-10 sm:w-10"
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt=""
                  />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-center md:text-left">
                {project?.summary}
              </p>
              <SocialIcon
                key={project._id}
                url={project.linkToBuild}
                fgColor="#f7ab0a"
                bgColor="gray"
                className=""
              />
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
