import fs from 'fs';

export class FileReader {
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
