import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioAuthModel } from '../../../models/usuarios/usuarioAuth.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://prueba-tecnica-idecide.azurewebsites.net/api';

  private userToken: string = '';


  constructor( private http: HttpClient ) {
    this.leerToken();
  }

  logout() {
    localStorage.removeItem('token');
  }

  login( usuario: UsuarioAuthModel) {

    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${ this.url }/auth/login`,
      authData ).pipe(
        map( (resp: any) => {

           this.guardarToken( resp['token'] );
           return resp;
        })
       );
  }


  public guardarToken( idToken: string ) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds( 3600 );
    localStorage.setItem( 'expira', hoy.getTime().toString() );
  }

  leerToken() {
    if ( localStorage.getItem('token') ) {
      // this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

  estaAutenticado(): boolean {

    if (this.userToken.length < 2) { return false; }

    const expira = Number(localStorage.getItem('expira'));

    const expiraDate = new Date();

    expiraDate.setSeconds( expira );

    if ( expiraDate > new Date() ) {
      return true;
    } else {
      return false;
    }
  }
}
