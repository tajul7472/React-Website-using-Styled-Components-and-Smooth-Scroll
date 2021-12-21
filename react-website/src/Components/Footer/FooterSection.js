import React from 'react'
import { animateScroll as scroll } from 'react-scroll'

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer,FooterWrap,FooterLinksContainer,
    FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink,
    SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRights,SocialIcons,SocialIconLink} from './FooterElements'

const FooterSection = () => {
    const toggleHome =()=>{
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us </FooterLinkTitle>
                                <FooterLink to='/'>Now it works</FooterLink>
                                <FooterLink to='/'>Testimonials</FooterLink>
                                <FooterLink to='/'>Careers</FooterLink>
                                <FooterLink to='/'>Investors</FooterLink>
                                <FooterLink to='/'>Terms of Service</FooterLink>
                           
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to='/'>Contact</FooterLink>
                                <FooterLink to='/'>Support</FooterLink>
                                <FooterLink to='/'>Destinations</FooterLink>
                                <FooterLink to='/'>sponsorsships</FooterLink>
                                
                           
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos </FooterLinkTitle>
                                <FooterLink to='/'>Submit video</FooterLink>
                                <FooterLink to='/'>Ambassadors</FooterLink>
                                <FooterLink to='/'>Agency</FooterLink>
                                <FooterLink to='/'>Influencer</FooterLink>
                               
                           
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to='/'>Instragram</FooterLink>
                                <FooterLink to='/'>Facebook</FooterLink>
                                <FooterLink to='/'>Youtube</FooterLink>
                                <FooterLink to='/'>Twitter</FooterLink>
                                <FooterLink to='/'>LinkedIn</FooterLink>
                           
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>Rakib</SocialLogo>
                        <WebsiteRights>rakib &copy; {new Date().getFullYear()} All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instragram"><FaInstagram/></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube"><FaYoutube/></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin"><FaLinkedin/></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default FooterSection
