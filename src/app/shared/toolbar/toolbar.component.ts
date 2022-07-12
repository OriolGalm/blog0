import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(public authSvc: AuthService, private route: Router) { }

  ngOnInit(): void {
  }

  onLogout(){
    this.authSvc.logout();
    this.route.navigate(['/login']);
  }

}
