import React, { Component } from 'react';
import {
	View,
	ImageBackground,
	Image,
	TouchableWithoutFeedback,
	ScrollView,
	BackHandler,
	StatusBar,
} from 'react-native';
import {
	Container,
	Text,
	Button,
	Content,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './assets/styles';
import Navigation from './navigation';

export default class Home extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
			<Container style={styles.container}>
				<Content>
					<ImageBackground source={require('./assets/img/background-home.png')} style={styles.background}>
						
						<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', marginLeft: 20 }}>
							<TouchableWithoutFeedback onPress={() => navigate('Menu')}>
								<View style={styles.button}>
									<Text style={styles.buttonText}>MULAI BELAJAR YUK!</Text>
								</View>

							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback onPress={() => navigate('About')}>
								<View style={styles.button}>
									<Text style={styles.buttonText}>TENTANG KAMI</Text>
								</View>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback onPress={() => BackHandler.exitApp()}>
								<View style={styles.button}>
									<Text style={styles.buttonText}>SELESAI BELAJAR</Text>
								</View>
							</TouchableWithoutFeedback>
						</View>
						
					</ImageBackground>
				</Content>
			</Container>
		);
	}
}