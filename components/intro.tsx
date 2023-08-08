'use client';

import React from 'react'
import picProfi from '../public/picProfi.jpeg'
import Image from "next/image";
import { motion } from 'framer-motion';
import Link from 'next/link';
import {BsArrowRight, BsLinkedin} from "react-icons/bs";
import {HiDownload} from "react-icons/hi";
import { FaGithub } from 'react-icons/fa';

export default function Intro() {
    return (
        <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "tween",
                        duration: 0.2,
                    }}>
                        <Image src={picProfi} alt="Mustapha Abourar" width="400" height="200" quality="95" priority={true}
                               className=" h-80 w-80 object-cover rounded-full border-[0.35rem] border-white shadow-xl"/>
                    </motion.div>
                    <motion.span className='absolute bottom-0 right-8 text-8xl'
                    initial={{
                        opacity: 0,
                        scale: 0,
                    }} animate={{
                        opacity: 1,
                        scale: 1,
                    }} transition={{
                        type: "spring",
                        stiffness: 125,
                        delay: 0.1,
                        duration: 0.7,
                    }}
                    >
                        👋
                    </motion.span>
                </div>
            </div>
            <div>
                <motion.p className="font-medium mb-10 mt-4 px-4 text-3xl !leading-[1.5] sm:text-4xl"
                initial={{
                    opacity: 0,
                    y: 100,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}>
                    <span className="font-bold">Hello, I'm Mustapha.</span> I'm a{" "}
                    <span className="font-bold">full-stack developer</span> with{" "}
                    <span className="font-bold">2 Years as a Holberton School Student.</span> I enjoy
                    building <span className="italic">sites & apps</span>. My focus is{" "}
                    <span className="underline">React (Next.js)</span>.
                </motion.p>
            </div>
            <motion.div className="flex flex-col sm:flex-row
            items-center justify-centergap-2 px-4 font-medium"
            initial={{
                opacity: 0,
                y: 100,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                delay: 0.1,
            }}>
                <Link href="#contact" className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full" >
                    Contact me <BsArrowRight className="inline-block w-6 h-6 ml-2" />
                </Link>
                <a href=""
                   className="bg-white px-7 py-3 flex items-center gap-2 rounded-full"
                >Download CV <HiDownload /></a>
                <a href="" className="bg-white text-gray-700 px-7 py-3 flex items-center gap-2 rounded-full text-[1.35rem]">
                    <BsLinkedin />
                </a>
                <a href="" className="bg-white text-gray-700 px-7 py-3 flex items-center gap-2 rounded-full text-[1.35rem]">
                    <FaGithub />
                </a>
            </motion.div>
        </section>
    )
};
