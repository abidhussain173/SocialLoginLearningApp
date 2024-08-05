import { combineReducers, configureStore } from '@reduxjs/toolkit';
import NavigationReducer from '../Reducers/NavigationReducer';
const rootReducer = combineReducers({
    screenName: NavigationReducer,
});
const store = configureStore({
    reducer: rootReducer,

});
export default store;
