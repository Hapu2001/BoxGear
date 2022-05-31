import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Support } from 'src/app/Models/support';
import { SupportService } from 'src/app/services/support.service';

@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html',
  styleUrls: ['./consulting.component.css']
})
export class ConsultingComponent implements OnInit {

  supports:any;
  support: Support = new Support();
  errMessage : string ="";
  constructor( private activatedRoute:ActivatedRoute, private router:Router, private _service:SupportService, private _toastr: ToastrService) { }

  ngOnInit(): void {
    this.getSupport();
  }
  toggleModal(){
    const toggle = document.querySelector('.container-modal2');
    toggle?.classList.toggle('active')
 }
 getSupport(){
   this._service.getSupport().subscribe({
     next:(data: any)=>(this.supports = data)
   })
 }
}
