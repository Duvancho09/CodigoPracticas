import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TablaUsuarioComponent } from './tabla-usuario/tabla-usuario.component';
import { VentajasComponent } from './ventajas/ventajas.component';
import { ProgramacionAnimadaComponent } from './programacion-animada/programacion-animada.component';
import { FrameworksComponent } from './frameworks/frameworks.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "tablas", component: TablaUsuarioComponent},
    { path: "ventajas", component: VentajasComponent},
    { path: "programacionAnimada", component: ProgramacionAnimadaComponent},
    { path: "frameworks", component: FrameworksComponent}
];
