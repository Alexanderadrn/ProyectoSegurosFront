import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IPersonas } from 'src/app/interface/personas';
import { PersonasService } from 'src/app/service/personas.service';


@Component({
  selector: 'app-set-personas',
  templateUrl: './set-personas.component.html',
  styleUrls: ['./set-personas.component.css']
})
export class SetPersonasComponent {
  titulo: string ="Registrar"

  personas: IPersonas={
    idPersonas: 0,
    nombrePersonas: "",
    cedulaPersonas:"",
    telefonoPersonas:"",
    edadPersonas: 0
  }
  expresiones = {
    texto: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
    numero: /^[0-9]$/

  }
  constructor(
    private personasService: PersonasService,
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
        this.personas = JSON.parse(datos!)
        this.titulo = "Actualizar"
      }
    }
    onKeyPressTexto(event: KeyboardEvent) {
      const input = event.key;
      const regex = /^[a-z A-Z]+$/;
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
      if (this.expresiones.texto.test(this.personas.nombrePersonas)
        && this.expresiones.numero.test(this.personas.cedulaPersonas)
        && this.expresiones.numero.test(this.personas.telefonoPersonas)
        //&& this.expresiones.numero.test(this.personas.edadPersonas)
      ) {
  
        return true;
      } else {
        alert("Los datos son incorrectos")
        return false;
      }
    } 
  
    setPersonas() {
      //if (this.validarDatos()) {
            if (this.personas.idPersonas == 0) {
        this.personasService.setPersonas(this.personas).subscribe(resp => {
          if (resp) {
            alert(resp)
            console.log(resp)
          } else {
            alert("No se pudo registrar")
          }
        });
      } else {
        this.personasService.updatePersonas(this.personas).subscribe(resp => {
          if (resp) {
            localStorage.removeItem("usuario");
            this.matdialog.closeAll();
          }
          else {
            alert("No se pudo editar la persona");
          }
        });
      }
      this.matdialog.closeAll();
    }

    dismissModal() {
      this.matdialog.closeAll();
    }
  }


