import React from 'react';
import { AiFillGithub, AiFillFilePdf, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Phone</LinkTitle>
            <LinkItem href="tel:214-883-4080">214-883-4080</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
            <LinkItem href="mailto:jayvencouch11@gmail.com">jayvencouch11@gmail.com</LinkItem>
        </LinkColumn>
        <br />
        <LinkColumn>
          <LinkTitle>Research Resume</LinkTitle>
            <LinkItem href="/files/research.pdf">Click to Open</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>“It is never too late to be what you might have been.”
                   ― George Eliot</Slogan>
        </CompanyContainer>
      <SocialContainer>
          <SocialIcons href="https://github.com/JayvenC">
          <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/jayvencouch/">
          <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="/files/resume.pdf">
          <AiFillFilePdf size="3rem" />
          </SocialIcons>
        </SocialContainer>
          </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
