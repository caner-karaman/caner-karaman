import React, { FC } from 'react'
import styled from "styled-components";
import Link from 'next/link';

interface ButtonStyleProps {
  buttonTypes?: 'primary' | 'secondary'
}

interface ButtonProps extends ButtonStyleProps{
  className?: string;
  onClick?(): void;
  href?: string;
}

const StyledButton = styled.button<ButtonStyleProps>`
  padding: 0 28px;
  height: 55px;
  background-color: #${({buttonTypes}) => buttonTypes == 'primary' ? 'EEBF63' : 'F1F1F1'};
  border: 1px solid #${({buttonTypes}) => buttonTypes == 'primary' ? 'EEBF63' : 'EEBF63'};
  color: #${({buttonTypes}) => buttonTypes == 'primary' ? 'FFFFFF' : '2F2F2F'};
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
`

const Button: FC<ButtonProps> = ({children, buttonTypes='primary', className, onClick, href}) => {
  return(
    <>
    {!!href ? (
      <Link href={href}>
        <StyledButton onClick={onClick} buttonTypes={buttonTypes} className={className}>
          {children}
        </StyledButton>
      </Link>
    ) : 
      (
      <StyledButton onClick={onClick} buttonTypes={buttonTypes} className={className}>
        {children}
      </StyledButton>
    )}
    </>
  )
}

export default Button;
