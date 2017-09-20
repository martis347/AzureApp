import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  dishes = [{
    name: '',
    price: 0
  }];

  constructor() { }

  ngOnInit() {
  }

}
