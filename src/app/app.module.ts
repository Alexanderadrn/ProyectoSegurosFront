import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonasComponent } from './components/personas/personas.component';
import { SetPersonasComponent } from './components/set-personas/set-personas.component';
import { SegurosComponent } from './components/seguros/seguros.component';
import { SetSegurosComponent } from './components/set-seguros/set-seguros.component';
import { SetPolizasComponent } from './components/set-polizas/set-polizas.component';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule}from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmacionComponent } from './components/confirmacion/confirmacion.component';
import { PolizasComponent } from './components/polizas/polizas.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    SetPersonasComponent,
    SegurosComponent,
    SetSegurosComponent,
    SetPolizasComponent,
    MenuComponent,
    ConfirmacionComponent,
    PolizasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
