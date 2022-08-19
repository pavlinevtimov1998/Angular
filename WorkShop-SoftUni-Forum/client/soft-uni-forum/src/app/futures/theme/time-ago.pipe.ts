import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {
  private now = new Date();

  transform(value: string): string {
    const then = new Date(value);

    const timeDifference = this.now.getTime() - then.getTime();

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = 365 * day;

    if (timeDifference < minute) {
      return `${Math.floor(timeDifference / second)} seconds`;
    } else if (timeDifference > minute && timeDifference < hour) {
      return `${Math.floor(timeDifference / minute)} minutes`;
    } else if (timeDifference > hour && timeDifference < day) {
      return `${Math.floor(timeDifference / hour)} hours`;
    } else if (timeDifference > day && timeDifference < month) {
      return `${Math.floor(timeDifference / day)} days`;
    } else if (timeDifference > day && timeDifference < year) {
      return `${Math.floor(timeDifference / month)} months`;
    } else {
      return `${Math.floor(timeDifference / year)} years`;
    }
  }
}
