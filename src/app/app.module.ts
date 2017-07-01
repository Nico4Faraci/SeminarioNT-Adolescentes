import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize' ;


import { AppComponent } from './app.component';
import {JugadoresComponent } from './jugadores/jugadores.component';
import {EquiposComponent } from './equipos/equipos.component';

import { routing} from './app-routing';
import { ArbitrosComponent } from './arbitros/arbitros.component';
import { IndividualComponent } from './individual/individual.component';
import { PadreComponent } from './padre-hijo/padre.component';
import { HijoComponent } from './padre-hijo/hijo.component';
import { GrupalComponent } from './grupal/grupal.component';

@NgModule({
  declarations: [
    AppComponent,
    JugadoresComponent,
    EquiposComponent,
    ArbitrosComponent,
    IndividualComponent,
    PadreComponent,
    HijoComponent,
    GrupalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterializeModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
