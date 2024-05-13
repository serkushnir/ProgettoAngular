import { Component } from '@angular/core';
import { DatiApiService } from '../common/dati-api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

//iniezione del servizio per i dati per cambiare lo stile della navbar
constructor(public servizio: DatiApiService) { }
}
