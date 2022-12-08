import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postSearch'
})
export class Search2Pipe implements PipeTransform {

  transform(array: Array<any>, searchQuery: string | undefined): Array<any> {
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      // 5 == "5" true (on se basant sur cette manière de comparaison)
      // 5 === "5" false
      return array.filter(item =>
        item.id == query || // search with number
        item.title.toLowerCase().includes(query) || // search with string
        item.body.toLowerCase().includes(query)); // search with string
    } else {
      return array;
    }
  }

}
