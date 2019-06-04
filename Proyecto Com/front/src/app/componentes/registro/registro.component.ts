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
      form.value.id_Rol = 2;
      this.usuarioService.postUsuario(form.value)
        .subscribe(res => {
          alert("Usuario registrado exitosamente!");
          this.router.navigate([`login`]);
          this.resetForm(form);
        });
    }else{
      alert("Las contraseña debe coincidir!");
    }
  }

  verificarUsuario(form: NgForm){
    this.usuarioService.getUsuarioRegistro(form.value)
      .subscribe(res => {
        this.usuarioService.usuario = res as Usuario;
        if(Object.keys(res).length > 0){
          alert("Este usuario ya se encuentra registrado!");
        }else{
          this.registro(form);
        }
      });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.usuarioService.usuario = new Usuario();
    }
  }
}
