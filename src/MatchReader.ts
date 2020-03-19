import { FileReader } from './FileReader';
import { MatchType } from './MatchType';

export class MatchReader {
  static createMatchReader(file: string): MatchReader {
    return new MatchReader(new FileReader(file));
  }

  matches: MatchType[] = [];

  constructor(public reader) {}
}
