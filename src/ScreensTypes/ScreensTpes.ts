import { StackNavigationOptions } from '@react-navigation/stack';
import { NavigationProp, NavigationState, RouteProp } from "@react-navigation/native";

export type UserStackParamList = {
    Home: any,
    Settings: any
};


// export type UserNavigationProp = NavigationProp<UserStackParamList, 'Login'>
export type UserNavigationProp = NavigationProp<UserStackParamList, 'Home'>

export type UserNavigationRootProps<T extends keyof UserStackParamList> = {
    route: RouteProp<UserStackParamList, T>;
    navigation: NavigationProp<UserStackParamList, T, string, NavigationState, StackNavigationOptions>;
};
