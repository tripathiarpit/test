import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseUrl = 'http://localhost:8085/event-management/event/all';
  baseUrl2 = 'http://localhost:8085/event-management/event/all';

  constructor(private httpClient: HttpClient) { }

  getClients(): Observable<any> {
    const url = this.baseUrl;
    return this.httpClient.get(url);
  }
  getClientsByLocation(): Observable<any> {
    const url = this.baseUrl;
    return this.httpClient.get(url);
  }
}
