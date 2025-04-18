import React from 'react'
import Calendar from 'react-github-calendar'
import { Link } from 'react-router-dom';


const GithubCalender = () => {
    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 6;
      
        return contributions.filter(activity => {
          const date = new Date(activity.date);
          const monthOfDay = date.getMonth();
      
          return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
          );
        });
      };

  return (
    <div className='flex items-center flex-col mt-16 mb-20 drop-shadow-2xl justify-center'>
        {/* <div className='flex flex-col gap-2 mb-16'>
            <p className='text-4xl font-semibold text-center'>GitHub</p>
            <p className='text-lg text-center opacity-70'>GitHub Contributions Calendar</p>
        </div> */}
        <p className='text-2xl font-medium text-center pb-3'>GitHub Contributions Calendar</p>
        <Link to={'https://github.com/Krishna7141'} target='_blank' className='w-10/12 md:w-fit p-3 bg-black text-white border shadow-lg px- rounded-lg'>
            <div className='hidden lg:flex'>
                <Calendar colorScheme='dark' blockSize={12} blockRadius={1} fontSize={16} username="Krishna7141"/>
            </div>
            <div className='flex lg:hidden'>
                <Calendar colorScheme='dark' blockSize={12} blockRadius={1} fontSize={16} username="Krishna7141" /*transformData={selectLastHalfYear}*//>
            </div>
        </Link>
    </div>
  )
}

export default GithubCalender
