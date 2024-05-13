import { Component } from '@angular/core';
import { DatiApiService } from '../common/dati-api.service';

@Component({
  selector: 'app-tabella-regioni',
  templateUrl: './tabella-regioni.component.html',
  styleUrls: ['./tabella-regioni.component.css']
})
export class TabellaRegioniComponent {
  //dati regioni
  dati: any;
  //dati totale nazionali
  datiTotale: any;
  //date per il select
  mesi: string[] = [];
  //data singola del select per il cambio dati
  mese: string = "2020-02-24T18:00:00";
  //link per le regioni (per esempio friuli venezia giulia --> fvg)
  nomeRegioniLink: string[] = ['abruzzo', 'basilicata', 'calabria', 'campania', 'emilia-romagna', 'fvg', 'lazio', 'liguria', 'lombardia', 'marche', 'molise', 'taa', 'taa', 'piemonte', 'puglia', 'sardegna', 'sicilia', 'toscana', 'umbria', 'vda', 'veneto'];

  constructor(private servizio: DatiApiService) { }

  //inizializzazione dati regioni e dati totale nazionale e riempimento array mesi per creare le opzione del select
  ngOnInit(): void {
    this.servizio.getDataRegioni().subscribe(datone => {
      this.dati = datone;
    });

    this.servizio.getDataTotaleNazione().subscribe(datone => {
      this.datiTotale = datone;
      for (let i = 0; i < this.datiTotale.length; i++) {
        if (i % 21 === 0) {
          this.mesi.push(this.datiTotale[i].data.substring(0, 10));
        }
      }
    });
  }

  //metodo per cambiare i dati della tabella in base al select
  cambiaDatiTabella() {
    let i = 0;
    this.datiTotale.forEach((element: any) => {
      if (element.data == this.mese + "T18:00:00" || element.data == this.mese + "T17:00:00") {
        this.dati[i] = element;
        i++;
      }
    });
  }
}
