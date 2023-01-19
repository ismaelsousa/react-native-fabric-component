/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import RTNCenteredText from 'rtn-centered-text/js/RTNCenteredTextNativeComponent';

const App = () => {
  return (
    <SafeAreaView
      style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
      <RTNCenteredText
        text="Hello World!"
        style={{
          flex: 1,
          backgroundColor: 'pink',
          alignItems: 'center',
          zIndex: 12,
        }}>
        <Text>JSON</Text>
      </RTNCenteredText>
    </SafeAreaView>
  );
};

export default App;
