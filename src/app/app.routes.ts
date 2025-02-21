import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TemporadasComponent } from './components/temporadas/temporadas.component';
import { MusicaComponent } from './components/musica/musica.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta vacía
  { path: 'home', component: HomeComponent }, // Ruta '/home'
  { path: 'temporadas', component: TemporadasComponent },
  { path: 'musica', component: MusicaComponent },
  { path: 'user', component: UserComponent },
  { path: '**', component: PageNotFoundComponent }
];