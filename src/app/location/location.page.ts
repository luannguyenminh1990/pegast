import { Component, OnInit } from '@angular/core';
import { iDeal } from '../interface/pegas.interface';
import { NavController } from '@ionic/angular';
import { PegasService } from '../pegas.service';
import { NavParService } from '../nav-par.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  data;
  LOCATION;
  DEALS: iDeal[] = [];
  constructor( 
    private navCtrl: NavController,
    private pegasService: PegasService,
    private navParService: NavParService
    ) { 
      this.data = this.navParService.getter();
      console.log(this.data);
    }

  ngOnInit() {
    // this.getHotdeals();
    this.getLocationDetail();
  }

  getLocationDetail(){
    this.pegasService.locationDetailGetWithPostMethod(this.data.id)
    .subscribe((res: any)=>{
      console.log(res);
      this.LOCATION = res.data;
    })
  }

  getHotdeals() {
    this.pegasService.getHotdeal()
      .subscribe((res: any) => {
        console.log(res);
        this.DEALS = res.data;
        console.log(this.DEALS);
      })
  }

  go2Hotdeal(DEAL: iDeal) {
    this.navParService.setter(DEAL);
    this.navCtrl.navigateForward('/hotdeal');
  }

}