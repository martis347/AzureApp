import {Component}  from '@angular/core';

@Component({
  selector: 'github',
  templateUrl: 'github.component.html',
  styleUrls: ['github.component.css']
})

export class GithubComponent{
  data: any;

  displayResults(data: any): void{
    console.log(data);
    this.data = data;
  }
}
