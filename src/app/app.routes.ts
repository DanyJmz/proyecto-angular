import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { CapitulosComponent } from './pages/capitulos/capitulos.component';

export const routes: Routes = [
    {
        path:"",
        component: HomeComponent
    },
    {
        path:"dashboard",
        component: DashboardComponent
    },
    {
        path:"personajes",
        component: PersonajesComponent
    },
    {
        path:"capitulos",
        component:CapitulosComponent
    }
];


