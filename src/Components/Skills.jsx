import React, { useEffect } from 'react'
import skills from './data/skills.json' 
import AOS from 'aos'
import 'aos/dist/aos.css';


function Skills() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div id='Skills' className='flex w-full text-white text-4xl md:text-5xl mx-4 md:mt-20 md:px-20 mb-12 px-4'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Skills</h1>
      <div className='items md:grid md:grid-cols-4 md:mt-25 md:gap-8 mt-16 md:mr-20 mr-20 md:space-y-0 space-y-10'>
        {skills.map((skill) => (
          <div className='border rounded-2xl shadow-yellow flex flex-col items-center justify-center p-6 text-center hover:scale-102 duration-700' key={skill.title} data-aos='flip-left'>
            <img src={`/assets/${skill.imageSrc}`} alt={skill.title} className='w-50 h-50 border border-gray-50 rounded-2xl  '  />
            <h3 className='text-2xl' >{skill.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
