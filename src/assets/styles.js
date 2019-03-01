import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
	widthPercentageToDP as wp, 
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import { colors } from './colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primary,
		alignItems: 'center',
    	justifyContent: 'center',
	},
	background: {
		width: wp('100%'),
		height: hp('93.5%'),
	},
	button: {
		width: wp('32%'),
	    height: hp('12%'),
	    backgroundColor: colors.button,
	    shadowColor: colors.black,
		shadowOffset: { width: 0, height: 10},
		shadowOpacity: 0.8,
		shadowRadius: 10,
		elevation: 10,
		borderRadius: 10,
		marginBottom: 20,
		flexDirection: 'column',
		justifyContent: 'center',
	},
	buttonText: {
		fontSize: hp('4%'),
		fontWeight: 'bold',
		textAlign: 'center',
		color: colors.text,
	},

	menuShape: {
		width: wp('32%'),
		height: hp('12%'),
		backgroundColor: colors.button,
		shadowColor: colors.black,
		shadowOffset: { width: 0, height: 10},
		shadowOpacity: 0.8,
		shadowRadius: 10,
		elevation: 10,
		borderRadius: 10,
		marginTop: 20,
		marginLeft: 15,
		flexDirection: 'column',
		justifyContent: 'center',
	},
	menuTitle: {
		fontSize: hp('4%'),
		fontWeight: 'bold',
		textAlign: 'center',
		color: colors.text,
	},
	menuSubTitle: {
		fontSize: hp('3%'),
		fontStyle: 'italic',
		textAlign: 'center',
		color: colors.text,
	},

	buttonBack: {
		width: wp('22%'),
		height: hp('10%'),
		backgroundColor: colors.button,
		shadowColor: colors.black,
		shadowOffset: { width: 0, height: 10},
		shadowOpacity: 0.8,
		shadowRadius: 10,
		elevation: 10,
		borderRadius: 10,
		marginBottom: 15,
		marginRight: 15,
		flexDirection: 'column',
		justifyContent: 'center',
	},

	shapeTitle: {
		width: wp('70%'),
		height: hp('12%'),
		backgroundColor: colors.button,
		shadowColor: colors.black,
		shadowOffset: { width: 0, height: 10},
		shadowOpacity: 0.8,
		shadowRadius: 10,
		elevation: 10,
		borderRadius: 10,
		flexDirection: 'column',
		justifyContent: 'center',
	},
	shapeContent: {
		width: wp('70%'),
		height: hp('45%'),
		backgroundColor: colors.button,
		shadowColor: colors.black,
		shadowOffset: { width: 0, height: 10},
		shadowOpacity: 0.8,
		shadowRadius: 10,
		elevation: 10,
		borderRadius: 10,
		marginTop: 20,
		flexDirection: 'column',
		justifyContent: 'center',
	},
	buttonBackAbout: {
		width: wp('70%'),
		height: hp('10%'),
		backgroundColor: colors.button,
		shadowColor: colors.black,
		shadowOffset: { width: 0, height: 10},
		shadowOpacity: 0.8,
		shadowRadius: 10,
		elevation: 10,
		borderRadius: 10,
		marginBottom: 20,
		flexDirection: 'column',
		justifyContent: 'center',
	},
	text: {
		fontSize: hp('4%'),
		textAlign: 'center',
		color: colors.text,
		marginTop: 10,
	},
	copyright: {
		fontSize: hp('3%'),
		textAlign: 'center',
		color: colors.text,
		marginBottom: 10,
	},
});

export default styles;