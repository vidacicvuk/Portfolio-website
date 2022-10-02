import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { GithubIcon,LinkedInIcon,SocialIcons, CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id='contact'>
      <LinkList>
        <LinkColumn>
          <LinkTitle>
            Email
          </LinkTitle>
          <LinkItem href = 'mailto:vidacicvuk13@gmail.com'>vidacicvuk13@gmail</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com/vidacicvuk'>
        <GithubIcon size='4rem'/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/vuk-vida%C4%8Di%C4%87-64b433199/?originalSubdomain=rs'>
        <LinkedInIcon size='4rem'/>
      </SocialIcons>
      </SocialContainer>
      <CompanyContainer>
          <Slogan>Always willing to learn more...</Slogan>
        </CompanyContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
