import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioAuthModel } from '../../../models/usuarios/usuarioAuth.model';
import { AuthService } from '../../../services/usuarios/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  usuario = new UsuarioAuthModel();
  recordarme = false;

  constructor(
    private authServ: AuthService,
    private router: Router,
          ) { }

  ngOnInit() {

  }

  login( form: NgForm ) {


    if ( form.invalid ) { return; }


    this.authServ.login( this.usuario )
        .subscribe( resp => {
          this.router.navigateByUrl('/home');

        }, (err) => {
          console.log(err.error.errors[0].msg)
          alert(err.error.errors[0].msg)
        });
  }

}
