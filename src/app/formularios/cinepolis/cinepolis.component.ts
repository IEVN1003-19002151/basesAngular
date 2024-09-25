import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css'] 
})
export class CinepolisComponent {
  nombre: string = '';  
  cantidadCompradores: number = 0;  
  cantidadBoletos: number = 0;  
  tieneTarjetaCineco: boolean = false;  
  valorTotal: number = 0;  
  precioBoleto: number = 12.00;  
  detallesCompra: string = '';  
  mostrarDetalles: boolean = false; 

 
  calcularTotal() {
    if (this.cantidadBoletos <= 0 || this.cantidadCompradores <= 0) {
      alert('Debe ingresar una cantidad válida de compradores y boletos.');
      return;
    }

    if (this.cantidadBoletos > this.cantidadCompradores * 7) {
      alert('No puede comprar más de 7 boletos por persona.');
      return;
    }

    let total = this.cantidadBoletos * this.precioBoleto;

   
    if (this.cantidadBoletos > 2)
      total *= 0.90; {
      if (this.cantidadBoletos > 5) {
        total *= 0.85;  /* Descuento sera del 15% */
      } else if (this.cantidadBoletos >= 3) {
        total *= 0.90;   /* Descuento  sera del 10% */
      }

      /* Descuento adicional si tiene tarjeta Cineco */
      if (this.tieneTarjetaCineco) {
        total *= 0.90;  /* Descuento adicional sera del 10% */
      }
    }
    

    this.valorTotal = total;  
    this.DetallesCompra();  
    this.mostrarDetalles = true; 
  }

  
  DetallesCompra() {
    const tarjetaCineco = this.tieneTarjetaCineco ? 'Sí' : 'No';
    this.detallesCompra = `
    ¡Gracias por su compra, ${this.nombre}!
    Cantidad de Boletos: ${this.cantidadBoletos}
    Tarjeta Cineco: ${tarjetaCineco}
    Precio Total: ${this.valorTotal.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}
      
    Cinepolis le agradece por su preferencia.
    ¡Disfrute la función!
    `;
  }

  
  limpiar() {
    this.nombre = '';
    this.cantidadCompradores = 0;
    this.cantidadBoletos = 0;
    this.tieneTarjetaCineco = false;
    this.valorTotal = 0;
    this.detallesCompra = '';
    this.mostrarDetalles = false; 
  }
}
