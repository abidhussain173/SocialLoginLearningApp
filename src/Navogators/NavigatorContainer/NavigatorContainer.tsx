// import React, { useEffect, useRef } from 'react';
// import { View, Button } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { NavigationContainer } from '@react-navigation/native';
// import StackNavigator from '../AppNavigator/StackNavigator';
// import Voice from '@react-native-voice/voice';
// import { goBack, setScreen } from '../../Redux/Reducers/NavigationReducer';
// import { RootState } from '../../Redux/Store/Store';

// const screenMappings: { [key: string]: string } = {
//     'profile screen': 'ProfileScreen',
//     'profile': 'ProfileScreen',
//     'my account': 'ProfileScreen',
//     'settings': 'Settings',
//     'preferences': 'Settings',
//     'order screen': 'OrderScreen',
//     'order': 'OrderScreen',
//     'my orders': 'OrderScreen',
//     'order history': 'OrderScreen',
//     'username': 'ProfileScreen',
//     'email': 'ProfileScreen',
//     'member since': 'ProfileScreen',
//     'notification': 'Settings',
//     'language': 'Settings',
//     'privacy': 'Settings',
//     'pizza': 'OrderScreen',
//     'burger': 'OrderScreen',
//     'salad': 'OrderScreen',
//     'go back': 'GoBack'
// };

// const NavigatorContainer: React.FC = () => {
//     const dispatch = useDispatch();
//     const screen = useSelector((state: RootState) => state.navigation.screen);
//     const navigationRef = useRef<any>("");

//     useEffect(() => {
//         Voice.onSpeechResults = onSpeechResults;
//         return () => {
//             Voice.destroy().then(Voice.removeAllListeners);
//         };
//     }, []);

//     useEffect(() => {
//         if (screen) {
//             handleNavigation(screen);
//         }
//     }, [screen]);

//     const onSpeechResults = (e: any) => {
//         const result = e.value[0].toLowerCase();
//         console.log('Recognized Speech:', result);
//         handleCommand(result);
//     };

//     const handleCommand = (command: string) => {
//         const lowerCaseCommand = command.toLowerCase();

//         for (let phrase in screenMappings) {
//             if (lowerCaseCommand.includes(phrase)) {
//                 dispatch(setScreen(screenMappings[phrase]));
//                 return;
//             }
//         }

//         if (lowerCaseCommand.includes('go back')) {
//             dispatch(goBack());
//         } else {
//             console.log('Command not recognized:', command);
//         }
//     };

//     const handleNavigation = (screen: string) => {
//         if (screen === '') return;
//         switch (screen) {
//             case 'ProfileScreen':
//                 navigationRef.current?.navigate("ProfileScreen");
//                 break;
//             case 'Settings':
//                 navigationRef.current?.navigate("Settings");
//                 break;
//             case 'OrderScreen':
//                 navigationRef.current?.navigate("OrderScreen");
//                 break;
//             case 'GoBack':
//                 if (navigationRef.current?.canGoBack()) {
//                     navigationRef.current?.goBack();
//                     dispatch(setScreen(''));
//                 }
//                 break;
//             default:
//                 break;
//         }
//     };

//     const startListening = () => {
//         Voice.start('en-US').catch((e) => console.error(e));
//     };

//     return (
//         <NavigationContainer ref={navigationRef}>
//             <StackNavigator />
//             <View style={{ position: 'absolute', bottom: 100, left: 0, right: 0 }}>
//                 <Button title="Start Listening" onPress={startListening} />
//             </View>
//         </NavigationContainer>
//     );
// };

// export default NavigatorContainer;
import React, { useEffect, useRef } from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from '../AppNavigator/StackNavigator';
import Voice from '@react-native-voice/voice';
import nlp from 'compromise';
import { goBack, setScreen } from '../../Redux/Reducers/NavigationReducer';
import { RootState } from '../../Redux/Store/Store';

const screenMappings: { [key: string]: string } = {
    'Speech Recognition': 'SpeechRecognition',
    'Speech screen': 'SpeechRecognition',
    'Speech': 'SpeechRecognition',
    'profile screen': 'ProfileScreen',
    'profile': 'ProfileScreen',
    'my account': 'ProfileScreen',
    'settings': 'Settings',
    'setting': 'Settings',
    'preferences': 'Settings',
    'order screen': 'OrderScreen',
    'order': 'OrderScreen',
    'my orders': 'OrderScreen',
    'order history': 'OrderScreen',
    'username': 'ProfileScreen',
    'email': 'ProfileScreen',
    'member since': 'ProfileScreen',
    'notification': 'Settings',
    'language': 'Settings',
    'privacy': 'Settings',
    'pizza': 'OrderScreen',
    'burger': 'OrderScreen',
    'salad': 'OrderScreen',
    'go back': 'GoBack',
    'back': 'GoBack'
};

const NavigatorContainer: React.FC = () => {
    const dispatch = useDispatch();
    const screen = useSelector((state: RootState) => state.navigation.screen);
    const navigationRef = useRef<any>("");

    useEffect(() => {
        Voice.onSpeechResults = onSpeechResults;
        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        };
    }, []);

    useEffect(() => {
        if (screen) {
            handleNavigation(screen);
        }
    }, [screen]);

    const onSpeechResults = (e: any) => {
        const result = e.value[0].toLowerCase();
        console.log('Recognized Speech:', result);
        handleCommand(result);
    };

    const handleCommand = (command: string) => {
        const lowerCaseCommand = command.toLowerCase();
        const doc = nlp(lowerCaseCommand);
        console.log("doc", doc)
        let matchedScreen = '';

        for (let phrase in screenMappings) {
            const match = doc.match(phrase);
            console.log("match", match)
            if (match.found) {
                matchedScreen = screenMappings[phrase];
                break;
            }
        }

        if (matchedScreen) {
            dispatch(setScreen(matchedScreen));
        } else if (lowerCaseCommand.includes('go back')) {
            dispatch(goBack());
        } else {
            console.log('Command not recognized:', command);
        }
    };

    const handleNavigation = (screen: string) => {
        if (screen === '') return;
        switch (screen) {
            case 'SpeechRecognition':
                navigationRef.current?.navigate("SpeechRecognition");
                break;
            case 'ProfileScreen':
                navigationRef.current?.navigate("ProfileScreen");
                break;
            case 'Settings':
                navigationRef.current?.navigate("Settings");
                break;
            case 'OrderScreen':
                navigationRef.current?.navigate("OrderScreen");
                break;
            case 'GoBack':
                if (navigationRef.current?.canGoBack()) {
                    navigationRef.current?.goBack();
                    dispatch(setScreen(''));
                }
                break;
            default:
                break;
        }
    };

    const startListening = () => {
        Voice.start('en-US').catch((e) => console.error(e));
    };

    return (
        <NavigationContainer ref={navigationRef}>
            <StackNavigator />
            <TouchableOpacity
                onPress={startListening}
                style={{
                    position: 'absolute',
                    bottom: 50,
                    left: 0,
                    right: 0,
                    backgroundColor: 'orange',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 15,
                    marginHorizontal: 40,
                    borderRadius: 40
                }}>
                <Text style={{
                    fontSize: 20,
                    color: 'white',
                    fontWeight: 'bold'
                }}>Start Listening</Text>
            </TouchableOpacity>
        </NavigationContainer>
    );
};

export default NavigatorContainer;
