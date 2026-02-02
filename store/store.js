import {configureStore} from '@reduxjs/toolkit';
import authRedcer from './auth-slice'


const store = configureStore({
    reducer : {
        auth : authRedcer,
    },
});

export default store;
