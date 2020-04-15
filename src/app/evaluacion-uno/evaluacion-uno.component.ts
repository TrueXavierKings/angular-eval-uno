import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluacion-uno',
  templateUrl: './evaluacion-uno.component.html',
  styleUrls: ['./evaluacion-uno.component.css']
})
export class EvaluacionUnoComponent implements OnInit {
  correo: string;
  entradaValida: boolean;
  productos: { nombre: string, descripcion: string, precio: number, seleccionado: boolean }[] = [
    {nombre:'Beastmaster 3000', descripcion: 'Excelente artículo para los solitarios amantes del campo', precio: 100000, seleccionado: false},
    {nombre:'Energy Alien Drink', descripcion: 'En caso de que vaya a ser visitado por una experiencia de otro mundo', precio: 666, seleccionado: false},
    {nombre:'Glorious Black Hole', descripcion: 'Elemento especialmente diseñado para baños', precio: 69000, seleccionado: false},
    {nombre:'Super Party Despedida', descripcion: 'Robot especializado para despedidas de verdad', precio: 55000, seleccionado: false},
    {nombre:'Cuckeador 12Inch', descripcion: 'Solo para parejas con mucha confianza', precio: 130000, seleccionado: false}
  ];
  carrito: { id: number, nombre: string, precio: number }[];

  constructor() { }

  ngOnInit(): void {
    this.correo = '';
    this.entradaValida = false;
    this.carrito = [];
  }

  eliminarDelCarrito(idProducto) {
    let eliminado = this.carrito[idProducto];
    this.carrito.splice(idProducto,1);
    let resto = this.carrito.filter(obj => obj.id === eliminado.id);
    if(resto.length == 0) {
      this.productos[eliminado.id].seleccionado = false;
    }
  }

  agregarProducto(idProducto) {
    this.carrito.push(
    {
      id: idProducto,
      nombre: this.productos[idProducto].nombre,
      precio: this.productos[idProducto].precio
    });
    this.productos[idProducto].seleccionado = true;
  }

  entrar() {
    this.entradaValida = true;
  }

}
