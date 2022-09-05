import styled, { css } from 'styled-components/native'
import Constants from 'expo-constants'

export const Container = styled.SafeAreaView`
  ${() => css`
    background-color: ${(props) => props.theme['PRIMARY_COLOR']};
    flex: 1;
    padding-top: ${Constants.statusBarHeight + 'px'};
    padding: 0 16px;
  `}
`