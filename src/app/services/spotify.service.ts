import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  headers: HttpHeaders;

  constructor(
    private httpClient:HttpClient
  ) { 
    this.headers = new HttpHeaders({
      'Authorization': environment.authorization
    })
  }

  executeQuery(query:string,transform:any){
    const url = `https://api.spotify.com/v1/${query}`;
    return this.httpClient.get(url,{ headers:this.headers })
    .pipe(
      map( transform )
    );
  }


  getNewRelease(){
    return this.executeQuery('browse/new-releases',(data:any)=>{
      return data['albums'].items;
    });
  }

  getArtists(value:string){
    return this.executeQuery(`search?q=${value}&type=artist`,(data:any)=>{
      return data['artists'].items;
    });
  }

  getArtist(id:string){
    return this.executeQuery(`artists/${id}`,((data:any) => {
      return data;
    }))
  }

  getTopTracks(id:string){
    return this.executeQuery(`artists/${id}/top-tracks?country=us`,((data:any) => {
      return data.tracks;
    }))
  }

}
