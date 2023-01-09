import { Component } from '@angular/core';
import { UsuarioModel } from '../../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  usuario: UsuarioModel = new UsuarioModel();
  recordarme = false;
  constructor( private authServ: AuthService, private router: Router ) { }

  ngOnInit() {
  }

  onSubmit( form: NgForm ) {

    if (form.invalid) { return; }

    this.authServ.nuevoUsuario( this.usuario )
        .subscribe( resp => {


          console.log(resp);

          this.router.navigateByUrl('/home');

        },
        (err) => {
          console.log(err.error.errors[0].msg);
          alert(err.error.errors[0].msg)
        });
  }

}
