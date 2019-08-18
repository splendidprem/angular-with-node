import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../core/services/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  products = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe(res => {
      this.products = res;
    });
  }

}
