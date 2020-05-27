import { FormService } from './form.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserListFormComponent } from './user-list-form/user-list-form.component';
import {RouterModule,Routes } from '@angular/router';
import { FormDetailComponent } from './form-detail/form-detail.component'
const appRoutes:Routes=[
  {path:'',component:UserListFormComponent},
  {path:'forms/:formName',component:FormDetailComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    UserListFormComponent,
    FormDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),

  ],
  providers: [
    FormService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
