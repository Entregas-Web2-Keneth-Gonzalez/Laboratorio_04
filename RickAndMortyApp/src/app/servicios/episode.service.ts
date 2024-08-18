import { Injectable } from '@angular/core';
import Episode from '../models/episode';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

interface ApiResponse{
  info: any;
  results: Episode[];
}

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private http: HttpClient) { }

  getEpisodes(): Observable<Episode[]>{
    return this.http.get<ApiResponse>("https://rickandmortyapi.com/api/episode").pipe(
      map(response => response.results)
    );
  }
}
