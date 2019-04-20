import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../controladores/usuario.service';
import { Usuario } from 'src/app/modelos/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  registro(form: NgForm) {
    if (form.value.ConfirmaClave_Usuario == form.value.Clave_Usuario) {
      form.value.id_Rol = 1;
      this.usuarioService.postUsuario(form.value)
        .subscribe(res => {
          console.log("Form -> ", form.value);
          console.log("Usuario registrado con exito");
          this.resetForm(form);
        });
    }else{
      alert("Las contraseña debe coincidir!");
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.usuarioService.usuario = new Usuario();
    }
  }
}
