import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-canvi-pass',
  templateUrl: './canvi-pass.component.html',
  styleUrls: ['./canvi-pass.component.css']
})
export class CanviPassComponent implements OnInit {
  userEmail = new FormControl('');

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {  }

  async canviPass(){
    try{
      const email = this.userEmail.value;
      await this.authSvc.resetPassword(email);
      Swal.fire("Email enviat, revisi la safata d'entrada");
    }
    catch(error){console.log(error)}
    
  }

}
