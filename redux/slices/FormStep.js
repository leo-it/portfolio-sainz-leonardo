import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userValues: {},
    userFullName: null ,
    step: 1,
    phoneNumber: '',
    enterNumberStep: false,
    enterCodeStep: false,
    validatePhoneNumberStep: false,
    hasChangedNumber: false
};

const formStepSlice = createSlice({
    name: 'formStep',
    initialState,
    reducers: {
        incrementStep: state => {
            state.step = state.step + 1;
        },
        decrementStep: state => {
            if (state.step === 1) return;
            state.step = state.step - 1;
        },
        setUserValues: (state, action) => {
            state.userValues = { ...action.payload };
        },
        setPhoneNumber: (state, action) => {
            state.phoneNumber = action.payload;
        },
        setUserFullName: (state, action) => {
            state.userFullName = action.payload;
        },
        setHasChangedNumber: state => {
            state.hasChangedNumber = !state.hasChangedNumber;
        },
        toggleEnterPhoneNumber: state => {

            state.enterNumberStep = !state.enterNumberStep;
            state.validatePhoneNumberStep = !state.validatePhoneNumberStep;
            
        },
        toggleEnterCode: state => {
            if (state.hasChangedNumber) {
                state.enterCodeStep = !state.enterCodeStep;
                state.enterNumberStep = !state.enterNumberStep;
            }
            else {
                state.enterCodeStep = !state.enterCodeStep;
            }
        },
        toggleValidatePhoneNumber: (state, action) => {
            switch(action.payload) {
                case 'A':
                    state.validatePhoneNumberStep = !state.validatePhoneNumberStep;
                    state.enterCodeStep = !state.enterCodeStep;
                    break;
                case 'B':
                    state.validatePhoneNumberStep = !state.validatePhoneNumberStep;
                    state.enterNumberStep = !state.enterNumberStep;
                    break;
                default:
                    state.enterNumberStep = !state.enterNumberStep;
                    state.enterCodeStep = !state.enterCodeStep;
            }
        },
        resetModalSteps: state => {
            state.enterNumberStep = false;
            state.enterCodeStep = false;
            state.validatePhoneNumberStep = false;
            state.hasChangedNumber = false;
        }
    },
});

export const { incrementStep, decrementStep, setUserValues, enterNumber, toggleEnterCode, toggleValidatePhoneNumber, setPhoneNumber, resetModalSteps, toggleEnterPhoneNumber, setHasChangedNumber, setUserFullName } = formStepSlice.actions;

export default formStepSlice;