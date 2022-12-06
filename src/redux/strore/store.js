import { applyMiddleware, createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducer/reducer';
import ReduxThunk from "redux-thunk";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: "persist-root",
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
    persistedReducer,
    applyMiddleware(ReduxThunk)
);

const persistor = persistStore(store)

export { persistor };
export default store;