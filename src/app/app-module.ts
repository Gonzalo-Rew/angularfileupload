import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FileUpliadComponent } from './components/file-upliad-component/file-upliad-component';
import { FilesService } from './services/files.service';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [App, FileUpliadComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), FilesService],
  bootstrap: [App],
})
export class AppModule {}
