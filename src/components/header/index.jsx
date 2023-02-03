import {SafeAreaView, Text, View} from 'react-native';

import React from 'react';
import {styles} from './styles';

const Header = props => {
	return (
		<SafeAreaView>
			<View style={styles.headerContainer}>
				<Text style={styles.headerContent}>{props.title}</Text>
			</View>
		</SafeAreaView>
	);
};

export default Header;
