import { View, Text, Button } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from '../AppNavigator/TabNavigator';
import StackNavigator from '../AppNavigator/StackNavigator';
import Voice from '@react-native-voice/voice';

const NavigatorContainer = () => {
    const navigation = useRef<any>("");

    useEffect(() => {
        console.log('onSpeechResults');
        Voice.onSpeechResults = onSpeechResults;
        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        };
    }, []);

    const onSpeechResults = (e: any) => {
        const result = e.value[0].toLowerCase();
        console.log('Recognized Speech:', result);
        handleCommand(result);
    };

    const handleCommand = (command: any) => {
        console.log('Handling Command:', command);
        if (command.includes('go to profile screen')) {
            console.log('Handling profile screen:', command);
            navigation.current?.navigate('ProfileScreen');
        } else if (command.includes('go to settings')) {
            navigation.current?.navigate('Settings');
        } else if (command.includes('go to order screen')) {
            navigation.current?.navigate('OrderScreen');
        } else if (command.includes('go back')) {
            navigation.current?.navigate.goBack();
        } else {
            console.log('Command not recognized:', command);
        }
    };

    const startListening = () => {
        Voice.start('en-US').catch((e) => console.error(e)); // Debugging error handling
    };
    return (
        <NavigationContainer
            ref={navigation}
        >
            {/* <TabNavigator /> */}
            <StackNavigator />
            <View style={{ position: 'absolute', top: 100, left: 0, right: 0 }}>
                <Button title="Start Listening" onPress={startListening} />
            </View>
        </NavigationContainer>
    )
}

export default NavigatorContainer