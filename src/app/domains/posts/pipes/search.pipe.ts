import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(array: Array<any>, query: string | undefined): Array<any> {
    if(query){
      return array.filter(item=> item.title.toLowerCase().includes(query.toLowerCase()) || item.body.toLowerCase().includes(query.toLowerCase()));
    }else{
      return array;
    }
  }

}
