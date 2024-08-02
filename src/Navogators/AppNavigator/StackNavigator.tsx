import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UserStackParamList } from '../../ScreensTypes/ScreensTpes';
import { SpeechRecognition } from '../../screens/SpeechRecognitionScreens/SpeechRecognition';
import { SettingScreen } from '../../screens/SpeechRecognitionScreens/SettingScreen';
import { OrderScreen } from '../../screens/SpeechRecognitionScreens/OrderScreen';
import { ProfileScreen } from '../../screens/SpeechRecognitionScreens/ProfileScreen';
import Voice from '@react-native-voice/voice';
import { Button } from 'react-native';
const Stack = createStackNavigator<UserStackParamList>();
// useEffect(() => {
//     Voice.onSpeechResults = onSpeechResults;
//     return () => {
//       Voice.destroy().then(Voice.removeAllListeners);
//     };
//   }, []);

//   const onSpeechResults = (e:any) => {
//     const result = e.value[0].toLowerCase();
//     console.log('Recognized Speech:', result);
//     handleCommand(result);
//   };

//   const handleCommand = (command :any) => {
//     console.log('Handling Command:', command); // Debugging log
//     if (command.includes('go to profile screen')) {
//       navigation.navigate('ProfileScreen');
//     } else if (command.includes('go to settings')) {
//       navigation.navigate('Settings');
//     } else if (command.includes('go to order screen')) {
//       navigation.navigate('OrderScreen');
//     } else if (command.includes('go back')) {
//       navigation.goBack();
//     } else {
//       console.log('Command not recognized:', command); // Debugging log
//     }
//   };

const startListening = () => {
    Voice.start('en-US').catch((e) => console.error(e)); // Debugging error handling
};

const StackNavigator = () => {
    return (
        <>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                // initialRouteName={userInfo ? "Home" : "Login"}
                initialRouteName="SpeechRecognition"
            >
                {/* <Stack.Screen name="Home" component={HomeContainer} /> */}
                <Stack.Screen name="SpeechRecognition" component={SpeechRecognition} />
                <Stack.Screen name="Settings" component={SettingScreen} />
                <Stack.Screen name="OrderScreen" component={OrderScreen} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            </Stack.Navigator>
            <Button title="Start Listening" onPress={startListening} />
        </>
    );
};


export default StackNavigator;
