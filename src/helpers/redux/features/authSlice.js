import { createSlice } from '@reduxjs/toolkit'
import dataDashboard from '../../../helpers/datacolumn/dashboardmenu-data.json'

const initialState = {
        email: "",
        password: "",
        remember: false,
        dashboard: {}
}

const genericSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStateChanged(state, action){
           const {email, password, remember } = action.payload.values;
           state.email = email;
           state.password = password;
           state.remember = remember;
           state.dashboard = dataDashboard;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(loginStateChanged, (state, action)=>{
            
        })
    }
})

export const { loginStateChanged } = genericSlice.actions

export default genericSlice.reducer
