import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FileUpliadComponent } from './components/file-upliad-component/file-upliad-component';
import { FilesService } from './services/files.service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { MenuComponent } from './components/menu-component/menu-component';
import { FormsModule } from '@angular/forms';
import { InformesPdfComponent } from './components/informes-pdf-component/informes-pdf-component';
import { authTokenInterceptor } from './interceptors/auth-token-interceptor';
import { provideToastService } from 'ngx-yet-another-toast-library';
import { ErrorComponent } from './components/error-component/error-component';
import { EquipoComponent } from './components/equipo-component/equipo-component';
import { EquiposService } from './services/equipos.service';
import { LoginComponent } from './components/login-component/login-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { EmpleadosService } from './services/empleados.service';
import { AuthService } from './services/auth.service';
import { errorInterceptor } from './interceptors/error-interceptor';

@NgModule({
  declarations: [
    App,
    FileUpliadComponent,
    MenuComponent,
    InformesPdfComponent,
    ErrorComponent,
    EquipoComponent,
    LoginComponent,
    SubordinadosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([authTokenInterceptor, errorInterceptor])),
    provideToastService(),
    FilesService,
    EquiposService,
    EmpleadosService,
    AuthService,
  ],
  bootstrap: [App],
})
export class AppModule {}
