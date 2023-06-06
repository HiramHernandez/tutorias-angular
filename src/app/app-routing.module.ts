import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrolistaComponent } from './components/rounting/librolista/librolista.component';
import { AutorlistaComponent } from './components/rounting/autorlista/autorlista.component';
import { NotfoundComponent } from './components/rounting/notfound/notfound.component';

const routes: Routes = [
  { path: "libros", component: LibrolistaComponent },
  { path: "autores", component: AutorlistaComponent },
  { path: "", redirectTo: "/libros", pathMatch: "full" },
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
