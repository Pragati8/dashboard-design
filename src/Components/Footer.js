import React from 'react'
import MainContainer from './MainContainer'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BiHome } from "react-icons/bi";
import { SiNetflix } from "react-icons/si";
import { MdBrightnessMedium } from "react-icons/md";
import { AiOutlineUnlock } from "react-icons/ai";
import { BsBrightnessHigh } from "react-icons/bs";
import { BsMic } from "react-icons/bs";
import { SlGraduation } from "react-icons/sl";
import { BiVideo } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsImage } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='py-1 m-0' style={{backgroundColor: '#00000045', height: '55px', borderRadius: '10px', justifyContent: 'center'}}>
        <AiOutlineArrowLeft className='p-2 m-1' style={{backgroundColor: '#00000059', fontSize: '45px', borderRadius: '50px'}}/>
        <BiHome className='p-2 m-1' style={{backgroundColor: 'white', fontSize: '45px', borderRadius: '50px'}}/>
        <SiNetflix className='p-2 m-1' style={{backgroundColor: 'white', fontSize: '45px', borderRadius: '50px'}}/>
        <MdBrightnessMedium className='p-2 m-1' style={{backgroundColor: 'white', fontSize: '45px', borderRadius: '50px'}}/>
        <AiOutlineUnlock className='p-2 m-1' style={{backgroundColor: 'white', fontSize: '45px', borderRadius: '50px'}}/><BiHome className='p-2 m-1' style={{backgroundColor: 'white', fontSize: '45px', borderRadius: '50px'}}/>
        <BsBrightnessHigh className='p-2 m-1' style={{backgroundColor: 'white', fontSize: '45px', borderRadius: '50px'}}/><BiHome className='p-2 m-1' style={{backgroundColor: 'white', fontSize: '45px', borderRadius: '50px'}}/>
        <BsMic className='p-2 m-1' style={{backgroundColor: 'white', fontSize: '45px', borderRadius: '50px'}}/>
        <SlGraduation className='p-2 m-1' style={{backgroundColor: 'white', fontSize: '45px', borderRadius: '50px'}}/>
        <BiVideo className='p-2 m-1' style={{backgroundColor: 'white', fontSize: '45px', borderRadius: '50px'}}/>
        <AiOutlineArrowRight className='p-2 m-1' style={{backgroundColor: 'white', fontSize: '45px', borderRadius: '50px'}}/>
        <BsImage className='p-2 m-1' style={{backgroundColor: 'white', fontSize: '45px', borderRadius: '50px'}}/>
    </div>
  )
}

export default Footer
