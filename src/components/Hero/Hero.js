import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      I'm a professional full-stack web developer. Solving problems and learning new things is my passion, which oriented my professional career path towards software engineering. With my education and over three years of experience in software engineering I had the opportunity to spread my knowledge about many kinds of software technologies and frameworks, but always willing to learn more. Please take a look at my portfolio and if you consider me a perfect person for your job  don't hesitate to contact me for further collaboration.
        <br/>Looking Forward to working with You 😊
      </SectionText>
      <Button onClick={()=>{window.location = "#projects"}}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;