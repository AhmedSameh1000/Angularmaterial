import { Customer } from './../Models/Customer';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-design',
  templateUrl: './form-design.component.html',
  styleUrls: ['./form-design.component.css'],
})
export class FormDesignComponent implements OnInit {
  constructor(private ref: MatDialogRef<FormDesignComponent>) {}
  ngOnInit(): void {
    this.MyForm();
  }
  CountryList = ['Egypt', 'USA', 'Syria', 'palstine'];
  Termslist = ['15Days', '30Days', '45Days', '50Days'];
  MyForm() {
    this.CustomerForm = new FormGroup({
      Name: new FormControl('', Validators.required),
      Email: new FormControl(null, [Validators.required, Validators.email]),
      Phone: new FormControl('', Validators.required),
      Country: new FormControl('', Validators.required),
      Address: new FormControl('', Validators.required),
      DateOfBirth: new FormControl(new Date(2000, 2, 20)),
      Gender: new FormControl('male', Validators.required),
      Term: new FormControl('', Validators.required),
      Status: new FormControl(false, Validators.required),
    });
  }
  SaveCustomer() {}
  ClearForm() {
    this.CustomerForm.reset({
      Gender: 'male',
      DateOfBirth: new Date(),
    });
  }

  CustomerForm: FormGroup;
}
