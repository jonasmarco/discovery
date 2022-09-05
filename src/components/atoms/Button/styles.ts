import styled, { css } from 'styled-components/native'
import { TouchableOpacityProps, TextProps } from 'react-native'

interface TouchableType extends TouchableOpacityProps {
  isDisabled: boolean
}

interface TextType extends TextProps {
  isDisabled: boolean
}

export const Wrapper = styled.View`
  background: transparent;
  margin: 8px 0;
  opacity: 1;
  position: relative;
`

export const Touchable = styled.TouchableOpacity<TouchableType>`
  ${() => css`
    align-items: center;
    background: ${(props) => props.theme['BUTTON_COLOR']};
    border-radius: 16px;
    flex-direction: row;
    justify-content: center;
    opacity: ${(props) => (props.isDisabled ? '0.2' : '1')};
    padding: 8px 16px;
  `}
`

export const TouchableText = styled.Text<TextType>`
  ${({ isDisabled }) => css`
    color: ${(props) =>
      isDisabled
        ? props.theme['BUTTON_DISABLED_COLOR']
        : props.theme['BUTTON_COLOR']};
    font-family: bold;
    font-size: 16px;
  `}
`
