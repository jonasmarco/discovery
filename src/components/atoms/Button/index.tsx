import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import * as S from './styles'

interface ButtonProps extends TouchableOpacityProps {
  children: string
  isDisabled?: boolean
}

const Button: React.ElementType<ButtonProps> = ({
	children,
	isDisabled = false,
	...props
}: ButtonProps) => {
	return (
    <S.Wrapper>
      <S.Touchable isDisabled={isDisabled} {...props}>
        <S.TouchableText isDisabled={isDisabled}>
          {children}
        </S.TouchableText>
      </S.Touchable>
    </S.Wrapper>
  )
}

export default Button
