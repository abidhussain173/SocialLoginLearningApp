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
            <View style={{
                padding: 10,
            }}>
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: "orange"
                    }}
                >Welcome to Order Screen</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <View style={{
                    width: "40%"
                }}>
                    <Text style={{
                        fontSize: 16,
                        marginBottom: 10,
                    }}>Order #1:</Text>
                    <Text style={{
                        fontSize: 16,
                        marginBottom: 10
                    }}>Order #2:</Text>
                    <Text style={{
                        fontSize: 16,
                    }}>Order #3:</Text>
                </View>
                <View>
                    <Text style={{
                        fontSize: 16,
                        marginBottom: 10
                    }}>Pizza</Text>
                    <Text style={{
                        fontSize: 16,
                        marginBottom: 10
                    }}> Burger</Text>
                    <Text style={{
                        fontSize: 16,
                    }}> Burger</Text>
                </View>
            </View>
        </View>
    );
};
