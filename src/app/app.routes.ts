import { Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'change',
        loadComponent: () => import('./change-password/change-password.component').then(c => c.ChangePasswordComponent)
    },
    { 
        path: '',
        redirectTo: '/login', 
        pathMatch: 'full' 
    },
    {
        path: "**",
        component: EmptyRouteComponent
    }
];
