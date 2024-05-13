import { Component } from '@angular/core';
import { AuthService } from '../common/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mail: string = "";
  password: string = "";

  constructor(private auth: AuthService) { }

  //metodo per effettuare il login
  login() {
    if (this.mail == "" || this.password == "") {
      alert("Inserire tutti i campi!");
      return;
    }

    this.auth.login(this.mail, this.password);

    this.mail = "";
    this.password = "";
  }
}
