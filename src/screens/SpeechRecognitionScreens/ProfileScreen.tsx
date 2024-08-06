import React from 'react';
import { View, Text } from 'react-native';
import { UserNavigationRootProps } from '../../ScreensTypes/ScreensTpes';

export const ProfileScreen: React.FC<UserNavigationRootProps<"ProfileScreen">> = (props) => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>Profile Screen</Text>
            <Text>Username: John Doe</Text>
            <Text>Email: john.doe@example.com</Text>
            <Text>Member since: January 2021</Text>
        </View>
    );
};
