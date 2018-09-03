import { Component, OnInit } from '@angular/core';
import { Product } from '../models/typings';
import { ProductService } from './services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'products.component.html',
    styleUrls: ['products.component.scss']
})
export class ProductsComponent implements OnInit {

     clients: Product[] = [];
     selectedId: string;

    constructor (private route: ActivatedRoute, private clientService: ProductService) { }
    ngOnInit(): void {
        this.clients = this.route.snapshot.data['clients'] || {} as Product[];
    }

    isSelected(client: Product) {
        return client.id === this.selectedId;
    }

    selectRow(id: string) {
        this.selectedId = id;
    }
}
