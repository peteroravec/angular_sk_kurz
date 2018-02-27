import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string;
  surname: string;
  selectedOccupation: string;
  occupation: Array<object> = [
    { title: 'Programmer' },
    { title: 'Driver' },
    { title: 'Teacher' }
  ]

  setValue(value) {
    this.selectedOccupation = value;
  }

  submitForm(data) {
    console.log(data);
  }

}
