import React from 'react';
import { AboutMePhoto, Section, SectionDivider, SectionText, SectionTitle} from '../../styles/GlobalComponents';


const About = () => {


  return (
    <Section id="about">
      <SectionDivider/>
      <br />
      <SectionTitle>About Me</SectionTitle>
      <img src='/images/portrait.circle.png' height={250} width={260}></img>
      <br />
      <SectionText>
      Hello World, <br /> I'm Jayven Couch! <br /> <br/>
      I am an aspiring and self-taught programmer/engineer. 
      Born and raised in Texas, I always had an interest in computers since the second I could remember.
      In May of 2021, I graduated with a B.S. in Marine Science from Eckerd College
       in Saint Petersburg, Florida. Due to spare time from COVID and help from fellow CS friends, I began to become fascinated with computer science 
       and wanted to learn as many skills as I could. I quickly became motivated to begin the journey of becoming a programmer/engineer 
       solely because I truly enjoyed what I was learning and wanted to transfer that into a career.
       Fast-forward to present-day, I have learned an abundance of new skills and try my best to learn new things everyday.
       Also, I have studied and obtained certifications such as AWS Solution Architect, and am currently in the process of obtaining the AWS Certified DevOps Professional certificate.
       Not only am I proud of what I have accomplished so far, I am excited for what the future holds.
       <br /> <br/>
       Best wishes, <br/>
        Jayven Couch
      </SectionText>
    </Section>
      
  );
};

export default About;
