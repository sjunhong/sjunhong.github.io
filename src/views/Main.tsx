import React from 'react';
import styled from 'styled-components';
import Section from '../styles/Section';
import Home from '../components/Sections/Home';
import Blogs from '../components/Sections/Blogs';
import Contact from '../components/Sections/Contact';
import About from '../components/Sections/About';
import Projects from '../components/Sections/Projects';

function Main() {
  return (
    <Section>
      <Wrapper>
        <HomeWrapper>
          <Home />
        </HomeWrapper>
        <About />
        <Projects />
        <Blogs />
        <Contact />
      </Wrapper>
    </Section>
  );
}

const HomeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  color: #616161;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Main;
