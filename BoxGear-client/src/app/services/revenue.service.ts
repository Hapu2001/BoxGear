import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IRevenue } from '../interfaces/Revenue';

const baseUrl ="http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class RevenueService {

  constructor(private _http: HttpClient) { }
  handleError(err: HttpErrorResponse){
    return throwError(()=> new Error(err.message))
  }
  getRevenue(): Observable<IRevenue[]>{
    return this._http.get<IRevenue[]>(`${baseUrl}/revenues`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
}
