import { Component, OnInit } from '@angular/core';
import { MyJsonService } from '../../services/my-json.service';
import {Product} from '../../products.model'
import { ProductsRoutes } from '../../products.routes';
import { myData } from '../../utils/myData';
@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {
products? :Product[] ;
  constructor(public myjsonservice:MyJsonService) { }

  ngOnInit() {
    this.products= this.myjsonservice.getProductos();
    console.log(this.products)
  }

}
