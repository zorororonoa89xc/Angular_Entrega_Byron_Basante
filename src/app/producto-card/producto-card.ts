import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-producto-card',
  standalone: true,
  templateUrl: './producto-card.html',
  styleUrl: './producto-card.css'
})
export class ProductoCard {

  @Input() nombre: string = '';

  @Output() eliminar = new EventEmitter<void>();

  eliminarProducto() {
    this.eliminar.emit();
  }

}
