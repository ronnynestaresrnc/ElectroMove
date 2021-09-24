import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './products/pages/home/home.component';
import { NoticiasComponent} from './products/pages/noticias/noticias.component';
import { PageNotFoundComponent } from './products/pages/page-not-found/page-not-found.component';
import { ConsultasComponent } from './products/pages/consultas/consultas.component';
import { CatalogoComponent } from './products/pages/catalogo/catalogo.component';
const routes: Routes = [
  {  path: 'noticias', component: NoticiasComponent, },
  {  path: 'consultas', component: ConsultasComponent, },
  { path: 'home',   component:HomeComponent },
 { path: '',   redirectTo: '/home', pathMatch: 'full' },
       { path: 'catalogo',   component:CatalogoComponent },
  { path: '**', pathMatch: 'full', 
        component: PageNotFoundComponent },
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
