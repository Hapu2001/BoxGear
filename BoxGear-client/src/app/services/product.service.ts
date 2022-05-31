import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IProduct } from '../interfaces/Product';
import { Product } from '../Models/product';
import { NgForm } from '@angular/forms';
import { IUser } from '../interfaces/User';
import { ISupport } from '../interfaces/Support';
import { User } from '../Models/users';


const baseUrl ="http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private _http: HttpClient) { }

  handleError(err: HttpErrorResponse){
    return throwError(()=> new Error(err.message))
  }

  getProducts(): Observable<IProduct[]>{
    return this._http.get<IProduct[]>(`${baseUrl}/products`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  getUser(): Observable<IUser[]>{
    return this._http.get<IUser[]>(`${baseUrl}/users`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
getSearch(key:string){
  return this._http.get<IProduct[]>(`${baseUrl}/search/${key}`)
  .pipe(
   retry(2),
   catchError(this.handleError)
 )
}
  
getSupport(): Observable<ISupport[]>{
  return this._http.get<ISupport[]>(`${baseUrl}/support`)
  .pipe(
    retry(2),
    catchError(this.handleError)
  )
}
  
  
  
  postProduct(data:Product){
    return this._http.post<Product>(`${baseUrl}/products`, data)
  }
   
  updateProduct(id:string, newData: Product): Observable<any>{
    return this._http.patch(`${baseUrl}/${id}`, newData)
  }
  deleteProduct(id: string){
    return this._http.delete(`${baseUrl}/${id}`)
  }
 getProductBYD(id:any){
   return this._http.get<IProduct[]>(`${baseUrl}/product/${id}`)
   .pipe(
    retry(2),
    catchError(this.handleError)
  )
 }
 Search(ten:any){
   return this._http.get<IProduct[]>(`${baseUrl}/${ten}`)
   .pipe(
    retry(2),
    catchError(this.handleError))
 }
 authe(data:User):Observable<any>{
  return this._http.post<User>(`${baseUrl}/login`, data)
}
}
