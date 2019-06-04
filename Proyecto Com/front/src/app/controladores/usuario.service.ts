import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  usuarios: Usuario[];

  readonly URL_API = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {
    this.usuario = new Usuario();
   }

   postUsuario(usuario: Usuario){
    return this.http.post(this.URL_API, usuario);
   }

   loginUsuario(usuario: Usuario){
    return this.http.get(this.URL_API+`/login/${usuario.Usuario_Usuario}/${usuario.Clave_Usuario}`);
   }

   getUsuarios(){
     return this.http.get(this.URL_API);
   }

   getUsuarioRegistro(usuario: Usuario){
    return this.http.get(this.URL_API+`/registro/${usuario.Usuario_Usuario}/${usuario.Correo_Usuario}/${usuario.Cedula_Usuario}`);
   }
}
