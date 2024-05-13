import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { guardGuard } from './service/guard.guard';
import { OverviewComponent } from './overview/overview.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: RegisterComponent },
    { path: 'home', component: HomeComponent, canActivate: [guardGuard] },
    { path: 'about', component: AboutComponent, canActivate: [guardGuard] },
    { path: 'overview', component: OverviewComponent, canActivate: [guardGuard] },
    { path: '**', component: ErrorComponent },
];
