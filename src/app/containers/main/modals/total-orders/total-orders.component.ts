import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import {MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'total-orders',
  templateUrl: './total-orders.component.html',
  styleUrls: ['./total-orders.component.css']
})
export class TotalOrdersComponent implements OnInit {
  displayedColumns = ['dishName', 'count'];
  dataSource: MyDataSource;
  @ViewChild('filter') filter: ElementRef;

  constructor(@Inject(MD_DIALOG_DATA) private observableData: Observable<any>) { }

  ngOnInit() {
    this.dataSource = new MyDataSource(this.observableData);
  }
}

export class MyDataSource extends DataSource<any> {
  result: Observable<any>;

  constructor(private observableData: Observable<any>) {
    super();
    this.result = this.observableData;
  }

  connect(): Observable<any> {
    return this.result.map(r => {
      return r.json();
    });
  }

  disconnect() {}
}
