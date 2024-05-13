import { Component } from '@angular/core';
import { AuthService } from '../common/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  mail: string = "";
  password: string = "";

  constructor(private auth: AuthService) { }

  //metodo per effettuare la registrazione
  signup() {
    if (this.mail == "" || this.password == "") {
      alert("Inserire tutti i campi!");
      return;
    }

    this.auth.signup(this.mail, this.password);

    this.mail = "";
    this.password = "";
  }
}
