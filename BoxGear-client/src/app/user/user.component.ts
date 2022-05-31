import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _userSerivce: UserServiceService, private _router: Router) { }

  ngOnInit( ): void {
  }
  onsubmit( form: NgForm){
    this._router.navigateByUrl('/home')
  }
  toggleSearch(){
    const content = document.querySelector('.header-search-form');
    content?.classList.toggle('active')
  }
  toggleCloseCart(){
    const content = document.querySelector('.cart-modal');
    content?.classList.toggle('active')
  }

  toggleOpenCart(){
    const content = document.querySelector('.cart-modal');
    content?.classList.toggle('active')
  }
  toggleOpenMenu(){
    const content = document.querySelector('.header-navigation');
    content?.classList.toggle('active')
  }
  toggleOpenProfile(){
    const content = document.querySelector('.header-left-profile');
    content?.classList.toggle('active')
  }
}
