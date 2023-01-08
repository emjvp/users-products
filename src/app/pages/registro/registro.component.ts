import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  recordarme = false;
  constructor( private authServ: AuthService, private router: Router ) { }

  ngOnInit() {
    // this.usuario = new UsuarioModel();
  }

  onSubmit( form: NgForm ) {

    if (form.invalid) { return; }

    this.authServ.nuevoUsuario( this.usuario )
        .subscribe( resp => {

          if ( this.recordarme ) {
            localStorage.setItem('email', this.usuario.email);
          }
          console.log(resp);

          this.router.navigateByUrl('/home');

        },
        (err) => {
          console.log(err.error.error.message);
        });
  }

}
