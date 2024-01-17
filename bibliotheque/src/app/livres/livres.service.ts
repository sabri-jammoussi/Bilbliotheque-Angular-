import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Livres } from './livres';

@Injectable({
  providedIn: 'root'
})
export class LivresService {
  
  private apiURL = "http://localhost:5000/api";
  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/livres/')
  }

  create(livre: Livres): Observable<any> {
    return this.httpClient.post(this.apiURL + '/livres/', livre)
  }

  find(_id: object): Observable<any> {
    return this.httpClient.get(this.apiURL + '/livres/' + _id)
  }

  update(_id:object, livre:Livres): Observable<any> {
    return this.httpClient.put(this.apiURL + '/livres/' + _id, livre)
    }
  
  delete(_id:object){
    return this.httpClient.delete(this.apiURL + '/livres/' + _id)
    }
    uploadSignature(vals: any): Observable<any> {
      let data = vals;
      return this.httpClient.post('https://api.cloudinary.com/v1_1/dawprvlpi/image/upload', data)
  }

}
