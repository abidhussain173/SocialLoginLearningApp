import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const NavigationReducer = createSlice({
    name: "screenName",
    initialState: "",
    reducers: {
        setScreenName: (state, action: PayloadAction<string>) => {
            return action.payload
        }
    }
})

export const { setScreenName } = NavigationReducer.actions
export default NavigationReducer.reducer

