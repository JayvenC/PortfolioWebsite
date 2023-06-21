import React from 'react';
import { DiLinux, DiPython, DiReact, DiDatabase } from 'react-icons/di';
import { FaAws, FaJenkins, FaDocker } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiGit, SiPrometheus, SiMicrosoftoffice, SiAnsible } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Displayed below are technological skills that I am more than comfortable with.
    </SectionText>
    <List>
      <ListItem>
        <DiPython size = "3rem" />
        <ListContainer>
          <ListTitle>Scripting</ListTitle>
          <ListParagraph>
            Familiar with <br />
            Python, JavaScript, <br />
            Bash, TypeScript, &amp; C
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiLinux size = "4.5rem" />
        <ListContainer>
          <ListTitle>Operating <br/>Systems</ListTitle>
          <ListParagraph>
            Linux Basics, CLI, Shell Commands, Server Management. <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaAws size = "3rem" />
        <ListContainer>
          <ListTitle>Cloud</ListTitle>
          <ListParagraph>
            Primarily use AWS <br /> Network Protocols (Firewalls/HTTPS) etc. <br />
            Databases (MySQL/RDS)
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaJenkins size = "2.7rem" />
        <ListContainer>
          <ListTitle>CI/CD</ListTitle>
          <ListParagraph>
            Build Automation <br/>Skills <br/> via Jenkins <br/> CodePipeline via AWS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaDocker size = "3rem" />
        <ListContainer>
          <ListTitle>Containers</ListTitle>
          <ListParagraph>
            Virtualization and managing containerized applications on <br/> a server via Docker
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiKubernetes size = "3rem" />
        <ListContainer>
          <ListTitle>Container Orchestration</ListTitle>
          <ListParagraph>
            Familiar with <br/>Kubernetes in <br/>administering and <br/>deploying applications
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiTerraform size = "3rem" />
        <ListContainer>
          <ListTitle>Infrastructure <br /> as Code</ListTitle>
          <ListParagraph>
            Creating infrastructure (Terraform) &amp; Configuration to run and deploy applications (Ansible)
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiGit size = "2.5rem" />
        <ListContainer>
          <ListTitle>Version <br/>Control</ListTitle>
          <ListParagraph>
            Familiar with Git
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiPrometheus size = "3rem" />
        <ListContainer>
          <ListTitle>Monitoring</ListTitle>
          <ListParagraph>
            Track performances of deployed applications through Prometheus <br/>
             Cloudwatch via AWS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size = "3rem" />
        <ListContainer>
          <ListTitle>Front-End Development</ListTitle>
          <ListParagraph>
            HTML, CSS, <br/>React.js, Next.js, <br/> Vue.js, Tailwind etc.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiMicrosoftoffice size = "3.5rem" />
        <ListContainer>
          <ListTitle>Microsoft Services</ListTitle>
          <ListParagraph>
            8+ years experience with Microsoft services such as Excel, Powerpoint, Office, etc.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size = "3rem" />
        <ListContainer>
          <ListTitle>Back-End Development</ListTitle>
          <ListParagraph>
            Node &amp; Redis Technology
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
