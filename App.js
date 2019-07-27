/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Splash } from './src/SplashScreen';
import { MainScreen } from './src/MainScreen';
import SplashScreen from 'react-native-splash-screen'
/////////////// STEPS
// install react-native-splash-screen 
// react-native link react-native-splash-screen automatically



class App extends React.Component {
    
    state = {count:0} // for testing Splash
    componentDidMount() {
    	// do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    }
    render(){
      return (     
      <View style={{ flex: 1 }}>
         <StatusBar
          barStyle='light-content'
          backgroundColor={'#3d3d3d'}
        />
         {this.state.count < 5 ?
          <Splash count={this.state.count} onPress={()=>this.setState({count:this.state.count+1})}/>
          : <MainScreen />}
      </View>)
      
    }
  }
export default App;
