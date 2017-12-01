webpackJsonp([0],{

/***/ 124:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista2_lista2__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lista_turnos_lista_turnos__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    //tab4Root =ListaPage;
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__lista2_lista2__["a" /* Lista2Page */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__lista_turnos_lista_turnos__["a" /* ListaTurnosPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/jorge/sistemas 2017/tesina/FarmaGuia/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Farmacias" tabIcon="person"></ion-tab>\n   <ion-tab [root]="tab3Root" tabTitle="Turnos" tabIcon="medical"></ion-tab>\n  \n</ion-tabs>\n'/*ion-inline-end:"/home/jorge/sistemas 2017/tesina/FarmaGuia/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_dataservice__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapa_mapa__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, modalCtrl, dataService) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.dataService = dataService;
    }
    HomePage.prototype.mostrarFarmacias = function () {
        //this.navCtrl.push(Lista2Page)
        //this.navCtrl.push(FarmaciaPage)
        var modal = this.modalCtrl
            .create(__WEBPACK_IMPORTED_MODULE_3__mapa_mapa__["a" /* MapaPage */], { tipo: 'todo' });
        modal.present();
        // modal._onDidDismiss(()=>{
        //this.restaurantes = this.restauranteService.cargarRestaurantes();
        //})
    };
    HomePage.prototype.mostrarMapa = function () {
        //this.navCtrl.push(MapaPage)
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mapa_mapa__["a" /* MapaPage */], { tipo: 'todo' });
    };
    HomePage.prototype.mostrarFarmaciasAbiertas = function () {
        //this.navCtrl.push(FarmaciasAbiertasPage)
    };
    HomePage.prototype.mostrarMapaTurnos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mapa_mapa__["a" /* MapaPage */], { tipo: 'turno' });
        //this.navCtrl.push(MapaTurnosPage)
        //this.navCtrl.push(FarmaciasDeTurnoPage)
    };
    HomePage.prototype.mostrarListaFarmacias = function () {
        var modal = this.modalCtrl
            .create(__WEBPACK_IMPORTED_MODULE_3__mapa_mapa__["a" /* MapaPage */], { tipo: 'turno' });
        modal.present();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/jorge/sistemas 2017/tesina/FarmaGuia/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n   \n    <ion-card (click)="mostrarMapa()">\n      <img src="assets/img/meds1.png"/>       \n    </ion-card>\n    <ion-card (click)="mostrarMapaTurnos()">\n      <img src="assets/img/turno.jpg"/>       \n    </ion-card>\n     <!--<ion-card (click)="mostrarFarmacias()">\n      <img src="assets/img/llao1.jpg"/>       \n    </ion-card>\n    <ion-card (click)="mostrarFarmaciasAbiertas()">\n      <img src="assets/img/llao1.jpg"/>       \n    </ion-card>-->\n</ion-content>\n'/*ion-inline-end:"/home/jorge/sistemas 2017/tesina/FarmaGuia/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_dataservice__["a" /* Dataservice */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dataservice__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapaPage = (function () {
    function MapaPage(navParams, toastCtrl, googleMaps, geolocation, dataService, viewCtrl, platform) {
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.googleMaps = googleMaps;
        this.geolocation = geolocation;
        this.dataService = dataService;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.markers = [];
        this.myPosition = {};
        this.latlng = { lat: -41.135893, lng: -71.310535 };
        this.turno = [];
        this.turno1 = [];
        this.turno2 = [];
        this.dateFormat = __webpack_require__(41);
        this.now = new Date();
        //public hoy=this.dateFormat(new Date(),"dd-mm");
        this.numeroDia = this.dateFormat(this.now, "N");
        this.turno3 = [];
        this.turno4 = [];
        this.id1 = '';
        this.id2 = '';
        this.id3 = '';
        this.Tid1 = '';
        this.Tid2 = '';
        this.Tid3 = '';
        this.platform.ready().then(function () {
            //this.loadMap();
        });
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.tipo = navParams.get('tipo');
    }
    MapaPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    MapaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad Mapa');
        //this.getCurrentPosition();
        if (this.tipo == 'todo') {
            this.markers = [];
            this.getCurrentPosition();
            var toast = this.toastCtrl.create({
                message: 'todo',
                duration: 2000
            });
            toast.present();
            this.dataService.obtenerdatos().subscribe(function (datos) {
                _this.markers = datos;
            });
        }
        else if (this.tipo == 'turno') {
            this.markers = [];
            this.getCurrentPosition();
            var toast = this.toastCtrl.create({
                message: 'turno',
                duration: 2000
            });
            toast.present();
            this.dataService.obtenerturnos().subscribe(function (datos) {
                _this.turno = datos;
                for (var _i = 0, _a = _this.turno; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _this.estadeTurno(item.dia, item.idFarma1, item.idFarma2, item.idFarma3);
                }
            });
        }
        /*this.dataService.obtenerdatos().subscribe(
          (datos)=>{
            this.markers=datos;
          }
        );*/
        //this.loadMap();
    };
    MapaPage.prototype.ionViewWillEnter = function () { this.tabBarElement.style.display = 'none'; };
    MapaPage.prototype.ionViewWillLeave = function () { this.tabBarElement.style.display = 'flex'; };
    MapaPage.prototype.ionViewWillUnload = function () {
        this.map.clear();
    };
    MapaPage.prototype.getCurrentPosition = function () {
        var _this = this;
        this.geolocation.getCurrentPosition()
            .then(function (position) {
            _this.myPosition = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
            _this.loadMap(); // load de geolocalizacion 
        })
            .catch(function (error) {
            //console.log(error);
            var toast = _this.toastCtrl.create({
                message: error,
                duration: 2000
            });
            toast.present();
        });
    };
    MapaPage.prototype.loadMap = function () {
        var _this = this;
        this.mapElement = document.getElementById('map');
        var mapOptions = {
            camera: {
                target: new __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["c" /* LatLng */](this.myPosition.latitude, this.myPosition.longitude),
                zoom: 14,
                tilt: 30
            }
        };
        this.map = this.googleMaps.create(this.mapElement, mapOptions);
        //this.map.one(GoogleMapsEvent.MAP_READY)
        this.map.one(__WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY)
            .then(function () {
            //console.log('Map is ready!');
            var toast = _this.toastCtrl.create({
                message: 'Map is ready',
                duration: 2000
            });
            toast.present();
            // Now you can use all methods safely.
            var markerOptions = {
                position: new __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["c" /* LatLng */](_this.myPosition.latitude, _this.myPosition.longitude),
                //title: "Hello",
                icon: { url: "./assets/icon/marker-green.png" }
            };
            _this.map.addMarker(markerOptions);
            _this.markers.forEach(function (marker) {
                //let icono= 'blue';
                var icono = _this.seleccionarIcono(marker);
                _this.addMarker(marker, icono);
            });
            /*
             this.map.addMarker({
                 title: 'Ionic',
                 icon: 'blue',
                 animation: 'DROP',
                 position: {
                   lat: -41.135893,
                   lng: -71.310535
                 }
               })
               .then(marker => {
                 marker.on(GoogleMapsEvent.MARKER_CLICK)
                   .subscribe(() => {
                     alert('clicked');
                   });
               });*/
        });
    };
    MapaPage.prototype.addMarker = function (options, icono) {
        var markerOptions = {
            position: new __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["c" /* LatLng */](options.lat, options.lng),
            //title: options.nombre,
            title: options.nombre + '\n'
                + 'Dirección\n' + options.direccion
                + '\nHorarios:\n Lunes a Viernes\n' + options.horario.lv[0].start1 + ' ' + options.horario.lv[1].end1 + ' ' +
                options.horario.lv[2].start2 + ' ' + options.horario.lv[3].end2 +
                '\n Sabado\n' +
                options.horario.s[0].start1 + ' ' + options.horario.s[1].end1 + ' ' +
                options.horario.s[2].start2 + ' ' + options.horario.s[3].end2 +
                '\n Domingo\n' +
                options.horario.d[0].start1 + ' ' + options.horario.d[1].end1 + ' ' +
                options.horario.d[2].start2 + ' ' + options.horario.d[3].end2,
            styles: {
                'text-align': 'center',
                'font-style': 'italic',
                'font-weight': 'bold',
                'color': 'black'
            },
            icon: icono
        };
        /*let toast = this.toastCtrl.create({
          message:icono,
          duration:2000
        });
        toast.present();*/
        this.map.addMarker(markerOptions);
    };
    MapaPage.prototype.seleccionarIcono = function (options) {
        //console.log("estaAbierto()")
        //this.dateFormat.masks.hammerTime = 'HH:MM';
        var hoy = this.dateFormat(this.now, "HH:MM");
        //start=this.dateFormat(start,"HH:MM");
        hoy = hoy.toString();
        hoy = hoy.replace(":", "");
        var abre = options.horario.lv[0].start1;
        var cierra = options.horario.lv[1].end1;
        var abre1 = options.horario.lv[2].start2;
        var cierra1 = options.horario.lv[3].end2;
        abre = abre.replace(":", "");
        cierra = cierra.replace(":", "");
        abre1 = abre1.replace(":", "");
        cierra1 = cierra1.replace(":", "");
        //if de dia
        if (this.numeroDia >= 1 && this.numeroDia <= 5) {
            var abre_1 = options.horario.lv[0].start1;
            var cierra_1 = options.horario.lv[1].end1;
            var abre1_1 = options.horario.lv[2].start2;
            var cierra1_1 = options.horario.lv[3].end2;
            abre_1 = abre_1.replace(":", "");
            cierra_1 = cierra_1.replace(":", "");
            abre1_1 = abre1_1.replace(":", "");
            cierra1_1 = cierra1_1.replace(":", "");
        }
        else if (this.numeroDia == 6) {
            //muestra por pantalla si entra a lav
            var toast = this.toastCtrl.create({
                message: 's ',
                duration: 2000
            });
            toast.present(); //borrar despues de pruebas
            var abre_2 = options.horario.s[0].start1;
            var cierra_2 = options.horario.s[1].end1;
            var abre1_2 = options.horario.s[2].start2;
            var cierra1_2 = options.horario.s[3].end2;
            abre_2 = abre_2.replace(":", "");
            cierra_2 = cierra_2.replace(":", "");
            abre1_2 = abre1_2.replace(":", "");
            cierra1_2 = cierra1_2.replace(":", "");
        }
        else {
            //muestra por pantalla si entra a lav
            var toast = this.toastCtrl.create({
                message: 'd',
                duration: 2000
            });
            toast.present(); //borrar despues de pruebas
            var abre_3 = options.horario.d[0].start1;
            var cierra_3 = options.horario.d[1].end1;
            var abre1_3 = options.horario.d[2].start2;
            var cierra1_3 = options.horario.d[3].end2;
            abre_3 = abre_3.replace(":", "");
            cierra_3 = cierra_3.replace(":", "");
            abre1_3 = abre1_3.replace(":", "");
            cierra1_3 = cierra1_3.replace(":", "");
        }
        //fin if de dia
        //console.log('today: '+hoy+' abre: '+ abre+ ' cierra: '+cierra);
        if ((Number(hoy) > Number(abre) && Number(hoy) < Number(cierra)) || (Number(hoy) > Number(abre1) && Number(hoy) < Number(cierra1))) {
            //options.setIcon({'url':'www/assets/icon/marker-green.png'});
            var icono = "./assets/icon/cruzVerde.png";
            return icono;
            //icon: {url:"./assets/icon/marker-green.png"}
        }
        else {
            // options.setIcon({'url':'www/assets/icon/marker-green.png'});
            var icono = "./assets/icon/cruzRoja.png";
            return icono;
        }
    };
    //borrar para limpiar codigo
    MapaPage.prototype.estadeTurno = function (dia, id1, id2, id3) {
        var _this = this;
        //console.log("estadeTurno()");
        var hoy = this.dateFormat(new Date(), "dd-mm");
        var ayer = new Date(new Date().setDate(new Date().getDate() - 1));
        var now = new Date();
        ayer = this.dateFormat(ayer, "dd-mm");
        now = this.dateFormat(now, "HHMM");
        var cero = 0;
        var uno = 900;
        //cero=this.dateFormat(cero,"HHMM");
        //let hoy1=this.dateFormat(new Date(-1),"dd");
        if ((Number(now) > Number(cero)) && (Number(now) < Number(uno))) {
            hoy = ayer;
        }
        hoy = hoy.toString();
        if (hoy == dia) {
            this.dataService.obtenerFarmaciasdeturno().subscribe(function (farma) {
                _this.turno1 = farma;
                for (var _i = 0, _a = _this.turno1; _i < _a.length; _i++) {
                    var datos = _a[_i];
                    if (datos.id == id1 || datos.id == id2) {
                        _this.markers.push(datos);
                    }
                }
                for (var _b = 0, _c = _this.turno1; _b < _c.length; _b++) {
                    var datos = _c[_b];
                    if (datos.id == id3) {
                        _this.markers.push(datos);
                        console.log(_this.turno2);
                    }
                }
            });
        }
    };
    return MapaPage;
}());
MapaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-mapa',template:/*ion-inline-start:"/home/jorge/sistemas 2017/tesina/FarmaGuia/src/pages/mapa/mapa.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-buttons right> \n          <button ion-button ion-only (click)="closeModal()">  \n            <ion-icon name="close"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>Mapa Farmacias</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div id="map"></div>\n</ion-content>\n'/*ion-inline-end:"/home/jorge/sistemas 2017/tesina/FarmaGuia/src/pages/mapa/mapa.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["a" /* GoogleMaps */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_4__providers_dataservice__["a" /* Dataservice */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* Platform */]])
], MapaPage);

