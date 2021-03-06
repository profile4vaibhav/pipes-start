import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propertyName: string) {
    if (filterString === '') {
      return value;
    }

    const resultArray = [];
    for (const item of value) {
      if (item[propertyName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
