import styled from 'styled-components';
import Links from './Links';
import { Box } from '@material-ui/core';

function Intro() {
  return (
    <IntroWrapper>
      <Box height="50%" display="flex" justifyContent="center" alignItems="center">
        <ProfileImage />
      </Box>
      <Box
        height="40%"
        display="flex"
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
        textAlign="center"
        padding="0 10%"
      >
        <h2>Hello!</h2>
        <div style={{ lineHeight: '25px' }}>
          I'm a Student Developer who loves to learn. <div />I have serious passion for Backend Development & DevOps.{' '}
          <div />
          Trying to learn better ways to develop a software and have been studying Software Architectures, Databases,
          CI/CD pipeline, etc .
        </div>
      </Box>
      <Box display="flex" justifyContent="space-around" alignItems="center">
        <Links />
      </Box>
    </IntroWrapper>
  );
}

const ProfileImage = styled.img.attrs({
  src: `${process.env.PUBLIC_URL}/images/profile-image.jpg`,
})`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  display: 'block';
`;

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  justify-content: center;
`;

export default Intro;
