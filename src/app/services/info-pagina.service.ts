import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infoPagina = {};
  cargada = false;

  equipo: any[] =[];

  constructor(private http: HttpClient) {
    console.log("Servicio pagina listo");
    this.cargarInfo();
    this.cargarEquipo();
  }
  
  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json').subscribe(
      (resp: infoPagina) => {
  
        this.cargada = true;
        this.info = resp;
  
        console.log(resp);
      })
    
  }

  private cargarEquipo(){
    this.http.get('https://mateot-angular-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( (resp: any) => {
  
        this.equipo = resp;
  
        console.log(resp);
      })
  }
}

