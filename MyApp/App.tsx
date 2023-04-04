/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
import RTNCenteredText from 'rtn-centered-text/js/RTNCenteredTextNativeComponent';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RTNCenteredText
        text="Hello World!"
        style={{
          flex: 1,
          alignItems: 'center',
          zIndex: 12,
        }}
      />
    </SafeAreaView>
  );
};

export default App;
