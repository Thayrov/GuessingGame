import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.BGColor,
		paddingBottom: 200,
	},

	content: {
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 20,
		paddingVertical: 20,
	},
	label: {
		fontSize: 15,
		color: colors.TextColor,
		paddingVertical: 5,
		textAlign: 'center',
		fontFamily: 'Silkscreen-Regular',
	},
	input: {
		width: '100%',
		color: colors.TextColor,
		borderBottomColor: colors.TextColor,
		borderBottomWidth: 1,
		minWidth: 70,
		fontSize: 22,
		paddingVertical: 10,
		textAlign: 'center',
		fontFamily: 'Silkscreen-Regular',
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '75%',
		justifyContent: 'space-around',
		marginTop: 20,
		marginLeft: 35,
	},
});
