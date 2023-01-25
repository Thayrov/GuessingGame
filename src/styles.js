import {StyleSheet} from 'react-native';
import {colors} from './constants';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	containerLoader: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.BGColor,
	},
});
