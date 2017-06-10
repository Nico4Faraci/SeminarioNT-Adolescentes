import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JugadoresComponent } from './jugadores/jugadores.component'
import { EquiposComponent } from './equipos/equipos.component'
import { ArbitrosComponent } from './arbitros/arbitros.component'
import { IndividualComponent } from './individual/individual.component'
import { PadreComponent } from './padre-hijo/padre.component'
import { HijoComponent } from './padre-hijo/hijo.component'

//import { ListaJugadoresComponent } from './jugadores/lista-jugadores/lista-jugadores.component';
//import { ListaEquiposComponent } from './equipos/lista-equipos/lista-equipos.component';

export const routes: Routes = [

    { path: 'jugadores', component: JugadoresComponent },
    { path: 'equipos', component: EquiposComponent },
    { path: 'arbitros', component: ArbitrosComponent },
    { path: 'individual', component: IndividualComponent },
    { path: 'padre', component: PadreComponent },
    { path: 'hijo', component: HijoComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
