import { NgModule, Component, Input } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { InputComponent } from './input/input.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { SliderComponent } from './slider/slider.component';
import { TableComponent } from './table/table.component';
import { FormDesignComponent } from './form-design/form-design.component';

const routes: Routes = [
  {
    path: 'autocomplete',
    component: AutoCompleteComponent,
  },
  {
    path: 'input',
    component: InputComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'card',
    component: CardComponent,
  },
  {
    path: 'slider',
    component: SliderComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: 'form',
    component: FormDesignComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
