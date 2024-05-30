import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice'

const store = configureStore({
    reducer: {
        uinfo: userReducer
    }
})

store.subscribe(() => {
    const uinfo = store.getState().uinfo.value
    localStorage.setItem('uinfo', JSON.stringify(uinfo))
}
)
export default store