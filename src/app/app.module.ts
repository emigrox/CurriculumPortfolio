import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticuloComponent,
    PresentacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
