
import { Form } from './../form';
import { Component, Input,PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import {FormService} from '../form.service';

@Component({
  selector: 'app-user-list-form',
  templateUrl: './user-list-form.component.html',
  styleUrls: ['./user-list-form.component.css'],
  providers: [DecimalPipe]
})
export class UserListFormComponent  {
  filter = new FormControl('');

  @Input()
  private form: Form;

  formName: string;
    description: string;
    createdAt: string;
    firstNameText: string;
    lastNameText: string;
    age: number;
  closeResult = '';

  constructor(private modalService: NgbModal,private formService: FormService,pipe: DecimalPipe) {
    this.formName='';
    this.description='';
    this.createdAt='';
    this.firstNameText='';
    this.lastNameText='';
    this.age=null;
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  private addForm(): void {
    this.formService.addForm(this.formName,this.description,this.createdAt,this.firstNameText,this.lastNameText,this.age);
    this.formName='';
    this.description='';
    this.createdAt='';
    this.firstNameText='';
    this.lastNameText='';
    this.age=null;
  }
}
