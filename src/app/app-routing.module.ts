import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { MatiersComponent } from './matiers/matiers.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardGuard } from './login.guard';
import { RegisterGuard } from './register.guard';


const routes: Routes = [
  {path:'',component: HomeComponent,canActivate:[LoginGuardGuard]},
 
  {path:'student/:name/:lastname',component:StudentComponent,children:[
    {path:'moyen/:name/:coef/:ds/:ex', component:MatiersComponent}
  ]},

  {path:'register',component: RegisterComponent ,canActivate:[RegisterGuard] },
  {path:'login',component: LoginComponent},
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
