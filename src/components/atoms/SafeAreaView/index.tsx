import React from 'react'
import * as S from './styles'

type SafeAreaViewType = {
  children: React.ReactNode
}

const SafeAreaView = ({ children }: SafeAreaViewType) => {
  return <S.Container>{children}</S.Container>
}

export default SafeAreaView
