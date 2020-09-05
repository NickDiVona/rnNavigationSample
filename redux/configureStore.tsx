//sys
import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
//usr
import CountReducer from './reducers/countReducer';

const rootReducer = combineReducers({
  count: CountReducer
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  debug: true
};

const persistedRedcer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedRedcer);
let persistor = persistStore(store);
let appStore = { store: store, persistor: persistor };

export default appStore;
