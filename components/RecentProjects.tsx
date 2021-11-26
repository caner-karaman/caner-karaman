import React, { FC } from 'react'
import styled from 'styled-components';
import Button from './Button';
import Container from './Container';
import Image from 'next/image'
import breakpoints from '../common/breakpoints';

const Header = styled.header`
  margin-bottom: 56px;

  ${breakpoints.device.xl}{
    margin-bottom: 48px;
  }
  ${breakpoints.device.lg}{
    margin-bottom: 40px;
  }
  ${breakpoints.device.sm}{
    margin-bottom: 30px;
  }
  ${breakpoints.device.xs}{
    margin-bottom: 20px;
  }
`

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  ${breakpoints.device.lg}{
    margin-bottom: 20px;
  }
`

const SectionTitle = styled.h1`
  ${breakpoints.device.sm}{
    line-height: 1.3;
  }
`

const Projects = styled.div`
  display: flex;

  ${breakpoints.device.sm}{
    flex-direction: column;
  }
`

const ProjectItem = styled.div`
  position: relative;
  &:first-child{
    padding-right: 30px;
  }
  &:last-child{
    padding-left: 30px;
  }

  ${breakpoints.device.lg}{
    &:first-child{
      padding-right: 15px;
    }
    &:last-child{
      padding-left: 15px;
    }
  }
  ${breakpoints.device.sm}{
    margin-bottom: 25px;
    &:first-child{
      padding-right: 0;
    }
    &:last-child{
      padding-left: 0;
    }
  }
`

const StyledImage = styled(Image)`
  border-radius: 25px;
`

const ProjectTitle = styled.h4`
  color: #1c1c1c;
  font-weight: 600;
  font-size: 24px;
  margin-top: 15px;
  margin-bottom: 20px;

  ${breakpoints.device.lg}{
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 14px;
  }
  ${breakpoints.device.sm}{
    font-size: 20px;
    margin-top: 0px;
    margin-bottom: 6px;
  }
`

const Link = styled.a`
  color: #151517;
  display: inline-block;
  text-decoration: underline;

  &:first-child{
    margin-right: 50px;
  }
`

const ImageWrapper = styled.div`
  ${breakpoints.device.sm}{
    display: flex;
    justify-content: center;
    margin-bottom: 12px;
  }
`

const RecentProjects: FC = () => {
  return(
    <section>
      <Header>
        <Container>
          <HeaderContent>
            <SectionTitle>Recent Projects</SectionTitle>
            <Button href="/projects">View More</Button>
          </HeaderContent>
          <Projects>
            <ProjectItem>
              <ImageWrapper>
                <StyledImage width="540" height="598" src="/images/fiba_bg.jpg" alt="Break line for heading to description" />
              </ImageWrapper>
              <ProjectTitle>Fibabanka Mobile | Internet Banking</ProjectTitle>
              <div>
                {/* <Link href="/">View Study Case</Link> */}
                <Link target="_blank" href="https://internetbankaciligi.fibabanka.com.tr/">Live Preview</Link>
              </div>
            </ProjectItem>
            <ProjectItem>
              <ImageWrapper>
                <StyledImage width="540" height="598" src="/images/anadolubank.jpg" alt="Break line for heading to description" />
              </ImageWrapper>
              <ProjectTitle>Anadolubank Internet Banking</ProjectTitle>
              <div>
                {/* <Link href="/">View Study Case</Link> */}
                <Link target="_blank" href="https://isube.anadolubank.com.tr/ibank/?loginPage=b">Live Preview</Link>
              </div>
            </ProjectItem>
          </Projects>
        </Container>
      </Header>
    </section>
  )
}

export default RecentProjects;
