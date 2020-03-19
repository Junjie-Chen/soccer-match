import { FileReader } from './FileReader';

export class MatchReader {
  static createMatchReader(file: string): MatchReader {
    return new MatchReader(new FileReader(file));
  }
}
