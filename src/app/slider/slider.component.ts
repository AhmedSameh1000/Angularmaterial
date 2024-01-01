import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  ValueSelected = 0;
  ValueSelected2 = 0;
  Start = 30;
  End = 70;
}
