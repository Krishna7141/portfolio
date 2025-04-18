import React from 'react'
import { SlCalender } from 'react-icons/sl'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { GoMortarBoard } from 'react-icons/go'


const EducationSection = () => {
  return (
    <div id='about' className='max-w-[1280px] min-h-[650px] w-3/4 lg:w-1/2 mt-10 mb-10 mx-auto'>
        <div className='flex flex-col gap-2 mb-16'>
            <p className='text-4xl font-semibold text-center'>About</p>
            <p className='text-lg text-center opacity-70'>Academics and Educational Qualifications</p>
        </div>
        <div className='flex items-center justify-center mx-auto gap-28'>
            <div className=''>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col gap-1'>
                        <p className='font-medium text-base md:text-xl'>Masters (MS), Information Technology</p>
                        <p className='text-black opacity-80 text-base md:text-lg'>St. Francis College, New York</p>
                        <p className='text-black opacity-80 flex items-center gap-1 text-base md:text-lg'>
                            <FaRegCalendarAlt/>
                            <p>2023-2025</p>
                        </p>
                        <p className='text-black opacity-80 text-base md:text-lg'>Aggregate: 3.8/4 CGPA</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='font-medium text-base md:text-xl'>B.Tech, Electronics & Communication Engineering</p>
                        <p className='text-black opacity-80 text-base md:text-lg'>Bhaarath Institute of Higher Education And Research University, Chennai</p>
                        <p className='text-black opacity-80 flex items-center gap-1 text-base md:text-lg'>
                            <FaRegCalendarAlt/>
                            <p>2017-2021</p>
                        </p>
                        <p className='text-black opacity-80 text-base md:text-lg'>Aggregate: 7.3/10 CGPA</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='font-medium text-base md:text-xl'>Secondary School, MPC</p>
                        <p className='text-black opacity-80 text-base md:text-lg'>Sasi Educational Institutes, Andhra Pradesh</p>
                        <p className='text-black opacity-80 flex items-center gap-1 text-base md:text-lg'>
                            <FaRegCalendarAlt/>
                            <p>2017</p>
                        </p>
                        <p className='text-black opacity-80 text-base md:text-lg'>Aggregate: 87.5%</p>
                    </div>
                </div>
            </div>
            <GoMortarBoard className='text-[#1D4ED8] hidden md:flex' size={200}/>
        </div>
    </div>
  )
}

export default EducationSection