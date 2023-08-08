import React from "react";
import SectionHeading from "@/components/section-heading";
import { projectsData } from "@/lib/data";

type ProjectProps = {
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
};

export default function Projects() {
    return (
        <section>
            <SectionHeading>My projects</SectionHeading>
            <div>
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project}/>
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
};

function Project({title, description, tags, imageUrl}: ProjectProps) {
    return (
        <div>
            {title}
        </div>
    )
};
