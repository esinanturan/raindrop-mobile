import { Component } from 'react';
import t from 't'
import _ from 'lodash-es'
import { mediumFade } from 'co/style/animation'
import { connect } from 'react-redux'
import { hideSection } from 'data/actions/config'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'

import { SectionView, SectionText } from 'co/style/section'
import Button from 'co/button'

class FiltersItemsHeader extends Component {
    onSectionPress = ()=>{
        mediumFade()
        this.props.hideSection('filters', !this.props.hidden)
    }

    render() {
        const { hidden } = this.props

        return (
            <TouchableNativeFeedback onPress={this.onSectionPress}>
                <SectionView>
                    <SectionText>{_.capitalize(t.s('fastFilter'))}</SectionText>
    
                    {!!hidden && (
                        <Button 
                            icon='arrow-down-s'
                            color='text.secondary'
                            onPress={this.onSectionPress} />
                    )}
                </SectionView>
            </TouchableNativeFeedback>
        )
    }
}

export default connect(
	(state, { hidden }) => ({
        hidden: typeof hidden != 'undefined' ? hidden : state.config.filters_hide
    }),
	{ hideSection }
)(FiltersItemsHeader)