import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CategoriaProducto } from 'src/app/models/categoria-producto.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(
    private http: HttpClient,
    private categoriaProducto: CategoriaProducto
  ) { }

  private url = 'https://prueba-tecnica-idecide.azurewebsites.net/api';

  createCategoria(){
    return this.http.put(`${ this.url }/categorias`, this.categoriaProducto).pipe(
      map( (resp: any) => {
        return resp;
     })
    );
  }

  getCategoriaById(id: string){
    return this.http.get(`${ this.url }/categorias/${id}`).pipe(
      map( (resp: any) => {
        return resp;
     })
    );
  }

  getCategorias(){
    return this.http.get(`${ this.url }/categorias`).pipe(
      map( (resp: any) => {
        return resp['categorias'];
     })
    );
  }

  actualizarCategoria(categoriaProducto: CategoriaProducto){
    return this.http.put(`${ this.url }/categorias/${categoriaProducto._id}`, categoriaProducto).pipe(
      map( (resp: any) => {
        return resp;
     }));
  }

  deleteCategoria(id: string){
    return this.http.delete(`${ this.url }/categorias/${id}`).pipe(
      map( (resp: any) => {
        return resp;
     }));
  }
}
