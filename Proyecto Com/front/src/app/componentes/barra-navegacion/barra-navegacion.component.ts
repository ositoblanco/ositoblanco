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
  ngOnInit() {
    if(localStorage.length != 0){
      this.storage = true;
    }
  }

  salir(){
    this.router.navigate([`inicio`]);
    localStorage.removeItem("id_Usuario");
  }

}
