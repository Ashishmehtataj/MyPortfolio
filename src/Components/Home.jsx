import React from 'react'
import image from '../assets/a.png'
import pdf from '../pdf/Resume.pdf'
import { useState, useRef, useEffect } from 'react'
import Typed from 'typed.js'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Dark from '../assets/Dark.png'
import Pure from '../assets/Pure.png'
import Normal from '../assets/Normal.png'
import Dark1 from '../assets/Dark1.png'
import Darknavy from '../assets/Darknavy.png'
import Halkadark from '../assets/Halkadark.png'
import purenavy from '../assets/purenavy.png'
function Home() {

    useEffect(()=>{
        AOS.init({
            duration:2000,
        })
    },[])

    const typedRed = useRef(null)
    useEffect(() => {
        const options = {
            strings: ["I'm a Frontend Developer",
                "I'm a Backend Developer",
                "I'm a MERN Stack Developer",
                "I build Full‑Stack Web Applications",
                "I create Scalable & Modern Solutions",
                "Feel free to contact me",
                "Contact details are mentioned below on this page"],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        }
        const typed = new Typed(typedRed.current, options)
        return () => {
            typed.destroy();
        }
    }, [])

    return (
        <div className='flex w-full mx-4 md:mt-4 md:px-20 mb-12 px-4 flex-col md:flex-row'>
            <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-60 md:ml-8' data-aos ="fade-up-right" >
                <h1 className='text-3xl text-white md:text-6xl font-bold flex leading-normal tracking-tighter'>Hello' I am <span className='ml-3 text-yellow-200'>Ashish Mehta</span></h1>
                <p className='text-2xl mt-4 md:text-5xl text-white tracking-tight ' ref={typedRed}></p>
                <br /><br />
                <div className='flex flex-row mr-6 md:mt-20 text-center'>
                    <a
                    href={pdf}
                    download="UpdatedResume.pdf"
                    className="md:px-4 py-2 text-xl rounded-md md:ml-10 bg-blue-400 border border-yellow-500 text-black md:items-center hover:bg-yellow-500 hover:text-white transition-all duration-300"
                >Download Resume</a>
                    <a
                    href="#Contact"
                    className="px-4 py-2 text-xl rounded-md ml-10 bg-blue-400 border border-yellow-500 text-black md:items-center hover:bg-yellow-500 hover:text-white transition-all duration-300"
                >Contact Me</a>

                </div>
            </div>
            <div className='w-full order-1 md:w-1/2 mt-16  md:mr-0 md:ml-0 ' data-aos = "fade-up-left">
                <img src={Normal} alt="" className=" w-120 
                 rounded-t-full rounded-b-full md:ml-30 md:mt-14 profile-animation" />
            </div>
        </div>
    )
}
export default Home

