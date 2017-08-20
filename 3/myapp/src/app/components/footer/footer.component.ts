import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  template: `
    <h1>FOOTER</h1>
  `,
  styles: ['h1 { color: green; text-align: center; font-size: 40px; padding: 20px; border: 10px solid green;  }']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
