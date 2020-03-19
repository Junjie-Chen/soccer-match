import { MatchReader } from './MatchReader';
import { Report } from './Report';

const matchReader = MatchReader.createMatchReader('soccer-match.csv');

const report = Report.createReport('Man United', 'report.html');

matchReader.load();

report.analyzeAndLog(matchReader.matches);
