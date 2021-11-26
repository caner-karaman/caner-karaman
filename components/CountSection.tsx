import React from 'react'
import styled from 'styled-components';
import breakpoints from '../common/breakpoints';
import Container from './Container';

const Wrapper = styled.div`
  border-radius: 45px;
  background-color: #E9E9E9;
  padding: 65px;
  margin-bottom: 60px;

  ${breakpoints.device.xl}{
    border-radius: 40px;
    padding: 50px;
    margin-bottom: 40px;
  }
  
  ${breakpoints.device.sm}{
    margin: 0 -18px;
    border-radius: 12px;
    padding: 25px;
    margin-bottom: 40px;
    border-radius: 0;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-around;
`

const Count = styled.span`
  color: #2F2F2F;
  font-size: 72px;
  font-weight: 700;
  line-height: 1em;
  ${breakpoints.device.xl}{
    font-size: 60px;
  }
  ${breakpoints.device.sm}{
    font-size: 40px;
  }
`

const Yellow = styled.span`
  color: #EEBF63;
`

const Description = styled.p`
  color: #828282;
  font-size: 24px;
  margin: 0;
  
  ${breakpoints.device.xl}{
    font-size: 22px;
  }

  ${breakpoints.device.lg}{
    font-size: 20px;
  }
  ${breakpoints.device.sm}{
    font-size: 16px;
    line-height: 20px;
  }
`

const Heading = styled.h1`
  margin-top: 35px;
  margin-bottom: 15px;
  color: #151517;

  ${breakpoints.device.xl}{
    margin-top: 20px;
  }

  ${breakpoints.device.lg}{
    margin-bottom: 5px;
  }
`

const Text = styled.p`
  color: #000;
  font-size: 24px;
  line-height: 45px;

  ${breakpoints.device.xl}{
    font-size: 22px;
    line-height: 38px;
  }

  ${breakpoints.device.lg}{
    font-size: 20px;
    line-height: 30px;
  }

  ${breakpoints.device.lg}{
    font-size: 16px;
    line-height: 22px;
  }
`

const CountSection = () => {
  return(
    <Container>
      <Wrapper>
        <Header>
          <div>
            <Count>5</Count>
            <Description>Completed Projects</Description>
          </div>
          <div>
            <Count>A<Yellow>+</Yellow></Count>
            <Description>Positive Reviews</Description>
          </div>
        </Header>
        <main>
          <Heading>Glad to Help You!</Heading>
          <Text>As a &quot;Full-Stack developer&quot;, Having a passion for developing mobile and web applications for startup companies. Taking care of the customer closely and offer solutions that cover their problems.</Text>
        </main>
      </Wrapper>
    </Container>
  )
}

export default CountSection;
