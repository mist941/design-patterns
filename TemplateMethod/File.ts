abstract class File {
  dateTime: string = "";

  abstract setCurrentDate(): void;

  abstract setCurrentTime(): void;
}

export class DateTypeFile extends File {
  setCurrentDate(): void {
    const currentDate = new Date();
    this.dateTime = `${currentDate.getFullYear()}/${currentDate.getMonth()}/${currentDate.getDate()}`
  }

  setCurrentTime(): void {
  }
}

export class TimeTypeFile extends File {
  setCurrentTime(): void {
    const currentDate = new Date();
    this.dateTime = `${currentDate.getHours()}/${currentDate.getMinutes()}/${currentDate.getSeconds()}`
  }

  setCurrentDate(): void {
  }
}
