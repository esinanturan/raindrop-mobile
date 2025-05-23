import { Component } from 'react';
import { Tap } from './cover.style'
import Cover from 'co/bookmarks/item/view/cover'
import { constants } from 'co/bookmarks/item/view/style'
import getScreenshotUrl from 'data/modules/format/screenshot'

class BookmarkEditCover extends Component {
    static defaultProps = {
        _id: 0,
        cover: '',
        domain: '',
        link: ''
    }

    onPress = ()=>
        this.props.navigation.navigate('bookmark/cover', { _id: this.props._id })

    render() {
        const { item: { cover, link, domain } } = this.props

        return (
            <Tap onPress={this.onPress}>
                <Cover
                    src={cover == '<screenshot>' ? getScreenshotUrl(link) : cover}
                    link={link}
                    domain={domain}
                    width={constants.list.coverWidth}
                    height={constants.list.coverHeight} />
            </Tap>
        )
    }
}

export default BookmarkEditCover