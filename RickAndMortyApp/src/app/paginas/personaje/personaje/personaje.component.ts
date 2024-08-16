import { Component, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import Character from '../../../models/character';
import { CharacterService } from '../../../servicios/character.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-personaje',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.scss'
})
export class PersonajeComponent {

  character: Character | undefined;

  @ViewChild('messgage') messageInput!: ElementRef<HTMLInputElement>;

  constructor (
    private charServ: CharacterService) {}

  ngOnInit(){
    this.cargarPersonaje(1);
  }

  cargarPersonaje(id: number){
    this.charServ.getOneCharacter(id).subscribe((character) => {
      this.character = character;
    })
  }

  buscarPersonaje(){
    const id = Number(this.messageInput.nativeElement.value);
    if(id){
      this.cargarPersonaje(id);
    }
  }

}
