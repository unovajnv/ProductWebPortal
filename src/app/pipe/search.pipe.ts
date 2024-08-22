import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

  transform(data:any, searchQ:string): any {
    if(!searchQ)
      return data;
    if(!data)
      return [];

    return data.filter((item:any) => {
      return item.name.toLowerCase().includes(searchQ.toLowerCase());
    });
  }
}
