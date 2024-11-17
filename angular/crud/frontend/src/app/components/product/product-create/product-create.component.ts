import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from "@angular/router";
import { Product } from '../product.model';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from "@angular/forms"
import { MatFormFieldModule } from  "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [ MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class ProductCreateComponent implements OnInit {

  product: Product = {
     id: 0,
     name: "",
     price: 0.0,
  }

  constructor(private ps: ProductService, private router: Router){
  }

  /* Esse método é chamado quando o componente é criado */
  ngOnInit(): void {
  }
   
  /* Método responsável por salvar um produto na minha API fake */
  createProduct(){
      this.ps.create(this.product).subscribe(_ => {
          this.ps.showMessage("Produto criado")
          this.router.navigate(["/products"])
      });
  }
   
  cancel():void {
    this.router.navigate(["/products"])
  }
   
}
