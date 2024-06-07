import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class DatosBackendService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }


  formularioPost(data:any, controller:string):Observable<any>{
    return this.http.post(this.url+controller,data);
  }

  //GetAll
  getDatos(controller:string):Observable<any>{
    return this.http.get(this.url+controller);
  }

  getParametro(controller:string, parametro:any):Observable<any>{
    return this.http.get(this.url+controller+"/"+parametro);
  }

  getById(controller:string, id:any):Observable<any>{
    return this.http.get(this.url+controller+"/"+id);
  }

  updatePut(controller:string, data:any, id:any):Observable<any>{
    return this.http.put(this.url+controller+"/"+id, data);
  }

  delete(controller:string, id:any):Observable<any>{
    return this.http.delete(this.url+controller+"/"+id);
  }
}
