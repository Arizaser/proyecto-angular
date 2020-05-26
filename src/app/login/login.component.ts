import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { GLOBAL } from 'src/services/global';
declare const M: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public textoError: String;

  constructor(
    public auth: AuthService
  ) {
  }

  ngOnInit(): void {
  }

  saltarPopUp() {
    this.auth.loginGoogle();
  }
}
