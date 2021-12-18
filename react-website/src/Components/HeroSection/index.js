import React,{useState} from 'react'
import video from '../../videos/video.mp4'
import { Button } from '../ButtonElements'
import { HeroContainer,HeroBg,VideoBg, HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowRight,Arrowforward } from './HeroElements'

const HeroSection = () => {
    const[hover,setHover]=useState(false)
    const onHover=()=>{
        setHover(!hover)
    }

    return (
       <HeroContainer>
           <HeroBg>
               <VideoBg autoPlay loop muted src={video} type='video/mp4'/>
           </HeroBg>
           <HeroContent>
               <HeroH1>Virtual Banking Made Easy</HeroH1>
               <HeroP>Sign up for a new account today ans receive $250 in
                   credit towards your next payment. </HeroP>
                   <HeroBtnWrapper>
                       <Button to='signup' onMouseEnter={onHover}
                       onMouseLeave={onHover}
                       primary='true'
                       dark='true'>
                           Get started {hover ? <Arrowforward/> : <ArrowRight/>}

                       </Button>
                   </HeroBtnWrapper>
           </HeroContent>

       </HeroContainer>
    )
}

export default HeroSection
