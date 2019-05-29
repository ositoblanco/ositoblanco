import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../controladores/usuario.service';
import { Usuario } from 'src/app/modelos/usuario';
import { AsignacionService } from '../../controladores/asignacion.service';
import { AsignacionFull } from 'src/app/modelos/asignacion';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css']
})
export class PanelAdminComponent implements OnInit {

  constructor(private asignacionService: AsignacionService, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.obtenerUsuarios();
    this.obtenerTodasAsignaciones();
  }

  obtenerUsuarios() {
    this.usuarioService.getUsuarios()
      .subscribe(res => {
        this.usuarioService.usuarios = res as Usuario[];
        console.log("Usuarios obtenidos correctamente");
      });
  }

  obtenerAsignacionesXUsuario(id_Usuario: number):Array<any>{
    if(typeof this.asignacionService.asignacionesFull != 'undefined'){
      var aux = this.asignacionService.asignacionesFull.filter(asignacion=>asignacion.id_Usuario==id_Usuario);
      return aux;
    }

  }

  obtenerTodasAsignaciones() {
    this.asignacionService.getTodasAsignacionesUsuariosFull()
      .subscribe(res => {
        this.asignacionService.asignacionesFull = res as AsignacionFull[];
        if (Object.keys(res).length > 0) {
          console.log("Asignaciones obtenidas correctamente");
          console.log("Asignaciones", this.asignacionService.asignacionesFull);
        } else {
          console.log("Ocurrió un error, usuario sin asignaciones");
        }
      });
  }

}
