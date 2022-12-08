import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { Page400Component } from './pages/page400/page400.component';
import { Page500Component } from './pages/page500/page500.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { Profile2Component } from './pages/profile2/profile2.component';
import { RegisterComponent } from './pages/register/register.component';
import { Register2Component } from './pages/register2/register2.component';
import { ServicesComponent } from './pages/services/services.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register2', component: Register2Component },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile2', component: Profile2Component },
  { path: 'term-and-condition', component: TermsConditionsComponent },
  { path: 'page-400', component: Page400Component },
  { path: 'page-500', component: Page500Component },
  { path: 'users', loadChildren: () => import('./domains/users/users.module').then(m => m.UsersModule) },
  { path: 'products', loadChildren: () => import('./domains/products/products.module').then(m => m.ProductsModule) },
  { path: 'commandes', loadChildren: () => import('./domains/commandes/commandes.module').then(m => m.CommandesModule) },
  { path: 'posts', loadChildren: () => import('./domains/posts/posts.module').then(m => m.PostsModule) },
  { path: '**', redirectTo: 'page-400', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
