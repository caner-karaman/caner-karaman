import React, { FC } from 'react'
import styled from "styled-components";
import Container from './Container';
import Image from 'next/image'
import Button from './Button';

const CV_LINK = "https://drive.google.com/file/d/1JtJGhwSjlA18vKO7FX4G7bXVzCxaumxk/view?usp=sharing";
const MAIL_ADRESS = "karamancaner1995@gmail.com";

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
  display: flex;
`

const SocialMediaItem = styled.li`
  list-style: none;
  margin: 0 10px;
`

const SocialMediaLink = styled.a``

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
              <Image width="424" height="24" src="/images/icons/LineBlue.svg" alt="Break line for heading to description" />
            </div>
            <Description>
              Software Engineer based in Istanbul, Turkey.<br/>
              I am developing mobile, web application with React | React Native
            </Description>
            <div style={{display: 'flex', marginBottom: 44}}>
              <FollowText>Follow me</FollowText>
              <SocialMedia>
                <SocialMediaItem>
                  <SocialMediaLink target="_blank" href="https://medium.com/@karamancaner1995">
                    <Image width="40" height="40" src="/images/medium.png" alt="Medium app logo" />
                  </SocialMediaLink>
                </SocialMediaItem>
                <SocialMediaItem>
                  <SocialMediaLink target="_blank" href="https://twitter.com/karamancaner191">
                    <Image width="40" height="40" src="/images/twitter.png" alt="Twitter app logo" />
                  </SocialMediaLink>
                </SocialMediaItem>
                <SocialMediaItem>
                  <SocialMediaLink target="_blank" href="https://www.youtube.com/channel/UCth6C-4p0qBENsr6eIsOpeA">
                    <Image width="40" height="40" src="/images/youtube.png" alt="Youtube app logo" />
                  </SocialMediaLink>
                </SocialMediaItem>
              </SocialMedia>
            </div>
            <FirstButton onClick={() => window.open(`mailto:${MAIL_ADRESS}`)}>Mail Me</FirstButton>
            <Button onClick={() => window.open(CV_LINK,'_newtab')}  buttonTypes="secondary">Download CV</Button>
          </Left>
          <Right></Right>
        </StyledPromotion>
      </Container>
    </section>
  )
}

export default Promotion;
