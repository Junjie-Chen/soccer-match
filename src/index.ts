import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const matchReader = new MatchReader('soccer-match.csv');

matchReader.read();

let winningGames = 0;

for (let match of matchReader.result) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeTeamWinsTheGame) {
    winningGames++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayTeamWinsTheGame) {
    winningGames++;
  }
}
