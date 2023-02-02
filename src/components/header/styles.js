import {Dimensions, StatusBar, StyleSheet} from 'react-native';

import {colors} from '../../constants';

const {height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
	headerContainer: {
		paddingTop: StatusBar.currentHeight * 1.5,
		height: height * 0.15,
		backgroundColor: colors.PrimaryColor,
	},
	headerContent: {
		textAlign: 'center',
		fontSize: height * 0.03,
		fontFamily: 'Silkscreen-Bold',
		color: colors.TextColor,
	},
});
