import { PureComponent } from 'react';
import _ from 'lodash-es'
import styled from 'styled-components/native'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'
import Icon from 'co/icon'
import Context from './context'

export const width = 72

const Touch = styled(TouchableNativeFeedback)`
    background: ${({ theme, background='text.secondary' })=>theme.background[background] || _.get(theme, background)};
    width: ${width}px;
    height: 100%;
    align-items: center;
    justify-content: center;
`

export class Button extends PureComponent {
    static contextType = Context

    onPress = e=>{
        this.context.close && this.context.close()
        this.props.onPress(e)
    }

    render() {
        const { icon, variant, color, ...etc } = this.props

        return (
            <Touch {...etc} onPress={this.onPress}>
                <Icon 
                    name={icon}
                    color={color||'white'}
                    variant={variant} />
            </Touch>
        )
    }
}