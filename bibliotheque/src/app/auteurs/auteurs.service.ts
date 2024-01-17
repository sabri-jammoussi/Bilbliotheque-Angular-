import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Auteurs } from './auteurs';

@Injectable({
  providedIn: 'root'
})
export class AuteursService {
  private apiURL = "http://localhost:5000/api";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/auteurs/')
  }

  create(auteur: Auteurs): Observable<any> {
    return this.httpClient.post(this.apiURL + '/auteurs/', auteur)
  }

  find(_id: object): Observable<any> {
    return this.httpClient.get(this.apiURL + '/auteurs/' + _id)
  }

  update(_id:object, auteur:Auteurs): Observable<any> {
    return this.httpClient.put(this.apiURL + '/auteurs/' + _id, auteur)
    }
  
  delete(_id:object){
    return this.httpClient.delete(this.apiURL + '/auteurs/' + _id)
    }
    

}
