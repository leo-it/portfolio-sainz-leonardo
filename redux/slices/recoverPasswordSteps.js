import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userValues: {},
    step: 1
};

const recoverPasswordSlice = createSlice({
    name: 'recoverPasswordSteps',
    initialState,
    reducers: {
        incrementState: state => {
            state.step += 1;
        },
        decrementState: state => {
            if (state.step === 1) return;
            state.step -= 1;
        },
        setUserValues: (state, action) => {
            state.userValues = { ...action.payload };
        }
    },
});

export const { incrementState, decrementState, setUserValues } = recoverPasswordSlice.actions;

export default recoverPasswordSlice;
