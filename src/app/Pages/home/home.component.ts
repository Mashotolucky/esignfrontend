import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit ,OnDestroy{

  interpretors: any;
  getUser: any;
  constructor(private userService: UserService, public router: Router) { }
   intepreterSub:any;
   
  ngOnInit(): void {
    
    this.getUser = JSON.parse(localStorage.getItem("user"));
    this.getAllIntepreters();
  }

  getAllIntepreters(): void{
   this.intepreterSub= this.userService.getAllinterpreter()
    .subscribe(data =>{
      this.interpretors = data;
      // console.log(data);
    })
  }

  setId(id: any): void{
    this.userService.setInterpretorId(id);
    this.router.navigate(['/profile'])
  }

  viewProfile(interpreter: any){
    console.log(interpreter);
    if(this.getUser.role === "INTEPRETER"){
      this.router.navigate(['/interpreterbooking'])
    }
    else{
      this.router.navigate(['/login']);
    }
    this.userService.user(interpreter);
  }
  
  ngOnDestroy(): void {
      this.intepreterSub.unsubscribe();
  }

}
