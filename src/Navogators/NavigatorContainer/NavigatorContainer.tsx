import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from '../AppNavigator/TabNavigator';
import StackNavigator from '../AppNavigator/StackNavigator';
const NavigatorContainer = () => {
    return (
        <NavigationContainer>
            {/* <TabNavigator /> */}
            <StackNavigator />
        </NavigationContainer>
    )
}

export default NavigatorContainer