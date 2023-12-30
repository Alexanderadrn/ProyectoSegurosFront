import { Component } from '@angular/core';
import { ISeguros } from 'src/app/interface/seguros';
import { SegurosComponent } from '../seguros/seguros.component';
import { SegurosService } from 'src/app/service/seguros.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-set-seguros',
  templateUrl: './set-seguros.component.html',
  styleUrls: ['./set-seguros.component.css']
})
export class SetSegurosComponent {
  titulo: string ="Registrar"

  seguros: ISeguros={
    idSeguro:0,
    nombreSeguo: "",
    codigoSeguro: "",
    sumaAsegurada:0,
    prima:0
  }
  expresiones = {
    texto: /^[a-zA-ZÀ-ÿ\s0-9]{1,50}$/,
    correo_: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    numero: /^\d+$/

  }
  constructor(
    private segurosService: SegurosService,
    private matdialog:MatDialog
  ) { }
  ngOnDestroy(): void {
    localStorage.removeItem("usuario")
  }
  ngOnInit(): void {
    this.obtenerDatos();
    }
    obtenerDatos() {
      if (localStorage.getItem("usuario")) {
        var datos = localStorage.getItem("usuario")
        this.seguros = JSON.parse(datos!)
        this.titulo = "Actualizar"
      }
    }
    onKeyPressTexto(event: KeyboardEvent) {
      const input = event.key;
      const regex = /^[a-zA-ZÀ-ÿ]+$/;
      if (!regex.test(input)) {
        event.preventDefault();
      }
    }
    onKeyPressNumero(event: KeyboardEvent) {
      const input = event.key;
      const regex = /^[0-9]+$/;
      if (!regex.test(input)) {
        event.preventDefault();
      }
    }
    
    validarDatos() {
      if (this.expresiones.texto.test(this.seguros.nombreSeguo)
        && this.expresiones.texto.test(this.seguros.codigoSeguro)
        /*&& this.expresiones.numero.test(this.seguros.prima)
        &&    this.expresiones.numero.test(this.seguros.sumaAsegurada)*/
      ) {
  
        return true;
      } else {
        alert("Los datos son incorrectos")
        return false;
      }
    }
  
    setSeguros() {
      //if (this.validarDatos()) {
      if (this.seguros.idSeguro == 0) {
        this.segurosService.setSeguros(this.seguros).subscribe(resp => {
          if (resp) {
            alert(resp)
            console.log(resp)
          } else {
            alert("No se pudo registrar")
          }
        });
      } else {
        this.segurosService.updateSeguros(this.seguros).subscribe(resp => {
          if (resp) {
            localStorage.removeItem("usuario");
            this.matdialog.closeAll();
          }
          else {
            alert("No se pudo editar el seguro");
          }
        });
      }
      this.matdialog.closeAll();
    }
    dismissModal() {
      this.matdialog.closeAll();
    }
  }

