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
  padding: 20px 15px;
  background-color: #fff;
  cursor: pointer;
  border-radius: 7px;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.3);
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.3);
  margin-bottom: 20px;
  transition: .3s;
  
  ${breakpoints.device.sm}{
    padding: 12px 10px 12px 0px;
  }

  &:hover{
    opacity: 0.7;
  }
`

const Title = styled.h2`
  color: #3c3c3c;
  width: 80%;
  margin: 0 0;
  
  ${breakpoints.device.sm}{
    line-height: 1.3;
  }
`

const DateText = styled.span`
  color: #3c3c3c;
` 

const TagText = styled.span`
  color: #a3a3a3;
`

const Info = styled.div`
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
`

const Description = styled.p`
  width: 80%;
`

const BlogListItem: FC<BlogListItemProps> = ({title, description, date, tags, href}) => {
  return(
    <Link href={href}>
      <Wrapper>
        <Title>{title}</Title>
        <Info><DateText>{date}</DateText> | <TagText>{tags}</TagText></Info>
        <Description>{description}</Description>
      </Wrapper>
    </Link>
  )
}

export default BlogListItem;
