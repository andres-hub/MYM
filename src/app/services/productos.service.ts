import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto-interfase';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productoFiltrado: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos() {
    return new Promise(( resolve, reject) => {
      this.http.get('https://angular-html-74c79.firebaseio.com/productos_idx.json')
      .subscribe((resp: Producto[]) => {
             // console.log(resp);
        this.productos = resp;
        this.cargando = false;
        resolve();
       /* setTimeout(() => {
          this.cargando = false;
        }, 2000);*/
      });
    });
  }

  getProducto(id: string ) {
    return this.http.get(`https://angular-html-74c79.firebaseio.com/productos/${id}.json`);
  }
  buscarProducto(termino: string) {
    if (this.productos.length === 0) {
      // cargar productos
      this.cargarProductos().then(() => {
        // ejecutar despues de tener los productos
        // Aplicar filtro
        this.filtrarProductos(termino);
      });
    } else {
      // Plicar filtros
      this.filtrarProductos(termino);
    }
    console.log(this.productoFiltrado);
  }

  private filtrarProductos( termino: string) {
    // console.log(this.productos);
    this.productoFiltrado = [];
    termino = termino.toLocaleLowerCase();
    this.productos.forEach(prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if (prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0) {
        this.productoFiltrado.push(prod);
        console.log(this.productoFiltrado);
      }
    });
  }
}
