import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from 'react-native-splash-screen';

import Velox from './components/Velox';
import Logo from './components/Logo';

const App: () => Node = () => {
  return (
    <>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.velContainer}>
        <Velox />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.lighter,
    backgroundColor: '#000',
  },
  velContainer: {
    flex: 9,
    alignItems: 'center',
    backgroundColor: '#000',
  },
});

export default App;
