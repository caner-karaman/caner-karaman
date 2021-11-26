import React from 'react'
import styled from 'styled-components';
import breakpoints from '../common/breakpoints';
import Button from './Button';
import Container from './Container';

const MAIL_ADRESS = "karamancaner1995@gmail.com";

const Wrapper = styled.div`
  height: 315px;
  display: flex;
  justify-content: space-between;
  padding: 0 75px;
  background-color: #EEBF63;
  align-items: center;
  border-radius: 25px;
  margin-bottom: 30px;

  ${breakpoints.device.xl}{
    padding: 0 50px;
  }
  ${breakpoints.device.lg}{
    flex-direction: column;
    height: 285px;
    justify-content: space-around;
  }
  ${breakpoints.device.sm}{
    margin: 0 -18px;
    border-radius: 0;
    height: auto;
    padding: 22px;
  }
`

const Title = styled.h1`
  color: #FFFFFF;
  max-width: 250px;
  ${breakpoints.device.lg}{
    max-width: 450px;
    text-align: center;
  }
  ${breakpoints.device.sm}{
    max-width: none;
  }
`

const StyledButton = styled(Button)`
  height: 70px;
  min-width: 210px;
  font-size: 24px;
  margin-right: 55px;
  ${breakpoints.device.xl}{
    height: 65px;
  }
  ${breakpoints.device.lg}{
    height: 60px;
    font-size: 22px;
  }
  ${breakpoints.device.sm}{
    margin: 20px 0 10px;
    width: 100%;
    font-size: 20px;
  }
`

const TernararyButton = styled(Button)`
  height: 70px;
  font-size: 24px;
  background-color: #EEBF63;
  border-color: #FFF;
  ${breakpoints.device.xl}{
    height: 65px;
  }
  ${breakpoints.device.lg}{
    height: 60px;
    font-size: 22px;
  }
  ${breakpoints.device.sm}{
    width: 100%;
    font-size: 20px;
  }
`

const NewsLetter = () => {
  return(
    <section>
      <Container>
        <Wrapper>
          <Title>Interested working with me?</Title>
          <div>
            <StyledButton onClick={() => window.open(`mailto:${MAIL_ADRESS}`)} buttonTypes="secondary">Email Me</StyledButton>
            <TernararyButton href="/projects">See More Projects</TernararyButton>
          </div>
        </Wrapper>
      </Container>
    </section>
  )
}

export default NewsLetter;
