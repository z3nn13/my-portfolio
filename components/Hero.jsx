import React from 'react'
import Image from 'next/image';
import QuickLink from '@components/QuickLink'

const Hero = () => {
    return (
        <section className="hero w-full flex flex-center flex-col gap-6 ">
            <div className="mx-auto mt-24 animate__animated animate__fadeInUp" >
                <Image
                    src="./assets/pfp.jpg"
                    width={202}
                    height={102}
                />
            </div>
            <h1 className="text-2xl text-center font-extrabold text-accent animate__animated animate__fadeInUp animate__delay-1s">
                Hi, I'm Paul
            </h1>
            <p className="text-md text-center font-semibold animate__animated animate__fadeInUp animate__delay-2s">
                Full-stack Software Developer
            </p>

            <ul className="social-icons flex justify-center gap-9 animate__animated animate__fadeInUp animate__delay-3s">
                <li>
                    <a href="https://www.instagram.com/zen.r.knb/" target='_blank' rel="noopener noreferrer"><Image src="./assets/instagram.svg" width={30} height={30} /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/paul-phyo-896bb7261/" target="_blank" rel="noopener noreferrer">
                        <Image src="./assets/linkedin.svg" width={30} height={30} /></a>
                </li>
                <li>
                    <a href="https://github.com/z3nn13/" target="_blank" rel="noopener noreferrer">
                        <Image src="./assets/github.svg" width={30} height={30} /></a>
                </li>
            </ul>

            <ul className="quick-links flex justify-center gap-3 mt-4 animate__animated animate__fadeInUp animate__delay-4s">
                <QuickLink link="Skills" />
                <QuickLink link="Projects" />
                <QuickLink link="About" />
                <li className='QuickLink'>
                    <a className="bg-accent px-2 py-2 rounded-md font-semibold text-sm text-white" href="#Contact">Contact Me</a>
                </li>
            </ul>

        </section >
    )
}

export default Hero;
