import React, {Component} from 'react';
import Orientation from 'react-native-orientation';
/*import SplashScreen from 'react-native-splash-screen';*/

import Navigation from './src/navigation';

export default class App extends Component<Props> {
    _orientationDidChange = (orientation) => {
    if (orientation === 'LANDSCAPE') {
      // do something with landscape layout
    } else {
      // do something with portrait layout
    }
  }

  componentDidMount() {
    // this locks the view to Portrait Mode
    // Orientation.lockToPortrait();

    // this locks the view to Landscape Mode
    Orientation.lockToLandscape();

    // this unlocks any previous locks to all Orientations
    // Orientation.unlockAllOrientations();

    Orientation.addOrientationListener(this._orientationDidChange);
    /*SplashScreen.hide();*/
  }

  render() {
    return <Navigation />
  }
}
