import React, { FC } from 'react'
import styled from 'styled-components';
import Link from "next/link";
import breakpoints from '../common/breakpoints';

interface BlogListItemProps{
  title: string;
  date: string;
  tags: string;
  href: string;
  description: string;
}

const Wrapper = styled.div`
  padding: 20px 10px 20px 0px;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
  
  ${breakpoints.device.sm}{
    padding: 12px 10px 12px 0px;
  }
`

const Title = styled.h2`
  color: darkgray;
  margin: 0 0 10px;
  
  ${breakpoints.device.sm}{
    line-height: 1.3;
  }
`

const DateText = styled.span`
  color: darkgray;
` 

const TagText = styled.span`
  color: lightgray;
`

const Description = styled.p`

`

const BlogListItem: FC<BlogListItemProps> = ({title, description, date, tags, href}) => {
  return(
    <Link href={href}>
      <Wrapper>
        <Title>{title}</Title>
        <div><DateText>{date}</DateText> | <TagText>Typescript, Fundamental</TagText></div>
        <Description>{description}</Description>
      </Wrapper>
    </Link>
  )
}

export default BlogListItem;
