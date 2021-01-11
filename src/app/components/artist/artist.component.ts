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
  tracks:any;
  loading:boolean;

  constructor(
    private activatedRoute:ActivatedRoute,
    private spotifyService:SpotifyService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.activatedRoute.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtist(id:string){
    this.spotifyService.getArtist(id).subscribe(artist => {
      this.artist = artist;
      this.loading = false;
    });
  }

  getTopTracks(id:string){
    this.spotifyService.getTopTracks(id).subscribe(tracks => {
      console.log(tracks);
      this.tracks = tracks;
    });
  }

}
