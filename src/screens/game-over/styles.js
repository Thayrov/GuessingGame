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
	content: {
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: width * 0.04,
		paddingVertical: height * 0.04,
	},
	label: {
		fontSize: ((height * width) / 1000) * 0.04,
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
	image: {
		width: width * 0.55,
		height: height * 0.2,
	},

	landscapeContainer: {
		flex: 1,
		backgroundColor: colors.BGColor,
		alignItems: 'center',
		justifyContent: 'center',
	},
	landscapeContent: {
		width: width * 0.8,
		height: height * 0.5,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
	landscapeImage: {
		width: width * 0.25,
		height: height * 0.4,
	},
	landscapeButtonContainer: {
		width: '15%',
		justifyContent: 'center',
		paddingTop: height * 0.02,
	},
});
