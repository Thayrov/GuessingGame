import {Dimensions, StyleSheet} from 'react-native';

import {colors} from '../../constants';

const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.BGColor,
		paddingBottom: height * 0.1,
	},
	title: {
		fontSize: height * 0.03,
		color: colors.TextColor,
		textAlign: 'center',
		paddingVertical: height * 0.02,
		fontFamily: 'Silkscreen-Regular',
	},
	inputContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: height * 0.02,
		paddingVertical: height * 0.02,
	},
	label: {
		fontSize: height * 0.02,
		color: colors.TextColor,
		paddingVertical: height * 0.005,
		textAlign: 'center',
		fontFamily: 'Silkscreen-Regular',
	},
	input: {
		width: '100%',
		color: colors.TextColor,
		borderBottomColor: colors.TextColor,
		borderBottomWidth: 1,
		minWidth: width * 0.14,
		fontSize: height * 0.03,
		paddingVertical: height * 0.01,
		textAlign: 'center',
		fontFamily: 'Silkscreen-Regular',
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '75%',
		justifyContent: 'space-around',
		paddingTop: height * 0.02,
		paddingLeft: width * 0.06,
	},
	confirmedContainer: {
		width: '75%',
		height: height * 0.2,
		justifyContent: 'space-around',
		alignItems: 'center',
		marginVertical: height * 0.03,
		paddingBottom: height * 0.025,
	},
	confirmedTitle: {
		paddingTop: height * 0.02,
		fontSize: height * 0.02,
		color: colors.TextColor,
		fontFamily: 'Silkscreen-Regular',
	},
});
