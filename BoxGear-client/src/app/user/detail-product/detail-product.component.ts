import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  _id:any;
  products: any;
  product : Product = new  Product();
  constructor(private router:Router, private activatedRoute: ActivatedRoute,private _service: ProductService ) { }
  
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) =>{
      this._id = params.get('id')
    });
    this.getProductBYID(this._id);
  }
  getProductBYID(_id:any){
    this._service.getProductBYD(_id).subscribe((res)=>{
     this.products = res;
    })
  }
}
