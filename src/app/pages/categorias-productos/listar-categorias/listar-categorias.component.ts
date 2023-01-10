import { Component, OnInit } from '@angular/core';
import { CategoriaProducto } from 'src/app/models/categoria-producto.model';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';

@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.css']
})
export class ListarCategoriasComponent implements OnInit {

  categorias: CategoriaProducto[] = [];
  constructor(private CatServ: CategoriasService){}

  ngOnInit(): void {
    // this.CatServ.getCategorias().subscribe((resp: any) =>{
    //   this.categorias = resp;
    // }, (err)=>console.log(err));
  }



}
