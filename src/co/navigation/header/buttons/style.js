import styled from 'styled-components/native'
import CommonButton from 'co/button'

export const ButtonsWrap = styled.View`
    flex-direction: row;
    height: 100%;
    align-items: center;
`

export const Button = styled(CommonButton)`
    height: 100%;
    padding: ${({theme})=>theme.padding.medium - 4}px;
`