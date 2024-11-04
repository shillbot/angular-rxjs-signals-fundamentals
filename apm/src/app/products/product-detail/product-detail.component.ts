import { Component, inject } from "@angular/core";
import { NgIf, NgFor, CurrencyPipe, AsyncPipe } from "@angular/common";
import { catchError, EMPTY } from "rxjs";
import { Product } from "../product";
import { ProductService } from "../product.service";

@Component({
	selector: "pm-product-detail",
	templateUrl: "./product-detail.component.html",
	standalone: true,
	imports: [AsyncPipe, NgIf, NgFor, CurrencyPipe]
})
export class ProductDetailComponent {
	errorMessage = "";
	private productService = inject(ProductService);

	// Product to display
	product$ = this.productService.product$.pipe(
		catchError((err) => {
			this.errorMessage = err;
			return EMPTY;
		})
	);

	// Set the page title
	// pageTitle = this.product ? `Product Detail for: ${this.product.productName}` : "Product Detail";
	pageTitle = "Product Detail";

	addToCart(product: Product) {}
}
