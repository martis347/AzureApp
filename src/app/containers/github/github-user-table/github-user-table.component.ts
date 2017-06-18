import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'github-user-table',
  templateUrl: 'github-user-table.component.html'
})

export class GithubUserTableComponent implements OnInit {
  @Input() user: any = {};

  ngOnInit(): void {
  }
  constructor() { }
}
