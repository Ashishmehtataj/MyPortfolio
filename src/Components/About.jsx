import React, { useEffect } from 'react'
import image from '../assets/a.png'
import { IoArrowForward } from "react-icons/io5";
import AOS from 'aos'
import 'aos/dist/aos.css';
import Dark from '../assets/Dark.png'
import Pure from '../assets/Pure.png'
import Normal from '../assets/Normal.png'
import Dark1 from '../assets/Dark1.png'
import Darknavy from '../assets/Darknavy.png'
import Halkadark from '../assets/Halkadark.png'
import purenavy from '../assets/purenavy.png'

function About() {
    useEffect(()=>{
        AOS.init({
            // duration:2000,
        })
    },[])
    return (
        <div id='About' ><br />
            <h1 className='flex w-full text-white text-4xl md:text-5xl mx-4 md:mt-20 md:px-20 mb-12 px-4 flex-col md:flex-row '>About</h1>
        <div className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-blue shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 gap-x-20' >
            
            <div className=' md:mb-2 mb-6 mx-2 px-2 md:w-180'   data-aos="fade-right"  >
                <img alt="Image" className='md:h-80' src={Halkadark} className="mt-20 md:mt-40" className='w-full md:w-145 rounded-4xl glow-box shadow-[0_0_30px_5px_#FACC15]  '   />
            </div>
           
            <div data-aos="fade-left" data-aos-duration="2000">
                <ul>
                    <div className='flex gap-3 py-4 md:w-110' >
                        <IoArrowForward size={30} className="mt-1" />
                        <span className='w-96'>
                            <h1 className='text-xl md:text-4xl font-semibold leading-normal'>Frontend Developer</h1>
                            <p className='text-sm md:text-xl leading-tight'>I design clean, responsive, and user‑friendly interfaces using React.js, Tailwind CSS, and JavaScript. My focus is on delivering smooth experiences across devices by combining creativity with performance</p>
                        </span>
                    </div>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className="mt-1" />
                        <span className='w-96'>
                            <h1 className='text-xl md:text-4xl font-semibold leading-normal'>Backend Developer </h1>
                            <p className='text-sm md:text-xl leading-tight'>I build secure and scalable server‑side applications with Node.js and Express.js. My work includes creating REST APIs, handling authentication, and integrating MongoDB Atlas for reliable data management.</p>
                        </span>
                    </div>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className="mt-1" />
                        <span className='w-96'>
                            <h1 className='text-xl md:text-4xl font-semibold leading-normal'>MERN Stack Developer</h1>
                            <p className='text-sm md:text-xl leading-tight'>As a MERN stack developer, I use MongoDB, Express.js, React.js, and Node.js to deliver complete web solutions. From UI design to backend logic and deployment, I create modern, efficient, and production‑ready applications.</p>
                        </span>
                    </div>
                </ul>
            </div>

        </div>
        </div>
    )
}

export default About
