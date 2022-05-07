import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ProfilehistoryComponent } from './profilehistory/profilehistory.component';
import { LoginComponent } from './login/login.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { Login1Component } from './login1/login1.component';
import { Changepassword1Component } from './changepassword1/changepassword1.component';
import { CreateprofileComponent } from './createprofile/createprofile.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { CardComponent } from './card/card.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { ComponentFixture } from '@angular/core/testing';
import { EducationaldetailsComponent } from './educationaldetails/educationaldetails.component';
import { HrhomepageComponent } from './hr/hrhomepage/hrhomepage.component';
import { CreateusersComponent } from './hr/createusers/createusers.component';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
import { SkilldetailsComponent } from './skilldetails/skilldetails.component';


const routes: Routes = [
  {path:"profile-history",component:ProfilehistoryComponent},
  {path:"forgot-password",component:ForgotpasswordComponent},
  {path:"change-password",component:ChangepasswordComponent},
  {path:"change-password1",component:Changepassword1Component},
  {path:"home",component:SearchComponent},
  {path:"login1",component:Login1Component},
  {path:"createprofile",component:CreateprofileComponent},
  {path:"viewprofile",component:ViewprofileComponent},
  {path:"card",component:CardComponent},
  {path:"personaldetails",component:PersonaldetailsComponent},
  {path:"educationaldetails",component:EducationaldetailsComponent},
  {path:"projectdetails",component:ProjectdetailsComponent},
  {path:"skilldetails",component:SkilldetailsComponent},
  {path:"hr-homepage",component:HrhomepageComponent},
  {path:"createusers",component:CreateusersComponent},
  // {path:"",component:SearchComponent},
  {path:"",component:LoginComponent}
  // 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
