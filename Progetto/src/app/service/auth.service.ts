import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggato: boolean = false;


  constructor(private fireAuth: AngularFireAuth, private router: Router) {
    if (localStorage.getItem("loggato") != null) 
    {
      localStorage.clear();
    }
   }
   
    login(email: string, password: string) {
      this.fireAuth.signInWithEmailAndPassword(email, password).then(() => {
        this.loggato = true;
        localStorage.setItem('loggato', "true");
        this.router.navigate(['/home']);
      }).catch((error) => {
        alert(error.message);
        this.router.navigate(['/login']);
      });
    }

  
    signup(email: string, password: string) {
      this.fireAuth.createUserWithEmailAndPassword(email, password).then(() => {
        alert("Account creato con successo!");
        this.router.navigate(['/login']);
      }).catch((error) => {
        alert(error.message);
        this.router.navigate(['/signup']);
      });
    }

   
    isLogged(): boolean {
      return this.loggato;
    }

    setLogged(loggato: boolean) {
      this.loggato = loggato;
    }
 
}
