"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
                <p className="mb-3">
                    After many years working in {" "}
                    <span className="font-medium">Tourism & Hotel</span>, I decided to pursue my
                    passion for programming. I enrolled in a coding School  Holberton School{" "}
                    <span className="font-medium">as a FullStack developer </span>.{" "}
                    <span className="italic">My favorite part of programming</span> is the
                    problem-solving aspect. I <span className="italic">like</span> solve problems and the
                    feeling of finally figuring out a solution to a problem.
                    <br/>My core stack
                    is{" "}
                    <span className="font-medium"> Web & Mobile Development Javascript MERN and Python Flask & Django
                    </span>
                    . I am also familiar with many languages and DBMS like Mongodb, Mysql, Postgresql, Low Level Language C, some important languages and CI/CD infrastructure programmes Docker Nginx...<br/> I am always looking to
                    learn new technologies.<br/> I am currently looking for a{" "}
                    <span className="font-medium">full-time position</span> as a software
                    developper.
                </p>
                <p>
                    <span className="italic">When I'm not coding</span>, I enjoy playing
                    video games, making music, and have fun time with my kids
                </p>
        </motion.section>

    )
}
