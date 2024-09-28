import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-resistencia',
  templateUrl: './resistencia.component.html',
  styleUrls: ['./resistencia.component.css']
})
export class ResistenciaComponent {
  resistenciaForm: FormGroup;
  resistenciaValor: number = 0;
  resistenciaMin: number = 0;
  resistenciaMax: number = 0;

  colorColores: { [key: string]: number } = {
    Negro: 0, Café: 1, Rojo: 2, Naranja: 3, Amarillo: 4,
    Verde: 5, Azul: 6, Morado: 7, Gris: 8, Blanco: 9
  };
  multiplicarValores: { [key: string]: number } = {
    Negro: 1, Café: 10, Rojo: 100, Naranja: 1000, Amarillo: 10000,
    Verde: 100000, Azul: 1000000, Morado: 10000000,
    Gris: 100000000, Blanco: 1000000000
  };
  toleranciaValores: { [key: string]: number } = {
    Oro: 5, Plata: 10
  };
  constructor(private fb: FormBuilder) {
    this.resistenciaForm = this.fb.group({
      PrimeraBanda: ['Negro'],
      SegundaBanda: ['Negro'],
      TerceraBanda: ['Negro'],
      Tolerancia: ['Oro']
    });
  }
  calcularResistencia() {
    const digito1 = this.colorColores[this.resistenciaForm.value.PrimeraBanda];
    const digito2 = this.colorColores[this.resistenciaForm.value.SegundaBanda];
    const multiplicar = this.multiplicarValores[this.resistenciaForm.value.TerceraBanda];
    const tolerancia = this.toleranciaValores[this.resistenciaForm.value.Tolerancia];

    const resistencia = (digito1 * 10 + digito2) * multiplicar;
    this.resistenciaValor = resistencia;
    this.resistenciaMax = resistencia + (resistencia * tolerancia / 100);
    this.resistenciaMin = resistencia - (resistencia * tolerancia / 100);
  }
  getColorClass(color: string): string {
    const colorClassMap: { [key: string]: string } = {
      'Negro': 'negro',
      'Café': 'cafe',
      'Rojo': 'rojo',
      'Naranja': 'naranja',
      'Amarillo': 'amarillo',
      'Verde': 'verde',
      'Azul': 'azul',
      'Morado': 'morado',
      'Gris': 'gris',
      'Blanco': 'blanco',
      'Oro': 'oro',
      'Plata': 'plata'
    };
    return colorClassMap[color] || '';
  }
}
