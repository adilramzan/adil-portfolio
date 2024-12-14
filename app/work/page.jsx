"use client";

import { motion } from "framer-motion";
import React,{useState} from "react";

import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/css";

import {BsArrowUpRight,BsGithub} from "react-icons/bs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num:"01",
        category:"fullstack",
        title:"project 1",
        description:
        "I developed this cake store website using python backend, flask framework and sqlite database.",
        stack:[{name:"Html 5"},{name:"Css 3"},{name:"JavaScript"},{name:"Bootstrap"},{name:"Flask"},],
        image:"/assets/cakestore.jpg",
        live:"",
        github:"https://github.com/adilramzan/cake_store",
    },
    {
        num:"02",
        category:"fullstack",
        title:"project 2",
        description:
        "I have created my portfolio using Next.Js and Tailwind Css.",
        stack:[{name:"Nextjs"},{name:"tailwind css"}],
        image:"/assets/prof.jpg",
        live:"",
        github:"https://github.com/adilramzan/adil-portfolio",
    },
    {
        num:"03",
        category:"App development",
        title:"project 3",
        description:
        "Medicare Application 1. Login 2. Registration 3. Lab Test : Shows Multiple Package details, add to cart, make order 4. Medicine : Shows Medicine List, add to cart, make order 5. Find Doctor : Search Specialist Doctor, book appointment 6. Health Articles : Article Information 7.Order Details : Order information 8.Logout 9.Profile set up and notes to remember medicine and prescriptions.",
        stack:[{name:"Android Studio"},{name:"Java"},{name:"Xml"},{name:"MySql"}],
        image:"/assets/w3.jpg",
        live:"",
        github:"https://github.com/adilramzan/MediCareApp",
    },
    {
        num: "04",
        category: "Generative Model",
        title: "project 4",
        description:
            "I have created this voice cloning generative model using speechbrain/spkrec-xvect-voxceleb and microsoft/speecht5_tts.",
        stack: [{ name: "microsoft/speecht5_tts" }, { name: "speechbrain/spkrec-xvect-voxceleb" }],
        image: "/assets/voicecloning.jpg",
        live: "",
        github: "https://github.com/adilramzan/Voice-Cloning-Generative-Model",
    },
    {
        num: "05",
        category: "App Development",
        title: "project 5",
        description:
            "A multilingual mobile application for peoples to upload services and get jobs. A job platform using voice assistant and registration through ocr and voice recognition.",
        stack: [{ name: "Reactjs" }, { name: "Expo" }, { name: "JavaScript" }, { name: "React Native" }],
        image: "/assets/fyp.jpg",
        live: "",
        github: "",
    },

];

const Work = () =>{
    const[project,setProject]=useState(projects[0]);

    const handleSlideChange = (swiper) =>{
        //get current slide index
        const currentIndex = swiper.activeIndex;
        //update the project state based on current index
        setProject(projects[currentIndex]);

    }

    return(
        <motion.section
            initial={{opacity:0}}
            animate={{
                opacity:1,
                transition:{delay:2.4, duration:0.4,ease:"easeIn"},
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460%] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/*outline null*/}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/*project category*/}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:accent-default transition-all duration-500 capitalize">{project.category} project</h2>
                            {/*project description*/}
                            <p className="text-white/60">{project.description}</p>
                            {/*stack*/}
                            <ul className="flex gap-4">
                                {project.stack.map((item,index)=>{
                                    return <li key={index} className="text-xl text-accent-default">
                                        {item.name}
                                        {/*remove the last comma*/}
                                        {index !== project.stack.length-1 && ","}
                                    </li>
                                })}
                            </ul>
                            {/*border*/}
                            <div className="border border-white/20"></div>
                            {/*buttons*/}
                            <div className="flex items-center gap-4">
                                {/*live project button*/}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-2xl group-hover:text-accent-default"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/*Github project button*/}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent-default"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repo</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper 
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project,index)=>{
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                       <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                        {/*overlay*/}
                                        <div className=""></div>
                                        {/*image*/}
                                        <div className="relative w-full h-full">
                                            <Image 
                                                src={project.image}
                                                fill
                                                className="object-cover"
                                                alt=""
                                            />
                                        </div>
                                       </div>
                                    </SwiperSlide>
                                );
                            })}
                            {/*slider buttons*/}
                            <WorkSliderBtns 
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent-default hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            />
                        </Swiper>
                        
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;