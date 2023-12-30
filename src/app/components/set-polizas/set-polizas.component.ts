import { Component } from '@angular/core';
import { IPersonas } from 'src/app/interface/personas';
import { IPolizas } from 'src/app/interface/polizas';
import { IRelacion } from 'src/app/interface/relacion';
import { ISeguros } from 'src/app/interface/seguros';
import { PersonasService } from 'src/app/service/personas.service';
import { SegurosService } from 'src/app/service/seguros.service';

@Component({
  selector: 'app-set-polizas',
  templateUrl: './set-polizas.component.html',
  styleUrls: ['./set-polizas.component.css']
})
export class SetPolizasComponent {
  public polizas :any[]=[]
  public seguros: ISeguros[]=[]
  public personas: IPersonas[]=[]
  public segurosSelected: ISeguros={
    idSeguro:0,
    nombreSeguo: "",
    codigoSeguro: "",
    sumaAsegurada:0,
    prima:0
  }
  public personasSelected:IPersonas={
    idPersonas:0,
    nombrePersonas: "",
    cedulaPersonas:"",
    telefonoPersonas:"",
    edadPersonas:0
  }
  public codSeguro="";
  public cedula ="";
  public idPersona=0;
  public idSguro=0;
  public relacion:IRelacion={
    
    idPersonas: 0,
    idSeguro:0
  }
constructor(
  private seguroService:SegurosService,
  private personasService:PersonasService
){}
ngOnInit(){
  this.getPolizas()
  this.getPersonas()
  this.getSeguros()
}
getSeguros() {
  this.seguros = []
  this.seguroService.getSeguros().subscribe(resp => {
    this.seguros = resp
    console.log(resp)
  });
}

getPolizas(){
  this.polizas=[]
  console.log(this.personasSelected.idPersonas)
  this.seguroService.getSegurosById(this.personasSelected.idPersonas).subscribe(resp=>{
    this.polizas=resp
    console.log(resp);
  })
}
getPersonas() {
  this.personas = []
  this.personasService.getPersonas().subscribe(resp => {
    this.personas = resp
    console.log(resp)
  });
}

setPoliza(){
  this.relacion.idPersonas=this.personasSelected.idPersonas
  this.relacion.idSeguro=this.segurosSelected.idSeguro
  console.log(this.relacion)
  this.seguroService.setPolizas(this.relacion).subscribe(resp=>{
    if (resp) {
      alert(resp)
      console.log(resp)
     this.getPolizas();
  }});

}
}
