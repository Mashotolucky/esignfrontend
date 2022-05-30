import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { interval, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


const BaseUrl = environment.devbaseUrl+'/users';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  intepreterID: any;
  clickedUser: any;
  loggedUser: any;

  constructor(private http: HttpClient) { }

  getAll() {
      return this.http.get<any>(`${BaseUrl}`);
  }

  getAllinterpreter() {
   return interval(2000).pipe(switchMap(() => this.http.get<any>(`${BaseUrl}/intepreters/getAll`)))
  }

  setInterpretorId(id:any): void{
    this.intepreterID = id;
  
    console.log(this.intepreterID);
    
  }
  getInterpreterId() {
    
    console.log(this.intepreterID);
    return this.intepreterID;
  }

  delete(id: number) {
      return this.http.delete(`${BaseUrl}/${id}`);
  }

  setOniline(data: any, token: any):Observable<any[]> {
    let headers=new HttpHeaders();
    headers=headers.set('Authorization',"Bearer "+token);
    return this.http.put<any[]>(`${BaseUrl}/intepreter/online`,data,{headers});
  }

  user(data: any) {
    this.clickedUser = data;
    localStorage.setItem("Interpreter",JSON.stringify(this.clickedUser));
    console.log(this.clickedUser);
  }

  getUser(){
    console.log(this.clickedUser);
    return this.clickedUser;
  }

  setLoggedUser(data: any){
    this.loggedUser = data;
    console.log(this.loggedUser);
  }

  getLoggedUser(){
    console.log(this.loggedUser);
    
    return this.loggedUser;
  }


  updateIntepreter(data: any, token: any):Observable<any[]> {
    let headers=new HttpHeaders();
    headers=headers.set('Authorization',"Bearer "+token);
    return this.http.put<any[]>(`${BaseUrl}/intepreter/update`,data,{headers});
  }
  
}

