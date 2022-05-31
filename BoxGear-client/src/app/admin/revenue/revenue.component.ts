import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RevenueService } from 'src/app/services/revenue.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Revenue } from 'src/app/Models/revenue';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent implements OnInit {

  revenues:any;
  venenue: Revenue[]=[];
  constructor(private activatedRoute:ActivatedRoute,private router:Router, private _service: RevenueService, private _toastr: ToastrService) { }

  ngOnInit(): void {
    this.getRevenues();
  }
  getRevenues(){
    this._service.getRevenue().subscribe({
      next:(data:any) => (this.revenues = data)
    })
  }
}
