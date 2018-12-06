import { Injectable } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { iPosition } from '../interface/position.interface';
// // import { Geolocation } from '@ionic-native/geolocation';

// // import firebase from 'firebase';
// import 'firebase/firestore';

// import { DbService } from './db.service';
// import { AppService } from '/app';
// import { LocalService } from './local.service';
// // import { AngularFireService } from "./af.service";
// // import { PopoverInfoPage } from '../pages/popover-info/popover-info';
// // import { iSoldItem } from '../interfaces/sold-item.interface';
// import { iPosition } from '../interfaces/position.interface';
// import { iShop } from '../interfaces/shop.interface';

declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class GmapService {
    // //   userLatLng: any;
    // currentUserPosition: iPosition = null;
    // markers: any[] = [];
    // bluecirle: string = '../assets/imgs/bluecircle.png';
    constructor(
        // private dbService: DbService,
        // private appService: AppService,
        // // private afService: AngularFireService,
        private popoverCtrl: PopoverController,
        // private localService: LocalService
        // // private geolocation: Geolocation
    ) {
        // this.getUserCurrentPosition();
        // var directionsService = new google.maps.DirectionsService;
        // var directionsDisplay = new google.maps.DirectionsRenderer;
    }

    // getCurrentLocation() {
    //     console.log('gmapSer.getcurrentLocation');
    //     console.log(navigator, navigator.geolocation);
    //     return new Promise((resolve, reject) => {
    //         if (this.localService.USER_CURRENT_LOCATION) {
    //             resolve(this.localService.USER_CURRENT_LOCATION)
    //         } else {
    //             if (navigator.geolocation) {
    //                 navigator.geolocation.getCurrentPosition(position => {
    //                     console.log('Curent location', position);
    //                     this.currentUserPosition = { lat: position.coords.latitude, lng: position.coords.longitude };
    //                     this.localService.USER_CURRENT_LOCATION = this.currentUserPosition;
    //                     resolve(this.currentUserPosition);
    //                 }, err => {
    //                     this.getUserLocationFromRTDB().then(() => {
    //                         resolve(this.currentUserPosition);
    //                     })
    //                 })
    //             } else {
    //                 this.getUserLocationFromRTDB().then(() => {
    //                     resolve(this.currentUserPosition);
    //                 })
    //             }
    //         }
    //     })
    // }

    // updateUserLocationIntoRTBD(pos: iPosition, USER_ID) {
    //     return this.dbService.insertAnObjectAtNodeinRTDB('ULOC/' + USER_ID, pos);
    // }

    // getUserLocationFromRTDB() {
    //     return new Promise((resolve, reject) => {
    //         if(this.localService.USER_ID){
    //             this.dbService.getOneItemReturnPromise('ULOC/' + this.localService.USER_ID)
    //             .then((res: iPosition) => {
    //                 console.log(res);
    //                 if (res) {
    //                     this.currentUserPosition = res;
    //                 } else {
    //                     this.currentUserPosition = { lat: 10.778168043677463, lng: 106.69638633728027 }
    //                 }
    //                 this.localService.USER_CURRENT_LOCATION = this.currentUserPosition;
    //                 resolve(this.currentUserPosition);
    //             })
    //             .catch((err) => {
    //                 console.log(err);
    //                 reject(err);
    //             })
    //         }else{
    //             resolve({ lat: 10.778168043677463, lng: 106.69638633728027 })
    //         }
    //     })
    // }

    // drawDirection(map, DEPARTURE: iPosition, DESTINATION: iPosition) {
    //     let departure = new google.maps.LatLng(DEPARTURE.lat, DEPARTURE.lng);
    //     let destination = new google.maps.LatLng(DESTINATION.lat, DESTINATION.lng);
    //     return new Promise((resolve, reject) => {
    //         let directionsService = new google.maps.DirectionsService;
    //         let directionsDisplay = new google.maps.DirectionsRenderer({
    //             preserveViewport: true
    //         })
    //         // directionsDisplay.preserveViewport = fales;
    //         directionsDisplay.setMap(map);

    //         directionsService.route({
    //             origin: departure,
    //             destination: destination,
    //             travelMode: 'DRIVING'
    //         }, (response, status) => {
    //             if (status === 'OK') {
    //                 directionsDisplay.setDirections(response);
    //                 console.log(directionsDisplay.getDirections());
    //                 let DISTANCE = this.calcDistance(directionsDisplay.getDirections());
    //                 resolve({ DISTANCE: DISTANCE, RESULT: 'OK' });
    //             } else {
    //                 alert('Direction request failed due to' + status);
    //                 reject({ RESULT: 'Failed', ERROR: status });
    //             }
    //         })
    //     })
    //     // this.calculateAndDisplayRoute(directionsService, directionsDisplay, DEPARTURE, DESTINATION){

    //     // }
    // }

    // drawCircle(CENTER: iPosition, RADIUS: number, MAP: any) {
    //     let center = new google.maps.LatLng(CENTER.lat, CENTER.lng);
    //     let circle = new google.maps.Circle({
    //         strokeColor: '#FF0000',
    //         strokeOpacity: 0.5,
    //         strokeWeight: 1,
    //         fillColor: '#FF0000',
    //         fillOpacity: 0.2,
    //         map: MAP,
    //         center: center,
    //         radius: RADIUS
    //     });

    //     return circle;
    // }

    // // calculateAndDisplayRoute(directionsService, directionsDisplay, DEPARTURE, DESTINATION) {
    // //     directionsService.route({
    // //         origin: DEPARTURE,
    // //         destination: DESTINATION,
    // //         travelMode: 'DRIVING'
    // //     }, (response, status) => {
    // //         if (status === 'OK') {
    // //             directionsDisplay.setDirections(response);
    // //             console.log(directionsDisplay.getDirections());
    // //             this.calcDistance(directionsDisplay.getDirections());
    // //         } else {
    // //             alert('Direction request failed due to' + status);
    // //         }
    // //     })
    // // }

    // calcDistance(result) {
    //     var total = 0;
    //     var myRoute = result.routes[0];
    //     for (var index = 0; index < myRoute.legs.length; index++) {
    //         total += myRoute.legs[index].distance.value;
    //     }
    //     total = total / 1000;
    //     console.log('Distance in km :', total);
    //     return total;
    // }

    // setMarkers(markers) {
    //     this.markers = markers;
    // }
    // getMarkers() {
    //     return this.markers;
    // }

    // // getUserCurrentPosition() {
    // //     let position: any;
    // //     return new Promise((resolve, reject) => {
    // //         if (this.currentUserPosition) {
    // //             position = this.currentUserPosition;
    // //             resolve(position);
    // //         } else {
    // //             this.geolocation.getCurrentPosition()
    // //                 .then((pos: any) => {
    // //                     console.log(pos);
    // //                     let position: iPosition = { lat: pos.coords.latitude, lng: pos.coords.longitude }
    // //                     this.setUserCurrentPosition(position)
    // //                     resolve(position);
    // //                 })
    // //                 .catch((err: any) => {
    // //                     console.log(err);
    // //                     this.appService.toastMsg(err.message, 3000);
    // //                     if (this.afService.getAuth().auth.currentUser) {
    // //                         this.dbService.getOneItemReturnPromise('UserPosition/' + this.afService.getAuth().auth.currentUser.uid + '/LAST_POSITION')
    // //                             .then((res: any) => {
    // //                                 let position: iPosition = { lat: res.lat, lng: res.lng };
    // //                                 this.setUserCurrentPosition(position);
    // //                                 resolve(position);
    // //                             })
    // //                             .catch((err) => {
    // //                                 console.log(err);
    // //                                 reject('Location not detected. Enable to use full features 1');
    // //                             })
    // //                     } else {
    // //                         let pos: iPosition = { lat: 10.778168043677463, lng: 106.69638633728027 };
    // //                         this.setUserCurrentPosition(pos);
    // //                         resolve(pos);
    // //                         alert('Location not detected. Enable to use full features')
    // //                     }
    // //                 })
    // //         }

    // //     })
    // // }

    // // VERIFIED: check if centain position is inside map view
    // isPositionInsideMap(pos: iPosition, map) {
    //     return map.getBounds().contains(pos);
    // }

    // // setUserCurrentPosition(position: iPosition) {
    // //     this.currentUserPosition = position;
    // //     let DATE = this.appService.getCurrentDataAndTime();
    // //     if (this.afService.getAuth().auth.currentUser) {
    // //         this.afService.updateObjectData('UserPosition/' + this.afService.getAuth().auth.currentUser.uid, { LAST_POSITION: position, TIME: DATE });
    // //     }
    // // }


    // // getCurrentPosition() {
    // //     return this.geolocation.getCurrentPosition();
    // // }

    // getDistanceFromCurrent(lat1, lng1) {
    //     if (this.currentUserPosition) {
    //         return this.getDistanceFrom2Point(this.currentUserPosition.lat, this.currentUserPosition.lng, lat1, lng1);
    //     } else {
    //         return { distance: 0, disStr: '0 m' };
    //     }
    // }

    // getDistanceFrom2Point(lat1, lng1, lat2, lng2) {
    //     let R = 6371; // Raidus of the earth in km ;
    //     let dLat = this.degree2radius(lat2 - lat1);
    //     let dLng = this.degree2radius(lng2 - lng1);
    //     let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.degree2radius(lat1)) * Math.cos(this.degree2radius(lat2)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    //     let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    //     let d = R * c; // distance in km
    //     if (d > 1) {
    //         return { distance: d, disStr: Math.round(d) + ' km' };
    //     } else {
    //         return { distance: d, disStr: Math.round(d * 1000) + ' m' };
    //     }
    // }

    // degree2radius(deg: number) {
    //     return deg * (Math.PI / 180);
    // }

    // // //   getCurrentLocation() {
    // // //     var position = { lat: 0, lng: 0 };
    // // //     if (navigator.geolocation) {
    // // //       navigator.geolocation.getCurrentPosition((pos) => {
    // // //         position = {
    // // //           lat: pos.coords.latitude,
    // // //           lng: pos.coords.longitude
    // // //         }
    // // //         this.userLatLng = pos;
    // // //         this.dbService.setUserCurrentPosition(position);
    // // //         console.log('current position:', position)

    // // //       })
    // // //     } else {
    // // //       // browser doesnot support Geolocation
    // // //       console.log('your browser not support Geolocation');
    // // //     }
    // // //     return position;
    // // //   }

    // // //   getCurrentLocationReturnPromise() {
    // // //     return new Promise((resolve, reject) => {
    // // //       var position = { lat: 0, lng: 0 };
    // // //       if (navigator.geolocation) {
    // // //         navigator.geolocation.getCurrentPosition((pos) => {
    // // //           position = {
    // // //             lat: pos.coords.latitude,
    // // //             lng: pos.coords.longitude
    // // //           }
    // // //           this.userLatLng = pos;
    // // //           this.dbService.setUserCurrentPosition(position);
    // // //           console.log('current position:', position)
    // // //           resolve(position);

    // // //         })
    // // //       } else {
    // // //         // browser doesnot support Geolocation
    // // //         console.log('your browser not support Geolocation');
    // // //         reject('your browser not support Geolocation')
    // // //       }
    // // //     })
    // // //   }

    // // //   nav2CurrentPostion(map) {
    // // //     if (navigator.geolocation) {
    // // //       navigator.geolocation.getCurrentPosition((pos) => {
    // // //         let position = {
    // // //           lat: pos.coords.latitude,
    // // //           lng: pos.coords.longitude
    // // //         }

    // // //         this.dbService.setUserCurrentPosition(position);
    // // //         map.setCenter(position);

    // // //         // add marker
    // // //         this.addMarkerToMap(map, position);

    // // //         // let infoWindow = new google.maps.InfoWindow({
    // // //         //   content: 'You are here',
    // // //         //   position: position
    // // //         // }).open(map);


    // // //         console.log('pos:', pos);
    // // //         console.log('Your current position: ', position);
    // // //         let latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
    // // //         console.log('latLng: ', latLng);
    // // //         let myPosition = {
    // // //           lat: latLng.lat(),
    // // //           lng: latLng.lng()
    // // //         }
    // // //         console.log('myPosition: ', myPosition);

    // // //       }, (err) => {
    // // //         console.log(err)
    // // //       })

    // // //     } else {
    // // //       // browser doesnot support Geolocation
    // // //       console.log('your browser not support Geolocation');
    // // //     }
    // // //   }



    // // //   nav2CurrentPostionWithoutMarker(map) {
    // // //     if (navigator.geolocation) {
    // // //       navigator.geolocation.getCurrentPosition((pos) => {
    // // //         let position = {
    // // //           lat: pos.coords.latitude,
    // // //           lng: pos.coords.longitude
    // // //         }
    // // //         this.dbService.setUserCurrentPosition(position);
    // // //         map.setCenter(position);

    // // //         // add marker
    // // //         // this.addMarkerToMap(map,position);

    // // //         // let infoWindow = new google.maps.InfoWindow({
    // // //         //   content: 'You are here',
    // // //         //   position: position
    // // //         // }).open(map);

    // // //         console.log('Your current position: ', position);

    // // //       }, (err) => {
    // // //         console.log(err)
    // // //       })
    // // //     } else {
    // // //       // browser doesnot support Geolocation
    // // //       console.log('your browser not support Geolocation');
    // // //     }
    // // //   }

    // // //   addMarkerToMap1(map: any, position: any) {
    // // //     let marker = new google.maps.Marker({
    // // //       position: position,
    // // //       map: map
    // // //     })}


    // // //   addMarkerToMap(map: any, position: any) {
    // // //     let marker = new google.maps.Marker({
    // // //       position: position,
    // // //       map: map
    // // //     })

    // // //     marker.addListener('click', () => {
    // // //       console.log('marker clicked')
    // // //       //   let content = 'Lat: '+latLng.lat + ', Lng: '+latLng.lng;
    // // //       //   this.showInfoWindow(content, latLng, map, marker);
    // // //       let infoObject = {
    // // //         position: position,
    // // //         imgUrl: 'http://tanthoidai.com.vn/images/gallery/images/D%E1%BB%B1%20%C3%A1n%20Vinhomes%20Riverside/biet-thu-Vinhomes-Riverside-ngoai-tha.jpg',
    // // //         price: '1 tỷ 500',
    // // //         dtSan: '100m2 sàn',
    // // //         dtSd: '300m2 sử dụng'
    // // //       }
    // // //       let popover = this.popoverCtrl.create(PopoverInfoPage, infoObject);
    // // //       popover.present();
    // // //     })
    // // //   }


    // addMarkerToMapWithIDReturnPromiseWithMarker(map, position: iPosition, SHOP) {
    //     return new Promise((resolve, reject) => {
    //         let pos = new google.maps.LatLng(position.lat, position.lng);
    //         let marker = new google.maps.Marker({
    //             position: pos,
    //             map: map
    //         })

    //         marker.addListener('click', () => {
    //             console.log(SHOP);
    //             // let popover = this.popoverCtrl.create('PopOverPage', data).present();
    //             this.popoverCtrl.create('PopOverPage', { SHOP: SHOP }).present()
    //                 .then((res) => { console.log(res); })
    //                 .catch((err) => {
    //                     console.log(err);
    //                 })
    //         })
    //     })
    // }

    // addMarkerWithImageToMapWithIDReturnPromiseWithMarkerx(map, position: iPosition, SHOP: iShop) {
    //     return new Promise((resolve, reject) => {
    //         let pos = new google.maps.LatLng(position.lat, position.lng);
    //         let image = {
    //             url: SHOP.SHOP_IMAGES[1],
    //             // This marker is 20 pixels wide by 32 pixels high.
    //             // size: new google.maps.Size(75, 56),
    //             // The origin for this image is (0, 0).
    //             // origin: new google.maps.Point(37, 28),
    //             // The anchor for this image is the base of the flagpole at (0, 32).
    //             // anchor: new google.maps.Point(0, 26),
    //             scaledSize: new google.maps.Size(52, 40),
    //         };
    //         let marker = new google.maps.Marker({
    //             position: pos,
    //             map: map,
    //             icon: image
    //         })

    //         marker.addListener('click', () => {
    //             console.log(SHOP);
    //             // let popover = this.popoverCtrl.create('PopOverPage', data).present();
    //             this.popoverCtrl.create('PopOverPage', { SHOP: SHOP }).present()
    //                 .then((res) => { console.log(res); })
    //                 .catch((err) => {
    //                     console.log(err);
    //                 })
    //         })
    //     })
    // }

    addMarkerWithImageToMapWithIDReturnPromiseWithMarker(map, position: iPosition, IMG: string) {
        return new Promise((resolve, reject) => {
            let pos = new google.maps.LatLng(position.lat, position.lng);
            let image = {
                url: IMG,
                // This marker is 20 pixels wide by 32 pixels high.
                // size: new google.maps.Size(75, 56),
                // The origin for this image is (0, 0).
                // origin: new google.maps.Point(37, 28),
                // The anchor for this image is the base of the flagpole at (0, 32).
                // anchor: new google.maps.Point(0, 26),
                scaledSize: new google.maps.Size(52, 40),
            };
            let marker = new google.maps.Marker({
                position: pos,
                map: map,
                icon: image
            })

            marker.addListener('click', () => {
                console.log(IMG);
                // // let popover = this.popoverCtrl.create('PopOverPage', data).present();
                // this.popoverCtrl.create('PopOverPage', { SHOP: SHOP }).present()
                //     .then((res) => { console.log(res); })
                //     .catch((err) => {
                //         console.log(err);
                //     })
            })
        })
    }
    // // /*
    // // addMarkerToMapWithID(map: any, soldItemKey: { key: string, data: iSoldItem }) {
    // //     return new Promise((resolve, reject) => {
    // //         let position = new google.maps.LatLng(soldItemKey.data.POSITION.lat, soldItemKey.data.POSITION.lng);
    // //         let marker = new google.maps.Marker({
    // //             position: position,
    // //             map: map
    // //         })

    // //         marker.addListener('click', () => {
    // //             let imgUrl = '';
    // //             console.log('marker clicked')
    // //             let infoObject = {
    // //                 position: position,
    // //                 imgUrl: imgUrl,
    // //                 price: soldItemKey.data.PRICE,
    // //                 dtSan: soldItemKey.data.GROUNDSQUARES,
    // //                 dtSd: soldItemKey.data.USEDSQUARES
    // //             }

    // //             let infoObjects = soldItemKey;
    // //             let popover = this.popoverCtrl.create(PopoverInfoPage, infoObjects);
    // //             popover.present();
    // //         })
    // //         resolve();
    // //     })
    // // }

    // // */

    // // //   // addOneMarkerToMap(map: any, latLng: any){

    // // //   //   this.userMarker = new google.maps.Marker({
    // // //   //     position: latLng,
    // // //   //     map: map
    // // //   //   });
    // // //   //   markersArray.push(marker);
    // // //   // }

    // // //   showInfoWindow(content: any, position: any, map: any, obj: any) {
    // // //     let infoWindow = new google.maps.InfoWindow({
    // // //       content: content,
    // // //       position: position
    // // //     });
    // // //     infoWindow.open(map, obj);
    // // //   }

    // // //   loadLocation(map) {
    // // //     let locations = [];
    // // //     locations = this.dbService.getLocations();
    // // //     console.log(locations);
    // // //     locations.forEach(location => {
    // // //       this.addMarkerToMap(map, location);
    // // //     })
    // // //   }

    // // //   // load a list of location into Map
    // // //   loadLocationIntoMap(map, locations: any[]){
    // // //     locations.forEach(location=>{
    // // //         this.addMarkerToMap1(map, location);
    // // //     })
    // // //   }

    // // //   // load an array of location.
    // // //   loadLocationsToMap(map, locations: any[]) {
    // // //     locations.forEach(location => {
    // // //       this.addMarkerToMap(map, location);
    // // //     })
    // // //   }

    // // //   loadLocationToMap(map, location: any) {
    // // //     this.addMarkerToMap(map, location);
    // // //   }


    // // //   initMapForElementId(map, mapID) {
    // // //     let latLng = new google.maps.LatLng(0, 0);
    // // //     let mapOptions = {
    // // //       center: latLng,
    // // //       zoom: 15,
    // // //       mapTypeId: google.maps.MapTypeId.ROADMAP
    // // //     };
    // // //     map = new google.maps.Map(document.getElementById(mapID), mapOptions);
    // // //     // this.gmapService.nav2CurrentPostion(map);
    // // //     // this.gmapService.loadLocation(map);

    // // //   }

    // // //   initMapForElementIdWithCenterZoomType(mapID, center, zoom) {

    // // //     return new Promise((resolve, reject) => {
    // // //       let mapOptions = {
    // // //         center: center,
    // // //         zoom: zoom,
    // // //         mapTypeId: google.maps.MapTypeId.ROADMAP
    // // //       };
    // // //       let map = new google.maps.Map(document.getElementById(mapID), mapOptions);
    // // //       // this.gmapService.nav2CurrentPostion(map);
    // // //       // this.gmapService.loadLocation(map);
    // // //       if (map) {
    // // //         resolve();
    // // //       }
    // // //     })
    // // //   }

    // addMarkerToMap(map: any, position: any) {
    //     return new Promise((resolve, reject) => {
    //         var marker = new google.maps.Marker({
    //             position: position,
    //             map: map
    //         });
    //         resolve(marker);
    //     })
    // }

    // addMarkerToMapWithOldLocation(map: any, position: any) {
    //     return new Promise((resolve, reject) => {
    //         var marker = new google.maps.Marker({
    //             position: position,
    //             map: map,
    //             title: 'Old Value'
    //         });
    //         resolve(marker);
    //     })
    // }

    // addMarkerToMapWithNewLocation(map: any, position: any) {
    //     return new Promise((resolve, reject) => {
    //         var marker = new google.maps.Marker({
    //             position: position,
    //             map: map,
    //             title: 'New Value'
    //         });
    //         resolve(marker);
    //     })
    // }

    // addBlueDotToMap(map: any, position: any) {
    //     var marker = new google.maps.Marker({
    //         position: position,
    //         map: map,
    //         icon: this.bluecirle
    //     });
    // }

    // // // addMarkerToMapAddListenter(map: any, position: any) {
    // // //     let marker = new google.maps.Marker({
    // // //         position: position,
    // // //         map: map
    // // //     })

    // // //     marker.addListener('click', () => {
    // // //         console.log('marker clicked')
    // // //         //   let content = 'Lat: '+latLng.lat + ', Lng: '+latLng.lng;
    // // //         //   this.showInfoWindow(content, latLng, map, marker);
    // // //         let infoObject = this.appService.getObjectInfoForPopover();
    // // //         let popover = this.popoverCtrl.create('PopoverInfoPage', infoObject);
    // // //         popover.present();
    // // //     })
    // // // }

    // // // addMarkerToMapWithID(map: any, soldItemKey: { key: string, data: iSoldItem }) {
    // // //     console.log(soldItemKey);
    // // //     return new Promise((resolve, reject) => {
    // // //         let position = new google.maps.LatLng(soldItemKey.data.POSITION.lat, soldItemKey.data.POSITION.lng);
    // // //         let marker = new google.maps.Marker({
    // // //             position: position,
    // // //             map: map
    // // //         })

    // // //         marker.addListener('click', () => {
    // // //             let imgUrl = '';
    // // //             console.log('marker clicked')
    // // //             let infoObjects = soldItemKey;
    // // //             let popover = this.popoverCtrl.create('PopoverInfoPage', soldItemKey);
    // // //             popover.present();
    // // //         })
    // // //         resolve(marker);
    // // //     })
    // // // }

    // // removeMarkersFromMap(markers: any[]) {
    // //     markers.forEach(marker => {
    // //         marker.setMap(null);
    // //     })
    // // }

    // // // load a list of location into Map
    // // loadLocationIntoMap(map, locations: any[]) {
    // //     locations.forEach(location => {
    // //         this.addMarkerToMap(map, location);
    // //     })
    // // }

    // // // loadLocationIntoMapAddListener(map, locations: any[]) {
    // // //     locations.forEach(location => {
    // // //         this.addMarkerToMapAddListenter(map, location);
    // // //     })
    // // // }

    initMap(mapElement, mapOptions) {
        return new Promise((resolve, reject) => {
            let map: any;
            if (typeof (google) !== 'undefined') {
                map = new google.maps.Map(mapElement, mapOptions);
                resolve(map);
            } else {
                reject({ message: 'google is undefined' });
            }
        })
    }

}

/**
$ ionic cordova plugin add cordova-plugin-geolocation
$ npm install --save @ionic-native/geolocation
 * 
 */

 /**
  * Version         Date                Change         
  * 2.1             2018/03/28          drawCircel()
  * 
  */