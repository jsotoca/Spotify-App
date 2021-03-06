import { SpotifyService } from './../../services/spotify.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newsSongs: any[] = [];
  carga:boolean = true;
  error:boolean = false;
  mensajeError:string;
  constructor(
    private spotifyService:SpotifyService
  ) { }

  ngOnInit(): void {
    this.spotifyService.getNewRelease().subscribe( 
      (data: any) => this.newsSongs = data,
      (err: any) => {
        this.mensajeError = err.error.error.message;
        this.error = true;
      }
    );
    this.carga = false;
  }

}
