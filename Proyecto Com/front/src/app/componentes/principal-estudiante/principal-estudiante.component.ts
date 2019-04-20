import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../controladores/usuario.service';
import { AsignacionService } from '../../controladores/asignacion.service';
import { Usuario } from 'src/app/modelos/usuario';
import { Asignacion } from 'src/app/modelos/asignacion';

@Component({
  selector: 'app-principal-estudiante',
  templateUrl: './principal-estudiante.component.html',
  styleUrls: ['./principal-estudiante.component.css']
})
export class PrincipalEstudianteComponent implements OnInit {

  ruta: string[];
  encriptada: string[];
  id_usuario: string;

  constructor(private usuarioService: UsuarioService, private asignacionService: AsignacionService, private router: Router) {
    this.ruta = this.router.url.split('/');
    this.id_usuario = this.ruta[2];
  }

  ngOnInit() {
    this.encriptada = this.id_usuario.split('%');
    console.log("id ", atob(this.encriptada[0]));
    this.getAsignacionesUsuario(atob(this.encriptada[0]));
  }

  getAsignacionesUsuario(id_Usuario: string){
    this.asignacionService.getAsignacionesUsuario(id_Usuario)
      .subscribe(res => {
        this.asignacionService.asignaciones = res as Asignacion[];
        if(Object.keys(res).length > 0){
          alert("El usuario ya hizo el examen");
        }else{
          alert("El usuario no ha hecho el examen!");
        }
      });
}

}
