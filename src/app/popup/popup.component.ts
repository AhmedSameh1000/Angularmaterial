import { MasterService } from './../Services/master.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Customer } from '../Models/Customer';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit {
  constructor(
    private ref: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private MasterService: MasterService
  ) {}
  ngOnInit(): void {
    this.inputData = this.data;
    this.CreateForm();
    this.LoadUser();
  }
  newdata: any;
  LoadUser() {
    this.MasterService.GetCustomerByCode(this.data.code).subscribe({
      next: (res: any) => {
        this.FormData.setValue({
          code: res[0].code,
          name: res[0].name,
          phone: res[0].phone,
          email: res[0].email,
          status: res[0].status,
        });
      },
    });
  }
  inputData: any;
  close() {
    this.ref.close('Closed using Function');
  }
  SaveData() {
    var Data = {
      code: this.FormData.value.code,
      name: this.FormData.value.name,
      phone: this.FormData.value.phone,
      email: this.FormData.value.email,
      status: this.FormData.value.status,
    };
    this.MasterService.SaveCustomer(Data).subscribe({
      next: (res) => {
        this.ref.close(true);
      },
    });
  }
  CreateForm() {
    this.FormData = new FormGroup({
      code: new FormControl(),
      name: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      status: new FormControl(),
    });
  }

  FormData: FormGroup;
}
