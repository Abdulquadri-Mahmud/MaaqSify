import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

const rootReducer = combineReducers({
  user: userReducer
});

// follow by persist config
const persistConfig = {
  key: 'root',
  storage,
  version : 1,
}


// persisit reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer ,
  middleware : (getDefaultMiddleware) => getDefaultMiddleware ({
    serializableCheck : false,
  }),
});

export const persistor = persistStore(store);