/*let toast = this.toastCtrl.create({
        message:options,
        duration:2000
      });
      toast.present();*/
//# sourceMappingURL=mapa.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lista2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detalles_detalles__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dataservice__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Lista2Page = (function () {
    function Lista2Page(navCtrl, navParams, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.farmacias = [];
        this.dateFormat = __webpack_require__(41); //se instalo el modudulo de npm dateformat para poder 
        this.contador = 0;
        this.start = "";
        this.end = "";
        this.start2 = "";
        this.end2 = "";
        this.isLV = true;
        this.isS = true;
        this.isD = true;
        this.abierto = [];
        this.now = new Date();
        this.today = "";
        this.numeroDia = this.dateFormat(this.now, "N"); //dar formato a las horas ya que lo anterior de js no funcionaba
        this.nombreDia = this.dateFormat(this.now, "dd-mm");
    }
    Lista2Page.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dataService.obtenerdatos().subscribe(function (datos) {
            // este codigo lo utilizo para recorrer el json y cargar los datos 
            //en un arreglo para abierto o cerrado 
            _this.farmacias = datos;
            for (var _i = 0, _a = _this.farmacias; _i < _a.length; _i++) {
                var data = _a[_i];
                //console.log("Foto1: ",data.image[0].imagen0);
                if (_this.numeroDia >= 1 && _this.numeroDia <= 5) {
                    //console.log(data)
                    _this.start = data.horario.lv[0].start1;
                    _this.end = data.horario.lv[1].end1;
                    _this.start2 = data.horario.lv[2].start2;
                    _this.end2 = data.horario.lv[3].end2;
                    _this.abierto[_this.contador] = _this.estaAbierto(_this.start, _this.end, _this.start2, _this.end2);
                    _this.contador++;
                }
                else if (_this.numeroDia == 6) {
                    console.log("sabado");
                    _this.start = data.horario.s[0].start1;
                    _this.end = data.horario.s[1].end1;
                    _this.start2 = data.horario.s[2].start2;
                    _this.end2 = data.horario.s[3].end2;
                    console.log(_this.start, _this.end, _this.start2, _this.end2);
                    _this.abierto[_this.contador] = _this.estaAbierto(_this.start, _this.end, _this.start2, _this.end2);
                    _this.contador++;
                }
                else {
                    //console.log("domingo");
                    _this.start = data.horario.d[0].start1;
                    _this.end = data.horario.d[1].end1;
                    _this.start2 = data.horario.d[2].start2;
                    _this.end2 = data.horario.d[3].end2;
                    _this.abierto[_this.contador] = _this.estaAbierto(_this.start, _this.end, _this.start2, _this.end2);
                    _this.contador++;
                }
            }
        });
        this.contador = 0;
        console.log(this.abierto);
        if (this.numeroDia >= 1 && this.numeroDia <= 5) {
            this.isLV = true;
            this.isS = false;
            this.isD = false;
        }
        if (this.numeroDia == 6) {
            this.isLV = false;
            this.isS = true;
            this.isD = false;
        }
        if (this.numeroDia == 7) {
            this.isLV = false;
            this.isS = false;
            this.isD = true;
        }
    };
    Lista2Page.prototype.detalles = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__detalles_detalles__["a" /* DetallesPage */], { item: item });
    };
    Lista2Page.prototype.estaAbierto = function (abre, cierra, abre1, cierra1) {
        //console.log("estaAbierto()")
        this.dateFormat.masks.hammerTime = 'HH:MM';
        var hoy = this.dateFormat(this.now, "HH:MM");
        //start=this.dateFormat(start,"HH:MM");
        hoy = hoy.toString();
        hoy = hoy.replace(":", "");
        abre = abre.replace(":", "");
        cierra = cierra.replace(":", "");
        abre1 = abre1.replace(":", "");
        cierra1 = cierra1.replace(":", "");
        //console.log('today: '+hoy+' abre: '+ abre+ ' cierra: '+cierra);
        if ((Number(hoy) > Number(abre) && Number(hoy) < Number(cierra)) || (Number(hoy) > Number(abre1) && Number(hoy) < Number(cierra1))) {
            return true;
        }
        else {
            return false;
        }
    };
    Lista2Page.prototype.mostrarFarmacia = function (restaurante, rid) { };
    return Lista2Page;
}());
Lista2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-lista2',template:/*ion-inline-start:"/home/jorge/sistemas 2017/tesina/FarmaGuia/src/pages/lista2/lista2.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Listado Farmacias</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n    <ion-card *ngFor="let farmacia of farmacias let index = index"\n    (click)="detalles(farmacia)">        \n      <div class="farmacia">\n      <ion-row text-center>\n        <ion-col col-2>\n          <img *ngIf="(abierto[index] == 1)"  src="{{farmacia.image[0].imagen0}}">\n          <img *ngIf="!(abierto[index] == 1)"  src="{{farmacia.image[2].imagen2}}">\n        </ion-col>\n        <ion-col>            \n                <h2><b>{{farmacia.nombre}}</b></h2>\n                  {{farmacia.direccion}}<br>\n                  <p *ngIf="isLV"> <b>Horario LaV: {{farmacia.horario.lv[0].start1}} a {{farmacia.horario.lv[1].end1}}</b><b *ngIf="(!farmacia.horario.lv[2].start2 == \'\')"> y {{farmacia.horario.lv[2].start2}} a {{farmacia.horario.lv[3].end2}}</b></p>\n                  <p *ngIf="isS"> <b>Horario Sabado: {{farmacia.horario.s[0].start1}} a {{farmacia.horario.s[1].end1}} </b><b *ngIf="(!farmacia.horario.s[2].start2 == \'\')">y {{farmacia.horario.s[2].start2}} a {{farmacia.horario.s[3].end2}}</b></p>\n                  <p *ngIf="isD"> <b>Horario Domingo: {{farmacia.horario.d[0].start1}} a {{farmacia.horario.d[1].end1}} </b><b *ngIf="(!farmacia.horario.s[2].start2 == \'\')">y {{farmacia.horario.d[2].start2}} a {{farmacia.horario.d[3].end2}}</b></p>\n                   <!-- <p> {{isOpen}}{{today}}</p> -->\n                  <h2 *ngIf="(abierto[index] == 1)">Abierto</h2>\n                  <h2 *ngIf="!(abierto[index] == 1)" > Cerrado</h2>\n              \n        </ion-col>\n      </ion-row>   \n  </div>\n   \n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/jorge/sistemas 2017/tesina/FarmaGuia/src/pages/lista2/lista2.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_dataservice__["a" /* Dataservice */]])
], Lista2Page);

