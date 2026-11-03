import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUpliadComponent } from './components/file-upliad-component/file-upliad-component';
import { InformesPdfComponent } from './components/informes-pdf-component/informes-pdf-component';
import { ErrorComponent } from './components/error-component/error-component';
import { EquipoComponent } from './components/equipo-component/equipo-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { LoginComponent } from './components/login-component/login-component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: FileUpliadComponent, canActivate: [authGuard] },
  { path: 'subir-archivo', component: FileUpliadComponent, canActivate: [authGuard] },
  { path: 'informes-pdf', component: InformesPdfComponent, canActivate: [authGuard] },
  { path: 'error', component: ErrorComponent },
  { path: 'equipo', component: EquipoComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'subordinados', component: SubordinadosComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
