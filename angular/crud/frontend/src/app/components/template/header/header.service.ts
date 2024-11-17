import { Injectable } from '@angular/core';
import { HeaderData } from './header-data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

   constructor() { }

   /*
    A classe BehaviorSubject detetará sempre que houver mudanças no 
    objeto HeaderData e notificará os interessados(que serão os objetos nas
    quais o HeaderService será injetado), desse forma, eu terei uma única
    instância do BehaviorSubject modificando apenas o valor de seus atributos.

    A ideia desse objeto é de permitir a comunicação entre componentes.
     */
   private _headerData = new BehaviorSubject<HeaderData>({
    title: "Início",
    icon: "home",
    routeUrl: "/products"
  })

  get headerData(): HeaderData {
     return this._headerData.value
  }

  set headerData(headerData: HeaderData){
      this._headerData.next(headerData)
  }


}