//# sourceMappingURL=lista2.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaTurnosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detalles_detalles__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dataservice__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListaTurnosPage = (function () {
    function ListaTurnosPage(navCtrl, navParams, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.dateFormat = __webpack_require__(41); //se instalo el modudulo de npm dateformat para poder 
        //public hoy=this.dateFormat(new Date(),"dd-mm");
        this.farmacias = [];
        this.farmacias1 = [];
        this.turno = [];
        this.turno1 = [];
        this.turno2 = [];
        this.farmaciasTurno = [];
        this.turno2 = [];
    }
    ListaTurnosPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.obtenerturnos().subscribe(function (datos) {
            _this.turno = datos;
            for (var _i = 0, _a = _this.turno; _i < _a.length; _i++) {
                var item = _a[_i];
                _this.estadeTurno(item.dia, item.idFarma1, item.idFarma2, item.idFarma3);
            }
        });
    };
    ListaTurnosPage.prototype.ionViewDidLoad = function () { };
    ListaTurnosPage.prototype.detalles = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__detalles_detalles__["a" /* DetallesPage */], { item: item });
    };
    ListaTurnosPage.prototype.estadeTurno = function (dia, id1, id2, id3) {
        var _this = this;
        //console.log("estadeTurno()");
        var hoy = this.dateFormat(new Date(), "dd-mm");
        var ayer = new Date(new Date().setDate(new Date().getDate() - 1));
        var now = new Date();
        ayer = this.dateFormat(ayer, "dd-mm");
        now = this.dateFormat(now, "HHMM");
        var cero = 0;
        var uno = 900;
        //cero=this.dateFormat(cero,"HHMM");
        //let hoy1=this.dateFormat(new Date(-1),"dd");
        if ((Number(now) > Number(cero)) && (Number(now) < Number(uno))) {
            hoy = ayer;
        }
        hoy = hoy.toString();
        if (hoy == dia) {
            this.dataService.obtenerFarmaciasdeturno().subscribe(function (farma) {
                _this.turno1 = farma;
                console.log("farma turnos", _this.turno1);
                for (var _i = 0, _a = _this.turno1; _i < _a.length; _i++) {
                    var datos = _a[_i];
                    if (datos.id == id1 || datos.id == id2) {
                        _this.turno2.push(datos);
                    }
                }
                for (var _b = 0, _c = _this.turno1; _b < _c.length; _b++) {
                    var datos = _c[_b];
                    if (datos.id == id3) {
                        _this.turno2.push(datos);
                        console.log(_this.turno2);
                    }
                }
            });
        }
    };
    return ListaTurnosPage;
}());
ListaTurnosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-lista-turnos',template:/*ion-inline-start:"/home/jorge/sistemas 2017/tesina/FarmaGuia/src/pages/lista-turnos/lista-turnos.html"*/'\n<ion-header>\n  \n    <ion-navbar>\n      <ion-title>Farmacias de Turno Hoy</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n\n\n    <ion-card *ngFor="let turnos of turno2 let Tid = index"\n    (click)="detalles(turnos)">\n      <div class="farmacia">\n          <ion-row text-center>\n            <ion-col col-3>\n                <img  src="assets/img/cruzAzul.png">\n            </ion-col>\n            <ion-col>\n              <h1><b>{{turnos.nombre}}</b></h1>\n              <br>{{turnos.direccion}} <br> {{turnos.telefono}}\n              <h3 *ngIf="(Tid!==2)"><b>Abierto las 24 Horas</b> de 9:00  a 9:00</h3>\n              <h3 *ngIf="!(Tid!==2)"><b>Abierto hasta las 23:00 </b>de 9:00  a 23:00</h3>\n            </ion-col>\n          </ion-row>\n      </div>\n    </ion-card>\n     <!-- <ion-list>\n        <ion-item  *ngFor="let turnos of turno2 " >\n          <ion-avatar class= "beat animateImage" item-start>\n            <img  src="assets/img/cruzAzul.png">-->\n            \n            <!--<img  src="{{farmacias.image[2].imagen2}}"> -->\n         <!-- </ion-avatar>\n          <div class="beat animateImage"  >\n            <h2><b>{{turnos.nombre}}</b></h2>\n           <br>{{turnos.direccion}}  {{turnos.telefono}}\n           \n          </div>\n        </ion-item>\n      </ion-list>-->\n    \n  </ion-content>\n  '/*ion-inline-end:"/home/jorge/sistemas 2017/tesina/FarmaGuia/src/pages/lista-turnos/lista-turnos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_dataservice__["a" /* Dataservice */]])
], ListaTurnosPage);

