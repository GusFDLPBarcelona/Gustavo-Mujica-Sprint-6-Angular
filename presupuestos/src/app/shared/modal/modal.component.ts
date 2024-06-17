import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  modalVisible = false;
  titulo: string = '';
  contenido: string = '';

  abrirModal(tipo: string): void {
    console.log("abrir hijo", tipo);
    if (tipo === 'paginas') {
      this.titulo = 'Número de páginas';
      this.contenido = 'Elija la cantidad de páginas que desea en su sitio web. ' +
        'El presupuesto inicial incluye una página y un idioma.';
    } else if (tipo === 'idiomas') {
      this.titulo = 'Número de idiomas';
      this.contenido = 'Elija la cantidad de idiomas que desea en su sitio web. ' +
        'El presupuesto inicial incluye una página y un idioma.';
    }
    this.modalVisible = true;
    console.log(this.modalVisible);
  }

  cerrarModal(): void {
    this.modalVisible = false;
  }
}
