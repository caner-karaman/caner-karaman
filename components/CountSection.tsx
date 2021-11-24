import React from 'react'
import styled from 'styled-components';
import Container from './Container';

const Wrapper = styled.div`
  border-radius: 45px;
  background-color: #E9E9E9;
  padding: 65px;
  margin-bottom: 60px;
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
`

const Plus = styled.span`
  color: #8ED2A9;
`

const Yellow = styled.span`
  color: #EEBF63;
`

const Description = styled.p`
  color: #828282;
  font-size: 24px;
  margin: 0;
`

const Heading = styled.h1`
  margin-top: 35px;
  margin-bottom: 15px;
  color: #151517;
`

const Text = styled.p`
  color: #000;
  font-size: 24px;
  line-height: 45px;
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
          <Text>As a "Full-Stack developer", Having a passion for developing mobile and web applications for startup companies. Taking care of the customer closely and offer solutions that cover their problems.</Text>
        </main>
      </Wrapper>
    </Container>
  )
}

export default CountSection;
