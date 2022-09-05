import React from 'react'
import * as S from './styles'

type PageTitleProps = {
  fontSize?: string
  children: React.ReactNode
}

const PageTitle = ({ fontSize, children }: PageTitleProps) => {
  return <S.Wrapper fontSize={fontSize}>{children}</S.Wrapper>
}

export default PageTitle