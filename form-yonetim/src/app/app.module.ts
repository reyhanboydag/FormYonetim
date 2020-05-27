import { FormService } from './form.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { UserInfoFormComponent } from './user-info-form/user-info-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserFormListComponent } from './user-info-form/user-form-list/user-form-list.component';


@NgModule({
  declarations: [
    AppComponent,
    UserInfoFormComponent,
    UserFormListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()

  ],
  providers: [
    FormService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
