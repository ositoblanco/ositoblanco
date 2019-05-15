import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { PrincipalEstudianteComponent } from './componentes/principal-estudiante/principal-estudiante.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { LoginGuard } from './login.guard';
import { NoLoginGuard } from './no-login.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [NoLoginGuard]},
  { path: 'registro', component: RegistroComponent, canActivate: [NoLoginGuard]},
  { path: 'inicio', component: InicioComponent, canActivate: [NoLoginGuard]},
  { path: 'principal-estudiante/:id_usuario', component: PrincipalEstudianteComponent, canActivate: [LoginGuard]},
  { path: 'dashboard/:id_usuario', component: DashboardComponent, canActivate: [LoginGuard]},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
