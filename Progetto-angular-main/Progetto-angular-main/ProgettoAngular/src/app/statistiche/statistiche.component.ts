import { Component } from '@angular/core';
import { DatiApiService } from '../common/dati-api.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-statistiche',
  templateUrl: './statistiche.component.html',
  styleUrls: ['./statistiche.component.css']
})
export class StatisticheComponent {
  //variabili per il grafico
  chart: any;
  arrayDati: any = [];
  arrayDate: any = [];
  datone: any = {
    labels: this.arrayDate,
    datasets: [{
      label: 'Casi Nazionali Covid-19',
      data: this.arrayDati,
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
    }]
  };

  options: any = {
    mainteinAspectRatio: true,
    responsive: true,
    scales: {
      y: {
        ticks: {
          callback: function (value: any) {
            return value;
          }
        },
        grid: {
          display: false
        }
      },
      x: {
        display: true,
        grid: {
          display: true
        }
      }
    },
  };

  config: any = {
    type: 'line',
    data: this.datone,
    options: this.options
  };



  //dati nazionali
  dati: any;
  //variabile per la data 
  data: string = "";
  //variabile per i casi totali
  casiTotali: string = "";
  //variabile per i deceduti
  deceduti: number = 0;
  //variabile per i nuovi casi
  nuoviCasi: number = 0;
  //variabile per i casi in terapia intensiva
  terapiaIntensiva: number = 0;
  //variabile per i casi totali positivi
  totalePositivi: number = 0;
  //variabile per la variazione dei casi totali positivi
  variazioneTotalePositivi: number = 0;



  constructor(private servizio: DatiApiService) { }

  //inizializzazione dati nazionali
  ngOnInit(): void {

    this.servizio.getDataNazionale().subscribe(datone => {
      this.dati = datone;
      console.log(this.dati);
      this.data = this.dati[(this.dati.length - 1)].data;
      this.casiTotali = this.dati[(this.dati.length - 1)].totale_casi;
      this.deceduti = this.dati[(this.dati.length - 1)].deceduti;
      this.nuoviCasi = this.dati[(this.dati.length - 1)].nuovi_positivi;
      this.terapiaIntensiva = this.dati[(this.dati.length - 1)].terapia_intensiva;
      this.totalePositivi = this.dati[(this.dati.length - 1)].totale_positivi;
      this.variazioneTotalePositivi = this.dati[(this.dati.length - 1)].variazione_totale_positivi;
      this.inserisciDatiiniziali();
      this.chart = new Chart('barChart', this.config);
    });
  }

  //metodo per inserire i dati iniziali nel grafico
  inserisciDatiiniziali() {
    for (let i = 14; i > 0; i--) {
      this.arrayDati.push(this.dati[(this.dati.length - i)].totale_casi);
    }

    for (let i = 14; i > 0; i--) {
      this.arrayDate.push(this.dati[(this.dati.length - i)].data.substring(0, 10));
    }
  }

  //metodo per inserire i dati delle ultime due settimane nel grafico
  inserisciDatiUltimeDueSettimane() {
    let newDati: any = [];
    let newDate: any = [];

    for (let i = 14; i > 0; i--) {
      newDati.push(this.dati[(this.dati.length - i)].totale_casi);
    }

    for (let i = 14; i > 0; i--) {
      newDate.push(this.dati[(this.dati.length - i)].data.substring(0, 10));
    }
    this.chart.data.labels = newDate;
    this.chart.data.datasets[0].data = newDati;
    this.chart.update();
  }

  //metodo per inserire i dati degli ultimi 30 giorni nel grafico
  inserisciDatiLifetime() {
    let newDati: any = [];
    let newDate: any = [];
    for (let i = 0; i < this.dati.length; i++) {
      if (this.dati[i].data.substring(8, 10) == "01") {
        newDati.push(this.dati[i].totale_casi);
        newDate.push(this.dati[i].data.substring(0, 10));
      }
    }
    this.chart.data.labels = newDate;
    this.chart.data.datasets[0].data = newDati;
    this.chart.update();
  }

  //metodo per inserire i dati degli ultimi 6 mesi nel grafico
  inserisciDatiultimi6Mesi() {
    let newDati: any = [];
    let newDate: any = [];
    let i = this.dati.length - 1;
    let contatore = 0;
    while (contatore < 12) {
      if (this.dati[i].data.substring(8, 10) == "01" || this.dati[i].data.substring(8, 10) == "15") {
        newDati.push(this.dati[i].totale_casi);
        newDate.push(this.dati[i].data.substring(0, 10));
        contatore++;
      }
      i--;
    }
    newDati.reverse();
    newDate.reverse();
    this.chart.data.labels = newDate;
    this.chart.data.datasets[0].data = newDati;
    this.chart.update();
  }
}
