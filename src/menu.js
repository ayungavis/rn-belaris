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

export default class Menu extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
			<Container style={styles.container}>
				<Content>
					<ImageBackground source={require('./assets/img/background-menu.png')} style={styles.background}>
						
						<View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
							<TouchableWithoutFeedback onPress={() => navigate('Forecourt')}>						
						 		<View style={styles.menuShape}>
					 				<Text style={styles.menuTitle}>Forecourt</Text>
					 				<Text style={styles.menuSubTitle}>Perkarangan Sekolah</Text>
							 	</View>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback onPress={() => navigate('Schoolyard')}>						
						 		<View style={styles.menuShape}>
					 				<Text style={styles.menuTitle}>School Yard</Text>
					 				<Text style={styles.menuSubTitle}>Halaman Sekolah</Text>
							 	</View>
							</TouchableWithoutFeedback>
						</View>
						<View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
							<TouchableWithoutFeedback onPress={() => navigate('Classroom')}>						
						 		<View style={styles.menuShape}>
					 				<Text style={styles.menuTitle}>Classroom</Text>
					 				<Text style={styles.menuSubTitle}>Ruang Kelas</Text>
							 	</View>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback onPress={() => navigate('Toilet')}>						
						 		<View style={styles.menuShape}>
					 				<Text style={styles.menuTitle}>Toilet</Text>
					 				<Text style={styles.menuSubTitle}>Toilet</Text>
							 	</View>
							</TouchableWithoutFeedback>
						</View>
						<View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
							<TouchableWithoutFeedback onPress={() => navigate('Medical')}>						
						 		<View style={styles.menuShape}>
					 				<Text style={styles.menuTitle}>Medical Room</Text>
					 				<Text style={styles.menuSubTitle}>UKS</Text>
							 	</View>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback onPress={() => navigate('Canteen')}>						
						 		<View style={styles.menuShape}>
					 				<Text style={styles.menuTitle}>Canteen</Text>
					 				<Text style={styles.menuSubTitle}>Kantin</Text>
							 	</View>
							</TouchableWithoutFeedback>
						</View>
						<View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
							<TouchableWithoutFeedback onPress={() => navigate('Computer')}>						
						 		<View style={styles.menuShape}>
					 				<Text style={styles.menuTitle}>Computer Laboratory</Text>
					 				<Text style={styles.menuSubTitle}>Laboratorium Komputer</Text>
							 	</View>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback onPress={() => navigate('Garden')}>						
						 		<View style={styles.menuShape}>
					 				<Text style={styles.menuTitle}>School's Garden</Text>
					 				<Text style={styles.menuSubTitle}>Taman Sekolah</Text>
							 	</View>
							</TouchableWithoutFeedback>
						</View>
						<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
							<TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()}>						
						 		<View style={styles.buttonBack}>
					 				<Text style={styles.buttonText}>Menu Awal</Text>
							 	</View>
							</TouchableWithoutFeedback>
						</View>
					</ImageBackground>
				</Content>
			</Container>
		);
	}
}