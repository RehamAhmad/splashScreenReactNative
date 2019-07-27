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
import { SplashScreen } from './src/SplashScreen';
import { MainScreen } from './src/MainScreen';
/////////////// STEPS
// install react-native-splash-screen 
// react-native link react-native-splash-screen automatically

const App = () => {
  return (
  // <SplashScreen />
     <MainScreen/>
  );
};

export default App;
