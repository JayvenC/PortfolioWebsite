import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxLogo, BoxText } from './CertificationsStyles';

var logo1 = <img src='/images/AWS.SA.png' height={110} width={125}></img>
var logo2 = <img src='/images/comingsooner.png' height={110} width={125}></img>
const data = [
  { logo: logo1, text: 'Amazon Web Services (AWS) Certified Solutions Architect - Associate',},
  { logo: logo2, text: 'Amazon Web Services (AWS) Certified Solutions Architect - Professional ',}
];

const Certifications = () => (
  <Section>
    <SectionDivider/> <br />
    <SectionTitle>
      Certifications
    </SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxLogo>{card.logo}</BoxLogo>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Certifications;
