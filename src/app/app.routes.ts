import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TablaUsuarioComponent } from './tabla-usuario/tabla-usuario.component';
import { VentajasComponent } from './ventajas/ventajas.component';
import { ProgramacionAnimadaComponent } from './programacion-animada/programacion-animada.component';
import { FrameworksComponent } from './frameworks/frameworks.component';
import { FormularioComponent } from './formulario/formulario.component';
import { VentajasUsuarioComponent } from './ventajas-usuario/ventajas-usuario.component';
import { RespuestasComponent } from './respuestas/respuestas.component';
import { RespuestaUsuarioComponent } from './respuesta-usuario/respuesta-usuario.component';
import { RespuestasVistaComponent } from './respuestas-vista/respuestas-vista.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "tablas", component: TablaUsuarioComponent},
    { path: "ventajas", component: VentajasComponent},
    { path: "programacionAnimada", component: ProgramacionAnimadaComponent},
    { path: "frameworks", component: FrameworksComponent},
    { path: "formulario", component: FormularioComponent},
    { path: "ventajasUsuario", component: VentajasUsuarioComponent},
    { path: "respuestas/:id", component: RespuestasComponent},
    { path: "respuestaUsuario", component: RespuestaUsuarioComponent},
    { path: "respuestasVista/:id", component: RespuestasVistaComponent}
];
