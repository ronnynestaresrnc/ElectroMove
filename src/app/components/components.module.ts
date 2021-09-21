import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutes } from '../products/products.routes';
import { NavbarComponent } from './navbar/navbar.component';
import { MyfooterComponent } from './myfooter/myfooter.component';

@NgModule({
  declarations: [
NavbarComponent,
    MyfooterComponent
  ],
  imports: [
   ProductsRoutes,
    CommonModule,

  ]
  ,exports:[MyfooterComponent,NavbarComponent]
})
export class ComponentsModule { }
