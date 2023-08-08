import React from 'react'
import picProfi from '../public/picProfi.jpeg'
import Image from "next/image";

export default function Intro() {
    return (
        <section>
            <div className="flex items-center justify-center">
                <div>
                    <Image src={picProfi} alt="Mustapha Abourar" width="400" height="200" quality="95" priority={true}/>
                </div>
            </div>
        </section>
    )
};
