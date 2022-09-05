import React from 'react'
import * as S from './styles'

type HeaderProps = {
  children: React.ReactNode
}

const Header = ({ children }: HeaderProps) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default Header