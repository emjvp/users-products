import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  usuario = new UsuarioModel();
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
          console.log(err.error.msg);
          alert(err.error.msg)
        });
  }

}
