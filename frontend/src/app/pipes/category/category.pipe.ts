import { Pipe, PipeTransform } from '@angular/core';
import { Blog } from '../../models/blog';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: any, category: string) {
    console.log("valueee", value);
    return value
  }

}
