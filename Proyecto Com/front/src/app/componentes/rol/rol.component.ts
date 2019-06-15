import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../controladores/usuario.service';
import { NgForm, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/modelos/usuario';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent implements OnInit {

  constructor( private usuarioService: UsuarioService, ) { }

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.usuarioService.getUsuarios()
      .subscribe(res => {
        this.usuarioService.usuarios = res as Usuario[];
        if (Object.keys(res).length > 0) {
          console.log("Usuarios obtenidos correctamente");
        } else {
          alert("Ocurrió un error!");
        }
      });
  }

  cambiarRol(id_Usuario:number, id_Rol:number){
    if(id_Rol == 1){
      this.usuarioService.updateRolUsuario(2, id_Usuario)
      .subscribe(res => {
        console.log("Rol actualizado correctamente");
        this.obtenerUsuarios();
      });
    }else if(id_Rol == 2){
      this.usuarioService.updateRolUsuario(1, id_Usuario)
      .subscribe(res => {
        console.log("Rol actualizado correctamente");
        this.obtenerUsuarios();
      });
    }
  }

}
