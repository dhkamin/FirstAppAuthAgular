import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { DataService } from './data.service';
import { HttpModule } from "@angular/http";
import { MenuComponent } from './menu/menu.component';
import { StudentComponent } from './student/student.component';
import { AppRoutingModule } from "./app-routing.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RouterModule, Routes } from '@angular/router';
import { MatiersComponent } from './matiers/matiers.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



import { AuthService } from './auth.service';
import { LoginGuardGuard } from './login.guard';
import { RegisterGuard } from './register.guard';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    StudentComponent,
    MatiersComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule 
    
  ],
  providers: [DataService,LoginGuardGuard,AuthService,RegisterGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
