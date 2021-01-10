import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private httpClient:HttpClient
  ) { }

  getNewRelease(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB3eCna3VdjFMGCiuGE933LDM80N21UPguHfV1t9VbjVnTTHsXVPfB2p-uc6wbVQILtqmu18OaXTbDgLcs'
    });

    return this.httpClient.get('https://api.spotify.com/v1/browse/new-releases',{ headers });

  }

  getArtist(value:string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB3eCna3VdjFMGCiuGE933LDM80N21UPguHfV1t9VbjVnTTHsXVPfB2p-uc6wbVQILtqmu18OaXTbDgLcs'
    });

    return this.httpClient.get(`https://api.spotify.com/v1/search?q=${value}&type=artist`,{ headers });
  }

}
