import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { PrincipalEstudianteComponent } from './componentes/principal-estudiante/principal-estudiante.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'principal-estudiante/:id_usuario', component: PrincipalEstudianteComponent},
  { path: 'dashboard/:id_usuario', component: DashboardComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
