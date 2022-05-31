import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/services/product.service';
import { NgForm } from '@angular/forms';









@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  
  search:any;
  products: Product[]=[];
  product : Product = new Product();
  errMessage : string ="";
 ten: any;

  constructor( private activatedRoute: ActivatedRoute, private router: Router, private _service:ProductService, private _toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllProducts();
   
   
  }
  key: string ='id';
  reverse: boolean = false;
  sort(key: string){
    this.key = key;
    this.reverse = !this.reverse;
  }
  Search(){
    if(this.ten == ""){
      this.ngOnInit();
    }else{
      this.products = this.products.filter(res =>{
        return res.ten.toLocaleLowerCase().match(this.ten.toLocaleLowerCase());
      })
    }
  }
  
  
  getAllProducts(){
    this._service.getProducts().subscribe({
      next: (data: any) => (this.products = data)
    })
  }
  getSearch(  search: any){
    this._service.getSearch(search).subscribe({
      next: (data: any) => (this.products = data)
    })
  }
  submitData(form: NgForm){
    if(this.product._id ==''){
      this._service.postProduct(this.product).subscribe(res => {
        let resData = JSON.parse(JSON.stringify(res));
           if (resData.message === "success"){
            this._toastr.success("Insert Successfully!", "Success!");
             this.getAllProducts();
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
          this.onReset();
          this.getAllProducts();
        }
      });
    
    }
    
    
    }
  onReset(form?: NgForm){
      if(form){
        form.reset();
      }
    }
    onEdit(data : Product){
      this.product = data;
    }
    onDelete(id: any){
      if(confirm("Are you sure you want to delete?")==true){
        this._service.deleteProduct(id).subscribe(res =>{
          let resData = JSON.parse(JSON.stringify(res));
          if(resData.message === "success"){
            // alert("Deleteted Successfully!");
            this._toastr.info("Deleted Successfully!", "Success!");
            this.onReset();
            this.getAllProducts();
          }else{
            alert(resData.message);
          }
        });
      
      }
      }
    
      
      

}
