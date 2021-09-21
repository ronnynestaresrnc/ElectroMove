import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import{ProductsRoutes} from './products.routes'
import { ComponentsModule } from '../components/components.module';
export class AppRoutingModule { }

@NgModule({
  declarations: [
    CardComponent,
    NoticiasComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ProductsRoutes
  ]
  ,exports:[NoticiasComponent]
})
export class ProductsModule { }
