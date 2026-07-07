import React, { useEffect } from 'react'
import Projectsdata from './Projectsdata'
import BookNest from '../assets/BookNest.jpg'
import AI from '../assets/AI.png'
import Food from '../assets/Food.jpg'
import Portfolio from '../assets/Portfolio.png'
import Weather from '../assets/Weather.jpg'
import ToDo from '../assets/ToDo.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css';

const Projects = () => {
    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <div id='Projects' className='p-10 md:p-24 text-white'>
            <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
            <div className='py-12 px-8 flex flex-wrap gap-5'    >
                <Projectsdata title="BookNest" main="BookNest is a full‑stack MERN project designed for managing and exploring books online. It combines secure authentication with a smooth user interface, making reading and organizing effortless." image={BookNest}
                    Demo={"https://book-store-five-fawn.vercel.app/"}
                    Source={"https://github.com/Ashishmehtataj/BookStore"}
                />
                <Projectsdata title="AI Assistante" main="A smart AI Assistant built entirely with React.js, delivering a fast, interactive. Designed to showcase modern UI capabilities while simplifying everyday tasks through intelligent responses."
                    image={AI}
                    Demo={"https://virtual-ai-red.vercel.app/"}
                    Source={"https://github.com/Ashishmehtataj/Virtual-Ai"} />
                <Projectsdata title="Food Recipe" main="A dynamic Food Recipe Finder built with React.js, fetching recipes from TheMealDB API for instant search and discovery. Designed to provide a smooth UI and quick access to global cuisines."
                    image={Food}
                    Demo={"https://food-recipe-sand-pi.vercel.app/"}
                    Source={"https://github.com/Ashishmehtataj/Food-Recipe"} />
                <Projectsdata title="Portfolio" main="React.js + Tailwind CSS portfolio showcasing skills and projects in a  responsive design. Clean UI, smooth navigation, and layouts highlighting creativity and expertise. Deploy on Vercel."
                    Demo={"https://ashishmehta-uz39-six.vercel.app/"}
                    Source={"https://github.com/Ashishmehtataj/My_Portfolio"}
                    image={Portfolio}
                />
                <Projectsdata title="Weather App" main="A responsive Weather App built with React.js, providing real - time weather updates using API integration. Clean UI and smooth functionality to quickly check current conditions and forecasts."
                    image={Weather}
                    Demo={"https://weather-app-xi-ashy-68.vercel.app/"}
                    Source={"https://github.com/Ashishmehtataj/WeatherApp"}
                />
                <Projectsdata title="To-Do App" main="A simple ToDo App built with HTML, CSS, and JavaScript to manage daily tasks efficiently. Clean design and interactive features for adding, editing, and deleting tasks with ease. Deploy on Vercel."
                    image={ToDo}
                    Source={"https://github.com/Ashishmehtataj/todoappusingjs"}
                    Demo={"https://todoappusingjs.vercel.app/"}
                />
            </div>
        </div>
    )
}

export default Projects
