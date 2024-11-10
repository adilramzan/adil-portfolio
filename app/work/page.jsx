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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin vulputate lectus sed libero consequat,sit amet ultrices erat malesuada",
        stack:[{name:"Html 5"},{name:"Css 3"},{name:"JavaScript"},{name:"Bootstrap"},{name:"Flask"},],
        image:"/assets/01.jpg",
        live:"",
        github:"",
    },
    {
        num:"02",
        category:"fullstack",
        title:"project 2",
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin vulputate lectus sed libero consequat,sit amet ultrices erat malesuada",
        stack:[{name:"Html 5"},{name:"Css 3"},{name:"Node.js"},{name:"MySql"}],
        image:"/assets/03.jpg",
        live:"",
        github:"",
    },
    {
        num:"03",
        category:"App development",
        title:"project 3",
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin vulputate lectus sed libero consequat,sit amet ultrices erat malesuada",
        stack:[{name:"Java"},{name:"Xml"},{name:"MySql"}],
        image:"/assets/06.jpg",
        live:"",
        github:"",
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