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
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './assets/styles';
import Navigation from './navigation';

export default class About extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
			<Container style={styles.container}>
				<Content>
					<ImageBackground source={require('./assets/img/background-home.png')} style={styles.background}>
						<View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
							<View style={styles.shapeTitle}>
								<Text style={styles.buttonText}>TIM PENYUSUN</Text>
							</View>
						</View>
						<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
							<View style={styles.shapeContent}>
								<Text style={styles.text}>
									Fani Rizkyyana - (1801025343){'\n'}
									Nifa Nailul Rahmah - (1801025472){'\n'}
									Nita Fauziyah - (1801025200){'\n'}
									Rosaalina Putri Jwy Arrasyid - (1801025058){'\n'}{'\n'}
									<Text style={styles.copyright}>Version 1.0{'\n'}© 2019 Tranity Project</Text>
								</Text>
							</View>
						</View>
						<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
							<TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()}>						
						 		<View style={styles.buttonBackAbout}>
					 				<Text style={styles.buttonText}>Kembali</Text>
							 	</View>
							</TouchableWithoutFeedback>
						</View>
					</ImageBackground>
				</Content>
			</Container>
		);
	}
}