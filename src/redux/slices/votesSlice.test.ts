import votesReducer, { vote, reset } from './votesSlice';

describe('votesSlice', () => {
  it('should initialize value with 0 if key does not exist', () => {
    const state = {};
    const id = '123';
    expect(votesReducer(state, vote(id))).toEqual({
      [id]: 1,
    });
  });

  it('should increment the score when voting', () => {
    const state = {
      '123': 1,
    };
    const id = '123';
    expect(votesReducer(state, vote(id))).toEqual({
      [id]: 2,
    });
  });

  it('should add a new key when voting', () => {
    const state = {
      '123': 1,
    };
    const id = '456';
    expect(votesReducer(state, vote(id))).toEqual({
      ...state,
      [id]: 1,
    });
  });

  it('should reset the state', () => {
    const state = {
      '123': 1,
    };
    expect(votesReducer(state, reset())).toEqual({});
  });
});