import React from 'react';
import Typewriter from 'typewriter-effect';
import { Section, SectionSubText, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

var options = {
  strings: ["Cloud Engineer", 
  "DevOps Engineer", 
  "Full-Stack Engineer",
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
        I created this portfolio to display my journey as a self-taught programmer/engineer.
        I am a true professional who consistently achieves goals and beats deadlines, without cutting corners and losing sight of core values.  
        I am excited for the next opportunity!
      </SectionText>
      <Button onClick={() => window.location = 'mailto:jayvencouch11@gmail.com'}>
        Connect With Me!
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;