export abstract class FileReader {
  result = [];

  constructor(public file: string) {}

  abstract parseRecord(record: string[]);
}
