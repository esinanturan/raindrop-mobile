import React from 'react'
import t from 't'
import { links } from 'config'

import Goto from 'co/goto'
import Browser from 'modules/browser'

export default class HelpItem extends React.Component {
    state = {
        open: false
    }

    onPress = ()=>
        this.setState({ open: true })

    onBrowserClose = ()=>
        this.setState({ open: false })

    render() {
        return (
            <>
                <Goto 
                    last={this.props.last}
                    label={t.s('help')}
                    icon='question'
                    onPress={this.onPress} />

                {this.state.open && (
					<Browser
						link={links.help.mobile}
                        fromBottom
						onClose={this.onBrowserClose} />
				)}
            </>
        )
    }
}