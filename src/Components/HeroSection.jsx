import React, {useEffect, useState} from 'react'
import Typed from 'typed.js'
import { FiLinkedin, FiGithub, FiTwitter, FiInstagram, FiMail } from 'react-icons/fi'
import { RiTwitterXLine, RiGoogleFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import KrishImg from '../assets/image.jpg'
import Blob from '../assets/others/blob.svg'
import { TypeAnimation } from 'react-type-animation'


const HeroSection = () => {


  return (
    <>
        <div id='home' className='hidden md:flex min-h-[530px] gap-12 max-w-[1280px] mt-10 mb-8 mx-auto px-20 justify-between items-center'>
            <div className='flex flex-row w-[57%] gap-20 items-center'>
                <div className='flex flex-col gap-7 justify-center'>
                    <Link to={'https://www.linkedin.com/in/krishna-chelluboina/'} target='_blank'>
                        <FiLinkedin className='text-blue-700 hover:drop-shadow-md' size={30}/>
                    </Link>
                    <Link to={'https://github.com/Krishna7141'} target='_blank'>
                        <FiGithub className='text-blue-700 hover:drop-shadow-md' size={30}/>
                    </Link>
                    <Link to={'mailto:krishnavamsich2000@gmail.com'} target='_blank'>
                        <FiMail className='text-blue-700 hover:drop-shadow-md' size={30}/>
                    </Link>
                    <Link to={'https://x.com/krish127228?s=21'} target='_blank'>
                        <RiTwitterXLine className='text-blue-700 hover:drop-shadow-md' size={30}/>
                    </Link>
                    <Link to={'https://www.instagram.com/__vamsi46__/'} target='_blank'>
                        <FiInstagram className='text-blue-700 hover:drop-shadow-md' size={30}/>
                    </Link>
                </div>
                <div className='flex flex-col gap-7 w-full'>
                    <p className='text-5xl font-poppins md:font-[800] lg:font-[900] text-blue-700'><span className='font-semibold text-black'>I'm, </span>Krishna Vamsi</p>
                    <TypeAnimation
                        sequence={[
                            'Software Engineer', 2000,
                            'Full Stack Engineer', 1000,
                            'Frontend Developer', 1000,
                            'Backend Developer', 1000,
                            /*'MERN Developer', 1000,*/
                            'Problem Solver', 1000,
                            'Coder', 1000
                        ]}
                        wrapper='span'
                        speed={40}
                        className='text-3xl font-medium text-blue-950 /*text-[#000080]*/'
                        repeat={Infinity}
                    />
                    {/* <p className='text-xl text-justify'>A Student Working on Actively Learning the Skills Required to be an Efficient Software Engineer, Flexible to Learn New Technologies.</p> */}
                    <p className='text-xl text-justify'>An enthusiastic learner and future Software Engineer, passionate about building efficient systems and exploring the ever-evolving tech landscape.</p>
                    <div className='flex gap-4'>
                        <button className='border p-2 hover:bg-blue-900 bg-blue-700 rounded-lg text-white text-lg px-4 w-fit text-center'><a href='#contact'>Contact Me</a></button>
                        <a href='/Krishna_Vamsi_Resume.pdf' target='_blank' className='border p-2 hover:bg-blue-900 bg-blue-700 rounded-lg text-white text-lg px-4 w-fit text-center'>📄Resume</a>
                    </div>
                </div>
            </div>
            <div className=''>
                {/* <img src={Blob} className='absolute z-50 h-[500px] -translate-x-5 translate-y-10 scale-150 opacity-80'/> */}
                <img src={KrishImg} className='z-50 contrast-125 scale-95 transition-all duration-1000 max-h-[430px]'/>
            </div>
        </div>


        <div id='home' className='flex flex-col md:hidden max-w-[1280px] mt-10 mb-8 mx-auto justify-between'>
            <div className='flex flex-row w-full px-10 mx-auto items-center justify-around'>
                <div className='flex flex-col gap-7 items-center justify-center'>
                    <Link to={'https://www.linkedin.com/in/krishna-chelluboina/'} target='_blank'>
                        <FiLinkedin className='text-blue-700 hover:drop-shadow-md' size={30}/>
                    </Link>
                    <Link to={'https://github.com/Krishna7141'} target='_blank'>
                        <FiGithub className='text-blue-700 hover:drop-shadow-md' size={30}/>
                    </Link>
                    <Link to={'mailto:krishnavamsich2000@gmail.com'} target='_blank'>
                        <FiMail className='text-blue-700 hover:drop-shadow-md' size={30}/>
                    </Link>
                    <Link to={'https://x.com/krish127228?s=21'} target='_blank'>
                        <RiTwitterXLine className='text-blue-700 hover:drop-shadow-md' size={30}/>
                    </Link>
                    <Link to={'https://www.instagram.com/__vamsi46__/'} target='_blank'>
                        <FiInstagram className='text-blue-700 hover:drop-shadow-md' size={30}/>
                    </Link>
                </div>
                <div className='flex mt-9 flex-col pl-10 gap-4 w-full'>
                    <p className='text-4xl font-poppins font-[900] text-blue-600'><span className='font-semibold text-black'>I'm, </span>Krishna Vamsi</p>
                    <TypeAnimation
                        sequence={[
                            'Software Engineer', 2000,
                            'Full Stack Engineer', 1000,
                            'Frontend Developer', 1000,
                            'Backend Developer', 1000,
                            /*'MERN Developer', 1000,*/
                            'Problem Solver', 1000,
                            'Coder', 1000
                        ]}
                        wrapper='span'
                        speed={40}
                        className='text-xl font-medium text-blue-950 /*text-[#000080]*/'
                        repeat={Infinity}
                    />
                    {/* <p className='text-base text-justify'>A Student Working on Actively Learning the Skills Required to be an Efficient Software Engineer, Flexible to Learn New Technologies.</p> */}
                    <p className='text-base text-justify'>An enthusiastic learner and future Software Engineer, passionate about building efficient systems and exploring the ever-evolving tech landscape.</p>
                    <div className='flex gap-4'>
                         <a href="#contact" className="border p-2 hover:bg-blue-900 bg-blue-700 rounded-lg text-white text-lg px-4 w-fit text-center">Contact Me</a>
                         <a href="/Krishna_Vamsi_Resume.pdf" target="_blank" rel="noopener noreferrer" className="border p-2 hover:bg-blue-900 bg-blue-700 rounded-lg text-white text-lg px-4 w-fit text-center">📄Resume</a>
                    </div>    
                </div>
            </div>
            </div>
            <div className='flex items-center justify-center'>
                {/* <img src={Blob} className='absolute z-50 h-[500px] -translate-x-5 translate-y-10 scale-150 opacity-80'/> */}
                <img src={KrishImg} className='z-10 mb-10 flex md:hidden contrast-125 scale-95 transition-all duration-1000 h-[350px]'/>
            </div>
    </>
  )
}

export default HeroSection
