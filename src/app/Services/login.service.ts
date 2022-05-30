import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BaseUrl = environment.devbaseUrl+'/auth/login';
  

  constructor(private http: HttpClient) { }

  login(data: any){
    return this.http.post(this.BaseUrl,data);
  }
}
