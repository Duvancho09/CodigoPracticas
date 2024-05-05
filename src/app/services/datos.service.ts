import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private STORAGE_KEY = 'mis_datos';

  constructor() { }

  guardarDatos(nuevosDatos: any){
    let datosGuardados = this.obtenerDatos();
    datosGuardados.push(nuevosDatos);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(datosGuardados));
  }

  obtenerDatos(){
    let datosGuardados = localStorage.getItem(this.STORAGE_KEY);
    return datosGuardados? JSON.parse(datosGuardados): [];
  }

  eliminarDato(inde: number){
    let datosGuardados = this.obtenerDatos();
    datosGuardados.splice(inde, 1);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(datosGuardados));
  }
}
