import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/usuarios/registro/registro.component';
import { LoginComponent } from './pages/usuarios/login/login.component';
import { ListarUsuariosComponent } from './pages/usuarios/listar-usuarios/listar-usuarios.component';
import { UsuarioComponent } from './pages/usuarios/usuario/usuario.component';
import { AuthGuard } from './guards/auth.guard';
import { ListarCategoriasComponent } from './pages/categorias-productos/listar-categorias/listar-categorias.component';
import { CategoriaComponent } from './pages/categorias-productos/categoria/categoria.component';

const routes: Routes = [
  // { path: 'home'    , component: HomeComponent, canActivate: [ AuthGuard ] },
  { path: 'home'    , component: HomeComponent, canActivate: [ AuthGuard ]},
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: 'usuarios', component: ListarUsuariosComponent, canActivate: [ AuthGuard ]},
  { path: 'categorias-productos', component: ListarCategoriasComponent,  canActivate: [ AuthGuard ]},
  { path: 'categoria-producto/:_id', component: CategoriaComponent,  canActivate: [ AuthGuard ]},
  { path: 'usuarios/:uid', component: UsuarioComponent ,  canActivate: [ AuthGuard ]},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
