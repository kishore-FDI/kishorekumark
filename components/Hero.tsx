 import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { mypic } from '@/assessts/Exports'
import Image from 'next/image'
import {FaDownload} from 'react-icons/fa'
import Socials from './Socials'
import MagicButton from './MagicButton'
import {FaLocationArrow} from 'react-icons/fa6'
const Hero = () => {
  const words="Artificial Intelligence and Full Stack Development"

  return (
    <section id='hero' className='pb-20 pt-36'>
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
    <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
    </div>
    <div className="flex justify-center relative my-20 z-10">
      <div className='h-full  vsm:w-auto w-[95%] text-white md:gap-6 lg:gap-10 xl:gap-20 flex flex-col md:flex-row-reverse items-center md:items-start'>
        <div className='flex my-auto xl:my-0 justify-center  mb-8 xl:mb-0'>
          <Image
          className='xl:h-[350px] xl:w-[350px] h-[250px] w-[250px] rounded-full xl:mt-4 border-2 border-blue-300'
          priority quality={100}
          src={mypic}
          alt="Mypic"
          />
        </div>
          <div className='flex flex-col items-center gap-2 xl:flex-col md:items-start xl:pt-8 xl:pb-24 ' >
            <div className='text-center sm:text-start '>
              <h1 className='sm:text-6xl text-4xl xl:text-[80px] leading-[1.1] font-semibold '>
                Hello I&apos;m <br/> <span className='text-purple '>Kishore Kumar K</span>
              </h1>
              <p className='max-w-[500px] ml-1 mb-1 text-white mt-1 font-medium text-xl'>
                My expertise mostly lie in {" "}
                <span className='text-purple'>
                {words}
                </span>
              </p>
              <p className='max-w-[500px] ml-1 mb-4 text-white mt-2'> Shoot me a DM if you want to discuss more about it and you would like to collabarate
                </p>
            </div>
            <div className='flex flex-col md:flex-row items-center gap-[15px] justify-center'>
            <a href="/KishoreKumar.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className='border-blue-400 border-2 rounded-full p-1.5 px-2 text-blue-300  flex flex-row gap-2 items-center font-serif hover:text-black hover:bg-blue-200 hover:delay-100 transition duration-500 '>
              Download CV <FaDownload className='sm:block hidden '/>
            </a>
            <Socials/>
            <a href="https://kishorekumar.vercel.app">
              <MagicButton title="Explore ML" icon={<FaLocationArrow/>} position='right'/>
            </a>
            </div>
          </div>
      </div>
    </div>
    </section>
  )
}

export default Hero 