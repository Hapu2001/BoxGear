import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Order } from 'src/app/Models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  orders:any;
  order: Order[]= [];
  constructor( private activatedRoute:ActivatedRoute,private router:Router,private _service: OrderService, private _toastr: ToastrService) { }

  ngOnInit(): void {
    this.getOrders();
  }
  getOrders(){
    this._service.getOrders().subscribe({
      next:(data:any) => (this.orders = data)
    })
  }
}
