import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar"
import { HttpClient } from "@angular/common/http"
import { Product } from './product.model';
import { catchError, EMPTY, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl =  "http://localhost:3001/products"

  /*
   Os parâmetros definidos no construtor são parâmetros que precisam
   ter seus objetos injetados pelo Angular.
   */
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
     /*
      O método open é responsável por criar um elemento
      na DOM de forma dinâmica e atribuir estilo a ele
      e definir um tempo de exibição para ele ser exibido.
    */
      this.snackBar.open(msg, 'x', {
        duration: 1000 * 60 * 60,
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: ['msg-success']
      })
  }

  /* Método responsável por salvar um produto na minha API fake */
  create(product: Product): Observable<Product> {
    /*
     O pipe é uma função do Observable, que pode receber como parâmetro
     operadores(map, catchError e outros)
     */
     return this.http.post<Product>(this.baseUrl, product).pipe(
      map(obj => obj), catchError(e => this.errorHandler(e))
     )
  }

  /* Método responsável por tratar um erro */
  errorHandler(e: any): Observable<any> {
     this.showMessage("Ocorreu um erro!")
     return EMPTY;
  }

  /* Método responsável por ler todos os produtos da minha API Fake */
  read(): Observable<Product[]> {
     return this.http.get<Product[]>(this.baseUrl)
  }

  /* Método responsável por ler um produto pelo id na minha API Fake */
  readById(id: string): Observable<Product> {
       const url = `${this.baseUrl}/${id}`
       return this.http.get<Product>(url)
  }

  /*
   Método responsável por atualizar um produto  pelo id na minha API fake.

   Usamos o verbo http put quando queremos atualizar todos os atributos de um
   objeto, e o patch quando queremos atualizar apenas alguns atributos do
   objeto.
  */
  update(product: Product): Observable<Product>{
     const url = `${this.baseUrl}/${product.id}`
      return this.http.put<Product>(url, product);
  }


  /* Método responsável por eliminar um produto pelo id */
  deleteById(id: number): Observable<Product>{
      const url =  `${this.baseUrl}/${id}`
      return this.http.delete<Product>(url)
  }


}
