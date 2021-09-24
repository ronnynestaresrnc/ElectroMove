import { Injectable } from '@angular/core';
import { Product } from '../products.model';
import { ProductsRoutes } from '../products.routes';
import { myData } from '../utils/myData';

@Injectable({
  providedIn: 'root'
})
export class MyJsonService {

private productos : Product[];
  constructor() { 
 this.productos = myData
  }

  getProductos(){
    return this.productos;
  }
}
