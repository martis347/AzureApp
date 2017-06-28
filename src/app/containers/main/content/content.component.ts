import {Component, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SelectedChipsComponent} from "./selected-chips/selected-chips.component";
import {MdSnackBar, MdSnackBarConfig} from "@angular/material";

@Component({
  selector: 'app-content',
  templateUrl: 'content.component.html',
  styleUrls: ['content.component.css']
})

export class ContentComponent {
  @ViewChild('chips') chips: SelectedChipsComponent;

  currentDay: string = 'monday';
  showLoader: boolean = false;
  categories: string[];
  displayedCategories: string[];
  price: number = 0;


  constructor(private activatedRoute: ActivatedRoute, private snackBar: MdSnackBar) {
    this.activatedRoute.params.subscribe(params => {
      this.showLoader = true;
      setTimeout(() => this.showLoader = false, 1200);
      this.currentDay = params['date'];
    });

    this.categories = this.red.map(item => {return item.category}).filter(this.onlyUnique);
    this.displayedCategories = [this.categories[0], 'zalieji']
  }

  onPriceChange(newPrice){
    this.price = newPrice;
  }

  public onConfirmClick() {
    this.snackBar.open('Successfully Ordered!', 'OK', {duration: 4000} );
  }

  private onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  green: any[] = [
    {name: 'RAUGINTŲ KOPŪSTŲ SRIUBA', price: '1.00', dishType: 'side'},
    {name: 'BULVIŲ PLOKŠTAINIS', price: '2.40', dishType: 'main'},
    {name: 'KIAULIENOS GULIAŠAS', price: '2.70', dishType: 'main'},
    {name: 'Sultinys su kibinu', price: '1.90', dishType: 'main'},
    {name: 'Sultinys', price: '1.00', dishType: 'side'},
    {name: 'Varškės spurga', price: '0.40', dishType: 'side'},
    {name: 'Silkė su karšta bulve', price: '2.00', dishType: 'main'}
  ];

