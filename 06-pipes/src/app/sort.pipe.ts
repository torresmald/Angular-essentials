import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: number[]): number[] {
    const sorted = [...value]
    sorted.sort((a , b) => a >  b ? 1 : -1)
    
    return sorted;
  }

}