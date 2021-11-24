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

  &:first-child{
    margin-right: 50px;
  }
`

const RecentProjects: FC = () => {
  return(
    <section>
      <Header>
        <Container>
          <HeaderContent>
            <SectionTitle>Recent Projects</SectionTitle>
            <Button>View More</Button>
          </HeaderContent>
          <Projects>
            <ProjectItem>
              <StyledImage width="540" height="756" src="/images/cat.jpg" alt="Break line for heading to description" />
              <ProjectTitle>UI Portfolio</ProjectTitle>
              <div>
                <Link href="/">View Study Case</Link>
                <Link href="/">Live Preview</Link>
              </div>
            </ProjectItem>
            <ProjectItem>
              <StyledImage width="540" height="756" src="/images/cat.jpg" alt="Break line for heading to description" />
              <ProjectTitle>UI Portfolio</ProjectTitle>
              <div>
                <Link href="/">View Study Case</Link>
                <Link href="/">Live Preview</Link>
              </div>
            </ProjectItem>
          </Projects>
        </Container>
      </Header>
    </section>
  )
}

export default RecentProjects;
