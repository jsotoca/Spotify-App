import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  artist:any;
  loading:boolean = true;

  constructor(
    private activatedRoute:ActivatedRoute,
    private spotifyService:SpotifyService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => this.getArtist(params['id']));
    this.loading = false;
  }

  getArtist(id:string){
    this.spotifyService.getArtist(id).subscribe(artist => {
      this.artist = artist;
    });
  }

}
