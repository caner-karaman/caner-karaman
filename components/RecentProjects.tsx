import React, { FC } from 'react'
import styled from 'styled-components';
import Button from './Button';
import Container from './Container';
import Image from 'next/image'

const Header = styled.header`
  margin-bottom: 56px;
`

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`

const SectionTitle = styled.h1``

const Projects = styled.div`
  display: flex;
`

const ProjectItem = styled.div`
  position: relative;
  &:first-child{
    padding-right: 30px;
  }
  &:last-child{
    padding-left: 30px;
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
`

const Link = styled.a`
  color: #151517;
  display: inline-block;
  text-decoration: underline;

  &:first-child{
    margin-right: 50px;
  }
`

const Overlay = styled.div`
  background-color: rgba(0,0,0,0.3);
  position: absolute;
  height: 598px;
  width: 100%;
  top: 0;
  border-radius: 25px;

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
              <div style={{position: 'relative'}}>
                <StyledImage width="540" height="598" src="/images/fiba_bg.jpg" alt="Break line for heading to description" />
                <Overlay />
              </div>
              <ProjectTitle>Fibabanka Mobile | Internet Banking</ProjectTitle>
              <div>
                {/* <Link href="/">View Study Case</Link> */}
                <Link target="_blank" href="https://internetbankaciligi.fibabanka.com.tr/">Live Preview</Link>
              </div>
            </ProjectItem>
            <ProjectItem>
              <div style={{position: 'relative'}}>
                <StyledImage width="540" height="598" src="/images/anadolubank.jpg" alt="Break line for heading to description" />
                <Overlay />
              </div>
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
