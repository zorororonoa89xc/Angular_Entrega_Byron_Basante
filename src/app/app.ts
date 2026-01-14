import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductoCard } from './producto-card/producto-card';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductoCard, DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('Productos-app');
  protected readonly autor = signal('Ejercicio Angular');

  protected readonly productos = signal([
    'Laptop',
    'Teclado',
    'Mouse',
    'Monitor'
  ]);

  protected readonly mostrarLista = signal(true);

  // Variable para capturar lo que el usuario escribe
  protected readonly nuevoProducto = signal('');

  toggleLista() {
    this.mostrarLista.update(valor => !valor);
  }

  // Función para agregar un producto a la lista
  agregarProducto() {
    const valor = this.nuevoProducto().trim();

    if (valor !== '') {
      this.productos.update(lista => [...lista, valor]);
      this.nuevoProducto.set('');
    }
  }

  eliminarProducto(producto: string) {
  this.productos.update(lista =>
    lista.filter(item => item !== producto)
  );
}

ordenarAsc() {
  this.productos.update(lista =>
    [...lista].sort((a, b) => a.localeCompare(b))
  );
}

ordenarDesc() {
  this.productos.update(lista =>
    [...lista].sort((a, b) => b.localeCompare(a))
  );
}

totalProductos() {
  return this.productosFiltrados().length;
}

// Texto de búsqueda
protected readonly filtro = signal('');

productosFiltrados() {
  const texto = this.filtro().toLowerCase();

  return this.productos().filter(producto =>
    producto.toLowerCase().includes(texto)
  );
}

protected readonly fechaActual = signal(new Date());

}
