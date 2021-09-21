import { Component, OnInit ,Input} from '@angular/core';
import {RickandmortyService} from '../../services/rickandmorty.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() characters$ = this.dataSvc.characters$;

  constructor(public dataSvc:RickandmortyService) { }

  ngOnInit(): void {
    this.characters$
  }

}
