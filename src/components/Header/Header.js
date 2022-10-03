import Link from 'next/link';
import {React, useState} from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck, FaBars, FaTimes } from 'react-icons/di';

import { NavBarExtendedContainer,OpenLinksButton,ContactDropDown, Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

function Header(){
const [extendNavbar, setExtendNavbar] = useState(false);
  return (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display:"flex", alignItems:"center",color:"white",marginBottom:"20px"}}>
          <DiCssdeck size="3rem"/><Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>
            Projects
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>
            Technologies
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>
            About
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink>
            Contact
          </NavLink>
        </Link>
      </li>
      <OpenLinksButton onClick={()=>{
        setExtendNavbar((curr)=>!curr);
        console.log(curr);
        console.log("click")
      }}>
       {extendNavbar ? <>&#10005;</> : <>&#8801;</> }
      </OpenLinksButton>
    </Div2>
 
    <Div3>
      <SocialIcons href='https://github.com/vidacicvuk'>
        <AiFillGithub size="4rem"/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/vuk-vida%C4%8Di%C4%87-64b433199/?originalSubdomain=rs'>
        <AiFillLinkedin size="4rem"/>
      </SocialIcons>
    </Div3>
    {extendNavbar && (<NavBarExtendedContainer>
    <li>
        <Link href="#projects">
          <NavLink>
            Projects
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>
            Technologies
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>
            About
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink>
            Contact
          </NavLink>
        </Link>
      </li>
    </NavBarExtendedContainer>)}
  </Container>
);
}
export default Header;
