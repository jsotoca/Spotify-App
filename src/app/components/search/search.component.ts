import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  artists: any[] = [];

  constructor(
    private spotifyService:SpotifyService
  ) { }

  ngOnInit(): void {
  }

  search(value: string){
    this.artists = [];
    this.spotifyService.getArtist(value).subscribe((data:any) => {
      this.artists = data.artists.items;
      console.log(this.artists);
    });
  }

}
