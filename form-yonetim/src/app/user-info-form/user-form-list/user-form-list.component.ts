import { Form } from './../../form';
import { Component, Input,PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import {FormService} from '../../form.service';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

function search(text: string, pipe: PipeTransform): Country[] {
  return COUNTRIES.filter(country => {
    const term = text.toLowerCase();
    return country.name.toLowerCase().includes(term)
        || pipe.transform(country.area).includes(term)
        || pipe.transform(country.population).includes(term);
  });
}


@Component({
  selector: 'app-user-form-list',
  templateUrl: './user-form-list.component.html',
  styleUrls: ['./user-form-list.component.css'],
  providers: [DecimalPipe]
})
export class UserFormListComponent  {
  countries$: Observable<Country[]>;
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
    this.countries$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    );
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
