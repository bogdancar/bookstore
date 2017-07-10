import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(array: Array<string>, args?: any): any {

    if (array) {

      let sortField = args[0];
      let sortDirection = args[1];
      let modifier = 1;

      if (sortDirection === 'desc') {
        modifier = -1;
      }

    //  array.sort((a: any, b: any) => {
    //    if (a[sortField] < b[sortField]) {
    //      return -1 * modifier;
    //    } else if (a[sortField] > b[sortField]) {
    //      return 1 * modifier;
    //    } else {
    //      return 0;
    //    }
    //  });

    array.sort((a: any, b: any) => {
    let [aSortable, bSortable] = [a[sortField], b[sortField]];
    if (sortField === 'price') {
        aSortable = parseFloat(aSortable), bSortable = parseFloat(bSortable);
    }
    if (aSortable < bSortable) {
        return -1 * modifier;
    } else if (aSortable > bSortable) {
        return 1 * modifier;
    } else {
        return 0;
    }
});

      return array;
    }
  }

}
