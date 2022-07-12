import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/shared/models/user.interface';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isValidField: boolean = true;
  public missatge!: string;

  constructor(private authSvc: AuthService, private router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
  }
  
  onLogin(form: UserI){
    this.authSvc.loginByEmail(form)
    .then(res => {console.log("Resposta :", res);
    this.router.navigate(['/admin/new']);
  }).catch(err => {console.log("Error: ", err);
      this.isValidField;
      this.getError(err.code);
    });
  }

  getError(message: string){
    return this.missatge = `${message}`;
  }

  public getErrorMessage(field:string){
    let message = `S'ha de posar el ${field}`;
   /* if(this.loginForm.get(field)?.errors){
      message = `S'ha de posar el ${field}`;
    }*/
    return message;
  }
/*
  isValidField(field: string){
    return(
      (this.loginForm.get(field)?.touched || this.loginForm.get(field)?.dirty 
      && this.loginForm.get(field)?.valid)
    );
  }*/
}
