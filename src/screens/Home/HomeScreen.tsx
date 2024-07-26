// screens/HomeScreen.tsx
import * as React from 'react';
import { View, Text } from 'react-native';
import { UserNavigationRootProps } from '../../ScreensTypes/ScreensTpes';

const HomeScreen: React.FC<UserNavigationRootProps<"Home">> = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
};

export default HomeScreen;
