import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailComponent } from './detail/detail.component';
import { ListeComponent } from './liste/liste.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: "", component:AccueilComponent},
  {path: "produit", component:ListeComponent},
  {path: "produit/:id", component:DetailComponent},
  {path: "**", component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
