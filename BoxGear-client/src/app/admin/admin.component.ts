import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  navbarOpen = false;
  toggleNavbar(){
    this.navbarOpen = !this.navbarOpen;
  }
  logout(){
    this._router.navigateByUrl('/signin')
  }
  toggleOpenProfile(){
    const content = document.querySelector('.header-left-profile');
    content?.classList.toggle('active')
  }
  toggleMenu(){
    const toggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation');
    const content = document.querySelector('.content');
    toggle?.classList.toggle('active')
    navigation?.classList.toggle('active')
    content?.classList.toggle('active')
 }
 toggleOpen(){
   const toggleDetail = document.querySelector('.detailHead')
   toggleDetail?.classList.toggle('active')
 }
}
