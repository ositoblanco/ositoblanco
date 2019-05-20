import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AsignacionService } from './controladores/asignacion.service';
import { UsuarioService } from './controladores/usuario.service';
import { Asignacion } from 'src/app/modelos/asignacion';

@Injectable({
  providedIn: 'root'
})
export class NoLoginGuard implements CanActivate {

  constructor(private router: Router, private asignacionService: AsignacionService, private usuarioService: UsuarioService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (localStorage.getItem("id_Usuario") === null) {
      return true;
    } else {
      var user = localStorage.getItem("id_Usuario");
      this.asignacionService.getAsignacionesUsuario(user)
        .subscribe(res => {
          this.asignacionService.asignaciones = res as Asignacion[];
          if (Object.keys(res).length > 0) {
            this.router.navigate([`dashboard/${btoa(user)}`]);
          } else {
            this.router.navigate([`principal-estudiante/${btoa(user)}`]);
          }
          return false;
        });
    }
  }

}
