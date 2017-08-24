import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

@Component({
	selector: 'prodcuto-detail',
	templateUrl: '../views/producto-detail.html',
	providers: [ProductoService]
})
export class ProductoDetailComponent {
	public producto: Producto;

	constructor(
		private _productoService: ProductoService,
		private _route: ActivatedRoute,
		private _router: Router
	) {}

	ngOnInit() {
		console.log("Se ha cargado el componente producto-detail.component.ts");
	}
}