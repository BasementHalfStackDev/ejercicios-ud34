import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjerciciosUd34ComponentComponent } from './ejercicios-ud34-component/ejercicios-ud34-component.component';

@NgModule({
  declarations: [
    AppComponent,
    EjerciciosUd34ComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
