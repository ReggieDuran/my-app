"use client";

import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

const about = {
  title: "About me",
  description: "Lorem ipsum dolor sit amet...",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Reggie Duran",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+63) 926 523 8186",
    },
    {
      fieldName: "Experience",
      fieldValue: "9+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Filipino",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "reggie-duran-20bb80156",
    },
    {
      fieldName: "Email",
      fieldValue: "reggieduran15@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Filipino",
    },
  ],
};

const experiences = {
  title: "Professional Experience",
  items: [
    {
      company: "Gambit Technologies, Inc",
      position: "Web Developer",
      responsibilities:
        "Created and developed WordPress plugins and themes. Built websites from scratch through custom theme/blank theme. Maintained company products and directly worked with QA and Lead/Founder of the company.",
      duration: "2015 - 2018",
      stack: ["WordPress", "HTML", "CSS", "JavaScript", "PHP", "Custom Theme"],
    },
    {
      company: "Sonnet Digital",
      position: "Frontend Developer",
      responsibilities:
        "Developed WordPress websites from scratch using customized themes and plugins. Debugged and maintained existing websites. Coordinated directly with the project managers and QA testers.",
      duration: "2018 - 2019",
      stack: ["WordPress", "HTML", "CSS", "JavaScript", "PHP", "Custom Theme"],
    },
    {
      company: "Digispark Tech",
      position: "Frontend Developer",
      responsibilities:
        "Assigned to develop and build mobiles applications, re-usable templates and components.",
      duration: "2019 - 2020",
      stack: [
        "Vue JS",
        "Basic Angular",
        "Basic Ionic",
        "HTML",
        "SCSS",
        "CSS",
        "JavaScript",
      ],
    },
    {
      company: "Sonnet Digital - Contractor",
      position: "Frontend Developer",
      responsibilities:
        "As a contracter I was assigned to develop WordPress websites from scratch using customized themes and plugins. Debugged and maintained existing websites. Coordinated directly with the project managers and QA testers.",
      duration: "2020 - 2021",
      stack: ["WordPress", "HTML", "CSS", "JavaScript", "PHP", "Custom Theme"],
    },
    {
      company: "Information Professionals Inc",
      position: "Programmer - JavaScript Analyst",
      responsibilities:
        "Performed compliance with software development lifecycle standards of the company. Coordinated with vendor or conducts own investigation and resolution of errors reported during SIT and UAT. Maintained the systems once they're up and running in PROD, and performed fixes or application enhancements as needed. Conducted unit testing on written codes to ensure program perform per design at the unit level.",
      duration: "2021-2024",
      stack: [
        "React JS",
        "Node JS",
        "MongoDB",
        "Redux/Redux Saga",
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
    {
      company: "Code Switch - Contractor",
      position: "Frontend Developer",
      responsibilities:
        "Collaborated with co-devs and team leads. Assigned to write modern, performant, and maintainable code for the project. Created unit and integration tests to ensure project's quality.",
      duration: "2023 - 2024",
      stack: [
        "React JS",
        "TypeScript",
        "Mantine UI",
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
    {
      company: "Accenture",
      position: "App/Cloud Support Specialist",
      responsibilities:
        "Assigned to perform ServiceNow services. Currently certified as system administrator(CSA) and ongoing to certify in Software Asset Management(SAM) module for ITAM path.",
      duration: "2024 - Present",
      stack: [
        "ServiceNow",
        "CSA",
        "MC - Welcome to ServiceNow",
        "MC - Performance Analytics",
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
  ],
};

const education = {
  title: "My education",
  description: "Lorem ipsum dolor sit amet...",
  items: [
    {
      institution: "Saint Joseph College of Bulacan",
      degree: "Secondary - HS Graduate",
      duration: "2007 - 2011",
    },
    {
      institution: "Polytechnic University of the Philippines",
      degree: "Tertiary - BSIT Gradutate",
      duration: "2011 - 2015",
    },
  ],
};

const skills = {
  title: "My skills",
  description: "Lorem Ipsum dolor sit amet...",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javaScript",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwindCSS",
    },
    {
      icon: <FaNodeJs />,
      name: "nodeJS",
    },
    {
      icon: <SiMongodb />,
      name: "mongodb",
    },
    {
      icon: <SiExpress />,
      name: "Express",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experiences.title}</h3>
                <ScrollArea className="h-[450px]">
                  <ul className="grid grid-cols-1 gap-[30px]">
                    {experiences.items.map((experience, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] lg:h-[450px] h-auto py-6 px-10 rounded-xl flex flex-col justify-evenly lg:items-start gap-1 text-left"
                      >
                        <div className="flex flex-row justify-between items-start w-full mb-3">
                          <div>
                            <h3 className="text-xl ">{experience.position}</h3>
                            <p className="text-white/60">
                              {experience.company}
                            </p>
                          </div>
                          <span className="text-accent">
                            {experience.duration}
                          </span>
                        </div>
                        <div>{experience.responsibilities}</div>
                        {experience.stack && (
                          <ul className="flex gap-3 mt-3 flex-wrap">
                            {experience.stack.map((item, index) => (
                              <li
                                key={index}
                                className="bg-white rounded-md text-primary px-3"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-9">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            {/* about me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>-
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
