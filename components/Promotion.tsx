import React, { FC } from 'react'
import styled from "styled-components";
import Container from './Container';
import Image from 'next/image'
import Button from './Button';
import breakpoints from '../common/breakpoints';

const CV_LINK = "https://drive.google.com/file/d/1JtJGhwSjlA18vKO7FX4G7bXVzCxaumxk/view?usp=sharing";
const MAIL_ADRESS = "karamancaner1995@gmail.com";

const StyledPromotion = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 177px;
  height: 100vh;

  ${breakpoints.device.xl}{
    padding-top: 110px;
    margin-bottom: 35px;
  }
  ${breakpoints.device.lg}{
    height: auto;
  }
  ${breakpoints.device.sm}{
    padding-top: 75px;
  }
`;

const Left = styled.div`
  flex: 1;
`
const Right = styled.div`
  flex: 1;
  ${breakpoints.device.lg}{
    display: none;
  }
`
const Heading4 = styled.h4`
  color: #828282;
  margin-bottom: 16px;
  ${breakpoints.device.xl}{
    margin-bottom: 12px;
  }
  ${breakpoints.device.sm}{
    margin-bottom: 0;
  }
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

  ${breakpoints.device.lg}{
    margin-bottom: 25px;
    width: 65%;
  }

  ${breakpoints.device.sm}{
    width: auto;
  }
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

const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 60px;

  ${breakpoints.device.xl}{
    justify-content: flex-start;
  }
  ${breakpoints.device.sm}{
    display: none;
  }
`

const SocialMediaWrapper = styled.div`
  display: flex; 
  margin-bottom: 44px;
  align-items: center;

  ${breakpoints.device.xl}{
    margin-bottom: 24px;
  }
`

const Promotion: FC = () => {
  return(
    <section>
      <Container>
        <StyledPromotion>
          <Left>
            <Heading4>Hey!</Heading4>
            <Heading1>I’m <YellowLabel>Caner Karaman.</YellowLabel><br/>Frontend Developer.</Heading1>
            <ImageWrapper>
              <Image width="424" height="24" src="/images/icons/LineBlue.svg" alt="Break line for heading to description" />
            </ImageWrapper>
            <Description>
              Software Engineer based in Istanbul, Turkey.<br/>
              I am developing mobile, web application with React | React Native
            </Description>
            <SocialMediaWrapper>
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
            </SocialMediaWrapper>
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
