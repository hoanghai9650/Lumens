/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {StatusBar, StyleSheet} from 'react-native';
import Scenes from './src/scenes';

function App(): JSX.Element {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Scenes />
    </>
  );
}

export default App;
