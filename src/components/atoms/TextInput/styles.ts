import styled from 'styled-components/native'
import { TextProps } from 'react-native'

interface LabelProps extends TextProps {
  isActive: boolean
}

export const Wrapper = styled.View`
  height: 50px;
  margin: 15px 0px;
  position: relative;
`

export const Label = styled.Text<LabelProps>`
  bottom: ${({ isActive }) => (isActive ? '45px' : '17px')};
  font-weight: ${({ isActive }) => (isActive ? 700 : 500)};
  position: absolute;
`

export const TextInput = styled.TextInput`
  border-bottom-width: 0.5px;
  color: #24272b;
  font-size: 14px;
  height: 50px;
`
