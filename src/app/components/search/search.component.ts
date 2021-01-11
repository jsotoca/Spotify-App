import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  artists: any[] = [];
  loading: boolean;

  constructor(
    private spotifyService:SpotifyService
  ) { }

  ngOnInit(): void {
  }

  search(value: string){
    this.artists = [];
    this.loading = true;
    this.spotifyService.getArtists(value).subscribe((data:any) => {
      this.artists = data;
      this.loading = false;
    });
  }

}
