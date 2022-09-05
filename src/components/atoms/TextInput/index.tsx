import React, { useState } from 'react'
import { TextInputProps } from 'react-native'
import * as S from './styles'

const Input: React.ElementType<TextInputProps> = ({
  placeholder,
  ...props
}: TextInputProps) => {
  const [isFocused, setFocus] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')
  const isActive = !!value

  return (
    <S.Wrapper>
      <S.Label isActive={isFocused || isActive}>{placeholder}</S.Label>
      <S.TextInput
        {...props}
        onFocus={() => {
          setFocus(true)
        }}
        onBlur={() => {
          setFocus(false)
        }}
        onChangeText={text => setValue(text)}
      />
    </S.Wrapper>
  )
}

export default Input
