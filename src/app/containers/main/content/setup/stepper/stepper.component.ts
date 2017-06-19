import {Component, ViewChild, ElementRef, NgZone} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";

declare const gapi: any;

@Component({
  selector: 'stepper',
  templateUrl: 'stepper.component.html',
  styleUrls: ['stepper.component.css']
})

export class StepperComponent {
  @ViewChild('stepper') stepper: ElementRef;
  googleProfile;

  myControl = new FormControl();
  filteredOptions: Observable<User[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .startWith(null)
      .map(user => user && typeof user === 'object' ? user.name : user)
      .map(name => name ? this.filter(name) : this.options.slice());
  }

  filter(name: string): User[] {
    return this.options.filter(option => new RegExp(`^${name}`, 'gi').test(option.name));
  }

  displayFn(user: User): string {
    return user ? user.name : user;
  }

  constructor(ngZone: NgZone, private router: Router) {
    window['onSignIn'] = (googleUser) => ngZone.run(() => this.onSignIn(googleUser));
  }

  onNext(){
    if(this.myControl.value){
      this.stepper.nativeElement.MaterialStepper.next();
      localStorage.setItem('user', this.myControl.value.name)
    } else {
      this.stepper.nativeElement.MaterialStepper.error('You Must Select Your Name');
    }
  }

  onDone(){
    this.stepper.nativeElement.MaterialStepper.next();

    this.router.navigate(['/']);
  }

  onBack(){
    this.stepper.nativeElement.MaterialStepper.back();
  }

  onSignIn(googleUser){


    this.googleProfile = googleUser;

    if(googleUser.getGrantedScopes().indexOf('spreadsheets.readonly') === -1){
      let options = new gapi.auth2.SigninOptionsBuilder(
        {'scope': 'email https://www.googleapis.com/auth/spreadsheets.readonly'});

      googleUser.grant(options).then(
        function(success){
          console.log(JSON.stringify({message: "success", value: success}));
        },
        function(fail){
          alert(JSON.stringify({message: "fail", value: fail}));
        });
    }

    this.stepper.nativeElement.MaterialStepper.next();

    /*let a = this._http.get('https://content-sheets.googleapis.com/v4/spreadsheets/1UdJ_YVe1YD2PYUv7FRwSOAHHMImk13SVNJu8US8tFk8?includeGridData=false');
    a.subscribe(data => {
      console.log(data);
    });*/
  }

  options = [
    new User('Agnė'),
    new User('Aidas'),
    new User('Albertas L.'),
    new User('Aldona'),
    new User('Alisa'),
    new User('Andrius Juškėnas'),
    new User('Andrius Palivonas'),
    new User('Andrius T.'),
    new User('Andrius Žid.'),
    new User('Arminas '),
    new User('Arnas R.'),
    new User('Artūras A.'),
    new User('Artūras Vitkauskas'),
    new User('Arūnas B.'),
    new User('Arūnas Paš.'),
    new User('Arvydas A.'),
    new User('Asta Dagienė'),
    new User('Asta P-K'),
    new User('Audrius Jadzg.'),
    new User('Audrius Mičiulis'),
    new User('Audrius Ž.'),
    new User('Audrūnas'),
    new User('Augustas '),
    new User('Augustinas Bacvinka'),
    new User('Benas'),
    new User('Dainius Ar.'),
    new User('Daiva'),
    new User('Darius K.'),
    new User('Deimantė'),
    new User('Donatas K.'),
    new User('Donatas Pusvaškis'),
    new User('Donatas Utmanas'),
    new User('Dovydas Babickas'),
    new User('Dovydas Čerkus'),
    new User('Edmundas'),
    new User('Edvinas A.'),
    new User('Eglė Vain.'),
    new User('Eimantas Zub.'),
    new User('Eimantas Žl.'),
    new User('Evgenijus'),
    new User('Gediminas B.'),
    new User('Gedas S.'),
    new User('Gediminas Kurp.'),
    new User('Gediminas Š.'),
    new User('Guoda Rug.'),
    new User('Ignas P.'),
    new User('Ignas Sed.'),
    new User('Indrė Č.'),
    new User('Jaunius'),
    new User('Jolita G.'),
    new User('Julius B.'),
    new User('Justas L.'),
    new User('Justinas J.'),
    new User('Justinas M.'),
    new User('Justinas S.'),
    new User('Justė L.'),
    new User('Henrikas'),
    new User('Kęstutis B.'),
    new User('Laimonas'),
    new User('Laura Jank.'),
    new User('Liepa T.'),
    new User('Lina Pet.'),
    new User('Linas M.'),
    new User('Linas Nar.'),
    new User('Lukas Astrovas'),
    new User('Lukas Jakubauskas'),
    new User('Mantas G.'),
    new User('Mantas J.'),
    new User('Mantas K.'),
    new User('Mantas M.'),
    new User('Mantas Nakt.'),
    new User('Marius'),
    new User('Marius Malcius'),
    new User('Marius Semėnas'),
    new User('Marius R.'),
    new User('Martinas Gar.'),
    new User('Martynas L.'),
    new User('Martynas Kan.'),
    new User('Milda'),
    new User('Mindaugas'),
    new User('Mindaugas Ale.'),
    new User('Mindaugas R.'),
    new User('Mindaugas Šal.'),
    new User('Monica S.'),
    new User('Nikolaj'),
    new User('Osvaldas'),
    new User('Paulius G.'),
    new User('Paulius M.'),
    new User('Paulius H.'),
    new User('Paulius Sabeckis'),
    new User('Povilas J.'),
    new User('Ramūnas'),
    new User('Rasa M.'),
    new User('Renata L.'),
    new User('Renata Sak.'),
    new User('Rima Linaburgytė'),
    new User('Rimantas B.'),
    new User('Rimvydas P.'),
    new User('Rimvydas Urb.'),
    new User('Rytis'),
    new User('Rūta Dam.'),
    new User('Rūtenis'),
    new User('Saulius Balb.'),
    new User('Saulius K.'),
    new User('Saulius Bekeris'),
    new User('Vaclovas'),
    new User('Vaidas Semėnas'),
    new User('Vidmantas'),
    new User('Viktoras'),
    new User('Viktorija S.'),
    new User('Vilma L.'),
    new User('Virginijus T.'),
    new User('Vytautas'),
    new User('Tadas B.'),
    new User('Tadas Ž.'),
    new User('Tautvydas'),
    new User('Titas'),
    new User('Tomas Kri.'),
    new User('Tomas E.'),
    new User('Tomas Saf.'),
    new User('Tomas Str.'),
    new User('Žilvinas'),
    new User('Žymantas ')
  ];
}

class User {
  public name;

  constructor(name: string){
    this.name = name;
  }
}
