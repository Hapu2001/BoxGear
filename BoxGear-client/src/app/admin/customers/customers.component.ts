import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/Models/users';

import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  firstName: any;
  users:any;
  user : User[] = [];
  constructor(private activatedRoute: ActivatedRoute, private router:Router, private _service: ProductService, private _toastr: ToastrService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  
 
  getUsers(){
    this._service.getUser().subscribe({
      next:(data:any) => (this.users = data)
    })
  }
  Search(){
    if(this.firstName==""){
      this.ngOnInit();
    } else{
      this.user = this.user.filter(res =>{
        return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      })
    }
  }
  
 
}
