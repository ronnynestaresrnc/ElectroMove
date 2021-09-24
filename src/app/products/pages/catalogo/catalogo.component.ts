import { Component, OnInit } from '@angular/core';
import { RickandmortyService } from '../../services/rickandmorty.service';
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {


characters$   = this.dataSvc.characters$;


  constructor(public dataSvc:RickandmortyService) { }

  ngOnInit(): void {
  }

}
