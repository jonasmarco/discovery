import styled, { css } from 'styled-components/native'
import { TextProps } from 'react-native'

interface TextType extends TextProps {
  fontSize?: string
}

export const Wrapper = styled.Text<TextType>`
  ${({ fontSize }) => css`
    color: ${(props) => props.theme['TITLE_COLOR']};
    font-size: ${fontSize || '32px'};
    font-weight: 600;
  `}
`