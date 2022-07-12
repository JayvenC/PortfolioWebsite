import React from 'react';
import Typewriter from 'typewriter-effect';
import { Section, SectionSubText, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

var options = {
  strings: ["Cloud Engineer", 
  "DevOps Engineer", 
  "Solutions Architect",
  "Software Engineer",
  "Content Creator"],
  autoStart: true,
  loop: true
}
const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        <a style={{fontSize: '3rem', color: '#AB2C49'}}>Hello 
        <span> 
          <a style={{color: '#14C3FF'}}> World,</a></span> <br /></a>
        <a style={{fontSize: '5rem', color: 'white'}}> I'm Jayven Couch! <br /> </a>
        <SectionSubText>
          <a style={{color: 'white'}}> Aspiring </a> 
        <span>
          <a style={{color: '#14C3FF' }}>
        <Typewriter 
          options = {options}
         /> 
        </a>
        </span>
        </SectionSubText>
      </SectionTitle>
      <SectionText>
      I am a dedicated Cloud/DevOps engineer 
      with a passion to solve problems efficiently without cutting corners and staying true to core values.
      I have a dynamic skill set that allows me to communicate well in a group setting, take criticism, and strive to become the best at what I do. 
      </SectionText>
      <Button onClick={() => window.location = 'mailto:jayvencouch11@gmail.com'}>
        Contact Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;