import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { UserNavigationRootProps } from '../../ScreensTypes/ScreensTpes';


export const SettingScreen: React.FC<UserNavigationRootProps<"Settings">> = (props) => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>Settings Screen</Text>
        </View>
    );
};

