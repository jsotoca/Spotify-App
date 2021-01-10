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
    return this.httpClient.get(query,{ headers:this.headers })
    .pipe(
      map( transform )
    );
  }


  getNewRelease(){
    return this.executeQuery('https://api.spotify.com/v1/browse/new-releases',(data:any)=>{
      return data['albums'].items;
    });
  }

  getArtist(value:string){
    return this.executeQuery(`https://api.spotify.com/v1/search?q=${value}&type=artist`,(data:any)=>{
      return data['artists'].items;
    });
  }

}
