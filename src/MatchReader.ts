import { FileReader } from './FileReader';
import { MatchType } from './MatchType';
import { parseDate } from './utils';
import { MatchResult } from './MatchResult';

export interface Reader {
  result: string[][];
  read(): void;
}

export class MatchReader {
  static createMatchReader(file: string): MatchReader {
    return new MatchReader(new FileReader(file));
  }

  matches: MatchType[] = [];

  constructor(public reader) {}

  load(): void {
    this.reader.read();

    this.matches = this.reader.result.map((record: string[]): MatchType => {
      return [
        parseDate(record[0]),
        record[1],
        record[2],
        parseInt(record[3]),
        parseInt(record[4]),
        record[5] as MatchResult,
        record[6]
      ];
    });
  }
}
