import { MatchType } from '../MatchType';
import { MatchResult } from '../MatchResult';

export class Winner {
  constructor(public team: string) {}

  analyze(matches: MatchType[]): string {
    let winningGames = 0;

    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.HomeTeamWinsTheGame) {
        winningGames++;
      } else if (match[2] === this.team && match[5] === MatchResult.AwayTeamWinsTheGame) {
        winningGames++;
      }
    }

    return `${this.team} won ${winningGames} games.`;
  }
}
