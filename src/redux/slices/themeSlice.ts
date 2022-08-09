import {createSlice} from "@reduxjs/toolkit";

interface IState {
    isDark: boolean,
}

const initialState: IState = {
    isDark: false,
}

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        setTheme: (state) => {
            const themeDate: boolean = !!localStorage.getItem('dark')
            const htmlEl = document.querySelector("html")

            if (!htmlEl || !themeDate) return
            state.isDark = themeDate
            htmlEl.dataset.mode = 'dark'
            localStorage.setItem('dark', 'true')
        },
        changeTheme: (state) => {
            const htmlEl = document.querySelector("html")
            if (!htmlEl) return

            if (state.isDark) {
                state.isDark = false
                htmlEl.dataset.mode = 'light'
                localStorage.removeItem('dark')
            } else {
                state.isDark = true
                htmlEl.dataset.mode = 'dark'
                localStorage.setItem('dark', 'true')
            }
        }
    }
})

export const {changeTheme, setTheme} = themeSlice.actions
export default themeSlice.reducer