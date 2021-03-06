import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;

  constructor(private http: HttpClient) { }

  isLoggedIn() {

    //get token from local storage
    const token = localStorage.getItem('auth-token');

     if (token) {
      const payload = atob(token.split('.')[1]);
      // decode payload of token

      // convert payload into an Object
      const parsedPayload = JSON.parse(payload);
      
     return parsedPayload.exp > Date.now() / 1000; // check if token is expired
    }else{
        return null;
    }
  }
  getUser(){
     //get token from local storage
     const user = JSON.parse(localStorage.getItem('user'));
    // console.log("usert",user);
    
     return user?user:false;
  }

  isClient(){
    const user = JSON.parse(localStorage.getItem('user'));

    if(user.role=="CLIENT"){
      return true;
    }
    return false;
  }

  isInterpreter(){
    const user = JSON.parse(localStorage.getItem('user'));

    if(user.role=="INTEPRETER"){
      return true;
    }
    return false;

  }

    
}

