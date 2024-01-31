import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type RootState } from '../store';

type VoteState = Record<string, number>;

const ACTION_NAME = 'VOTE';

const initialState: VoteState = {};

const votesSlice = createSlice({
  name: ACTION_NAME,
  initialState,
  reducers: {
    vote(state, action: PayloadAction<string>) {
      const id = action.payload;
      const currentScore = state[id] || 0;
      state[id] = currentScore + 1;
    },
    reset() {
      return initialState;
    },
  },
});

export const { vote, reset } = votesSlice.actions;
export const selectVotes = (state: RootState) => state.votes;
export default votesSlice.reducer;
