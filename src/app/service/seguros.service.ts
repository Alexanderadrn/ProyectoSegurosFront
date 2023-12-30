import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SegurosService {
    urlbase = 'https://localhost:7124/api/'
    controlador = 'Seguros/'
    constructor(private httpClient: HttpClient) { }
    
    getSeguros(): Observable<any> {
      var metodo = 'ObtenerSeguros'
      return this.httpClient.get<any>(this.urlbase + this.controlador + metodo);
    }
    setSeguros(datosPersonas: any) {
     var metodo = 'setSeguros'
      return this.httpClient.post<any>(this.urlbase + this.controlador + metodo, datosPersonas)
    }
    updateSeguros(datosPersonas: any) {
      var metodo = 'putSeguros'
      return this.httpClient.post<any>(this.urlbase + this.controlador + metodo, datosPersonas)
    }
    deleteSeguros(id: number) {
      var metodo='deletSeguro'
      let params = new HttpParams()
        .append("id", id)
      console.log(id);
      const headers = new HttpHeaders().set('content-type', 'application/json')
      return this.httpClient.post<any>(this.urlbase + this.controlador + metodo, id, { headers, params });
    }
    getPolizas(cedulaPersona: string, codigoSeguro: string): Observable<any> {
      var metodo = 'GetAllPolizas'
      const poliza = {
        cedulaPersona,
        codigoSeguro
      }
      let params = new HttpParams()
        .append("cedula", poliza.cedulaPersona.toString())
        .append("Codigo", poliza.codigoSeguro.toString())
  
      const headers = new HttpHeaders().set('content-type', 'application/json')
      return this.httpClient.post<any>(this.urlbase + this.controlador + metodo, poliza, { headers, params });
    }
    setPolizas(datosPolizas: any) {
      var metodo = 'setPolizas'
      return this.httpClient.post<any>(this.urlbase + this.controlador + metodo, datosPolizas);
  }
  getSegurosById(id: number): Observable<any> {
    var metodo = 'ObtenerPolizasId'
    const params = new HttpParams().append('id', id);
    let headers = new HttpHeaders().set('Type-content', 'aplication/json')
    return this.httpClient.get<any>(this.urlbase + this.controlador + metodo, { params });
  }
}
