'use client';

import React from "react";
import {useSectionInView} from "@/lib/hooks";
import SectionHeading from "@/components/section-heading";
import {FaPaperPlane} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
    const { ref } = useSectionInView("Contact");
    return (
        <motion.section id="contact" ref={ref}
        className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 0.5,
        }}
        viewport={{
            once: true,
        }}
        >
            <SectionHeading>Contact me</SectionHeading>
            <p
            className='text-gray-700'
            >Please contact me directly at {" "}
                <a className="underline" href="mailto:elmustapha.abourar@gmail.com">elmustapha.abourar@gmail.com</a>{" "} or use the form below.
            </p>
            <form
            className="flex flex-col mt-10" action={(formdata) => {
                console.log(formdata);
            }}
            >
                <input type="email" placeholder={'Email'} required maxLength={500}
                className="h-14 px-4 rounded-lg borderBlack"
                />
                <textarea
                    placeholder={"Message"}
                    maxLength={500}
                    required
                className="h-52 my-3 rounded-lg borderBlack p-4"
                />
                <button
                    className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none borderBlack transition-all
                    focus:scale-110 hover:bg-gray-950 hover:scale-110 active:scale-105"
                    type="submit">Submit{" "}
                    <FaPaperPlane
                    className="text-xs opacity-70 transition-all gourp-hover:translate-x-1 group-hover:-translate-y-1"
                    />{" "}
                </button>
            </form>
        </motion.section>
    )
};
