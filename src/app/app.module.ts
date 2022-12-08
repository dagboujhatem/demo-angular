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
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { Register2Component } from './pages/register2/register2.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { Profile2Component } from './pages/profile2/profile2.component';

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
    TermsConditionsComponent,
    Register2Component,
    ProfileComponent,
    Profile2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
