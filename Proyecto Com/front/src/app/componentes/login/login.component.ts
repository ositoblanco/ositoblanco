import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../controladores/usuario.service';
import { AsignacionService } from '../../controladores/asignacion.service';
import { Usuario } from 'src/app/modelos/usuario';
import { Asignacion } from 'src/app/modelos/asignacion';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private asignacionService: AsignacionService, private router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm){
      this.usuarioService.loginUsuario(form.value)
        .subscribe(res => {
          this.usuarioService.usuario = res as Usuario;
          if(Object.keys(res).length > 0){
            this.getAsignacionesUsuario(""+this.usuarioService.usuario[0].id_Usuario);
          }else{
            alert("Usuario o Contraseña incorrecta!");
          }
        });
  }

  getAsignacionesUsuario(id_Usuario: string) {
    this.asignacionService.getAsignacionesUsuario(id_Usuario)
      .subscribe(res => {
        this.asignacionService.asignaciones = res as Asignacion[];
        var hash = btoa(this.usuarioService.usuario[0].id_Usuario);
        localStorage.setItem("id_Usuario", this.usuarioService.usuario[0].id_Usuario);
        if (Object.keys(res).length > 0) {
          this.router.navigate([`dashboard/${hash}`]);
        } else {
          this.router.navigate([`principal-estudiante/${hash}`]);
        }
      });
  }

}
