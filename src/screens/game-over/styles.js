import {Dimensions, StyleSheet} from 'react-native';

import {colors} from '../../constants';

const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.BGColor,
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: height * 0.1,
		width: width,
	},
	label: {
		fontSize: height * 0.02,
		color: colors.TextColor,
		paddingVertical: height * 0.01,
		textAlign: 'center',
		fontFamily: 'Silkscreen-Regular',
	},

	buttonContainer: {
		flexDirection: 'row',
		width: '70%',
		justifyContent: 'space-around',
		paddingTop: height * 0.02,
		paddingLeft: width * 0.15,
	},
	content: {
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: width * 0.04,
		paddingVertical: height * 0.04,
	},
	image: {
		width: width * 0.55,
		height: height * 0.2,
	},
});
