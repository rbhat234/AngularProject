import { BrowserModule } from '@angular/platform-browser';
import{ BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';



import { MembersComponent } from './members/members.component';
import { ShowComponent } from './members/show/show.component';
import{AddEditComponent} from './members/add-edit/add-edit.component';
import{SharedService} from './shared.service';

import{HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    AboutComponent,
    MembersComponent,
    AddEditComponent,
    ShowComponent
   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