//# sourceMappingURL=lista-turnos.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(243);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_mapa_mapa__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_lista_lista__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_lista2_lista2__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_lista_turnos_lista_turnos__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_detalles_detalles__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_dataservice__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__agm_core__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_geolocation__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_google_maps__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_mapa_mapa__["a" /* MapaPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_lista_lista__["a" /* ListaPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_lista2_lista2__["a" /* Lista2Page */],
            __WEBPACK_IMPORTED_MODULE_10__pages_lista_turnos_lista_turnos__["a" /* ListaTurnosPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_detalles_detalles__["a" /* DetallesPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], { tabsHideOnSubPages: true }),
            __WEBPACK_IMPORTED_MODULE_15__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyCNEBSpmaD6bW2hDCCCzhATmCY8Rwn8ffY'
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_mapa_mapa__["a" /* MapaPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_lista_lista__["a" /* ListaPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_lista2_lista2__["a" /* Lista2Page */],
            __WEBPACK_IMPORTED_MODULE_10__pages_lista_turnos_lista_turnos__["a" /* ListaTurnosPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_detalles_detalles__["a" /* DetallesPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_12__providers_dataservice__["a" /* Dataservice */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_dataservice__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, dataservice) {
        this.dataservice = dataservice;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.ngOnInit = function () {
        this.dataservice.obtenerdatos();
        this.dataservice.obtenerturnos();
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/jorge/sistemas 2017/tesina/FarmaGuia/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/jorge/sistemas 2017/tesina/FarmaGuia/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_5__providers_dataservice__["a" /* Dataservice */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dataservice; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the Dataservice provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var Dataservice = (function () {
    function Dataservice(http) {
        this.http = http;
        this.dateFormat = __webpack_require__(41);
        this.farma = [];
        //public turnos:Turnos[]=[];
        this.turnos = [];
        this.hoy = this.dateFormat(new Date(), "dd-mm");
        console.log('Hello Dataservice Provider');
    }
    Dataservice.prototype.obtenerdatos = function () {
        return this.http.get('assets/markers/prueba.json')
            .map(function (response) { return response.json(); });
    };
    Dataservice.prototype.obtenerturnos = function () {
        return this.http.get('assets/markers/turnos.json')
            .map(function (response) { return response.json(); });
    };
    Dataservice.prototype.obtenerFarmaciasdeturno = function () {
        return this.http.get('assets/markers/prueba.json')
            .map(function (response) { return response.json(); });
    };
    Dataservice.prototype.obtenerdatos2 = function () {
        return this.http.get('assets/markers/prueba.json')
            .map(function (res) { return res.json(); });
    };
    Dataservice.prototype.turnoget = function () {
        return this.turnos;
    };
    Dataservice.prototype.cargarTurno = function () {
        var _this = this;
        this.obtenerturnos().subscribe(function (datos) {
            var turno = datos;
            console.log(turno);
            _this.hoy = _this.hoy.toString();
            for (var _i = 0, turno_1 = turno; _i < turno_1.length; _i++) {
                var item = turno_1[_i];
                if (_this.hoy == item.dia) {
                    console.log(_this.hoy, item.dia);
                    _this.turnos[0] = item.idFarma1;
                    _this.turnos[1] = item.idFarma2;
                    _this.turnos[2] = item.idFarma3;
                    console.log("turnos data : ", _this.turnos[1], _this.turnos.length);
                }
                //this.estadeTurno( item.dia,item.idFarma1,item.idFarma2,item.idFarma3);
            }
        });
        //this.turnos=Array;
        //console.log("claseturnos: ", this.turnos)
    };
    return Dataservice;
}());
Dataservice = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], Dataservice);

//# sourceMappingURL=dataservice.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detalles_detalles__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dataservice__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Observable } from 'rxjs';
//import { Farmacias } from './../../clases/farmacias';

var ListaPage = (function () {
    function ListaPage(navCtrl, navParams, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        // observableFarmacias: Observable<Farmacias[]>
        //farmas: Farmacias[];
        this.farmacias = [];
        this.dateFormat = __webpack_require__(41); //se instalo el modudulo de npm dateformat para poder 
        this.contador = 0;
        this.start = "";
        this.end = "";
        this.start2 = "";
        this.end2 = "";
        this.isLV = true;
        this.isS = true;
        this.isD = true;
        //public abierto = [];
        this.abierto1 = [];
        this.now = new Date();
        //public today = "";
        this.numeroDia = this.dateFormat(this.now, "N"); //dar formato a las horas ya que lo anterior de js no funcionaba
        this.nombreDia = this.dateFormat(this.now, "dd-mm");
    }
    ListaPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dataService.obtenerdatos().subscribe(function (datos) {
            // este codigo lo utilizo para recorrer el json y cargar los datos 
            //en un arreglo para abierto o cerrado 
            _this.farmacias = datos;
            for (var _i = 0, _a = _this.farmacias; _i < _a.length; _i++) {
                var data = _a[_i];
                console.log("Foto1: ", data.image[0].imagen0);
                if (_this.numeroDia >= 1 && _this.numeroDia <= 5) {
                    _this.start = data.horario.lv[0].start1;
                    _this.end = data.horario.lv[1].end1;
                    _this.start2 = data.horario.lv[2].start2;
                    _this.end2 = data.horario.lv[3].end2;
                    //this.abierto [this.contador] = this.estaAbierto(this.start, this.end, this.start2, this.end2);
                    _this.abierto1[_this.contador] = _this.estaAbierto(_this.start, _this.end, _this.start2, _this.end2);
                    _this.contador++;
                }
                else if (_this.numeroDia == 6) {
                    console.log("sabado");
                    _this.start = data.horario.s[0].start1;
                    _this.end = data.horario.s[1].end1;
                    _this.start2 = data.horario.s[2].start2;
                    _this.end2 = data.horario.s[3].end2;
                    console.log(_this.start, _this.end, _this.start2, _this.end2);
                    _this.abierto1[_this.contador] = _this.estaAbierto(_this.start, _this.end, _this.start2, _this.end2);
                    _this.contador++;
                }
                else {
                    //console.log("domingo");
                    _this.start = data.horario.d[0].start1;
                    _this.end = data.horario.d[1].end1;
                    _this.start2 = data.horario.d[2].start2;
                    _this.end2 = data.horario.d[3].end2;
                    _this.abierto1[_this.contador] = _this.estaAbierto(_this.start, _this.end, _this.start2, _this.end2);
                    _this.contador++;
                }
            }
            console.log(_this.abierto1);
            console.log(_this.nombreDia);
        });
        //this.estaAbierto();
        // este codigo lo uticice para cargar los datos en la clase, pero como queda cerrado
        // no pude recorrerlo con la funcion de esta abierto
        this.contador = 0;
        /* this.observableFarmacias = this.dataService.obtenerdatos2();
         this.observableFarmacias.subscribe(
           farmas => this.farmas=farmas
         )*/
        if (this.numeroDia >= 1 && this.numeroDia <= 5) {
            this.isLV = true;
            this.isS = false;
            this.isD = false;
        }
        if (this.numeroDia == 6) {
            this.isLV = false;
            this.isS = true;
            this.isD = false;
        }
        if (this.numeroDia == 7) {
            this.isLV = false;
            this.isS = false;
            this.isD = true;
        }
    };
    ListaPage.prototype.detalles = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__detalles_detalles__["a" /* DetallesPage */], { item: item });
    };
    ListaPage.prototype.estaAbierto = function (abre, cierra, abre1, cierra1) {
        //console.log("estaAbierto()")
        this.dateFormat.masks.hammerTime = 'HH:MM';
        var hoy = this.dateFormat(this.now, "HH:MM");
        //start=this.dateFormat(start,"HH:MM");
        hoy = hoy.toString();
        hoy = hoy.replace(":", "");
        abre = abre.replace(":", "");
        cierra = cierra.replace(":", "");
        abre1 = abre1.replace(":", "");
        cierra1 = cierra1.replace(":", "");
        //console.log('today: '+hoy+' abre: '+ abre+ ' cierra: '+cierra);
        if ((Number(hoy) > Number(abre) && Number(hoy) < Number(cierra)) || (Number(hoy) > Number(abre1) && Number(hoy) < Number(cierra1))) {
            return true;
        }
        else {
            return false;
        }
    };
    return ListaPage;
}());
ListaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-lista',template:/*ion-inline-start:"/home/jorge/sistemas 2017/tesina/FarmaGuia/src/pages/lista/lista.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Lista Farmacias</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n      <ion-item   *ngFor="let farmacia of farmacias ; let index = index" (click)="detalles(farmacia)"  >\n        <ion-avatar class= "beat animateImage" item-start>\n          <img *ngIf="(abierto1[index] == 1)"  src="{{farmacia.image[0].imagen0}}">\n          <img *ngIf="!(abierto1[index] == 1)"  src="{{farmacia.image[2].imagen2}}">\n          <!--<img  src="{{farmacias.image[2].imagen2}}"> -->\n        </ion-avatar>\n        <div class="beat animateImage"  >\n          <h2><b>{{farmacia.nombre}}</b></h2>\n         <br>{{farmacia.direccion}}{{farmacia.image.imagen}}\n         <p *ngIf="isLV"> <b>Horario LaV: {{farmacia.horario.lv[0].start1}} a {{farmacia.horario.lv[1].end1}}</b><b *ngIf="(!farmacia.horario.lv[2].start2 == \'\')"> y {{farmacia.horario.lv[2].start2}} a {{farmacia.horario.lv[3].end2}}</b></p>\n         <p *ngIf="isS"> <b>Horario Sabado: {{farmacia.horario.s[0].start1}} a {{farmacia.horario.s[1].end1}} </b><b *ngIf="(!farmacia.horario.s[2].start2 == \'\')">y {{farmacia.horario.s[2].start2}} a {{farmacia.horario.s[3].end2}}</b></p>\n         <p *ngIf="isD"> <b>Horario Domingo: {{farmacia.horario.d[0].start1}} a {{farmacia.horario.d[1].end1}} </b><b *ngIf="(!farmacia.horario.s[2].start2 == \'\')">y {{farmacia.horario.d[2].start2}} a {{farmacia.horario.d[3].end2}}</b></p>\n          <!-- <p> {{isOpen}}{{today}}</p> -->\n         <h2 *ngIf="(abierto1[index] == 1)">Abierto</h2>\n         <h2 *ngIf="!(abierto1[index] == 1)" > Cerrado</h2>\n          <!--<p >{{abierto[index] }}</p> -->\n        </div>\n      </ion-item>\n    </ion-list>\n  \n</ion-content>\n'/*ion-inline-end:"/home/jorge/sistemas 2017/tesina/FarmaGuia/src/pages/lista/lista.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_dataservice__["a" /* Dataservice */]])
], ListaPage);

