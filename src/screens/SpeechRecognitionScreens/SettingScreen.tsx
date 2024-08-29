import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { UserNavigationRootProps } from '../../ScreensTypes/ScreensTpes';

export const SettingScreen: React.FC<UserNavigationRootProps<"Settings">> = (props) => {
    return (
        <SafeAreaView style={{
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
                >Welcome to Setting Screen</Text>
            </View>
            <Text style={{
                        fontSize: 16,
                         color: "black",
                        marginBottom: 10,
                    }}>Notification: Enabled</Text>
            <Text style={{
                        fontSize: 16,
                         color: "black",
                        marginBottom: 10,
                    }}>Language: English</Text>
            <Text style={{
                        fontSize: 16,
                         color: "black",
                        marginBottom: 10,
                    }}>Privacy: Public</Text>
        </SafeAreaView>
    );
};
