import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any;
  product : Product = new  Product();
  errMessage : string ="";
  selectedId: any;
 
  constructor(private router:Router, private activatedRoute: ActivatedRoute,private _service: ProductService) { }
  
  ngOnInit( ): void {
  this.getAllProducts();
}

getAllProducts(){
  this._service.getProducts().subscribe({
    next: (data: any) => (this.products = data)
  })
}
 
  
}
