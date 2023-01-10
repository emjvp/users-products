import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UsuarioRequested } from 'src/app/models/usuarios/usuario-requested.model';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario = new UsuarioRequested();
  uid = this.activatedRoute.snapshot.paramMap.get('uid');

  constructor(private userSrv: UsuariosService, private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit() {

  }

  actualizarUsuario( form: NgForm ): void
  {
    if ( form.invalid ) {
      console.log('Formulario no válido');
      return;
    }

    // delete usuarioTemp.uid;
    this.userSrv.actualizarUsuario(this.uid, this.usuario).subscribe(resp =>
      {
        this.usuario = resp
        this.router.navigateByUrl('/usuarios');
    },(err) => {
      console.log(err.error.errors[0].msg);
      alert(err.error.errors[0].msg)
    });

  }


}
