import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import votesReducer from './slices/votesSlice';

const votePersistConfig = {
  key: 'votes',
  version: 1,
  storage,
};

const createRootReducer = () =>
  combineReducers({
    votes: persistReducer(votePersistConfig, votesReducer),
  });

export const setupStore = (preloadedState?: RootState) => {
  const store = configureStore({
    reducer: createRootReducer(),
    preloadedState,
    middleware: (gDM) =>
      gDM({
        serializableCheck: {
          // Ignore redux persist actions
          ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        },
      }),
  });

  return store;
};

export const store = setupStore();
export const persistor = persistStore(store);

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
