import { combineReducers, configureStore } from '@reduxjs/toolkit';
import votesReducer from './slices/votesSlice';

const createRootReducer = () =>
  combineReducers({
    votes: votesReducer,
  });

export const setupStore = (preloadedState?: RootState) => {
  const store = configureStore({
    reducer: createRootReducer(),
    preloadedState,
  });

  return store;
};

export const store = setupStore();

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
