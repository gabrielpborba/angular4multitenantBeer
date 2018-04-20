import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CervejaService {

  cervejasUrl = 'http://localhost:8080/beer'; 
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.cervejasUrl}`);
  }
}
