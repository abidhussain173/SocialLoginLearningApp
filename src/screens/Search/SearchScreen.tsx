// screens/SettingsScreen.tsx
import * as React from 'react';
import { View, Text } from 'react-native';
import { UserNavigationRootProps } from '../../ScreensTypes/ScreensTpes';

const SearchScreen: React.FC<UserNavigationRootProps<"Settings">> = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
};

export default SearchScreen;
