import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MasterService } from '../Services/master.service';
import { Customer } from '../Models/Customer';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { FormDesignComponent } from '../form-design/form-design.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor(private Service: MasterService, private matdialog: MatDialog) {}
  Customers: Customer[] = [];
  DataSource: any;
  DisplayCulomns: string[] = [
    'code',
    'name',
    'email',
    'phone',
    'status',
    'actions',
  ];

  ngOnInit(): void {
    this.fetchData(1, 2);
  }

  fetchData(page: number, pageSize: number): void {
    const ProductCount = 100;
    this.Service.GetCustomer().subscribe({
      next: (res) => {
        this.Customers = res;
        this.DataSource = new MatTableDataSource<Customer>(this.Customers);

        this.DataSource.paginator = this.MatPaginator;
        this.DataSource.sort = this.MatSort;

        // this.MatPaginator.length = ProductCount;
      },
    });
  }
  onPageChanged(event: any): void {
    const page = event.pageIndex;
    const pageSize = event.pageSize;
    console.log(page);
    console.log(pageSize);

    this.fetchData(page, pageSize);
  }
  @ViewChild(MatPaginator) MatPaginator: MatPaginator;
  @ViewChild(MatSort) MatSort: MatSort;

  FilterChange(event: any) {
    let value = event.target.value;
    this.DataSource.filter = value;
  }

  Remove(element: any) {
    console.log(element);
  }
  Edit(code: number) {
    this.matdialog.open(PopupComponent, {
      data: {
        code: code,
      },
    });
  }

  Openpopup() {
    let Popup = this.matdialog.open(PopupComponent, {
      width: '100%',
      height: '550px',
      data: {
        title: 'User Edit',
      },
    });
    Popup.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          this.fetchData(1, 0);
        }
        console.log(res);
      },
    });
  }
}
