import { Injectable } from '@angular/core';

@Injectable()
export class ExampleService {

  constructor() { }

  sayHello = function() {
    return 'hello';
  }

}
