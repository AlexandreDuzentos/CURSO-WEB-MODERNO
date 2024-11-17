import { Component} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class ProductUpdateComponent {

  product: Product = {
     name: "",
     price: 0.0,
     id: 1
  }

  constructor(private ps: ProductService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void{
     /* Obtendo o id passado como argumento na URL */
     const id = this.route.snapshot.paramMap.get('id')

     if(id != null){
       this.ps.readById(id).subscribe(product => {
         this.product = product
       })
     }
  }

  updateProduct():void {
    this.ps.update(this.product).subscribe((product) => {
       this.ps.showMessage("Produto atualizado com sucesso!")
    })
    this.router.navigate(["/products"])
  }

  cancel():void {
     this.router.navigate(["/products"])
  }


}
