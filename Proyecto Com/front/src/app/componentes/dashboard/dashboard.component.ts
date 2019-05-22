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
  preguntas_correctas: number = 0;

  constructor(private usuarioService: UsuarioService, private asignacionService: AsignacionService, private router: Router) {
    this.ruta = this.router.url.split('/');
    this.id_usuario = this.ruta[2];
  }

  ngOnInit() {
    this.asignacionService.asignacionFull = new AsignacionFull;
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

  userSeleccionado(asignacion: AsignacionFull){
    this.asignacionService.asignacionFull = new AsignacionFull;
    this.asignacionService.asignacionFull = asignacion;
    console.log("Si ejecuta la funcion", asignacion.id_Unidad+" "+ asignacion.id_Usuario);
  }

  calificarTest(){
    var elementos = document.forms["formExamen"].elements;

    var checks = 0;
    for (let i = 0; i < elementos.length; i++) {
      if (elementos[i].checked) {
        checks += 1;
      }
    }

    if (checks == 4) {
      for (let i = 0; i < elementos.length; i++) {
        if (elementos[i].checked) {
          if (elementos[i].id == "pre1opc3") {
            this.preguntas_correctas += 1;
          } else if (elementos[i].id == "pre2opc3") {
            this.preguntas_correctas += 1;
          } else if (elementos[i].id == "pre3opc2") {
            this.preguntas_correctas += 1;
          } else if (elementos[i].id == "pre4opc3") {
            this.preguntas_correctas += 1;
          }
        }
      }
      alert("Preguntas correctas: "+this.preguntas_correctas);
      this.preguntas_correctas = 0;

    } else {
      alert("Por favor conteste todas las preguntas!")
    }
  }

}
