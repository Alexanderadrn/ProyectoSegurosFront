import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PersonasService } from 'src/app/service/personas.service';
import { SegurosService } from 'src/app/service/seguros.service';

@Component({
  selector: 'app-polizas',
  templateUrl: './polizas.component.html',
  styleUrls: ['./polizas.component.css']
})
export class PolizasComponent {
  public polizas: any[] = []
  public codSeguro = "";
  public Cedula = "";
  
  constructor(
    private segurosService: SegurosService,
    private router:Router,
    
    
  ) { }
  ngOnInit(): void {
    this.getPolizas()
  }
  getPolizas() {
    this.polizas = []
    this.segurosService.getPolizas("", "").subscribe(resp => {
      this.polizas = resp
      console.log(resp);
    });
  }
  Buscar() {
    this.polizas = []
    console.log(this.Cedula)
    this.segurosService.getPolizas(this.Cedula, this.codSeguro).subscribe(resp => {
      this.polizas = resp
      console.log(resp);
    });
  }
  setPoliza(){
    this.router.navigate(["SetPolizas"])
  }
 }

