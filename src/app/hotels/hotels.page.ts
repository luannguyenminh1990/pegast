import { Component, OnInit } from '@angular/core';
import { PegastService } from '../services/pegast.service';
import { iHotelCountry, iHotel } from '../interface/hotel.interface';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.page.html',
  styleUrls: ['./hotels.page.scss'],
})
export class HotelsPage implements OnInit {
  HOTEL_REFS: iHotel;;
  HOTELS: any[];
  REFS: any;
  isReady = false;
  countries: iHotelCountry[] = [
    { ISO: "TH", TimeZone: '7', OptionalLanguageNames: [], Id: '164', Name: "Thái Lan", Groups: '66' },
    { ISO: "VN", TimeZone: '7', OptionalLanguageNames: [], Id: '156', Name: "Việt Nam", Groups: '64' }
  ];
  SELECTED_COUNTRY: iHotelCountry = this.countries[0];
  ISO: string;
  Location;
  ChildAges: number = 0;
  numOfAdult: number = 0;
  OPTIONS;
  LOC: any;
  LOCATIONS = [];
  items: Array<{ value: number, text: string, checked: boolean }> = [];
  // item: { value: number, text: string, checked: boolean } = { value: 0, text: '', checked: false};
  itemkey;
  Countries = [
    { name: 'Vietnam', id: "VN"},
    { name: 'Thailand', id: 'TH'}
  ]
  selectedCountries;
  constructor(
    private pegastService: PegastService) {
    this.items.push({ value: 1, text: 'Super Distributor', checked: false });
    this.items.push({ value: 2, text: 'Distributor', checked: false });
    this.items.push({ value: 3, text: 'Retailer', checked: false });
    this.items.push({ value: 4, text: 'End User', checked: false });
    console.log(this.items)
  }

  ngOnInit() {
    // this.pegastService.getHotelSearchOptions();
    this.getHotelSearchOptions();
    this.searchHotelOptions();
    this.searchHotelsx();
  }

  searchHotelOptions(){
    this.pegastService.hotelSearchOptionsGet()
    .subscribe((data: any)=>{
      console.log(data);

      let HOTELS: any[] = data.HOTELS;
      this.REFS = data.REFS;
      HOTELS.forEach(HOTEL=>{
        HOTEL['DETAIL'] = this.convertHotel(HOTEL.HotelId);
        HOTEL['_MEALS'] = this.convertMeals(HOTEL.MealIds.int);
      })
      console.log(HOTELS);
      this.HOTELS = HOTELS;
      setTimeout(() => {
        this.isReady = true;
      }, 1000);
    })
  }

  convertMeals(MEAL_IDS: any[]){
    let RESULTS = [];
    if(MEAL_IDS.length>0){
      MEAL_IDS.forEach(MEAL => {
        RESULTS.push(this.REFS.Meals.Meal.find(item => item.Id == MEAL ))
      })
    }
    return RESULTS;
  }

  convertHotel(HOTELID){
    let HOTEL = this.REFS.Hotels.Hotel.find(item=> item.Id == HOTELID);
    console.log(HOTEL);
    HOTEL['_CategoryId'] = this.REFS.HotelCategories.HotelCategory.find(item => item.Id == HOTEL.CategoryId );
    HOTEL['_LocationAreaId'] = this.REFS.LocationAreas.LocationArea.find(item => item.Id == HOTEL.LocationAreaId );
    HOTEL['_LocationId'] = this.REFS.Locations.Location.find(item => item.Id == HOTEL.LocationId );
    
    // for AttributeIds
    if(HOTEL.AttributeIds.int){
      let ATTs = [];
      HOTEL.AttributeIds.int.forEach(ItemId => {
        ATTs.push(this.REFS.HotelAttributes.HotelAttribute.find(item=> item.Id == ItemId))
      });
      HOTEL['_AttributeIds'] = ATTs;
    }else{
      HOTEL['_AttributeIds'] = [];
    }
    return HOTEL;
  }

  searchHotelsx(){
    this.pegastService.hotelsSearch()
    .subscribe((data)=>{
      console.log(data);
    })
  }


  getHotelSearchOptions() {
    this.HOTELS = [];
    this.LOCATIONS = [];
    let Groups = this.SELECTED_COUNTRY.Groups;
    let CountryId = this.SELECTED_COUNTRY.Id
    this.pegastService.getHotelSearchOptions(Groups, [CountryId])
      .subscribe(data => {
        this.OPTIONS = data;
        this.LOCATIONS = this.OPTIONS.Locations;
        console.log(this.OPTIONS);
      })
  }

  selectCountry() {
    console.log('select');
    this.SELECTED_COUNTRY = this.countries.filter(ct => ct.ISO == this.ISO)[0];
    console.log(this.SELECTED_COUNTRY);
    this.getHotelSearchOptions();
  }

  selectLocation1(loc) {
    console.log(loc.value);
  }
  selectLocation(){
    console.log(this.LOC, this.LOC.Name);
  }

  selectLocation2(){
    console.log(this.LOC);
  }

  doSplit(STR: string) {
    let res = STR.split('|')
    console.log(res);
    return this.doCovert(res);
  }

  doCovert(Arr: string[]) {
    let a = Arr.map(a => ({ Id: a.split('#')[0], Name: a.split('#')[1] }))
    // console.log(a);
    return a;
  }

  searchHotels() {
    let CountryId = this.SELECTED_COUNTRY.Id;
    let Data = {
      CountryIds: [CountryId],
      numOfAdult: this.numOfAdult,
      ChildAges: this.ChildAges,
      // RegionId: '',
      // LocationId: ''
    }
    this.doSearchHotels(Data);
  }

  doSearchHotels(Data) {
    // let CountryIds = Data.CountryIds;

    let REF;
    let HOTELS: any[] = [];
    console.log('searchHotels');
    this.pegastService.hotelSearch(Data)
      .subscribe((data: any) => {
        console.log(data);
        REF = data;
        HOTELS = data.SearchResultItems;
        HOTELS.forEach(HOTEL => {
          HOTEL['Hotel'] = REF.Hotels.filter(Hotel => Hotel.Id === HOTEL.HotelId)[0];
          HOTEL.Hotel['Category'] = REF.HotelCategories.filter(Cat => Cat.Id === HOTEL.Hotel.CategoryId)[0];
          HOTEL.Hotel['Location'] = REF.Locations.filter(item => item.Id === HOTEL.Hotel.LocationId)[0];
          HOTEL['Combinations'].forEach(Com => {
            Com['Meal'] = REF.Meals.filter(item => item.Id === Com.MealId)[0];
            Com['RoomCategory'] = REF.RoomCategories.filter(item => item.Id === Com.RoomCategoryId)[0];
          })
        })
        // console.log(HOTELS);
        this.HOTELS = HOTELS;
      })
  }


  selectItem(){
    console.log(this.itemkey);
    let selectedItem = this.items.filter(item=> item.value = this.itemkey)[0];
    console.log(selectedItem);
  }

  selectItem1(e){
    console.log(e);
  }

  selectItem2(e){
    console.log(e.value);
  }

  equals(o1,o2){
    return o1.id == o2.id;
  }

  selectCty(){
    console.log(this.selectedCountries);
  }
}