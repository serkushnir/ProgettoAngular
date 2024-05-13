import { Component } from '@angular/core';
import { DatiApiService } from '../common/dati-api.service';

@Component({
  selector: 'app-global-overview',
  templateUrl: './global-overview.component.html',
  styleUrls: ['./global-overview.component.css']
})
export class GlobalOverviewComponent {
  //link immagine
  imgLink: string = "";
  //dati totali
  dati: any[] = [];
  //variabili per i dati
  decessi: number = 0;
  positivi: number = 0;
  casi_totali: number = 0;
  nuovi_positivi: number = 0;
  terapia_intensiva: number = 0;
  variazione_totale_positivi: number = 0;
  regione: string = "";

  constructor(public servizio: DatiApiService) { }

  //metodo che viene eseguito quando la pagina è stata caricata
  ngOnInit(): void {
    this.servizio.getDataRegioniLatest().subscribe((data: any) => {
      this.dati = data;
      console.log(this.dati);
      for (let i = 0; i < this.dati.length; i++) {
        if (this.dati[i].denominazione_regione == "P.A. Trento" || this.dati[i].denominazione_regione == "P.A. Bolzano") {
          this.decessi += this.dati[i].deceduti;
          this.positivi += this.dati[i].totale_positivi;
          this.casi_totali += this.dati[i].totale_casi;
          this.nuovi_positivi += this.dati[i].nuovi_positivi;
          this.terapia_intensiva += this.dati[i].terapia_intensiva;
          this.variazione_totale_positivi += this.dati[i].variazione_totale_positivi;
          this.regione = "Trentino Alto Adige";
          this.imgLink = './assets/11.png'
        }
      }
    });
  }

  //metodo per mostrare le informazioni di una regione
  mostraInformazioni(regione: string, numeroImg: number) {
    if (regione == "Valle") {
      regione = "Valle d'Aosta";
    }

    if (regione == "P.A. Trento" || regione == "P.A. Bolzano") {
      this.decessi = 0;
      this.positivi = 0;
      this.casi_totali = 0;
      this.nuovi_positivi = 0;
      this.variazione_totale_positivi = 0;
      this.terapia_intensiva = 0;
      this.regione = "Trentino Alto Adige";

      for (let i = 0; i < this.dati.length; i++) {
        if (regione == this.dati[i].denominazione_regione || this.dati[i].denominazione_regione == "P.A. Bolzano") {
          this.decessi += this.dati[i].deceduti;
          this.positivi += this.dati[i].totale_positivi;
          this.casi_totali += this.dati[i].totale_casi;
          this.nuovi_positivi += this.dati[i].nuovi_positivi;
          this.terapia_intensiva += this.dati[i].terapia_intensiva;
          this.variazione_totale_positivi += this.dati[i].variazione_totale_positivi;
          this.imgLink = './assets/11.png'
        }
      }
    }
    else {
      for (let i = 0; i < this.dati.length; i++) {
        if (this.dati[i].denominazione_regione == regione) {
          this.decessi = this.dati[i].deceduti;
          this.positivi = this.dati[i].totale_positivi;
          this.casi_totali = this.dati[i].totale_casi;
          this.nuovi_positivi = this.dati[i].nuovi_positivi;
          this.terapia_intensiva = this.dati[i].terapia_intensiva;
          this.variazione_totale_positivi = this.dati[i].variazione_totale_positivi;
          this.imgLink = './assets/' + numeroImg + '.png'
          this.regione = this.dati[i].denominazione_regione;
        }
      }
    }
  }
}
