import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajeComponent } from './personaje/personaje.component';

const routes: Routes = [
  {
    path: '',
    component: PersonajeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajeRoutingModule { }
