import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  nascondi: boolean = false;

  constructor(public servizio: ApiService) { }


  //per nascondere il menu quando si visualizza il sito da un dispositivo mobile
  nascondiMenu() {
    this.nascondi = !this.nascondi;
  }

}
