import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysCount'
})
export class DaysCountPipe implements PipeTransform {

  transform(value: any): number {
    let today: Date = new Date();
    let todaysDate: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    let dateDifference = Math.abs(todaysDate - value);
    const secondsInDay = 86400;
    let dateDifferenceSeconds = dateDifference*0.001;
    let dateCounter = Math.floor(dateDifferenceSeconds/secondsInDay);
    
    if (dateCounter >= 1 && value < todaysDate){
      return dateCounter;
    } else {
      return 0;
    }
  }

}
