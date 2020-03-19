import fs from 'fs';

export abstract class FileReader {
  result = [];

  constructor(public file: string) {}

  abstract parseRecord(record: string[]);

  read(): void {
    this.result = fs
      .readFileSync(this.file, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((record: string): string[] => {
        return record.split(',');
      })
      .map(this.parseRecord);
  }
}
