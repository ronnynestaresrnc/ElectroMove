import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoticiasComponent} from './products/pages/noticias/noticias.component';


const routes: Routes = [
  {  path: 'noticias', component: NoticiasComponent, },
  {path:' ', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
