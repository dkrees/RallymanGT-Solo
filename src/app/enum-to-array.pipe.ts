import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {

  transform(value: any) {
  	return Object.keys(value).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }

}
