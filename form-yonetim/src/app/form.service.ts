import { Injectable } from '@angular/core';
import {Form} from './form'

@Injectable()
export class FormService {

  private nextId: number;

  constructor() {
    let forms=this.getForms();
    if(forms.length==0){
        this.nextId=0;
    } else{let maxId=forms[forms.length -1].id;
        this.nextId=maxId+1;
        
    }
  }

  public addForm(formName: string,description:string,createdAt:string,firstName:string,lastName:string,age:number): void {
    let form = new Form(this.nextId,formName, description,createdAt,firstName,lastName,age);
    let forms=this.getForms();
    forms.push(form);
    this.setLocalStorageForms(forms);

    this.nextId++;
  }

  public getForms(): Form[] {
    let localStorageItem=JSON.parse(localStorage.getItem('forms'));
    return localStorageItem == null ? [] :  localStorageItem.forms;
}

  public removeForm(id: number): void {
      let forms=this.getForms();
      forms = forms.filter((form)=> form.id != id);
    this.setLocalStorageForms(forms);
    }

  private setLocalStorageForms(forms:Form[]):void{
      localStorage.setItem('forms',JSON.stringify({forms:forms}));

  }

}