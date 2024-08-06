import React from 'react';
import { View, Text } from 'react-native';
import { UserNavigationRootProps } from '../../ScreensTypes/ScreensTpes';

export const SettingScreen: React.FC<UserNavigationRootProps<"Settings">> = (props) => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>Settings Screen</Text>
            <Text>Notification: Enabled</Text>
            <Text>Language: English</Text>
            <Text>Privacy: Public</Text>
        </View>
    );
};
