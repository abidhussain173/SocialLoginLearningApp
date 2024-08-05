import React, { useEffect } from 'react';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { UserStackParamList } from '../../ScreensTypes/ScreensTpes';
import { SpeechRecognition } from '../../screens/SpeechRecognitionScreens/SpeechRecognition';
import { SettingScreen } from '../../screens/SpeechRecognitionScreens/SettingScreen';
import { OrderScreen } from '../../screens/SpeechRecognitionScreens/OrderScreen';
import { ProfileScreen } from '../../screens/SpeechRecognitionScreens/ProfileScreen';
import { useNavigation } from '@react-navigation/native';
const Stack = createStackNavigator<UserStackParamList>();
// const navigation = useNavigation<StackNavigationProp<UserStackParamList>>();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            // initialRouteName={userInfo ? "Home" : "Login"}
            initialRouteName="Settings"
        >
            {/* <Stack.Screen name="Home" component={HomeContainer} /> */}
            <Stack.Screen name="SpeechRecognition" component={SpeechRecognition} />
            <Stack.Screen name="Settings" component={SettingScreen} />
            <Stack.Screen name="OrderScreen" component={OrderScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        </Stack.Navigator>
    );
};


export default StackNavigator;
