import React from 'react'
import * as S from './styles'

type ParagraphProps = {
  children: React.ReactNode
  fontWeight?: string
}

const Paragraph = ({ children, fontWeight }: ParagraphProps) => {
  return <S.Wrapper fontWeight={fontWeight}>{children}</S.Wrapper>
}

export default Paragraph
