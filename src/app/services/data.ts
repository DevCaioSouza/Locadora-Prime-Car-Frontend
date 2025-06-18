import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Data {

  private http = inject(HttpClient)

  //precisamos alterar a url para baseurl
  //e concatenar usando + com os respectivos endpoints
  private apiUrl = 'https://sistema-backend-aluguel-carros.onrender.com/'

  getCarsList(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'carros')
  }

  getRecordData(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'carros/alugados')
  }
}
