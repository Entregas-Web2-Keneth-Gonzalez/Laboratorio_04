import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import Character from '../models/character';

interface ApiResponse {
  info: any;
  results: Character[];
}

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<ApiResponse>("https://rickandmortyapi.com/api/character").pipe(
      map(response => response.results)
    );
  }

  getOneCharacter(id:number): Observable<Character> {
    return this.http.get<Character>(`https://rickandmortyapi.com/api/character/${id}`)
  }
}
