import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-tabla-list',
  templateUrl: './tabla-list.component.html',
  styleUrls: ['./tabla-list.component.css']
})
export class TablaListComponent implements OnInit {
@Input() character:any;
  constructor() { }

  ngOnInit(): void {
  }

}
