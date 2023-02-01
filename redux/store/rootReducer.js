import { combineReducers } from '@reduxjs/toolkit';
import recoverPasswordSlice from '@/slices/recoverPasswordSteps';
import { HYDRATE } from 'next-redux-wrapper';
import tableSlice from '@/components/TableMarket/tableSlice';
import formStepSlice from '@/slices/FormStep';


const rootReducer = (state, action) => {
    switch (action.type) {
        case HYDRATE:
            return action.payload;

        default: {
            const combineReducer = combineReducers({
                [tableSlice.name]: tableSlice.reducer,
                [recoverPasswordSlice.name]: recoverPasswordSlice.reducer,
                [formStepSlice.name]: formStepSlice.reducer
            });
            return combineReducer(state, action);
        }
    }
};

export default rootReducer;
