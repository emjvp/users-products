import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UsuarioRequested } from '../../models/usuarios/usuario-requested.model';
import { UsuarioAuthModel } from 'src/app/models/usuarios/usuarioAuth.model';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url = 'https://prueba-tecnica-idecide.azurewebsites.net/api';


  constructor( private http: HttpClient, private authServ: AuthService ) {

  }

  listarUsuarios(){
    return this.http.get(`${ this.url }/usuarios`).pipe(
      map( (resp: any) => {
        return resp['usuarios'];
     })
    );
  }

  nuevoUsuario( usuario: UsuarioAuthModel ) {

    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(`${ this.url }/usuarios`, authData)
               .pipe(
                 map( (resp: any) => {
                    this.authServ.guardarToken( resp['token'] );
                    return resp;
                 })
                );
  }

  actualizarUsuario(uid: any, usuario: UsuarioRequested)
  {
    return this.http.put(`${ this.url }/usuarios/${ uid }`, usuario).pipe(
      map( (resp: any) => {
        return resp;
     })
    );
  }

  eliminarUsuario(uid: string)
  {
    const token = localStorage.getItem('token') as string;
    const headers = new HttpHeaders({'x-token': token});
    return this.http.delete(`${ this.url }/usuarios/${ uid }`, {headers: headers}).pipe(
      map( (resp: any) => {
        return resp;
     }))
  }

}
