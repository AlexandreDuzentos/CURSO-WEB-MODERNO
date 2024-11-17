import { Component } from '@angular/core';
import { MatButtonModule } from "@angular/material/button"
import { Router } from  "@angular/router"
import { ProductReadComponent } from '../../components/product/product-read/product-read.component';
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'app-product-crud',
  standalone: true,
  imports: [ MatButtonModule, ProductReadComponent],
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.css'
})
export class ProductCrudComponent {

  /* A injeção da dependência router será feita pelo próprio Angular no momento
  em que esse componente for referenciado por meio da tag app-product-crud */
  constructor(private headerService: HeaderService, private router: Router){
    headerService.headerData = {
      title: "Cadastro de produtos",
      icon: "storefront",
      routeUrl: "/products"
   }
  }

  navigateToProductCreate(){
     this.router.navigate(["/products/create"])
  }

}
