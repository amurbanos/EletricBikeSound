import React from 'react';
import {Node} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Velox from './components/Velox';
import Logo from './components/Logo';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['new NativeEventEmitter']);
LogBox.ignoreAllLogs();

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
