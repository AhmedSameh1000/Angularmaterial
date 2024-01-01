import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Models/Customer';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private httpClient: HttpClient) {}

  GetCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>('http://localhost:3000/Customer');
  }

  SaveCustomer(Data: any) {
    return this.httpClient.post('http://localhost:3000/Customer', Data);
  }
  GetCustomerByCode(Code: any) {
    return this.httpClient.get('http://localhost:3000/Customer?code=' + Code);
  }
}
