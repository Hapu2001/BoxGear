import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/services/product.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-detail-product-admin',
  templateUrl: './detail-product-admin.component.html',
  styleUrls: ['./detail-product-admin.component.css']
})
export class DetailProductAdminComponent implements OnInit {
  _id:any;
  products: any;
  product : Product = new  Product();

  constructor(private router:Router, private activatedRoute: ActivatedRoute, private _service: ProductService, private _toastr:ToastrService) { }

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
  onEdit(data : Product){
    this.product = data;
  }
  submitData(form: NgForm){
    if(this.product._id ==''){
      this._service.postProduct(this.product).subscribe(res => {
        let resData = JSON.parse(JSON.stringify(res));
           if (resData.message === "success"){
            this._toastr.success("Insert Successfully!", "Success!");
            
           }else{
             alert("Fail!")
          }
            })
          }
    else{
      this._service.updateProduct(this.product._id, this.product).subscribe(res =>{
        let resData = JSON.parse(JSON.stringify(res));
        if(resData.message === "success"){
          // alert("Updated Successfully!");
          alert("fail");
        }else{
         
          this._toastr.success("Updated Successfully!", "Success!");
         
          
        }
      });
    
    }
    
    
    }
    goBack(){
      this.router.navigateByUrl('/ProductsList');
    }
}
