import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggato: boolean = false;
  constructor(private fireAuth: AngularFireAuth, private router: Router) { }

  //metodo per il login
  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(() => {
      this.loggato = true;
      this.router.navigate(['/home']);
    }).catch((error) => {
      alert(error.message);
      this.router.navigate(['/login']);
    });
  }

  //metodi per la registrazione
  signup(email: string, password: string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(() => {
      alert("Account creato con successo!");
      this.router.navigate(['/login']);
    }).catch((error) => {
      alert(error.message);
      this.router.navigate(['/signup']);
    });
  }

  //metodo per vedere se l'utente è loggato
  isLogged(): boolean {
    return this.loggato;
  }

  setLogged(loggato: boolean) {
    this.loggato = loggato;
  }
}
