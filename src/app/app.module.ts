import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import{ RouterModule, Routes} from '@angular/router';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { ViewallstudentComponent } from './viewallstudent/viewallstudent.component';
import { AddfacultyComponent } from './addfaculty/addfaculty.component';
import { CollegedashComponent } from './collegedash/collegedash.component';
const appRoutes:Routes=[
  {
    path:"",component:AdminComponent
  },
  {
    path:"addstudent",component:AddstudentComponent
  },
  {
    path:"viewallstudent",component:ViewallstudentComponent
  },
  {
    path:"addfaculty",component:AddfacultyComponent
  },
  {
    path:"collegedash",component:CollegedashComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminComponent,
    AddstudentComponent,
    ViewallstudentComponent,
    AddfacultyComponent,
    CollegedashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
