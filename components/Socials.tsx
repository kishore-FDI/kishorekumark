import React from 'react'
import {FaGithub,FaLinkedinIn,FaWhatsapp} from "react-icons/fa"
import Link from 'next/link'
const socials =[
    {icon:<FaLinkedinIn/>,path:"https://linkedin.com/in/kkube"},
    {icon:<FaGithub/>,path:"https://github.com/kishore-FDI"},
    {icon:<FaWhatsapp/>,path:"https://wa.me/918124075301"},
]

const Socials = () => {
  return (
    <div className='flex gap-4'>
        {socials.map((item,index)=>{
            return <a href={item.path} key={index}  className=' w-9 h-9 border border-blue-300 rounded-full flex justify-center items-center text-white hover:bg-blue-300 hover:text-black hover:delay-100 transition duration-500'>{item.icon}</a>
        })}
    </div>
  )
}

export default Socials