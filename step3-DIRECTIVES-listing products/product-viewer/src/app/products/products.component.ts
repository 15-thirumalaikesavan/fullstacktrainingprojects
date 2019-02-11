import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = 'cart';
  products: any[] = [
    {
      "productId": 1,
      "productName": "ng-book",
      "price": 19.95,
      "rating": 3.2,
      "image": "/assets/images/ngbook.jpg"
      // "image": "/assets/images/angular.png"
    },
    {
      "productId": 2,
      "productName": "Pro Angular",
      "price": 32.99,
      "rating": 4.2,
      "image": "/assets/images/proangular.jpg"
    }
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
