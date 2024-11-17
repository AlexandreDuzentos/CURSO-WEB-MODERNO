import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { HeaderService } from './header.service';
import { RouterLink } from '@angular/router';

/* Isso aqui é um decorator */
@Component({
  selector: 'app-header', /* Esse é o seletor desse componente, ou seja, é a partir dele que esse componente deve ser referênciado */
  standalone: true, /* Essa propriedade indica que este é um componente autônomo, ou seja, os arquivos html e css estarão separados do arquivo ts */
  imports: [ MatToolbarModule, RouterLink ], /* Aqui nós importamos componentes que pretendemos usar no arquivo html referente a esse arquivo ts */
  templateUrl: './header.component.html', /* aqui nós estamos importando o arquivo html referente a esse arquivo ts */
  styleUrl: './header.component.css' /* aqui nós estamos importando o arquivo css referente a esse arquivo ts */
})

/*
Essa classe passa a ser um componente no momento que
você usa o decorator acima.
 */
export class HeaderComponent {
  
  constructor(private headerService: HeaderService){}

  get title(): string {
     return this.headerService.headerData.title
  }

  get icon(): string {
     return this.headerService.headerData.icon
  }

  get routeUrl(): string {
     return this.headerService.headerData.routeUrl
  }


}
