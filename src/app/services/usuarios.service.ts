import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UsuarioRequested } from '../models/usuario-requested.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url = 'https://prueba-tecnica-idecide.azurewebsites.net/api';


  constructor( private http: HttpClient ) {
    // const test = this.listarUsuarios();
    // console.log(test)
  }

  listarUsuarios(){
    return this.http.get(`${ this.url }/usuarios`).pipe(
      map( (resp: any) => {
        return resp['usuarios'];
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
