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
                                    <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-fit flex gap-2 items-center justify-center p-2 px-3 bg-blue-600 font-medium hover:bg-blue-900 rounded-lg text-white"
                                    >
                                        🔗 Live Link
                                        </a>
                                        {project.exe && (
                                            <a
                                            href={project.exe}
                                            download
                                            target="_blank"
                                            rel="noreferrer"
                                            className="w-fit flex gap-2 items-center justify-center p-2 px-3 bg-green-600 font-medium hover:bg-green-900 rounded-lg text-white mt-2"
                                          >
                                            Download App (.exe)
                                          </a>
                                        )}
                                        <a
                                        href={project.src}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-fit flex gap-2 items-center justify-center p-2 px-3 bg-gray-700 font-medium hover:bg-gray-900 rounded-lg text-white"
                                        >
                                            🐙 GitHub
                                            </a>
                                    </div>
                                    {project.title.includes("QuickKart") && (
                                        <span className="inline-block bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-md mb-1">
                                            🛠 In Progress
                                            </span>
                                        )}
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