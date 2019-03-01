import React, { Component } from 'react';
import {
	createAppContainer,
	createStackNavigator,
} from 'react-navigation';

import Home from './home';
import Menu from './menu';
import About from './about';
import Forecourt from './forecourt';
import Schoolyard from './schoolyard';
import Classroom from './classroom';
import Toilet from './toilet';
import Medical from './medical';
import Canteen from './canteen';
import Computer from './computer';
import Garden from './garden';

const Navigation = createStackNavigator (
	{
		Home: { screen: Home },
		About: { screen: About },
		Menu: { screen: Menu },
		Forecourt: { screen: Forecourt },
		Schoolyard: { screen: Schoolyard },
		Classroom: { screen: Classroom },
		Toilet: { screen: Toilet },
		Medical: { screen: Medical },
		Canteen: { screen: Canteen },
		Computer: { screen: Computer },
		Garden: { screen: Garden },
	}, 
	{
		initialRouteName: 'Home',
		headerMode: 'none',
	}
);

export default createAppContainer(Navigation);