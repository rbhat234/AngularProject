import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component'
//import { ShowComponent } from './members/show/show.component';
//import { AddEditComponent } from './members/add-edit/add-edit.component';


const routes: Routes = [
  { path : 'login', component:LoginComponent},
  { path : 'signup', component:SignupComponent},
  { path : 'about', component:AboutComponent},
  { path : 'members', component:MembersComponent}
 // { path : 'add-edit', component:AddEditComponent},
 // { path : 'show', component:ShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [LoginComponent,SignupComponent,AboutComponent]
