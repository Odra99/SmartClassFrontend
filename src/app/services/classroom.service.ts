import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseUrl = environment.backendUrl + '/classroom';


@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  constructor(
    private http: HttpClient
  ) { }


  listAll(): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(baseUrl, {  observe: 'response' });
  }
}