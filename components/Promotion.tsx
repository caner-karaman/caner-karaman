import React, { FC } from 'react'
import styled from "styled-components";
import Container from './Container';
import Image from 'next/image'
import Button from './Button';

const StyledPromotion = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 177px;
  height: 100vh;
`;

const Left = styled.div`
  flex: 1;
`
const Right = styled.div`
  flex: 1;
`
const Heading4 = styled.h4`
  color: #828282;
  margin-bottom: 16px;
`
const Heading1 = styled.h1`
  color: #2f2f2f;
  margin-bottom: 10px;
`

const YellowLabel = styled.span`
  color: #EEBF63;
`

const Description = styled.p`
  margin-bottom: 30px;
  margin-top: 15px;
`

const SocialMedia = styled.ul`

`

const FollowText = styled.span`
  font-size: 18px;
  line-height: 30px;
  color: #828282;
`

const FirstButton = styled(Button)`
  margin-right: 30px;
`

const Promotion: FC = () => {
  return(
    <section>
      <Container>
        <StyledPromotion>
          <Left>
            <Heading4>Hey!</Heading4>
            <Heading1>I’m <YellowLabel>Caner Karaman.</YellowLabel><br/>Frontend Developer.</Heading1>
            <div style={{display: 'flex', justifyContent: 'flex-end', paddingRight: 60}}> 
              <Image width="324" height="19" src="/images/icons/LineBlue.svg" alt="Break line for heading to description" />
            </div>
            <Description>
              UX Designer based in Jakarta, Indonesia. <br/>
              I am designing with a minimal and beautiful design in mind.
            </Description>
            <div style={{display: 'flex', marginBottom: 44}}>
              <FollowText>Follow me</FollowText>
              <SocialMedia />
            </div>
            <FirstButton>Mail Me</FirstButton>
            <Button buttonTypes="secondary">Download CV</Button>
          </Left>
          <Right></Right>
        </StyledPromotion>
      </Container>
    </section>
  )
}

export default Promotion;
