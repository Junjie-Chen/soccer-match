import { FileReader } from './FileReader';
import { parseDate } from './utils';
import { MatchResult } from './MatchResult';

export class MatchReader extends FileReader {
  parseRecord(record: string[]) {
    return [
      parseDate(record[0]),
      record[1],
      record[2],
      parseInt(record[3]),
      parseInt(record[4]),
      record[5] as MatchResult,
      record[6]
    ];
  }
}
