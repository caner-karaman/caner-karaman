import React, { FC } from 'react'
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 1140px;
  margin: 0 auto;
`

const Container: FC = ({children}) => {
  return (
    <StyledDiv>
      {children}
    </StyledDiv>
  )
}

export default Container;
