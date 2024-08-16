import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajesRoutingModule } from './personajes-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
  ]
})
export class PersonajesModule { 
  constructor(){
    console.log("Personajes cargados")
  }
}
