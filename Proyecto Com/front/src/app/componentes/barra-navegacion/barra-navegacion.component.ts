import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  constructor(private router: Router) { }
  storage = false;
  tipo_usuario = "";
  ngOnInit() {
    if(localStorage.length != 0){
      this.storage = true;
      this.tipo_usuario = localStorage.getItem("tipo_Usuario");
    }
  }

  salir(){
    this.router.navigate([`inicio`]);
    localStorage.removeItem("id_Usuario");
    localStorage.removeItem("tipo_Usuario");
  }

}
