import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { UsuarioRequested } from 'src/app/models/usuarios/usuario-requested.model';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent  {
  constructor( private usuariosSer: UsuariosService ) { }

  usuariosReq : UsuarioRequested[] = [];
  ngOnInit(): void {

    this.usuariosSer.listarUsuarios()
        .subscribe( (resp: any) => {
          this.usuariosReq = resp;
        }, (err) => {
          console.log(err.error.errors[0].msg);
          alert(err.error.errors[0].msg)
        });


  }

  eliminarUsuario(uid: string){
    this.usuariosSer.eliminarUsuario(uid).subscribe((resp: any)=> {
      console.log(resp)
    })
  }
}
