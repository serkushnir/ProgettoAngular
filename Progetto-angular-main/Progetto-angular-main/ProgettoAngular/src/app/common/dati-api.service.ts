import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatiApiService {
  //variabile per lo stile della navbar
  arrayPosizione: string[] = ["stileSelezionato", "stileDefault", "stileDefault"];

  constructor(public http: HttpClient) { }

  //ultimi dati nazionali
  public getDataNazionale(){
    return this.http.get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json');
  }

  //ultimi dati regionali
  public getDataRegioni(){
    return this.http.get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json');
  }

  //tutti i dati regionali
  public getDataTotaleNazione(){
    return this.http.get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json');
  }

  //ultimi dati regionali
  public getDataRegioniLatest(){
    return this.http.get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json');
  }
  
//metodo per cambiare lo stile della navbar  
cambiaStile(posizione: number)
{
  for(let i = 0; i < this.arrayPosizione.length; i++)
  {
    this.arrayPosizione[i] = "stileDefault";
  }
  this.arrayPosizione[posizione] = "stileSelezionato";
}
}
