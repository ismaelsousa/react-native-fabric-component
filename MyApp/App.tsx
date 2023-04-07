/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
import RTNCenteredText from 'rtn-centered-text/js/RTNCenteredTextNativeComponent';

const App = () => {
  return (
    <SafeAreaView
      style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
      <RTNCenteredText
        text="Hello Android!"
        style={{
          flex: 1,
        }}
      />
    </SafeAreaView>
  );
};

export default App;
