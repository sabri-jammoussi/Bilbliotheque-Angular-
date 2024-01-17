import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Specialites } from './specialites';

@Injectable({
  providedIn: 'root'
})
export class SpecialitesService {
  private apiURL = "http://localhost:5000/api";
  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/specialites/')
  }

  create(specialite: Specialites): Observable<any> {
    return this.httpClient.post(this.apiURL + '/specialites/', specialite)
  }

  find(_id: object): Observable<any> {
    return this.httpClient.get(this.apiURL + '/specialites/' + _id)
  }

  update(_id:object, specialite:Specialites): Observable<any> {
    return this.httpClient.put(this.apiURL + '/specialites/' + _id, specialite)
    }
  
  delete(_id:object){
    return this.httpClient.delete(this.apiURL + '/specialites/' + _id)
    }
    
}
