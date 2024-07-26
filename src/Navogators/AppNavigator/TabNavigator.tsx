// // AppNavigator.tsx
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from '../../screens/Home/HomeScreen';
// import SearchScreen from '../../screens/Search/SearchScreen';
// import { RootStackParamList } from '../../ScreensTypes/ScreensTpes';
// const Tab = createBottomTabNavigator<RootStackParamList>();

// const AppNavigator: React.FC = () => {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator
//                 screenOptions={({ route }) => ({
//                     tabBarLabel: route.name, // Display the route name as the label
//                 })}
//                 tabBarOptions={{
//                     activeTintColor: 'tomato', // Color of the active tab label
//                     inactiveTintColor: 'gray', // Color of the inactive tab label
//                     labelStyle: { fontSize: 16 }, // Style for the tab label
//                     style: { backgroundColor: 'white' }, // Background color of the tab bar
//                 }}
//             >
//                 <Tab.Screen name="Home" component={HomeScreen} />
//                 <Tab.Screen name="Settings" component={SearchScreen} />
//             </Tab.Navigator>
//         </NavigationContainer>
//     );
// };

// export default AppNavigator;

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Home/HomeScreen';
import SearchScreen from '../../screens/Search/SearchScreen';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    // tabBarIcon: ({ color, size }) => (
                    //     <AppIcon category='Feather' name="home" color={color} size={size} />
                    // ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SearchScreen}
                options={{
                    tabBarLabel: 'Search',
                    // tabBarIcon: ({ color, size }) => (
                    //     <AppIcon category='Octicons' name="search" color={color} size={size} />
                    // ),
                }}
            />
        </Tab.Navigator>
    );
}
export default TabNavigator;