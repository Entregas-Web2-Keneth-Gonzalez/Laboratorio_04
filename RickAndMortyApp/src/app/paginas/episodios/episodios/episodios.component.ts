import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import Episode from '../../../models/episode';
import { EpisodeService } from '../../../servicios/episode.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-episodios',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './episodios.component.html',
  styleUrl: './episodios.component.scss'
})
export class EpisodiosComponent {

  displayedColumns: string[] = ['id', 'name', 'air_date', 'episode', 'created']

  episodes: Episode[] = [];

  constructor(private episodeServ: EpisodeService){}

  ngOnInit(){
    this.cargarDatos();
  }

  cargarDatos(){
    this.episodeServ.getEpisodes().subscribe((episodes) => {
      this.episodes = episodes;
    })
  }

}
