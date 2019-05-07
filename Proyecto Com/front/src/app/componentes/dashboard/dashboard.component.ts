import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../controladores/usuario.service';
import { AsignacionService } from '../../controladores/asignacion.service';
import { Asignacion, AsignacionFull } from 'src/app/modelos/asignacion';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  ruta: string[];
  encriptada: string[];
  id_usuario: string;
  id: number;

  constructor(private usuarioService: UsuarioService, private asignacionService: AsignacionService, private router: Router) {
    this.ruta = this.router.url.split('/');
    this.id_usuario = this.ruta[2];
  }

  ngOnInit() {
    this.encriptada = this.id_usuario.split('%');
    this.id = parseInt(atob(this.encriptada[0]));
    this.obtenerAsignaciones(""+this.id);
    console.log("id ", this.id);
  }

  obtenerAsignaciones(id_Usuario: string) {
    this.asignacionService.getAsignacionesUsuarioFull(id_Usuario)
      .subscribe(res => {
        this.asignacionService.asignacionesFull = res as AsignacionFull[];
        if (Object.keys(res).length > 0) {
          console.log("Asignaciones obtenidas correctamente");
          console.log("Asignaciones", this.asignacionService.asignacionesFull);
        } else {
          alert("Ocurrió un error, usuario sin asignaciones");
        }
      });
  }

}
