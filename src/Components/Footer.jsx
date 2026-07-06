import React, { useEffect } from 'react'
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { RiVercelFill } from "react-icons/ri";
import { SiNetlify } from "react-icons/si";
import { SiRender } from "react-icons/si";
import { FaSnapchat } from "react-icons/fa";
import AOS from 'aos'
import 'aos/dist/aos.css';

function Footer() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div id='Contact' className='flex w-full text-white text-4xl md:text-5xl  mx-4 md:mt-20 md:px-20 mb-12 px-4 '>
            <h1 className='text-2xl md:text-4xl text-white font-bold'>Contact</h1>
            <div className='md:grid md:grid-cols-5 md:mt-25 md:p-0 py-2 ml-2 md:ml-60  md:gap-20 grid grid-cols-2 mt-30  mr-30 gap-20 ' >
                <a href="mailto:Ashishmehtataj6@gmail.com" target='_blank' className="items md:border-2 shadow-2xl shadow-yellow-300 rounded-2xl hover:scale-120 duration-300" title='Email' data-aos="zoom-in"><MdEmail size={60} /></a>
                <a href="https://www.linkedin.com/in/ashish-mehta-b5363a200 " target='_blank' className="items md:border-2 shadow-2xl shadow-yellow-300 rounded-2xl hover:scale-120" title='Linkdin' data-aos="zoom-in"><FaLinkedin size={60} /></a>
                <a href="https://www.instagram.com/ashish_mehta81" target='_blank' className="items md:border-2 shadow-2xl shadow-yellow-300 rounded-2xl hover:scale-120 duration-300" data-aos="zoom-in"><FaInstagramSquare size={60} /></a>
                <a href="https://www.facebook.com/share/18rXQ7Pp8F/" target='_blank' className="items md:border-2 shadow-2xl shadow-yellow-300 rounded-2xl hover:scale-120 duration-300" data-aos="zoom-in"><FaFacebookSquare size={60} /></a>
                <a href="https://wa.me/918103701398" target='_blank' className="items hover:scale-120 duration-300 md:border-2 shadow-2xl shadow-yellow-300 rounded-2xl" data-aos="zoom-in"><FaWhatsappSquare size={60} /></a>
                <a href="https://www.snapchat.com/add/ashishmehta5632" target='_blank' className="items md:border-2 shadow-2xl shadow-yellow-300 rounded-2xl hover:scale-120 duration-300" data-aos="zoom-in"><FaSnapchat size={60} /></a>
                <a href="https://github.com/Ashishmehtataj" target='_blank' className="items md:border-2 shadow-2xl shadow-yellow-300 rounded-2xl hover:scale-120 duration-300" data-aos="zoom-in"><FaSquareGithub size={60} /></a>
                <a href="https://twitter.com/AshishMehta86" target='_blank' className="items md:border-2 shadow-2xl shadow-yellow-300 rounded-2xl hover:scale-120 duration-300" data-aos="zoom-in"><FaTwitterSquare size={60} /></a>
                <a href="https://vercel.com/ashishmehtataj6-8347s-projects" target='_blank' className="items md:border-2 shadow-2xl shadow-yellow-300 rounded-2xl hover:scale-120 duration-300" data-aos="zoom-in"><RiVercelFill size={60} /></a>
                <a href="https://dashboard.render.com/" target='_blank' className="items md:border-2 shadow-2xl shadow-yellow-300 rounded-2xl hover:scale-120 duration-300 " data-aos="zoom-in"><SiRender size={60} data-aos="zoom-in" /></a>
                <a href="https://app.netlify.com/teams/ashishmehtataj/projects" target='_blank' className="items md:border-2 shadow-2xl shadow-yellow-300 rounded-2xl hover:scale-120 duration-300" data-aos="zoom-in"><SiNetlify size={60} /></a>
            </div>
            <br />
        </div>
    )
}

export default Footer
