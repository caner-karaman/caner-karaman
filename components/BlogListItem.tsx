import React, { FC } from 'react'
import styled from 'styled-components';

interface BlogListItemProps{
  title: string;
  date: string;
  tags: string;
  description: string;
}

const Wrapper = styled.div`
  padding: 20px 10px 20px 0px;
  border-bottom: 1px solid lightgray;
`

const Title = styled.h2`
  color: darkgray;
  margin: 0 0 10px;
`

const DateText = styled.span`
  color: darkgray;
` 

const TagText = styled.span`
  color: lightgray;
`

const Description = styled.p`

`

const BlogListItem: FC<BlogListItemProps> = ({title, description, date, tags}) => {
  return(
    <Wrapper>
      <Title>{title}</Title>
      <div><DateText>{date}</DateText> | <TagText>Typescript, Fundamental</TagText></div>
      <Description>{description}</Description>
    </Wrapper>
  )
}

export default BlogListItem;
