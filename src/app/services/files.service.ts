import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Files } from '../data/files';

const baseUrl = environment.backendUrl + '/etl';


@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(
    private http: HttpClient
  ) { }


  save(files:Files): Observable<unknown> {
    return this.http.post<unknown>(baseUrl+"/loadData", files);
}
}