import {DateTypeFile, TimeTypeFile} from './File';

const dateTypeFile = new DateTypeFile();
dateTypeFile.setCurrentDate();
const timeTypeFile = new TimeTypeFile();
timeTypeFile.setCurrentTime();
console.log(dateTypeFile);
console.log(timeTypeFile);
