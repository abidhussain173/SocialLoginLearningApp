// App.tsx
import * as React from 'react';
import AppNavigator from './src/Navogators/AppNavigator/TabNavigator';
import { SafeAreaView, Text, View } from 'react-native';
import NavigatorContainer from './src/Navogators/NavigatorContainer/NavigatorContainer';

const App: React.FC = () => {
  return (
    <NavigatorContainer />
  )
};

export default App;
