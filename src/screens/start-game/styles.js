import {StyleSheet} from 'react-native';
import {colors} from '../../constants/themes/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.RaisinBlack,
	},
	title: {
		fontSize: 24,
		color: colors.LightCyan,
		textAlign: 'center',
		paddingVertical: 20,
	},
	inputContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 20,
		paddingVertical: 20,
	},
	label: {
		fontSize: 15,
		color: colors.LightCyan,
		paddingVertical: 5,
		textAlign: 'center',
	},
	input: {
		width: '100%',
		borderBottomColor: colors.LightCyan,
		borderBottomWidth: 1,
		minWidth: 70,
		fontSize: 22,
		paddingVertical: 10,
		textAlign: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '75%',
		justifyContent: 'space-around',
		marginTop: 20,
		marginLeft: 35,
	},
});
