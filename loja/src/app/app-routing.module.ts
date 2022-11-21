import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: AppComponent },
  { path: 'home/carrinho', component: CarrinhoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
