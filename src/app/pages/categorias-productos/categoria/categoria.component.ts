import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoriaProducto } from 'src/app/models/categoria-producto.model';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria: CategoriaProducto = new CategoriaProducto();
  _id = this.activatedRoute.snapshot.paramMap.get('_id') as string;

  constructor(
    private catServ: CategoriasService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.catServ.getCategoriaById(this._id).subscribe(
      (resp: any) => {
      this.categoria = resp;
    })
  }

  guardar( form: NgForm ): void {
    if ( form.invalid ) {
      console.log('Formulario no válido');
      return;
    }

    // let peticion: Observable<any>;

    // if ( this.categoria._id )
    // {
    //   peticion = this.catServ.actualizarCategoria( this.categoria );

    // } else {

    //   peticion = this.catServ.createCategoria();
    // }

    // peticion.subscribe((resp: any) => {
    //   console.log(resp);
    //   // this.router.navigateByUrl('/categorias-productos');
    // })
    // peticion.subscribe( resp => {
    //   Swal.fire({
    //     title: this.heroe.nombre,
    //     text: 'Se actualizó correctamente',
    //     type: 'success'
    //   });

    // });
  }
}
