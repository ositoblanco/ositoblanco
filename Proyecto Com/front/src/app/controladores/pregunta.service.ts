import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pregunta } from '../modelos/pregunta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  pregunta: Pregunta;
  preguntas: Pregunta[];

  readonly URL_API = 'http://localhost:3000/preguntas/';

  constructor(private http: HttpClient) { 
    this.pregunta = new Pregunta();
  }

  getPreguntas(){
    return this.http.get(this.URL_API);
  }
}
