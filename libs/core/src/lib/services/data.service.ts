import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private ENDPOINT = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  all<T>(path: string): Observable<T> {
    return this.httpClient.get<T>(`${this.ENDPOINT}/${path}`);
  }

  find<T>(path: string, id: string): Observable<T> {
    return this.httpClient.get<T>(`${this.ENDPOINT}/${path}/${id}`);
  }
  
  create<T>(path: string, dto: T): Observable<T>  {
    return this.httpClient.post<T>(`${this.ENDPOINT}/${path}`, dto);
  }
  
  update<T>(path: string, dto: T, id: string): Observable<T> {
    return this.httpClient.put<T>(`${this.ENDPOINT}/${path}/${id}`, dto);
  }
  
  delete<T>(path: string, id: string): Observable<T> {
    return this.httpClient.delete<T>(`${this.ENDPOINT}/${path}/${id}`);
  }
}