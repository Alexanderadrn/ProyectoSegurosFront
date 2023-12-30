import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SegurosService } from 'src/app/service/seguros.service';
import { SetSegurosComponent } from '../set-seguros/set-seguros.component';
import { ConfirmacionComponent } from '../confirmacion/confirmacion.component';
import { ISeguros } from 'src/app/interface/seguros';

@Component({
  selector: 'app-seguros',
  templateUrl: './seguros.component.html',
  styleUrls: ['./seguros.component.css']
})
export class SegurosComponent {
  public seguros: any[] = []

  constructor(
    private segurosService: SegurosService,
    private matDialog:MatDialog,
    private router:Router
  ) { }
  ngOnInit(): void {
    this.getSeguros()
  }
  getSeguros() {
    this.seguros = []
    this.segurosService.getSeguros().subscribe(resp => {
      this.seguros = resp
      console.log(resp)
    });
  }
  registrarSeguros() {
    const dialogRef = this.matDialog.open(SetSegurosComponent, {
      width: '600px',
      panelClass: 'fondo',
      data: null
    })
    dialogRef.afterClosed().subscribe(() => {
      this.getSeguros()
    });
  }
  actualizarSeguro( seguros: any){
    alert(seguros.idSeguro);
    localStorage.setItem("usuario",JSON.stringify(seguros));
    const dialogRef = this.matDialog.open(SetSegurosComponent, {
      width: '580px',
      height:'450px',
      panelClass: 'fondo',
      data: null
    })
    dialogRef.afterClosed().subscribe(() => {
      this.getSeguros()
    });
  }
  openConfirmationDialog(seguros: ISeguros): void {
    const dialogRef = this.matDialog.open(ConfirmacionComponent, {
      width: '300px',
      data: {
        message: '¿Estás seguro de eliminar el cliente seleccionado?',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.segurosService.deleteSeguros(seguros.idSeguro).subscribe(resp => {
          if (resp) {
            alert("Se elmino correctamente");
            this.ngOnInit();
          } else { alert("No se pudo eliminar la persona") }
        });
        console.log('Usuario confirmó');
      } else {
        console.log('Usuario canceló');
      }
    });
  }
}
