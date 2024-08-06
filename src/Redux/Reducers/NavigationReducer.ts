import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface NavigationState {
    screen: string;
}
const initialState: NavigationState = {
    screen: '',
}
const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        setScreen(state, action: PayloadAction<string>) {
            state.screen = action.payload;
        },
        goBack(state) {
            state.screen = 'GoBack';
        },
    },
});
export const { setScreen, goBack } = navigationSlice.actions;
export default navigationSlice.reducer;