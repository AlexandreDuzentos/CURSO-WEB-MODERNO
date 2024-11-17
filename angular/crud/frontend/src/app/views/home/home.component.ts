import { Component } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { HeaderData } from '../../components/template/header/header-data';
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports:  [ MatCardModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  constructor(private headerService: HeaderService){
    headerService.headerData = {
      title: "Início",
      icon: "home",
      routeUrl: ""
    }
  }


}
