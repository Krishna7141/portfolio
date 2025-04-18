import React from 'react'
import { projectsData } from '../utils/projectsData'
import { Link } from 'react-router-dom'
import { FaLink, FaGithub } from 'react-icons/fa'
import { IoIosLink } from 'react-icons/io'


const ProjectsSection = () => {

  return (
    <div id='projects' className='min-h-[700px] max-w-[1280px] mx-auto mt-10 mb-10'>
        <div className='flex flex-col gap-2 mb-16'>
            <p className='text-4xl font-semibold text-center'>Projects</p>
            <p className='text-lg text-center opacity-70'>Proof of Work</p>
        </div>
        <div className='flex flex-col items-center justify-center md:flex-row flex-wrap gap-8'>
            {
                projectsData.map((project, index) => {
                    return (
                        <div key={index}>
                            <div className='bg-white flex w-[90%] group mx-auto md:w-[350px] border border-gray-300 items-center md:h-[450px] flex-col gap-5 cursor-pointer rounded-[40px] shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 p-5'>
                                <img src={project.image} className='group-hover:scale-105 group-hover:drop-shadow-md duration-200 border md:h-[200px] min-h-[200px] w-11/12 md:w-[350px] rounded-[15px]'/>
                                <div className='flex flex-col gap-3'>
                                    <p className='text-lg font-semibold'>{project.title}</p>
                                    <div className='flex items-center justify-center gap-3'>
                                        <Link className='w-fit flex gap-2 items-center justify-center p-2 px-3 bg-blue-600 font-medium hover:bg-blue-900 rounded-lg text-white' to={project.live} target='_blank'>
                                            <IoIosLink className='text-white' size={20}/>
                                            <p>Live Link</p>
                                        </Link>
                                        {/* <Link className='w-1/2 flex justify-start' to={project.src} target='_blank'><FaGithub className='text-[#000080]' size={25}/></Link> */}
                                    </div>
                                    <p className=''><span className='font-semibold text-[#000080]'>Tech Stack:</span> {project.stack}</p>
                                    {/* <div className='h-2 w-10 bg-green-700 opacity-0 group-hover:opacity-100'></div> */}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ProjectsSection