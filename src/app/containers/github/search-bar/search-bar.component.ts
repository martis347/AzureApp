import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {GithubService} from "../../../services/api/github/github.service";

@Component({
  selector: 'search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrls: ['search-bar.component.css']
})

export class SearchBarComponent implements OnInit{
  constructor(private githubService: GithubService) {
  }

  @Output() onSearch: EventEmitter <any> = new EventEmitter();

  ngOnInit(): void {
    console.log(this.githubService.test());
  }

  query: string;
  isLoading: boolean;

  search(event): void {
    event.preventDefault();
    this.isLoading = true;
    setTimeout(() => {
      this.githubService.getUserData(this.query).subscribe(result => {
        this.onSearch.emit(result);
        this.isLoading = false;
      }, () => this.isLoading = false);
    }, 500);
  }
}
