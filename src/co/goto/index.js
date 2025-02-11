import Icon from 'co/icon'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'
import {
	ImageView,
	GotoView,
	GotoTitleText,
	GotoActionText,
	ActionButton
} from './style'

const Goto = ({
	icon,
	variant,
	color,
	ellipsizeMode='tail',

	action='arrow-right-s',
	actionColor,
	actionVariant,
	label,
	labelFontFamily,
	subLabel,
	subLabelBadge,
	last, 

	onPress,
	onActionPress
})=>{
	let actionIcon
	if (action)
		actionIcon = <Icon name={action} variant={actionVariant} color={actionColor} />

	let iconItself
	switch(typeof icon) {
		case 'string': iconItself = <Icon name={icon} variant={variant} color={color} />; break
		case 'object': iconItself = icon; break
	}

	return (
		<TouchableNativeFeedback onPress={onPress}>
			<GotoView last={last}>
				{iconItself ? <ImageView>{iconItself}</ImageView> : null}
				<GotoTitleText ellipsizeMode={ellipsizeMode} fontFamily={labelFontFamily}>{label}</GotoTitleText>
				<GotoActionText badge={subLabelBadge}>{subLabel}</GotoActionText>
				{onActionPress ? <ActionButton onPress={onActionPress}>{actionIcon}</ActionButton> : actionIcon}
			</GotoView>
		</TouchableNativeFeedback>
	)
}

export default Goto