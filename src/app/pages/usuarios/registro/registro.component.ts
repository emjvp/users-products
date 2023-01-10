import { Component } from '@angular/core';
import { UsuarioModel } from '../../../models/usuarios/usuario.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuariosService } from '../../../services/usuarios/usuarios.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  usuario: UsuarioModel = new UsuarioModel();
  recordarme = false;
  constructor( private usuarioServ: UsuariosService, private router: Router ) { }

  ngOnInit() {
  }

  onSubmit( form: NgForm ) {

    if (form.invalid) { return; }

    this.usuarioServ.nuevoUsuario( this.usuario )
        .subscribe( (resp: any)=> {


          this.router.navigateByUrl('/home');

        },(err: any) => {
          console.log(err.error.errors[0].msg);
          alert(err.error.errors[0].msg)
        });
  }

}
