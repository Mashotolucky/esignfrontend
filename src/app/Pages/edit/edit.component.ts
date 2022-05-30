import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { RegisterService } from 'src/app/Services/register.service';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  User: any;
  file: any = '';

  editForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    hourly_rate: new FormControl(''),
    images: new FormControl(''),
    bio: new  FormControl(''),
    tagline: new  FormControl('')

  });
  constructor(private userService: UserService, private authService: AuthService,private registerService: RegisterService, private formBuilder: FormBuilder, private router: Router) {
    this.editForm = this.formBuilder.group({
      name: [''],
      lastname: [''],
      hourly_rate: [''],
      images: [''],
      bio: [''],
      tagline: ['']
    })
   }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.User = JSON.parse(localStorage.getItem("user"));
    console.log(this.User);
  }

  selectThisImage(myEvent: any) {
    this.file = myEvent.target.files[0]; 
  }

  simpleAlert() {
    Swal.fire({
     
      icon: 'success',
      title: 'Profile updated',
      showConfirmButton: false,
      timer: 1000,
      width: '300px'
    })

  }

  submit(): void{
    const formData = new FormData();
    formData.append('images', this.file)
    formData.append('name', this.editForm.value.name);
    formData.append('lastname',this.editForm.value.lastname);
    formData.append('hourly_rate',this.editForm.value.hourly_rate);
    formData.append('bio',this.editForm.value.bio);
    formData.append('tagline',this.editForm.value.tagline);

    console.log(formData);
    
    console.log(formData.get(""));
    let token = localStorage.getItem("auth-token");
    this.userService.updateIntepreter(formData, token)
    .subscribe({
      next: (response: any) => {
        console.log(response)
        let myuser = response.myuser;
        this.simpleAlert();
        localStorage.setItem("user", JSON.stringify(myuser));
        this.router.navigate(['/interpreterbooking']);
      },
      error: (error)=> console.log(error),
    })
  }
}
