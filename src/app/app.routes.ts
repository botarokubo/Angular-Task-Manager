import { Routes } from '@angular/router';
import { Auth } from './auth/auth';
import { Tasks } from './tasks/tasks';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: Auth },
    { path: 'tasks', component: Tasks },
    { path: '**', redirectTo: 'login' },
];
