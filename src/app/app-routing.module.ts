import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './components/personas/personas.component';
import { SetPersonasComponent } from './components/set-personas/set-personas.component';
import { SegurosComponent } from './components/seguros/seguros.component';
import { SetSegurosComponent } from './components/set-seguros/set-seguros.component';
import { PolizasComponent } from './components/polizas/polizas.component';
import { SetPolizasComponent } from './components/set-polizas/set-polizas.component';

const routes: Routes = [
  {path: "Personas", component:PersonasComponent},
  {path:"SetPersonas", component:SetPersonasComponent},
  {path:"Seguros", component:SegurosComponent},
  {path:"SetSeguros", component:SetSegurosComponent},
  {path:"Polizas", component:PolizasComponent},
  {path:"SetPolizas",component:SetPolizasComponent},
  {path:"**", redirectTo: "Personas",pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
