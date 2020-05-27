import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.css']
})
export class FormDetailComponent implements OnInit {
  
  constructor(private route:ActivatedRoute) { 
    this.route.paramMap.subscribe(params=>{
      params.get('formName');
    })
  }

  ngOnInit() {
  }

}
