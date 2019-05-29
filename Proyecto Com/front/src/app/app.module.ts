import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { RolComponent } from './componentes/rol/rol.component';
import { UnidadComponent } from './componentes/unidad/unidad.component';
import { AsignacionComponent } from './componentes/asignacion/asignacion.component';
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { BarraNavegacionComponent } from './componentes/barra-navegacion/barra-navegacion.component';
import { PrincipalEstudianteComponent } from './componentes/principal-estudiante/principal-estudiante.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { LoginGuard } from './login.guard';
import { NoLoginGuard } from './no-login.guard';
import { PanelAdminComponent } from './componentes/panel-admin/panel-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    RolComponent,
    UnidadComponent,
    AsignacionComponent,
    LoginComponent,
    InicioComponent,
    RegistroComponent,
    BarraNavegacionComponent,
    PrincipalEstudianteComponent,
    DashboardComponent,
    PanelAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginGuard, NoLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