  red: any[] = [{
    name: 'Burokėlių',
    price: '1.00',
    category: 'Dienos pietūs',
    dishType: 'side'
  }, {
    name: 'Žirnių su šonine',
    price: '1.00',
    category: 'Dienos pietūs',
    dishType: 'side'
  }, {
    name: 'Šaltibarščiai',
    price: '1.50',
    category: 'Dienos pietūs',
    dishType: 'side'
  }, {
    name: 'Cepelinai + Burokėlių ARBA Žirnių su šonine',
    price: '2.90',
    category: 'Dienos pietūs',
    dishType: 'combined',
    side: ['Burokėlių', 'Žirnių su šonine'],
    main: ['Cepelinai']
  }, {
    name: 'Maltinis su daržovių padažu + Burokėlių ARBA Žirnių su šonine',
    price: '2.90',
    category: 'Dienos pietūs',
    dishType: 'combined',
    side: ['Burokėlių', 'Žirnių su šonine'],
    main: ['Maltinis su daržovių padažu']
  }, {
    name: 'Lietiniai su kumpiu ir sūriu + Burokėlių ARBA Žirnių su šonine',
    price: '2.90',
    category: 'Dienos pietūs',
    dishType: 'combined',
    side: ['Burokėlių', 'Žirnių su šonine'],
    main: ['Lietiniai su kumpiu ir sūriu']
  }, {
    name: 'Karbonadas su daržovių padažu + Burokėlių ARBA Žirnių su šonine',
    price: '3.20',
    category: 'Dienos pietūs',
    dishType: 'combined',
    side: ['Burokėlių', 'Žirnių su šonine'],
    main: ['Karbonadas su daržovių padažu']
  }, {
    name: 'Nugarinė su pikant. kepsnių padažu + Burokėlių ARBA Žirnių su šonine',
    price: '3.20',
    category: 'Dienos pietūs',
    dishType: 'combined',
    side: ['Burokėlių', 'Žirnių su šonine'],
    main: ['Nugarinė su pikant. kepsnių padažu']
  }, {
    name: 'Studentų pica (sūris, kumpis, pievagr., pomid.) + Burokėlių ARBA Žirnių su šonine',
    price: '3.30',
    category: 'Dienos pietūs',
    dishType: 'combined',
    side: ['Burokėlių', 'Žirnių su šonine'],
    main: ['Studentų pica (sūris, kumpis, pievagr., pomid.)']
  }, {
    name: 'Cepelinai + Šaltibarščiai',
    price: '3.90',
    category: 'Dienos pietūs',
    dishType: 'combined',
    side: ['Šaltibarščiai'],
    main: ['Cepelinai']
  }, {
    name: 'Maltinis su daržovių padažu + Šaltibarščiai',
    price: '3.90',
    category: 'Dienos pietūs',
    dishType: 'combined',
    side: ['Šaltibarščiai'],
    main: ['Maltinis su daržovių padažu']
  }, {
    name: 'Lietiniai su kumpiu ir sūriu + Šaltibarščiai',
    price: '3.90',
    category: 'Dienos pietūs',
    dishType: 'combined',
    side: ['Šaltibarščiai'],
    main: ['Lietiniai su kumpiu ir sūriu']
  }, {
    name: 'Karbonadas su daržovių padažu + Šaltibarščiai',
    price: '4.20',
    category: 'Dienos pietūs',
    dishType: 'combined',
    side: ['Šaltibarščiai'],
    main: ['Karbonadas su daržovių padažu']
  }, {
    name: 'Studentų pica (sūris, kumpis, pievagr., pomid.) + Šaltibarščiai',
    price: '4.30',
    category: 'Dienos pietūs',
    dishType: 'combined',
    side: ['Šaltibarščiai'],
    main: ['Studentų pica (sūris, kumpis, pievagr., pomid.)']
  }, {
    name: 'Itališkos salotos (salotos, pomidorai, raud. svogūnas, ž. alyvuogės, saulėje džiovinti pomidorai, žolelių padažas)',
    price: '3.00',
    category: 'Salotos',
    dishType: 'main'
  }, {
    name: 'Kumpio salotos (salotos, kumpis, pomidorai, agurkai, paprika, kiaušinis, majonezo baziliko padažas)',
    price: '3.00',
    category: 'Salotos',
    dishType: 'main'
  }, {
    name: 'Gaiviosios vištienos salotos (salotos, obuoliai, sūris, paprika, ananasai, vištiena, užpilas)',
    price: '3.00',
    category: 'Salotos',
    dishType: 'main'
  }, {
    name: 'Vištienos salotos (salotos, vištiena, agurkas, avokadas, apelsinas, saldžiarūgštis padažas)',
    price: '3.00',
    category: 'Salotos',
    dishType: 'main'
  }, {
    name: 'Makaronai su sūrio padažu',
    price: '2.80',
    category: 'Makaronai',
    dishType: 'main'
  }, {
    name: 'Makaronai su aštriu mėsos padažu',
    price: '2.90',
    category: 'Makaronai',
    dishType: 'main'
  }, {
    name: 'Makaronai su šoninės padažu',
    price: '2.90',
    category: 'Makaronai',
    dishType: 'main'
  }, {
    name: 'Makaronai su vištienos, pievagrybių ir grietinėlės špinatų padažu',
    price: '2.90',
    category: 'Makaronai',
    dishType: 'main'
  }, {
    name: 'Lietiniai blyneliai su sūriu',
    price: '2.90',
    category: 'Karštieji',
    dishType: 'main'
  }, {
    name: 'Lietiniai blyneliai su varške',
    price: '2.90',
    category: 'Karštieji',
    dishType: 'main'
  }, {
    name: 'Lietiniai blyneliai su vištiena, pievagrybiais ir sūriu',
    price: '2.90',
    category: 'Karštieji',
    dishType: 'main'
  }
  ]

}
