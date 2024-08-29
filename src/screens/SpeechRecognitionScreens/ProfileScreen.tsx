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
            <View style={{
                padding: 10,
            }}>
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: "orange"
                    }}
                >Welcome to Profile Screen</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <View style={{
                    width: "30%"
                }}>
                    <Text style={{
                        fontSize: 16,
                        marginBottom: 10
                    }}>Username:</Text>
                    <Text style={{
                        fontSize: 16,
                    }}>Email:</Text>
                </View>
                <View>
                    <Text style={{
                        fontSize: 16,
                        marginBottom: 10
                    }}>John Doe</Text>
                    <Text style={{
                        fontSize: 16,
                    }}>john.doe@example.com</Text>
                </View>
            </View>
        </View>
    );
};
