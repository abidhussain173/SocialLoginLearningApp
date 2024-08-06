import React from 'react';
import { View, Text } from 'react-native';
import { UserNavigationRootProps } from '../../ScreensTypes/ScreensTpes';

export const OrderScreen: React.FC<UserNavigationRootProps<"OrderScreen">> = (props) => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>Order Screen</Text>
            <Text>Order #1: Pizza</Text>
            <Text>Order #2: Burger</Text>
            <Text>Order #3: Salad</Text>
        </View>
    );
};
