import React, { Component } from 'react';
import {
	View,
	ImageBackground,
	Image,
	TouchableWithoutFeedback,
	ScrollView,
} from 'react-native';
import {
	Container,
	Text,
	Button,
	Content,
	Body,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './assets/styles';
import Navigation from './navigation';

export default class Medical extends Component {
	render() {
		return (
			<Container style={styles.container}>
				<Content>
					<ImageBackground source={require('./assets/img/background-medical.png')} style={styles.background}>
						<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
							<TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()}>						
						 		<View style={styles.buttonBack}>
					 				<Text style={styles.buttonText}>Paham</Text>
							 	</View>
							</TouchableWithoutFeedback>
						</View>
						
					</ImageBackground>
				</Content>
			</Container>
		);
	}
}