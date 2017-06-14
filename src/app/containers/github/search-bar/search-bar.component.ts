import {Component, OnInit} from '@angular/core';
import {GithubService} from "../../../services/api/github/github.service";

@Component({
  selector: 'search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrls: ['search-bar.component.css']
})

export class SearchBarComponent implements OnInit{
  constructor(private githubService: GithubService) {
  }

  ngOnInit(): void {
    console.log(this.githubService.test());
  }
}
