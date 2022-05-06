import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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
import { CardComponent } from './card/card.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HrhomepageComponent } from './hr/hrhomepage/hrhomepage.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SearchComponent,
    HomeComponent,
    TopbarComponent,
    ProfilehistoryComponent,
    LoginComponent,
    ChangepasswordComponent,
    ForgotpasswordComponent,
    Login1Component,
    Changepassword1Component,
    CreateprofileComponent,
    CardComponent,
    ViewprofileComponent,
    HrhomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
