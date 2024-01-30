import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Template_form';
  // public userName!: string;
  // public password!:string;

  LoginForm=new FormGroup({

    name : new FormControl('asdfghjk',Validators.required),
    password:new FormControl('')
  })

  submitForm() {
    if (this.LoginForm.valid) {
      console.log('Form submitted with values:', );
     
      // You can perform further actions like sending data to server
    } else {
      console.log('Form is invalid');
      // You can display error messages or take other actions
    }
  }



  onSubmit(myForm: any) {
    console.log(myForm);

  }

  NameCheck(event:any){
    console.log(event)

  }

  ngOnInit(): void {
      this.LoginForm.controls.password.valueChanges.subscribe(data=>console.log(data))
  }
  
  
  
}

