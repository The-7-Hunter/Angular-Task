import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { UserHomeComponent } from './user-home/user-home.component';

export const routes: Routes = [
    {
        path: '', component: LandingPageComponent,
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'user-home', component: UserHomeComponent
    }
];
