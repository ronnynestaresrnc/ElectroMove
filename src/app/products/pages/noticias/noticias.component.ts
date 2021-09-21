import { Component, OnInit } from '@angular/core';
import {RickandmortyService} from '../../services/rickandmorty.service';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  nombre: string = "dime la verdad";
characters$  = this.dataSvc.characters$;


  constructor(public dataSvc:RickandmortyService) { }

  ngOnInit(): void {
this.characters$;


  }

}
