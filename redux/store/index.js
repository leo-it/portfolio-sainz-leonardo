import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './rootReducer';

let store;

const makeStore = () => {
    store = configureStore({
        reducer: rootReducer,
    });
    return store;
};

export const wrapper = createWrapper(makeStore);

export default wrapper;
