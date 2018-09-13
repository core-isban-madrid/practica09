import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { CrearFacturaComponent } from './facturas/crear-factura/crear-factura.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearClienteComponent,
    CrearFacturaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
