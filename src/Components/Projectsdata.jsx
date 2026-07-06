import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

function Projectsdata({ title, main, image , Demo, Source }) {
    const Projects = () => {
        useEffect(()=>{
            AOS.init()
        },[])}
    return (
        <div className='p-3 md:mx-0 md:p-6 flex flex-col w-80 md:w-60 md:ml-30 md:mt-8 md:h-125 border-2 border-yellow-200 md-mb-4 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl hover:scale-102 duration-300'  data-aos='zoom-in-up' >
            <img className='p-4' src={image} alt={title} className='rounded-2xl border border-yellow-100' />
            <h3 className='px-4 mt-3 text-xl text-center md:text-xl font-bold leading-normal'>{title}</h3>
            <p className='px-4 text-sm  md:text-md leading-tight py-2 md:mt-2'>{main}</p>
            <div className='flex justify-around md:justify-between'>
                <a
                    href={Demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 
             hover:opacity-85 duration-300 hover:scale-105 font-semibold cursor-pointer border  hover:bg-yellow-500
             rounded-3xl bg-[#465697]"
                >
                    Demo
                </a>
                <a
                    href={Source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 
             hover:opacity-85 duration-300 hover:scale-105 font-semibold cursor-pointer border hover:bg-yellow-500
             rounded-3xl bg-[#465697]"
                >
                    Source
                </a>
            </div>

        </div>
    )
}

export default Projectsdata
