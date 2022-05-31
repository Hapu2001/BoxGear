import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IOrder } from '../interfaces/Order';


const baseUrl ="http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _http: HttpClient) { }
  handleError(err: HttpErrorResponse){
    return throwError(()=> new Error(err.message))
  }
  getOrders(): Observable<IOrder[]>{
    return this._http.get<IOrder[]>(`${baseUrl}/orders`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
}
