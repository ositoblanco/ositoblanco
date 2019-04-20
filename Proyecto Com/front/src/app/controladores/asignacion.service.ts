import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asignacion } from '../modelos/asignacion';

@Injectable({
  providedIn: 'root'
})
export class AsignacionService {

  asignacion: Asignacion;
  asignaciones: Asignacion[];

  readonly URL_API = 'http://localhost:3000/asignaciones';

  constructor(private http: HttpClient) {
    this.asignacion = new Asignacion();
  }

  getAsignacionesUsuario(id_Usuario: string){
    return this.http.get(this.URL_API+`/${id_Usuario}`);
  }
}
