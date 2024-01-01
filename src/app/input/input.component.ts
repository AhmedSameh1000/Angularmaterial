import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  foods: Food[] = [
    { Id: 5, viewValue: 'Steak' },
    { Id: 6, viewValue: 'Pizza' },
    { Id: 9, viewValue: 'Tacos' },
  ];

  Data: Food[] = [];
  OnChanges(event) {
    console.log(event);
    console.log(this.Data);
  }
  ShowValues() {
    console.log(this.Data);
  }
}
class Food {
  Id: any;
  viewValue: any;
}
