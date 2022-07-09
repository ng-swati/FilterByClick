import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products=[
    {
      id:1,
      name:"iphone",
      price:120000,
      image:"assets/img/mobile1.jpg",
      category:"mobile"

    },
    {
      id:1,
      name:"redmi",
      price:150000,
      image:"assets/img/mobile2.jfif",
      category:"mobile"

    },
    {
      id:1,
      name:"iphone",
      price:120000,
      image:"assets/img/fridge1.jpg",
      category:"fridge"

    },
    {
      id:1,
      name:"iphone",
      price:120000,
      image:"assets/img/fridge2.jpg",
      category:"fridge"

    },
    {
      id:1,
      name:"iphone",
      price:120000,
      image:"assets/img/tv1.jpg",
      category:"tv"

    },
    {
      id:1,
      name:"iphone",
      price:120000,
      image:"assets/img/tv2.jpg",
      category:"tv"

    }
  ]

  ProductsArrayForFilter=this.products
  filterByCategory(Rcategory:string)
  {
    // this.products=this.products.filter(product => product.category === Rcategory)
    if(Rcategory==="all")
    {
      this.ProductsArrayForFilter=this.products
    }
    else{
      this.ProductsArrayForFilter=this.products.filter(product=>product.category===Rcategory)
    }

  }

}
