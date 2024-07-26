import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from '../AppNavigator/TabNavigator';
const NavigatorContainer = () => {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    )
}

export default NavigatorContainer