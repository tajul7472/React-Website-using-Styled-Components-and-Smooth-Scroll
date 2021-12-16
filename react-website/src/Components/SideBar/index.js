import React from 'react'
import { SidebarContainer,Icon,CloseIcon,SideBtnWrap,SidebarMenu,SidebarLink,SidebarRoute,SidebarWrapper } from './SidebarElements'

const Sidebar = ({toggle,isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about'>
                        About
                    </SidebarLink>
                    <SidebarLink to='discover'>
                        Discover
                    </SidebarLink>
                    <SidebarLink to='services'>
                        Services
                    </SidebarLink>
                    <SidebarLink to='singup'>
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                 <SideBtnWrap>
                     <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                 </SideBtnWrap>
            </SidebarWrapper>
 
        </SidebarContainer>
    )
}

export default Sidebar

