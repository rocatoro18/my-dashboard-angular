import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, signal } from '@angular/core';
import { ProductCardComponent } from './ui/product-card/product-card.component';
import { Product } from '../../../interfaces/product.interface';
import { interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-input-output',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './input-output.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class InputOutputComponent implements OnDestroy {

  public products = signal<Product[]>([
    {
      id: 1,
      name: 'Product 1',
      quantity: 0,
    },
    {
      id: 2,
      name: 'Product 2',
      quantity: 0,
    }
  ]);

  private intervalSubscription = interval(1000).pipe(
    tap(() => {
      this.products.update((products => [
        ...products,
        {
          id: products.length + 1,
          name: `Product ${products.length + 1}`,
          quantity: 0,
        }
      ]));
    }),
    // DESPUES DE 7 EMISIONES LIMPIAR Y NO HACER NADA MAS
    take(7)
    // ESTO SE VA A DISPARAR SIEMPRE Y CUANDO TENGAMOS UNA SUSCRIPCION ACTIVA
  ).subscribe();

  public updateProduct(product: Product, quantity: number){
    this.products.update((products) =>
      products.map((p) => p.id === product.id ? {...product, quantity} : p
    ))
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }

}