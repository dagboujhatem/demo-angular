import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { Page500Component } from './pages/page500/page500.component';
import { Page400Component } from './pages/page400/page400.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    LoginComponent,
    RegisterComponent,
    Page500Component,
    Page400Component,
    TermsConditionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Template driving forms
    ReactiveFormsModule, // Reactive forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
