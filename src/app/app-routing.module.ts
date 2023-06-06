import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrolistaComponent } from './components/rounting/librolista/librolista.component';
import { AutorlistaComponent } from './components/rounting/autorlista/autorlista.component';
import { NotfoundComponent } from './components/rounting/notfound/notfound.component';
import { LibroDetalleComponent } from './components/rounting/libro-detalle/libro-detalle.component';
import { LibroOpionesComponent } from './components/rounting/libro-opiones/libro-opiones.component';
import { LibroImagenesComponent } from './components/rounting/libro-imagenes/libro-imagenes.component';

/*,
    children: [
      { path: 'imagenes', component: LibroImagenesComponent },
      { path: 'opiniones', component: LibroOpionesComponent },
      { path: "**", component: NotfoundComponent }
    ]*/

const routes: Routes = [
  { path: 'libros', component: LibrolistaComponent },
  { path: 'libros/:id', component: LibroDetalleComponent,
       children: [
         { path: 'imagenes', component: LibroImagenesComponent },
         { path: 'opiniones', component: LibroOpionesComponent },
         { path: '', redirectTo: 'imagenes', pathMatch: 'full' },
         { path: '**', component: NotfoundComponent }
       ]
     },
  { path: 'autores', component: AutorlistaComponent },
  { path: '', redirectTo: '/libros', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
