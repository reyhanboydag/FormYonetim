import { FormService } from './../form.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-info-form',
  templateUrl: './user-info-form.component.html',
  styleUrls: ['./user-info-form.component.css']
})
export class UserInfoFormComponent {
  constructor(private formService: FormService) {
  }
}
