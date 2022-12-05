/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Button} from 'ui';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';



  return (
    <SafeAreaView >
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <View>
        <Text>Imported from our UI package</Text>
        <Button text={'shared component button test'}/>
      </View>
    </SafeAreaView>
  );
};

export default App;
