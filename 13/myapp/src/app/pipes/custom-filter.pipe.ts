import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    console.log('value', value);
    console.log('args', args);

    return value.filter(myData => {

      if(myData.canFly === args)
        return myData;

    });

  }

}
