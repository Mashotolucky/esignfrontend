import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/Services/booking.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client-booking',
  templateUrl: './client-booking.component.html',
  styleUrls: ['./client-booking.component.scss']
})
export class ClientBookingComponent implements OnInit {
  select = ' ';
  count = 0;
  bookings=false;
  streams=false;
  history=false;
  
  clientBookings: any;
  clientStreams: any;
  clientHistory: any;


  public historyss=[
   
  ];


  
  constructor(private bookingsService:BookingService, private router: Router) { }




  ngOnInit(): void { 
  }


  changeUser_Type(user_type : string): void {

    //this.select = user_type;
    if(user_type=="bookings"){
      //fetch token from seesion or localstorage
      const token=localStorage.getItem("auth-token")
      
      //call bookings service
      this.bookingsService.getAllclientbooking(token).subscribe({
        next:(results)=>{
          this.clientBookings = results;
          this.clientBookings = this.clientBookings.bookings
         console.log(this.clientBookings);
         
        },
        error:(error)=>{
         // this.bookings=false;
        }
      });

      //assign bookings array 
    }

    if(user_type=="streams"){
           //fetch token from seesion or localstorage
           const token=localStorage.getItem("auth-token")
      
           //call bookings service
           this.bookingsService.getAllclientstreams(token).subscribe({
             next:(results)=>{
               this.clientStreams = results;
               console.log(this.clientStreams);
               
             },
             error:(error)=>{
              
             }
           });
    }

    if(user_type=="history"){
      //fetch token from seesion or localstorage
      const token=localStorage.getItem("auth-token")
      
      //call bookings service
      this.bookingsService.getAllclienthistory(token).subscribe({
        next:(results)=>{
         this.clientHistory = results;
        },
        error:(error)=>{
         // this.streams=false;
        }
      });

      //assign bookings array 
    }
    switch(user_type){
      case "streams":
        this.bookings=false;
        this.streams=true;
        this.history=false;
        break;
      case "bookings":
        this.bookings=true;
        this.streams=false;
        this.history=false;
        break;
      case "history":
        this.bookings=false;
        this.streams=false;
        this.history=true;
        break;

    }
  }

  joinstream(id:any){
    if(!id) return Swal.fire({
         icon: 'error',
         title: 'can not join stream at this point',
         showConfirmButton: false,
         timer: 1000,
         width: '300px'
     })
   console.log(id);
   
  this.router.navigate(['/stream',id])

 }
  

}
