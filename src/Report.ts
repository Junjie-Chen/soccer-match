import { Winner } from './analyzer/Winner';
import { Html } from './logger/Html';
// import { Console } from './logger/Console';
import { MatchType } from './MatchType';

export class Report {
  static createReport(team: string, file: string): Report {
    return new Report(new Winner(team), new Html(file));
    // return new Report(new Winner(team), new Console());
  }

  constructor(public analyzer, public logger) {};

  analyzeAndLog(matches: MatchType[]): void {
    this.logger.log(this.analyzer.analyze(matches));
  }
}
