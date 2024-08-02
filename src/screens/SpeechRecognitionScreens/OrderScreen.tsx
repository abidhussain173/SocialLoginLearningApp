import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { UserNavigationRootProps } from '../../ScreensTypes/ScreensTpes';


export const OrderScreen: React.FC<UserNavigationRootProps<"OrderScreen">> = (props) => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>Order Screen</Text>
        </View>
    );
};

