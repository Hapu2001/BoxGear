import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { ISupport } from '../interfaces/Support';


const baseUrl ="http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class SupportService {

  constructor(private _http: HttpClient) { }

  handleError(err: HttpErrorResponse){
    return throwError(()=> new Error(err.message))
  }
  getSupport(): Observable<ISupport[]>{
    return this._http.get<ISupport[]>(`${baseUrl}/support`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
}
