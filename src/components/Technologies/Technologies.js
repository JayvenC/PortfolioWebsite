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
    <SectionTitle>Tech Stack</SectionTitle>
    <SectionText>
    </SectionText>
    <List>
      <ListItem>
        <DiPython size = "3rem" />
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            Familiar with <br />
            Python, Go, JavaScript, <br />
            SQL, HTML5, CSS &amp; Bash
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
          <ListTitle>Cloud <br/>Computing</ListTitle>
          <ListParagraph>
            Networking &amp; Security <br /> AWS Services such as VPCs, Lambda, API Gateway, EC2, S3, IAM, and much more. <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaJenkins size = "2.7rem" />
        <ListContainer>
          <ListTitle>CI/CD</ListTitle>
          <ListParagraph>
            Deliver automation to applications via Jenkins <br/> &amp; AWS CodePipeline
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaDocker size = "3rem" />
        <ListContainer>
          <ListTitle>Containers</ListTitle>
          <ListParagraph>
            Virtualization and managing containerized applications on a server via Docker, ECS, <br/> Fargate, etc.
            Experience with Docker Multi-Stage Builds
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiKubernetes size = "3rem" />
        <ListContainer>
          <ListTitle>Container Orchestration</ListTitle>
          <ListParagraph>
            Kubernetes/AWS EKS <br/> in administering and <br/>deploying containerized applications on a cluster of hosts.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiTerraform size = "3rem" />
        <ListContainer>
          <ListTitle>Infrastructure <br /> as Code</ListTitle>
          <ListParagraph>
            Terraform/AWS CloudFormation in defining infrastructure resources in configuration files.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiGit size = "2.5rem" />
        <ListContainer>
          <ListTitle>Version <br/>Control</ListTitle>
          <ListParagraph>
            Gitlab/Github/Bitbucket
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiPrometheus size = "3rem" />
        <ListContainer>
          <ListTitle>Monitoring</ListTitle>
          <ListParagraph>
            Track performances of deployed applications through
             Amazon EventBridge and Cloudwatch via AWS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size = "3rem" />
        <ListContainer>
          <ListTitle>Front-End Development</ListTitle>
          <ListParagraph>
            React.js, Next.js, <br/> Vue.js, Tailwind, Redux, &amp; Bootstrap
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiMicrosoftoffice size = "3.5rem" />
        <ListContainer>
          <ListTitle>Microsoft Services</ListTitle>
          <ListParagraph>
            Microsoft services such as Excel, Powerpoint, Office, Teams, etc.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size = "3rem" />
        <ListContainer>
          <ListTitle>Back-End &amp; Databases</ListTitle>
          <ListParagraph>
            AWS RDS, MySQL, PostgreSQL, Redis, &amp; NoSQL Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
