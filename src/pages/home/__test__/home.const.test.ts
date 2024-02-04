import { VoteState } from '../../../redux/slices/votesSlice';
import { Cat } from '../../../schemas/cats';
import { mergeCatsWithVotes } from '../home.const';

describe('mergeCatsWithVotes', () => {
  it('should merge cats with votes correctly', () => {
    const cats = [
      { id: '1', url: 'Cat 1' },
      { id: '2', url: 'Cat 2' },
      { id: '3', url: 'Cat 3' },
    ];
    const votes = {
      '1': 5,
      '2': 3,
    };

    const mergedCats = mergeCatsWithVotes(cats, votes);

    expect(mergedCats).toEqual([
      { id: '1', url: 'Cat 1', votes: 5 },
      { id: '2', url: 'Cat 2', votes: 3 },
      { id: '3', url: 'Cat 3', votes: 0 },
    ]);
  });

  it('should handle empty cats array', () => {
    const cats: Cat[] = [];
    const votes = {
      '1': 5,
      '2': 3,
    };

    const mergedCats = mergeCatsWithVotes(cats, votes);

    expect(mergedCats).toEqual([]);
  });

  it('should handle empty votes object', () => {
    const cats = [
      { id: '1', url: 'Cat 1' },
      { id: '2', url: 'Cat 2' },
      { id: '3', url: 'Cat 3' },
    ];
    const votes: VoteState = {};

    const mergedCats = mergeCatsWithVotes(cats, votes);

    expect(mergedCats).toEqual([
      { id: '1', url: 'Cat 1', votes: 0 },
      { id: '2', url: 'Cat 2', votes: 0 },
      { id: '3', url: 'Cat 3', votes: 0 },
    ]);
  });
});
