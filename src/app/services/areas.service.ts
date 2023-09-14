import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Area } from '../data/area';

const baseUrl = environment.backendUrl + '/area';


@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(
    private http: HttpClient
  ) { }


  listAll(): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(baseUrl, {  observe: 'response' });
  }

  save(area:Area): Observable<unknown> {
      return this.http.put<unknown>(`${baseUrl}/${area.id}`, area);
  }
}