//# sourceMappingURL=lista.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetallesPage = (function () {
    function DetallesPage(navParams, toastCtrl, googleMaps, geolocation, viewCtrl, platform) {
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.googleMaps = googleMaps;
        this.geolocation = geolocation;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.markers = [];
        this.myPosition = {};
        this.latlng = { lat: -41.135893, lng: -71.310535 };
        this.platform.ready().then(function () {
            //this.loadMap();
        });
        //para ocultar las tabs
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.markers = navParams.get('item');
        console.log(this.markers);
    }
    DetallesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Detalles');
        this.getCurrentPosition();
    };
    DetallesPage.prototype.ionViewWillEnter = function () { this.tabBarElement.style.display = 'none'; };
    DetallesPage.prototype.ionViewWillLeave = function () { this.tabBarElement.style.display = 'flex'; };
    DetallesPage.prototype.getCurrentPosition = function () {
        var _this = this;
        this.geolocation.getCurrentPosition()
            .then(function (position) {
            _this.myPosition = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
            _this.loadMap(); // load de geolocalizacion 
        })
            .catch(function (error) {
            //console.log(error);
            var toast = _this.toastCtrl.create({
                message: error,
                duration: 2000
            });
            toast.present();
        });
    };
    DetallesPage.prototype.loadMap = function () {
        var _this = this;
        this.mapElement = document.getElementById('mapa');
        var mapOptions = {
            camera: {
                target: new __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["c" /* LatLng */](this.myPosition.latitude, this.myPosition.longitude),
                zoom: 14,
                tilt: 30
            }
        };
        this.mapa = this.googleMaps.create(this.mapElement, mapOptions);
        this.mapa.one(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY)
            .then(function () {
            //console.log('Map is ready!');
            var toast = _this.toastCtrl.create({
                message: 'Map is ready',
                duration: 2000
            });
            toast.present();
            // Now you can use all methods safely.
            var markerOptions = {
                position: new __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["c" /* LatLng */](_this.myPosition.latitude, _this.myPosition.longitude),
                //title: "Hello",
                icon: { url: "./assets/icon/marker-green.png" }
            };
            _this.mapa.addMarker(markerOptions);
            //crear el marcador de la farma
            _this.addMarker(_this.markers);
            /*this.markers.forEach(marker=>{
              this.addMarker(marker);
            });*/
            /*
             this.map.addMarker({
                 title: 'Ionic',
                 icon: 'blue',
                 animation: 'DROP',
                 position: {
                   lat: -41.135893,
                   lng: -71.310535
                 }
               })
               .then(marker => {
                 marker.on(GoogleMapsEvent.MARKER_CLICK)
                   .subscribe(() => {
                     alert('clicked');
                   });
               });*/
        });
    };
    DetallesPage.prototype.addMarker = function (options) {
        var markerOptions = {
            position: new __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["c" /* LatLng */](options.lat, options.lng),
            title: options.nombre,
            icon: options.icon //{"url":"./assets/icon/marker-green.png"}
        };
        /*let toast = this.toastCtrl.create({
          message:icono,
          duration:2000
        });
        toast.present();*/
        this.mapa.addMarker(markerOptions);
    };
    DetallesPage.prototype.ionViewWillUnload = function () {
        this.mapa.clear();
    };
    return DetallesPage;
}());
DetallesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-detalles',template:/*ion-inline-start:"/home/jorge/sistemas 2017/tesina/FarmaGuia/src/pages/detalles/detalles.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalles Farmacias</ion-title>\n  </ion-navbar>\n    <div id="detalle" class="animateText">\n      <h2><b>{{markers.nombre}}</b></h2>\n      <p>Teléfono: {{markers.telefono}}\n      <p> Dirección: {{markers.direccion}}\n      <p>Horarios\n      <p>Lunes a Viernes</p>\n      <b >  {{markers.horario.lv[0].start1}} a {{markers.horario.lv[1].end1}} </b>\n      <b *ngIf="(!markers.horario.lv[2].start2 == \'\')"> y {{markers.horario.lv[2].start2}} a {{markers.horario.lv[3].end2}}</b>\n      <p>Sabados</p>\n      <b >{{markers.horario.s[0].start1}} a {{markers.horario.s[1].end1}}</b>\n      <b *ngIf="(!markers.horario.s[2].start2 == \'\')"> y {{markers.horario.s[2].start2}} a {{markers.horario.s[3].end2}}</b>\n      <p>Domingos</p>\n      <b *ngIf="(!markers.horario.d[0].start1 == \'\')"> {{markers.horario.d[0].start1}} a {{markers.horario.d[1].end1}} </b>\n      <b *ngIf="(!markers.horario.d[2].start2 == \'\')"> y {{markers.horario.d[2].start2}} a {{markers.horario.d[3].end2}}</b>\n      <p *ngIf="(markers.horario.d[0].start1 == \'\')">Cerrado</p>   \n      \n    </div>\n</ion-header>\n\n<ion-content>\n    <div id="mapa" ></div>\n<!--\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n              <agm-map \n              [latitude]="markers.lat" \n              [longitude]="markers.lng"\n                [zoom]="17"\n                [zoomControl]="true"\n                [streetViewControl]="true"\n                [disableDefaultUI]="true"> \n                <agm-marker \n                [latitude]="myPosition.latitude"\n                [longitude]="myPosition.longitude"\n                [iconUrl]="\'/assets/icon/marker-blue.png\'">\n              </agm-marker> \n                <agm-marker\n                  [latitude]="markers.lat" \n                  [longitude]="markers.lng"\n                  [iconUrl]="markers.icon">\n                  <agm-info-window>{{markers.nombre}}<br>{{markers.direccion}}</agm-info-window>\n                </agm-marker> \n                \n                \n              </agm-map>\n            </ion-col>\n          </ion-row>\n    </ion-grid>-->\n</ion-content>\n'/*ion-inline-end:"/home/jorge/sistemas 2017/tesina/FarmaGuia/src/pages/detalles/detalles.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* Platform */]])
], DetallesPage);

/*
ionViewWillEnter() { this.tabBarElement.style.display = 'none'; }
ionViewWillLeave() { this.tabBarElement.style.display = 'flex'; }
*/ 
//# sourceMappingURL=detalles.js.map

/***/ })

},[224]);
//# sourceMappingURL=main.js.map