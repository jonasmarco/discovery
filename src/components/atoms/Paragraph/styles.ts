import styled, { css } from 'styled-components/native'
import { TextProps } from 'react-native'

interface TextType extends TextProps {
  fontWeight?: string
}

export const Wrapper = styled.Text<TextType>`
  ${({ fontWeight }) => css`
    color: ${(props) => props.theme['SECONDARY_COLOR']};
    font-size: 16px;
    font-weight: ${fontWeight || '400'};
    letter-spacing: 0.04px;
    line-height: 32px;
    margin: 8px 0 0;
  `}
`