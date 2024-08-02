
import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { UserNavigationRootProps } from '../../ScreensTypes/ScreensTpes';


export const ProfileScreen: React.FC<UserNavigationRootProps<"ProfileScreen">> = (props) => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>Profile Screen</Text>
        </View>
    );
};

