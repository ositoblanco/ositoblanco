import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../controladores/usuario.service';
import { Usuario } from 'src/app/modelos/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm){
      this.usuarioService.loginUsuario(form.value)
        .subscribe(res => {
          this.usuarioService.usuario = res as Usuario;
          if(Object.keys(res).length > 0){
            var hash = btoa(this.usuarioService.usuario[0].id_Usuario);
            this.router.navigate([`principal-estudiante/${hash}`]);
          }else{
            alert("Usuario o Contraseña incorrecta!");
          }
        });
  }

}
