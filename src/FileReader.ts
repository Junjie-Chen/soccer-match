import fs from 'fs';
import { Reader } from './MatchReader';

export class FileReader implements Reader {
  result: string[][] = [];

  constructor(public file: string) {}

  read(): void {
    this.result = fs.
      readFileSync(this.file, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((record: string): string[] => {
        return record.split(',');
      });
  }
}
