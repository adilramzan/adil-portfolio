"use client";

import {
    FaCss3,
    FaHtml5,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
    FaPython,
    FaJava,
} from "react-icons/fa";

import {SiTailwindcss,SiNextdotjs} from "react-icons/si";

//about data
const about={
    title:"About me",
    description:
    "Enthusiastic Computer Science student with a strong foundation in C++, Python, OOP, Data Structures, Database Management, SQL, App Development, Cloud Computing, Generative AI and Web Development. Eager to learn new skills and tools by joining your company.",
    info:[
        {
            fieldName:"Name",
            fieldValue:"Adil Ramzan"
        },
        {
            fieldName:"Phone",
            fieldValue:"(+92) 306 9602192"
        },
        {
            fieldName:"Experience",
            fieldValue:"2+ Years"
        },
        {
            fieldName:"Skype",
            fieldValue:"adilramzan01"
        },
        {
            fieldName:"Nationality",
            fieldValue:"Pakistani"
        },{
            fieldName:"Email",
            fieldValue:"adil.ramzan192@gmail.com"
        },
        {
            fieldName:"Freelance",
            fieldValue:"Availabe"
        },
        {
            fieldName:"Languages",
            fieldValue:"English,Hindi,Urdu"
        },
    ]
};

//experience data
const experience ={
    icons:"",
    title:"My experience",
    description:
    "I have Worked in Web Development(MERN,FLASK,NEXTJS), App Development(React Native,Expo,Redux,Andriod Studio),Generative AI Models,OPENCV, OCR MODEL,CHATBOT,VOICE RECOGNITION,VOICE ASSISTANT, APIs, DATABASE MANAGEMENT, CLOUD PRACTITIONER ",
    items:[
        {
            company:"RDEVSOL",
            position:"Flask Full Stack Developer",
            duration:"3 months",
        },
        {
            company:"RDEVSOL",
            position:"Python Developer",
            duration:"3 months",
        },
        {
            company:"FAST NUCES Islamabad",
            position:"AI Lab Assistant",
            duration:"6 months",
        },
        {
            company:"Thinker's Academy",
            position:"Programming Teacher",
            duration:"6 months",
        },
        
    ],
};

//education data
const education ={
    icons:"",
    title:"My education",
    description:
    "Key Courses: Object Oriented Programming (C++), Database Systems (SQL), Web Development (Flask, Python), React Native App Development, Artificial Intelligence, Data Structures, Design & Analysis of Algorithms, Operating Systems,MERN Stack, Web design, and App design.",
    items:[
        {
            institution:"FAST NUCES Islamabad",
            degree:"BS Computer Science",
            duration:"2020- ...",
        },
        {
            institution:"LinkedIn Learning",
            degree:"Flask Full Stack Developer",
            duration:"2023",
        },
        {
            institution:"YouTube-Ansh Mehra",
            degree:"Basics of Figma Series",
            duration:"2024",
        },
        {
            institution:"Udemy-Dr.Angela Yu",
            degree:"100 days of Python",
            duration:"2024",
        },
    ],
};

//skills data
const skills = {
    title:"My skills",
    description:
    "I have worked on these skill in my university projects and some paid projects as well.",
    skillList:[
        {
            icon:<FaPython/>,
            name:"Python",
        },
        {
            icon:<FaJava/>,
            name:"Java",
        },
        {
            icon:<FaHtml5/>,
            name:"html 5",
        },
        {
            icon:<FaCss3/>,
            name:"css 3",
        },
        {
            icon:<FaJs/>,
            name:"javascript",
        },
        {
            icon:<FaReact/>,
            name:"react.js",
        },
        {
            icon:<SiNextdotjs/>,
            name:"next.js",
        },
        {
            icon:<SiTailwindcss/>,
            name:"tailwind.css",
        },
        {
            icon:<FaNodeJs/>,
            name:"node.js",
        },
        {
            icon:<FaFigma/>,
            name:"figma",
        },
        
    ],
};

import {Tabs,TabsContent,TabsList,TabsTrigger} from "@/components/ui/tabs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import {ScrollArea} from "@/components/ui/scroll-area";
import { motion } from "framer-motion"; 

const Resume = () =>{
    return(
        <motion.div 
            initial={{opacity:0}}
            animate={{
            opacity:1,
            transition:{delay:2.4,duration:0.4,ease:"easeIn"}
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs 
                 defaultValue="experience"
                 className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList
                     className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0"
                    >
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Eductaion</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/*content*/}
                    <div className="min-h-[70vh] w-full">
                        {/*experience*/}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p
                                 className="mx-w-[600px] text-white/60 mx-auto xl:mx-0"
                                >{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item,index)=>{
                                            return(
                                                <li 
                                                key={index}
                                                className="bg-[#232329] h-[184px] px-10 py-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent-default">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/*dot*/}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent-default"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/*education*/}
                        <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p
                                 className="mx-w-[600px] text-white/60 mx-auto xl:mx-0"
                                >{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item,index)=>{
                                            return(
                                                <li 
                                                key={index}
                                                className="bg-[#232329] h-[184px] px-10 py-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent-default">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/*dot*/}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent-default"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/*skills*/}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill,index)=>{
                                        return<li key={index}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                    <div className="text-6xl group-hover:text-accent-default transition-all duration-300">{skill.icon}</div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className="capitalize">{skill.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        {/*about me*/}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item,index)=>{
                                        return(
                                            <li 
                                            key={index}
                                            className="flex items-center justify-center xl:justify-start gap-4"
                                            >
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        );
                                    })}
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