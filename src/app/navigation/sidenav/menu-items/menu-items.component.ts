import {Component, Input} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'menu-items',
  templateUrl: 'menu-items.component.html',
  styleUrls: ['menu-items.component.css']
})

export class MenuItemsComponent {
  @Input() showingSettings: boolean;

  days: Object[] = [
    {'id': 'monday', 'displayName': 'Pirmadienis'},
    {'id': 'tuesday', 'displayName': 'Antradienis'},
    {'id': 'wednesday', 'displayName': 'Trečiadienis'},
    {'id': 'thursday', 'displayName': 'Ketvirtadienis'},
    {'id': 'friday', 'displayName': 'Penktadienis'}
  ];

  onClick(day): void {
    this.router.navigate(['/lunch', day.id]);
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe((params: Params) => {
      let day = params['day'];
      console.log(day);
    });
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }
}
