import React from 'react';
import styled from 'styled-components';
import TitleWrapper from '../styles/TitleWrapper';
import ExpTimeline from '../components/Sections/About/ExpTimeline';
import Intro from '../components/Sections/About/Intro';
import Skills from '../components/Sections/About/Skills';

interface RefObject<T> {
  // immutable
  current: T | null | undefined;
}

interface Props {
  aboutRef: RefObject<HTMLDivElement>;
}

function About({ aboutRef }: Props) {
  return (
    <div ref={aboutRef}>
      <Wrapper>
        <TitleWrapper>ABOUT</TitleWrapper>
        <MainContents>
          <Intro />
          <ExpTimeline />
          <Skills />
        </MainContents>
      </Wrapper>
    </div>
  );
}

const MainContents = styled.div`
  height: 100vh;
  width: 100vw;
  min-height: 768px;
  display: flex;
  justify-content: center;
  align-items: start;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export default About;