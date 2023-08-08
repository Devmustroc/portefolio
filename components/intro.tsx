'use client';

import React from 'react'
import picProfi from '../public/picProfi.jpeg'
import Image from "next/image";
import { motion } from 'framer-motion';

export default function Intro() {
    return (
        <section>
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div>
                        <Image src={picProfi} alt="Mustapha Abourar" width="400" height="200" quality="95" priority={true}
                               className=" h-80 w-80 object-cover rounded-full border-[0.35rem] border-white shadow-xl"/>
                    </motion.div>
                    <span className='absolute bottom-0 right-8 text-8xl'>
                        👋
                    </span>
                </div>
            </div>
        </section>
    )
};
