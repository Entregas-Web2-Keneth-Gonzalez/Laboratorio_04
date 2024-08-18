import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadChildren: () => import ('./paginas/personajes/personajes.module').then((m) => m.PersonajesModule),
    },
    {
        path:'character',
        loadChildren: () => import ('./paginas/personaje/personaje.module').then((m) => m.PersonajeModule),
    },
    {
        path:'episodes',
        loadChildren:() => import ('./paginas/episodios/episodios.module').then((m) => m.EpisodiosModule),
    }
];
