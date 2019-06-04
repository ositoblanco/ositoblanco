import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asignacion, AsignacionFull } from '../modelos/asignacion';

@Injectable({
  providedIn: 'root'
})
export class AsignacionService {

  asignacion: Asignacion;
  asignaciones: Asignacion[];
  asignacionesFull: AsignacionFull[];
  asignacionFull: AsignacionFull;

  readonly URL_API = 'http://localhost:3000/asignaciones';

  constructor(private http: HttpClient) {
    this.asignacion = new Asignacion();
  }

  getAsignacionesUsuario(id_Usuario: string){
    return this.http.get(this.URL_API+`/${id_Usuario}`);
  }

  getAsignacionesUsuarioFull(id_Usuario: string){
    return this.http.get(this.URL_API+`/full/${id_Usuario}`);
  }

  getTodasAsignacionesUsuariosFull(){
    return this.http.get(this.URL_API+`/full/all/all`);
  }

  postAsignacionUsuario(asignacion: Asignacion){
    return this.http.post(this.URL_API, asignacion);
  }

  putAsignacionUsuario(asignacion: Asignacion){
    return this.http.put(this.URL_API+'/update', asignacion);
  }
}
