import { VoteState } from '../../redux/slices/votesSlice';
import { Cat } from '../../schemas/cats';

export const mergeCatsWithVotes = (
  cats: Cat[],
  votes: VoteState
): (Cat & { votes: number })[] => {
  return cats.map((cat) => ({
    ...cat,
    votes: votes[cat.id] || 0,
  }));
};
