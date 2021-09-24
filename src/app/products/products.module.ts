import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import{ProductsRoutes} from './products.routes'
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MyJsonService } from './services/my-json.service';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';

import { TablaListComponent } from './components/tabla-list/tabla-list.component';

export class AppRoutingModule { }

@NgModule({
  providers: [
  MyJsonService
],
  declarations: [
    CardComponent,
    NoticiasComponent,
    HomeComponent,
    PageNotFoundComponent,
    ConsultasComponent,
    CatalogoComponent,
 
    TablaListComponent,


  ],
  imports: [
    
    CommonModule,
    ComponentsModule,
    ProductsRoutes
  ]
  ,exports:[NoticiasComponent,PageNotFoundComponent, ConsultasComponent,CatalogoComponent]
})
export class ProductsModule { }
