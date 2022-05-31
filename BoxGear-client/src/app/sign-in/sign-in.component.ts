import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
import { User } from '../Models/users';




@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  users:any;
  user: User = new User();
  constructor ( private  activatedRoute: ActivatedRoute  , private _router: Router,private _service: ProductService, private _toasrt: ToastrService  ) { }

  ngOnInit(): void {
  }
  onsubmit( form: NgForm){
    console.log(this.user.email);
    console.log(this.user.password);
    this._service.authe(this.user).subscribe(res =>{
        let resData = JSON.parse(JSON.stringify(res));
        if(resData.message === "success"){
          alert("fail");
    }else{
       
        this._toasrt.success("Successfully!","Success!");
        this._router.navigateByUrl("/home");
      }
    });
  
  
  }
}