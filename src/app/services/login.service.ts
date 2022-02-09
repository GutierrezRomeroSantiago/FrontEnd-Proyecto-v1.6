import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = "http://localhost:3000"
  constructor(private http: HttpClient) {}

  getUsers() {
    const url = `${this.url}/validar`;
    return this.http.get(url);
  }

}
