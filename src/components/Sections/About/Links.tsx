import { Icon } from '@material-ui/core';
import styled from 'styled-components';

function Links() {
  const iconStyle = 'default';
  return (
    <Wrapper>
      <a href="https://www.linkedin.com/in/seok-jun-hong-a447bb141/" target="_blank" rel="noopener noreferrer">
        <Icon className="fab fa-linkedin" color="primary" fontSize={iconStyle} />
      </a>
      <a href="https://github.com/sjunhong" target="_blank" rel="noopener noreferrer">
        <Icon className="fab fa-github" style={{ color: 'black' }} fontSize={iconStyle} />
      </a>
      <a href="https://medium.com/seokjunhong" target="_blank" rel="noopener noreferrer">
        <Icon className="fab fa-medium-m" style={{ color: 'black' }} fontSize={iconStyle} />
      </a>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=seokjunhong_2023@depauw.edu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="fas fa-envelope square" style={{ color: 'black' }} fontSize={iconStyle} />
      </a>
      <a href={`${process.env.PUBLIC_URL}/Hong_S.Jun_resume.pdf`} target="_blank">
        <Icon className="fas fa-file-alt" style={{ color: 'black' }} fontSize={iconStyle} />
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  a {
    padding: 0 10px;
  }
`;

export default Links;
