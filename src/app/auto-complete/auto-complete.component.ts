import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css'],
})
export class AutoCompleteComponent implements OnInit {
  Colors: Color[] = [
    { Id: 4, Name: ' Red' },
    { Id: 5, Name: ' Green' },
    { Id: 6, Name: ' Blue' },
    { Id: 7, Name: 'Yello' },
  ];

  Filteroption: Observable<Color[]>;
  FormControl = new FormControl('');
  ngOnInit(): void {
    this.Filteroption = this.FormControl.valueChanges.pipe(
      startWith(''),
      map((val) => this.Filter(val || ''))
    );
  }

  Filter(value: string): Color[] {
    let SearchValue = value.toLocaleLowerCase();
    return this.Colors.filter(
      (color) =>
        color.Name.toLocaleLowerCase().includes(SearchValue) ||
        color.Id.toString() == SearchValue
    );
  }

  /////

  selectedValue: string;
  Data2: any[];
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
    { value: 'sushi-3', viewValue: 'Sushi' },
    { value: 'burger-4', viewValue: 'Burger' },
    { value: 'pasta-5', viewValue: 'Pasta' },
    // Add 14 more elements with random data
    { value: 'chicken-6', viewValue: 'Chicken' },
    { value: 'salad-7', viewValue: 'Salad' },
    { value: 'soup-8', viewValue: 'Soup' },
    { value: 'sandwich-9', viewValue: 'Sandwich' },
    { value: 'fish-10', viewValue: 'Fish' },
    { value: 'curry-11', viewValue: 'Curry' },
    { value: 'rice-12', viewValue: 'Rice' },
    { value: 'pork-13', viewValue: 'Pork' },
    { value: 'noodles-14', viewValue: 'Noodles' },
    { value: 'tuna-15', viewValue: 'Tuna' },
    { value: 'burrito-16', viewValue: 'Burrito' },
    { value: 'lasagna-17', viewValue: 'Lasagna' },
    { value: 'wrap-18', viewValue: 'Wrap' },
    { value: 'kebab-19', viewValue: 'Kebab' },
    { value: 'rice-bowl-20', viewValue: 'Rice Bowl' },
  ];
  Print() {
    console.log(this.selectedValue);
    console.log(this.Data2);
  }
}

class Food {
  value: string;
  viewValue: string;
}

class Color {
  Id: number;
  Name: string;
}
