import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { InterpreterBookingComponent } from './Pages/interpreter-booking/interpreter-booking.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './Services/auth-guard.service';
import { VideoCallComponent } from './Pages/video-call/video-call.component';

import { ClientBookingComponent } from './Pages/client-booking/client-booking.component';
import { StatusPipe } from './Pipes/status.pipe';
import { TimeFormatPipe } from './Pipes/time-format.pipe';

import { LandingComponent } from './Pages/landing/landing.component';
import { EditComponent } from './Pages/edit/edit.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    InterpreterBookingComponent,
    NavbarComponent,
    ClientBookingComponent,
    VideoCallComponent,
    StatusPipe,
    TimeFormatPipe,
    LandingComponent,
    EditComponent 
    
          
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgxUiLoaderModule,
    HttpClientModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
