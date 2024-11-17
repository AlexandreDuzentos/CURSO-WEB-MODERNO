import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { CurrencyPipe, NgForOf } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-read',
  standalone: true,
  imports: [ NgForOf, MatTableModule, CurrencyPipe, RouterLink ],
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.css',
})
export class ProductReadComponent implements OnInit {

  products: Product[]
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private ps: ProductService){}

  ngOnInit(): void {
    this.ps.read().subscribe((products) => {
       this.products = products
       console.log(products)
    })
  }


}
