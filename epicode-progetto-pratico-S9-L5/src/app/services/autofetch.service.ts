import { iJsoncontent } from '../modules/ijsoncontent';
import { iAuto } from './../modules/auto';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutofetchService {
  apiAuto:string ='../../assets/db/db.json';
  AutoArr:iAuto[] = [];

  constructor() {
    this.getAuto();
  }
  async getAuto():Promise<void>{
   try {
    let response = await fetch(this.apiAuto);
    let alltheCar = <iJsoncontent> await response.json();
    console.log(alltheCar);
    this.AutoArr = alltheCar
    console.log(this.AutoArr);
   } catch (error) {
    console.log("Errore di caricamento delle auto",error);
    }
  }

  getBrandlogo(){
    let ArrFiltredLogo = [...new Set(this.AutoArr.map(auto => auto.brandLogo))]; // Utilizzo di Set perché in questo modo faccio un array senza duplicati poiché i 3 brand sì ripetono 3 volte
    return  ArrFiltredLogo
  }
  getRandomAuto(): iAuto[] {
  const shuffled = [...this.AutoArr].sort(() => 0.5 - Math.random());    // Creo una copia  dell'array AutoArr e lo mescolo
  return shuffled.slice(0, 2);
}
  getAudiAuto(){
    return this.AutoArr.filter(auto => auto.brand === 'Audi');
    // array filtrato in base al parametro
  }
  getFiatAuto(){
    return this.AutoArr.filter(auto => auto.brand === 'Fiat');
    // array filtrato in base al parametro
  }
  getFordAuto(){
    return this.AutoArr.filter(auto => auto.brand === 'Ford');
    // array filtrato in base al parametro
  }
}

