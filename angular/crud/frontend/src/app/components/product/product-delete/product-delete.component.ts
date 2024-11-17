import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  standalone: true,
  imports: [MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class ProductDeleteComponent implements OnInit {
   
  product: Product = {
    name: "",
    price: 0.0,
    id: 0
  }

  constructor(private ps: ProductService, private router: Router, private route: ActivatedRoute){

  }

  ngOnInit(): void {
     const id = this.route.snapshot.paramMap.get("id")

     if(id != null) {
        this.ps.readById(id).subscribe(product => {
        this.product = product
     })
    }
    
  }

  deleteProduct(): void {
     this.ps.deleteById(this.product.id).subscribe(product => {
        this.ps.showMessage("Produto deletado com sucesso!")
        this.router.navigate(["/products"])
     })
  }

  cancel(){
    this.router.navigate(["/products"])
  }

}
