import React, { FC } from 'react'
import styled from "styled-components";
import breakpoints from '../common/breakpoints';

const StyledDiv = styled.div`
  width: 1140px;
  margin: 0 auto;

  ${breakpoints.device.xl}{
    width: 100%;
    padding: 0 18px;
  }
`

const Container: FC = ({children}) => {
  return (
    <StyledDiv>
      {children}
    </StyledDiv>
  )
}

export default Container;
