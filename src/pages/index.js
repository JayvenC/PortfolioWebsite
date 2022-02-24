import Certifications from '../components/Certifications/Certifications';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import About from '../components/AboutMe/AboutMe';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <title>Jayven Couch Portfolio</title>
      <meta name="description" content="This is my personal portfolio, where I share the details of my self-taught journey towards becoming a programmer/engineer. I hope you enjoy what you see and thank you for following me along on my journey!"></meta>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Certifications />
      <About />
    </Layout>
  );
};

export default Home;
