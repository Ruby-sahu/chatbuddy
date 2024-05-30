import { createSlice } from "@reduxjs/toolkit";

function loaddata() {
    var d = localStorage.getItem('uinfo')
    if (d != null) {
        return JSON.parse(d)
    }
    else {
        return {
            name: undefined,
            token: undefined,
            image: undefined,
            isLogin: false
        }
    }
}

const slice = createSlice({
    name: "user",
    initialState: {
        value: loaddata()
    },
    reducers: {
        changeinfo: (state, action) => {
            state.value = action.payload
        }
    }
})
export const { changeinfo } = slice.actions
export default slice.reducer;