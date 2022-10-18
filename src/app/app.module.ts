import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import{ RouterModule, Routes} from '@angular/router';
import { AddstudentComponent } from './addstudent/addstudent.component';
const appRoutes:Routes=[
  {
    path:"",component:AdminComponent
  },
  {
    path:"addstudent",component:AddstudentComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminComponent,
    AddstudentComponent
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
