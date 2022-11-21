import { combineReducers,applyMiddleware, legacy_createStore as createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { empReducer } from "./empReducer";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import ReduxThunk from 'redux-thunk';

const persistConfig={
    key:'persist-key',
    storage
}

const persistedReducer=persistReducer(persistConfig,empReducer)

export const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
 const persistor=persistStore(store)
 export {persistor}