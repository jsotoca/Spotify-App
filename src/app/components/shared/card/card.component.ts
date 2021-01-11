import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() data:any[] = [];

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  verArtista(item:any){
    let artistId: string;
    artistId = (item['type'] == 'artist')? item.id : item.artists[0].id; 
    this.router.navigate([`/artist/${artistId}`]);
  }

}
