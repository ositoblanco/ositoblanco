import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../controladores/usuario.service';
import { AsignacionService } from '../../controladores/asignacion.service';
import { PreguntaService } from '../../controladores/pregunta.service';
import { Asignacion, AsignacionFull } from 'src/app/modelos/asignacion';
import { Pregunta } from 'src/app/modelos/pregunta';
import { NgForm, FormGroup } from '@angular/forms';

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

  constructor(private usuarioService: UsuarioService, private asignacionService: AsignacionService, private preguntaService: PreguntaService,
    private router: Router) {
    this.ruta = this.router.url.split('/');
    this.id_usuario = this.ruta[2];
  }

  ngOnInit() {
    this.asignacionService.asignacionFull = new AsignacionFull;
    this.encriptada = this.id_usuario.split('%');
    this.id = parseInt(atob(this.encriptada[0]));
    this.obtenerAsignaciones("" + this.id);
    this.obtenerPreguntas();
    console.log("id ", this.id);
  }

  obtenerPreguntas() {
    this.preguntaService.getPreguntas()
      .subscribe(res => {
        this.preguntaService.preguntas = res as Pregunta[];
        if (Object.keys(res).length > 0) {
          console.log("Preguntas obtenidas correctamente");
          console.log("Preguntas", this.preguntaService.preguntas);
        } else {
          alert("Ocurrió un error, unidad sin preguntas");
        }
      });
  }

  obtenerPreguntasXUnidad(id_Unidad: number): Array<any> {
    if (typeof this.preguntaService.preguntas != 'undefined') {
      var aux = this.preguntaService.preguntas.filter(pregunta => pregunta.id_Unidad == id_Unidad);
      return aux;
    }
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

  userSeleccionado(asignacion: AsignacionFull) {
    this.asignacionService.asignacionFull = new AsignacionFull;
    this.asignacionService.asignacionFull = asignacion;
    console.log("Si ejecuta la funcion", asignacion.id_Unidad + " " + asignacion.id_Usuario);
  }

  actualizarPuntajeAsignacion(asignacion: Asignacion){
    this.asignacionService.putAsignacionUsuario(asignacion)
      .subscribe(res => {
        console.log("Puntaje registrado exitosamente");
        this.obtenerAsignaciones(asignacion.id_Usuario+"");
      });
  }

  calificarTest(id_Unidad: number) {
    var elementos = document.forms["formExamen"].elements;
    var totalPreguntas = this.obtenerPreguntasXUnidad(this.asignacionService.asignacionFull.id_Unidad).length;

    var checks = 0;
    for (let i = 0; i < elementos.length; i++) {
      if (elementos[i].checked) {
        checks += 1;
      }
    }

    if (checks == totalPreguntas) {
      let j = 1;
      for (let pregunta of this.obtenerPreguntasXUnidad(this.asignacionService.asignacionFull.id_Unidad)) {

        for (let i = 0; i < elementos.length; i++) {
          if (elementos[i].checked) {
            if (elementos[i].id == "pre"+j+"opc"+pregunta.Respuesta_Pregunta) {
              this.preguntas_correctas += 1;
            }
          }
        }
        j++;
      }

      this.asignacionService.asignacion = new Asignacion();
      this.asignacionService.asignacion.id_Unidad = this.asignacionService.asignacionFull.id_Unidad;
      this.asignacionService.asignacion.id_Usuario = parseInt(localStorage.getItem("id_Usuario"));
      this.asignacionService.asignacion.Porcentaje_Avance = (this.preguntas_correctas*100)/totalPreguntas;

      this.actualizarPuntajeAsignacion(this.asignacionService.asignacion);
      console.log("Nuevas ", this.asignacionService.asignacionesFull);
      this.resetForm(document.forms["formExamen"]);
      this.preguntas_correctas = 0;

    } else {
      alert("Por favor conteste todas las preguntas!")
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
  }

}
