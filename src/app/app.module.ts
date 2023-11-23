import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './error404/error404.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeScreenComponent } from './Screen/home-screen/home-screen.component';
import { NavbarComponent } from './Screen/navbar/navbar.component';
import { MainSectionComponent } from './Screen/main-section/main-section.component';
import { EventcardComponent } from './Screen/eventcard/eventcard.component';
import { AllcardComponent } from './Screen/allcard/allcard.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import {MatMenuModule} from '@angular/material/menu';
import { AddEventComponent } from './admin/add-event/add-event.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ProfilComponent } from './admin/profil/profil.component';
import { InfoComponent } from './Screen/info/info.component';
import { ChangeEventComponent } from './admin/change-event/change-event.component';
import { ContactComponent } from './Screen/contact/contact.component';
import { DecorationPipe } from './decoration.pipe';
import { AdminContactComponent } from './admin/admin-contact/admin-contact.component';
import { AboutUsComponent } from './Screen/about-us/about-us.component';
@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    LoginComponent,
    HomeScreenComponent,
    NavbarComponent,
    MainSectionComponent,
    EventcardComponent,
    AllcardComponent,
    AdminHomeComponent,
    AdminNavbarComponent,
    AddEventComponent,
    ProfilComponent,
    InfoComponent,
    ChangeEventComponent,
    ContactComponent,
    DecorationPipe,
    AdminContactComponent,
    AboutUsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
