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
  id: number;
  preguntas_correctas: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  constructor(private usuarioService: UsuarioService, private asignacionService: AsignacionService, private router: Router) {
    this.ruta = this.router.url.split('/');
    this.id_usuario = this.ruta[2];
  }

  ngOnInit() {
    this.encriptada = this.id_usuario.split('%');
    this.id = parseInt(atob(this.encriptada[0]));
    console.log("id ", atob(this.encriptada[0]));
  }

  calificar() {
    var elementos = document.forms["formExamen"].elements;

    var checks = 0;
    for (let i = 0; i < elementos.length; i++) {
      if (elementos[i].checked) {
        checks += 1;
      }
    }

    if (checks == 30) {
      for (let i = 0; i < elementos.length; i++) {
        if (elementos[i].checked) {
          if (elementos[i].id == "pre1opc3") {
            this.preguntas_correctas[0] += 1;
          } else if (elementos[i].id == "pre2opc3") {
            this.preguntas_correctas[0] += 1;
          } else if (elementos[i].id == "pre3opc2") {
            this.preguntas_correctas[0] += 1;
          } else if (elementos[i].id == "pre4opc3") {
            this.preguntas_correctas[1] += 1;
          } else if (elementos[i].id == "pre5opc1") {
            this.preguntas_correctas[1] += 1;
          } else if (elementos[i].id == "pre6opc2") {
            this.preguntas_correctas[1] += 1;
          } else if (elementos[i].id == "pre7opc3") {
            this.preguntas_correctas[2] += 1;
          } else if (elementos[i].id == "pre8opc1") {
            this.preguntas_correctas[2] += 1;
          } else if (elementos[i].id == "pre9opc2") {
            this.preguntas_correctas[2] += 1;
          } else if (elementos[i].id == "pre10opc1") {
            this.preguntas_correctas[3] += 1;
          } else if (elementos[i].id == "pre11opc2") {
            this.preguntas_correctas[3] += 1;
          } else if (elementos[i].id == "pre12opc3") {
            this.preguntas_correctas[3] += 1;
          } else if (elementos[i].id == "pre13opc2") {
            this.preguntas_correctas[4] += 1;
          } else if (elementos[i].id == "pre14opc1") {
            this.preguntas_correctas[4] += 1;
          } else if (elementos[i].id == "pre15opc3") {
            this.preguntas_correctas[4] += 1;
          } else if (elementos[i].id == "pre16opc1") {
            this.preguntas_correctas[5] += 1;
          } else if (elementos[i].id == "pre17opc3") {
            this.preguntas_correctas[5] += 1;
          } else if (elementos[i].id == "pre18opc3") {
            this.preguntas_correctas[5] += 1;
          } else if (elementos[i].id == "pre19opc2") {
            this.preguntas_correctas[6] += 1;
          } else if (elementos[i].id == "pre20opc1") {
            this.preguntas_correctas[7] += 1;
          } else if (elementos[i].id == "pre21opc2") {
            this.preguntas_correctas[7] += 1;
          } else if (elementos[i].id == "pre22opc1") {
            this.preguntas_correctas[7] += 1;
          } else if (elementos[i].id == "pre23opc2") {
            this.preguntas_correctas[8] += 1;
          } else if (elementos[i].id == "pre24opc1") {
            this.preguntas_correctas[8] += 1;
          } else if (elementos[i].id == "pre25opc1") {
            this.preguntas_correctas[8] += 1;
          } else if (elementos[i].id == "pre26opc3") {
            this.preguntas_correctas[8] += 1;
          } else if (elementos[i].id == "pre27opc2") {
            this.preguntas_correctas[9] += 1;
          } else if (elementos[i].id == "pre28opc2") {
            this.preguntas_correctas[9] += 1;
          } else if (elementos[i].id == "pre29opc2") {
            this.preguntas_correctas[9] += 1;
          } else if (elementos[i].id == "pre30opc3") {
            this.preguntas_correctas[9] += 1;
          }
        }
      }

      var contParaAsignaciones = 0;
      for (let i = 0; i < this.preguntas_correctas.length; i++) {
        if (this.preguntas_correctas[i] < 2) {
          contParaAsignaciones += 1;
        }
      }
      
      var auxContAsignaciones = 0;
      for (let index = 0; index < this.preguntas_correctas.length; index++) {
        if (this.preguntas_correctas[index] < 2) {
          this.asignacionService.asignacion = new Asignacion();
          this.asignacionService.asignacion.Porcentaje_Avance = 0;
          this.asignacionService.asignacion.id_Unidad = index + 1;
          this.asignacionService.asignacion.id_Usuario = this.id;
          this.asignacionService.postAsignacionUsuario(this.asignacionService.asignacion)
            .subscribe(res => {
              auxContAsignaciones += 1;
              if (Object.keys(res).length > 0) {
                alert("Ocurrió un error al realizar las asignaciones");
              } else {
                console.log("Asignación realizada de forma correcta");
              }

              if(contParaAsignaciones == auxContAsignaciones){
                this.getAsignacionesUsuario(""+this.id);
              }
            });
        }
      }
    } else {
      alert("Por favor conteste todas las preguntas!")
    }
  }

  getAsignacionesUsuario(id_Usuario: string) {
    this.asignacionService.getAsignacionesUsuario(id_Usuario)
      .subscribe(res => {
        this.asignacionService.asignaciones = res as Asignacion[];
        if (Object.keys(res).length > 0) {
          this.router.navigate([`dashboard/${id_Usuario}`]);
        } else {
          alert("Ocurrió un error, usuario sin asignaciones");
        }
      });
  }
}
