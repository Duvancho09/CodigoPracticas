import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosBackendService {
  // private apiUrl = 'https://localhost:7289/api';

  // constructor(private http: HttpClient) { }

  // getDatos(): Observable<any[]>{
  //   return this.http.get<any[]>(`${this.apiUrl}/Datos`);
  // }

  // putDatos(datos: any): Observable<any>{
  //   return this.http.post<any>(`${this.apiUrl}/Datos`, datos);
  // }

  // deleteDatos(id: number): Observable<any>{
  //   return this.http.delete<any>(`${this.apiUrl}/Datos/${id}`);
  // }
}
