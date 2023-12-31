import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseUrl = environment.backendUrl + '/schedule';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(
    private http: HttpClient
  ) { }


  getSchedule(): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(baseUrl, { observe: 'response' });
  }

  getScheduleById(id: string): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(`${baseUrl}/${id}`, { observe: 'response' });
  }

  generateSchedule(schedule: any): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(`${baseUrl}/generate`, schedule);
  }

  finishSchedule(): Observable<HttpResponse<any>> {
    return this.http.put<HttpResponse<any>>(`${baseUrl}/finished`,{observe:'response'});
  }
}