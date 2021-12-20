import React ,{useState} from 'react'
import HeroSection from '../Components/HeroSection';
import { homeObjone ,homeObjTwo,homeObjThree} from '../Components/InfoSection/Data';
import InfoSection from '../Components/InfoSection/InfoSection';
import Navbar from '../Components/Navbar'
import Service from '../Components/ServiceSection/Service';
import Sidebar from '../Components/SideBar'

const Home = () => {
   const [isOpen,setIsOpen]=useState(false) ;
   const toggle = ()=>{
       setIsOpen(!isOpen);
   }
    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle}/>
         <Navbar toggle={toggle}/>
         <HeroSection/>
         <InfoSection {...homeObjone}/>
         <InfoSection {...homeObjTwo}/>
         <Service/>
         <InfoSection {...homeObjThree}/>
         
            
        </>
    )
}

export default Home
