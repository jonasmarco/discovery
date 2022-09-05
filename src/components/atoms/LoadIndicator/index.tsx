import React from 'react'
import { ActivityIndicator } from 'react-native'

import * as S from './styles'

const LoadIndicator = () => {
	return (
    <S.Wrapper>
      <ActivityIndicator />
    </S.Wrapper>
  )
}

export default LoadIndicator