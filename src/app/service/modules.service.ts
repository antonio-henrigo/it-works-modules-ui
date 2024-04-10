import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  private apiUrl = 'https://j71yi4eoc6.execute-api.sa-east-1.amazonaws.com/dev/impostograma/desafio/listarModulos';
  private httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'RRwPrJsGdiwdWZ1CZj9srRtCdQ99LPeg'
    })
  };

  constructor(private http: HttpClient) { }

  getModules(): Observable<any> {
    return this.http.get<any>(this.apiUrl, this.httpOptions);
  }

}
