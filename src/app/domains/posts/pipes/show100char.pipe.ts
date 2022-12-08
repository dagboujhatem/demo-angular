import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'show100char'
})
export class Show100charPipe implements PipeTransform {

  transform(body: string): string {
    if(body.length > 100){
      return body.substring(0,100) + " ...";
    }else{
      return body;
    }
  }

}
