import { Component } from '@angular/core';
import { CharacterService } from '../../../servicios/character.service';
import Character from '../../../models/character';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.scss'
})
export class PersonajesComponent {

  displayedColumns: string[] = ['id', 'name', 'status', 'species', 'gender', 'origin'];

  characters: Character[] = [];

  constructor(private characterServ: CharacterService) {}

  ngOnInit(){
    this.cargarDatos();
  }

  cargarDatos(){
    this.characterServ.getCharacters().subscribe((characters) => {
      this.characters = characters;

    })
  }

}
