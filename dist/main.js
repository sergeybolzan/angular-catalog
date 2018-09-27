(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _catalog_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalog/catalog/catalog.component */ "./src/app/catalog/catalog/catalog.component.ts");
/* harmony import */ var _product_product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product/product/product.component */ "./src/app/product/product/product.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'catalog', component: _catalog_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_2__["CatalogComponent"] },
    { path: 'products/:id', component: _product_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"] },
    { path: '**', redirectTo: '/catalog' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _catalog_catalog_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catalog/catalog.module */ "./src/app/catalog/catalog.module.ts");
/* harmony import */ var _product_product_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/product.module */ "./src/app/product/product.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _catalog_catalog_module__WEBPACK_IMPORTED_MODULE_3__["CatalogModule"],
                _product_product_module__WEBPACK_IMPORTED_MODULE_4__["ProductModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/catalog/carousel-item/carousel-item.component.html":
/*!********************************************************************!*\
  !*** ./src/app/catalog/carousel-item/carousel-item.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item\">\r\n  <div class=\"header\">\r\n    <div class=\"sizes\">\r\n      <div *ngIf=\"product.sizes.length > 1; then thenBlock else elseBlock\"></div>\r\n      <ng-template #thenBlock>\r\n        <select>\r\n          <option disabled>Size</option>\r\n          <option *ngFor=\"let item of product.sizes\">{{item}}</option>\r\n        </select>\r\n      </ng-template>\r\n      <ng-template #elseBlock>\r\n        <span>{{product.sizes[0]}}</span>\r\n      </ng-template>\r\n    </div>\r\n    <div class=\"colors\">\r\n      <div *ngFor=\"let item of product.colors\" [ngStyle]=\"{'background-color': item}\"></div>\r\n    </div>\r\n  </div>\r\n\r\n  <a routerLink=\"/products/{{product.id}}\">\r\n    <div class=\"image\">\r\n      <img src={{product.imgPath}} alt=\"Product\">\r\n    </div>\r\n    <div class=\"footer\">\r\n      <span class=\"name\">{{product.name}}</span>\r\n      <span class=\"price\">{{product.price | currencyFormat}}</span>\r\n    </div>\r\n  </a>\r\n</div>"

/***/ }),

/***/ "./src/app/catalog/carousel-item/carousel-item.component.sass":
/*!********************************************************************!*\
  !*** ./src/app/catalog/carousel-item/carousel-item.component.sass ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none;\n  color: unset;\n  display: block; }\n\n.item {\n  width: 320px;\n  border: 6px solid transparent;\n  border-radius: 2px;\n  background-color: #f5f6f7; }\n\n.item:hover {\n    border-color: #aa9b77; }\n\n.header, .footer {\n  margin: 18px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n\n.header .sizes select, .header .sizes option, .header .sizes span {\n  text-transform: uppercase; }\n\n.header .sizes select {\n  font-family: 'Quicksand';\n  font-size: 16px;\n  padding: 0 30px 0 10px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAAbUlEQVQYlYXQqxWDQBCF4Y8+kFiaoA1KoIEtJDSFoIFILGIthkRkBBw2cM8ZM/efZ4UXKgzuNWKHCR+kGzgFM0ONJar7AtyHtwQLWmRs6A5wF7kczElHs4lYC02K498R/9YsHvj0iJNGv3df9AU6gx2U6R/oSAAAAABJRU5ErkJggg==) no-repeat right 0.75rem center;\n  cursor: pointer;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  outline: none; }\n\n.header .sizes select:hover {\n    border-color: #aa9b77; }\n\n.header .sizes option {\n  padding: 0;\n  min-height: auto; }\n\n.header .colors {\n  display: flex;\n  height: 21px; }\n\n.header .colors div {\n    width: 21px;\n    border-radius: 50%;\n    margin-left: 5px; }\n\n.image {\n  height: 250px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.image img {\n    width: auto;\n    max-width: 100%;\n    max-height: 100%; }\n\n.footer .name {\n  color: #aa9b77;\n  text-transform: uppercase;\n  font-size: 18px;\n  max-width: 60%;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden; }\n\n.footer .price {\n  font-size: 22px;\n  max-width: 40%; }\n"

/***/ }),

/***/ "./src/app/catalog/carousel-item/carousel-item.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/catalog/carousel-item/carousel-item.component.ts ***!
  \******************************************************************/
/*! exports provided: CarouselItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselItemComponent", function() { return CarouselItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselItemComponent = /** @class */ (function () {
    function CarouselItemComponent() {
    }
    CarouselItemComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CarouselItemComponent.prototype, "product", void 0);
    CarouselItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel-item',
            template: __webpack_require__(/*! ./carousel-item.component.html */ "./src/app/catalog/carousel-item/carousel-item.component.html"),
            styles: [__webpack_require__(/*! ./carousel-item.component.sass */ "./src/app/catalog/carousel-item/carousel-item.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselItemComponent);
    return CarouselItemComponent;
}());



/***/ }),

/***/ "./src/app/catalog/carousel/carousel.component.html":
/*!**********************************************************!*\
  !*** ./src/app/catalog/carousel/carousel.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"description\" [ngClass]=\"{isOdd: isOdd}\">\r\n    <span>{{category}}</span>\r\n    <hr>\r\n  </div>\r\n\r\n  <div class=\"navigation\" [ngClass]=\"{isOdd: isOdd}\">\r\n    <div class=\"pages\">{{currentPage}} / {{numberOfSlides}}</div>\r\n    <div class=\"nav\">\r\n      <span (click)=\"owlElement.previous()\"><fa-icon [icon]=\"faChevronLeft\"></fa-icon></span>\r\n      <span (click)=\"owlElement.next()\"><fa-icon [icon]=\"faChevronRight\"></fa-icon></span>\r\n    </div>\r\n  </div>\r\n\r\n  <owl-carousel #owlElement [options]=\"{items: slidesInRow, slideBy: slidesInRow, dots: false, onChanged: changePage.bind(this), margin: 64}\" [items]=\"products\">\r\n    <div class=\"item\" *ngFor=\"let item of products\">\r\n      <app-carousel-item [product]=\"item\"></app-carousel-item>\r\n    </div>\r\n    <div *ngFor=\"let item of lodash.range(calculateEmptyBlocks())\"></div>\r\n  </owl-carousel>\r\n</div>"

/***/ }),

/***/ "./src/app/catalog/carousel/carousel.component.sass":
/*!**********************************************************!*\
  !*** ./src/app/catalog/carousel/carousel.component.sass ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".description {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n  .description span {\n    text-transform: uppercase;\n    font-size: 20px; }\n  .description hr {\n    width: 92%;\n    margin-right: 0;\n    height: 2px;\n    border: none;\n    background-color: #cccccc; }\n  .description.isOdd hr {\n    order: -1;\n    margin-left: 0;\n    margin-right: auto; }\n  .navigation {\n  margin: 45px auto 16px;\n  color: #aa9b77;\n  text-align: right; }\n  .navigation .nav span {\n    cursor: pointer; }\n  .navigation .nav span:hover {\n      color: #d1c9b6; }\n  .navigation .nav span:first-child {\n      margin-right: 7px; }\n  .navigation.isOdd {\n    text-align: left; }\n  .item {\n  margin-bottom: 90px; }\n"

/***/ }),

/***/ "./src/app/catalog/carousel/carousel.component.ts":
/*!********************************************************!*\
  !*** ./src/app/catalog/carousel/carousel.component.ts ***!
  \********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
        this.lodash = lodash__WEBPACK_IMPORTED_MODULE_1__;
        this.currentPage = 1;
        this.faChevronLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faChevronLeft"];
        this.faChevronRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faChevronRight"];
    }
    CarouselComponent.prototype.ngOnInit = function () {
        this.numberOfSlides = Math.ceil(this.products.length / this.slidesInRow);
    };
    CarouselComponent.prototype.changePage = function (event) {
        this.currentPage = Math.ceil((event.item.index + 1) / this.slidesInRow);
    };
    CarouselComponent.prototype.calculateEmptyBlocks = function () {
        return this.slidesInRow - 1 - ((this.products.length - 1) % this.slidesInRow);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CarouselComponent.prototype, "slidesInRow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CarouselComponent.prototype, "products", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CarouselComponent.prototype, "isOdd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CarouselComponent.prototype, "category", void 0);
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/catalog/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.sass */ "./src/app/catalog/carousel/carousel.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/catalog/catalog.module.ts":
/*!*******************************************!*\
  !*** ./src/app/catalog/catalog.module.ts ***!
  \*******************************************/
/*! exports provided: CatalogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogModule", function() { return CatalogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./catalog/catalog.component */ "./src/app/catalog/catalog/catalog.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/catalog/carousel/carousel.component.ts");
/* harmony import */ var _carousel_item_carousel_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./carousel-item/carousel-item.component */ "./src/app/catalog/carousel-item/carousel-item.component.ts");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filter/filter.component */ "./src/app/catalog/filter/filter.component.ts");
/* harmony import */ var _filter_item_filter_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filter-item/filter-item.component */ "./src/app/catalog/filter-item/filter-item.component.ts");
/* harmony import */ var _sort_sort_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sort/sort.component */ "./src/app/catalog/sort/sort.component.ts");
/* harmony import */ var _pipe_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pipe.module */ "./src/app/pipe.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var CatalogModule = /** @class */ (function () {
    function CatalogModule() {
    }
    CatalogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__["OwlModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
                _pipe_module__WEBPACK_IMPORTED_MODULE_12__["PipeModule"].forRoot()
            ],
            declarations: [
                _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_6__["CatalogComponent"],
                _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"],
                _carousel_item_carousel_item_component__WEBPACK_IMPORTED_MODULE_8__["CarouselItemComponent"],
                _filter_filter_component__WEBPACK_IMPORTED_MODULE_9__["FilterComponent"],
                _filter_item_filter_item_component__WEBPACK_IMPORTED_MODULE_10__["FilterItemComponent"],
                _sort_sort_component__WEBPACK_IMPORTED_MODULE_11__["SortComponent"]
            ],
            exports: [_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_6__["CatalogComponent"]]
        })
    ], CatalogModule);
    return CatalogModule;
}());



/***/ }),

/***/ "./src/app/catalog/catalog/catalog.component.html":
/*!********************************************************!*\
  !*** ./src/app/catalog/catalog/catalog.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-filter [categories]=\"categories\"></app-filter>\r\n<app-sort [sortingOptions]=\"sortingOptions\" [(currentSortingOption)]=\"currentSortingOption\"></app-sort>\r\n<ng-container *ngFor=\"let category of categories; let odd = odd\">\r\n  <app-carousel \r\n    *ngIf=\"category.isShow\" \r\n    [slidesInRow]=3 \r\n    [products]=\"filterProducts(category.name)\" \r\n    [category]=\"category.name\"\r\n    [isOdd]=\"odd\">\r\n  </app-carousel>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/catalog/catalog/catalog.component.sass":
/*!********************************************************!*\
  !*** ./src/app/catalog/catalog/catalog.component.sass ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/catalog/catalog/catalog.component.ts":
/*!******************************************************!*\
  !*** ./src/app/catalog/catalog/catalog.component.ts ***!
  \******************************************************/
/*! exports provided: CatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogComponent", function() { return CatalogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../products.service */ "./src/app/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CatalogComponent = /** @class */ (function () {
    function CatalogComponent(productsService) {
        this.productsService = productsService;
    }
    CatalogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productsService.getProducts().subscribe(function (products) {
            _this.products = products;
            _this.categories = _this.getCategories();
        });
        this.sortingOptions = this.productsService.getSortingOptions();
        this.currentSortingOption = this.sortingOptions[0];
    };
    CatalogComponent.prototype.getCategories = function () {
        return lodash__WEBPACK_IMPORTED_MODULE_1__["chain"](this.products)
            .map('category')
            .uniq()
            .value()
            .map(function (category) { return ({ name: category, isShow: true }); });
    };
    CatalogComponent.prototype.filterProducts = function (category) {
        return this.products
            .filter(function (product) { return product.category === category; })
            .sort(this.dynamicSort(this.currentSortingOption));
    };
    CatalogComponent.prototype.dynamicSort = function (property) {
        var sortOrder = 1;
        if (property[0] === '-') {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
            return result * sortOrder;
        };
    };
    CatalogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-catalog',
            template: __webpack_require__(/*! ./catalog.component.html */ "./src/app/catalog/catalog/catalog.component.html"),
            styles: [__webpack_require__(/*! ./catalog.component.sass */ "./src/app/catalog/catalog/catalog.component.sass")]
        }),
        __metadata("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]])
    ], CatalogComponent);
    return CatalogComponent;
}());



/***/ }),

/***/ "./src/app/catalog/filter-item/filter-item.component.html":
/*!****************************************************************!*\
  !*** ./src/app/catalog/filter-item/filter-item.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>\r\n  <input type=\"checkbox\" [checked]=\"category.isShow\" (change)=\"toggleCheckbox()\">{{category.name}}\r\n</label>\r\n"

/***/ }),

/***/ "./src/app/catalog/filter-item/filter-item.component.sass":
/*!****************************************************************!*\
  !*** ./src/app/catalog/filter-item/filter-item.component.sass ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  display: flex;\n  align-items: center;\n  text-transform: uppercase;\n  font-size: 18px;\n  margin-right: 35px;\n  cursor: pointer; }\n  label:hover {\n    color: #666666; }\n  input {\n  width: 24px;\n  height: 24px;\n  color: #fff;\n  cursor: pointer;\n  outline: none;\n  margin-right: 13px; }\n"

/***/ }),

/***/ "./src/app/catalog/filter-item/filter-item.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/catalog/filter-item/filter-item.component.ts ***!
  \**************************************************************/
/*! exports provided: FilterItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterItemComponent", function() { return FilterItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterItemComponent = /** @class */ (function () {
    function FilterItemComponent() {
    }
    FilterItemComponent.prototype.ngOnInit = function () { };
    FilterItemComponent.prototype.toggleCheckbox = function () {
        this.category.isShow = !this.category.isShow;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FilterItemComponent.prototype, "category", void 0);
    FilterItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filter-item',
            template: __webpack_require__(/*! ./filter-item.component.html */ "./src/app/catalog/filter-item/filter-item.component.html"),
            styles: [__webpack_require__(/*! ./filter-item.component.sass */ "./src/app/catalog/filter-item/filter-item.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], FilterItemComponent);
    return FilterItemComponent;
}());



/***/ }),

/***/ "./src/app/catalog/filter/filter.component.html":
/*!******************************************************!*\
  !*** ./src/app/catalog/filter/filter.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top\">\r\n  <div class=\"container\">\r\n    <div class=\"flex-wrapper\">\r\n      <div class=\"items\">\r\n        <app-filter-item *ngFor=\"let category of categories\" [category]=\"category\"></app-filter-item>\r\n      </div>\r\n      <button (click)=\"showAllCategories()\">See all products</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/catalog/filter/filter.component.sass":
/*!******************************************************!*\
  !*** ./src/app/catalog/filter/filter.component.sass ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top {\n  background-color: #f5f6f7; }\n\n.flex-wrapper {\n  display: flex;\n  justify-content: space-between;\n  padding: 45px 0; }\n\n.items {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  align-content: space-between; }\n\nbutton {\n  padding: 19px 33px;\n  font-size: 14px;\n  text-transform: uppercase;\n  color: #fff;\n  background-color: #aa9b77;\n  border: none;\n  border-radius: 3px;\n  white-space: nowrap;\n  outline: none;\n  cursor: pointer;\n  -ms-grid-row-align: center;\n      align-self: center; }\n\nbutton:hover {\n    background-color: #beb296; }\n"

/***/ }),

/***/ "./src/app/catalog/filter/filter.component.ts":
/*!****************************************************!*\
  !*** ./src/app/catalog/filter/filter.component.ts ***!
  \****************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterComponent = /** @class */ (function () {
    function FilterComponent() {
    }
    FilterComponent.prototype.ngOnInit = function () { };
    FilterComponent.prototype.showAllCategories = function () {
        this.categories.forEach(function (item) { return (item.isShow = true); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FilterComponent.prototype, "categories", void 0);
    FilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/app/catalog/filter/filter.component.html"),
            styles: [__webpack_require__(/*! ./filter.component.sass */ "./src/app/catalog/filter/filter.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/catalog/sort/sort.component.html":
/*!**************************************************!*\
  !*** ./src/app/catalog/sort/sort.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"flex-wrapper\">\r\n    <span>Sort by</span>\r\n    <select [(ngModel)]=\"currentSortingOption\" (ngModelChange)=\"onOptionChange($event)\">\r\n      <option *ngFor=\"let item of sortingOptions\" [value]=\"item\">{{item}}</option>\r\n    </select>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/catalog/sort/sort.component.sass":
/*!**************************************************!*\
  !*** ./src/app/catalog/sort/sort.component.sass ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-wrapper {\n  margin: 25px auto 40px;\n  display: flex;\n  align-items: center; }\n\nspan {\n  font-size: 20px;\n  text-transform: uppercase; }\n\nselect {\n  margin-left: 28px;\n  text-transform: uppercase; }\n\nselect {\n  font-family: 'Quicksand';\n  font-size: 16px;\n  padding: 0 30px 0 10px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAAbUlEQVQYlYXQqxWDQBCF4Y8+kFiaoA1KoIEtJDSFoIFILGIthkRkBBw2cM8ZM/efZ4UXKgzuNWKHCR+kGzgFM0ONJar7AtyHtwQLWmRs6A5wF7kczElHs4lYC02K498R/9YsHvj0iJNGv3df9AU6gx2U6R/oSAAAAABJRU5ErkJggg==) no-repeat right 0.75rem center;\n  cursor: pointer;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  outline: none; }\n\nselect:hover {\n    border-color: #aa9b77; }\n\noption {\n  padding: 0;\n  min-height: auto; }\n"

/***/ }),

/***/ "./src/app/catalog/sort/sort.component.ts":
/*!************************************************!*\
  !*** ./src/app/catalog/sort/sort.component.ts ***!
  \************************************************/
/*! exports provided: SortComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortComponent", function() { return SortComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortComponent = /** @class */ (function () {
    function SortComponent() {
        this.currentSortingOptionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SortComponent.prototype.onOptionChange = function (selectOption) {
        this.currentSortingOptionChange.emit(selectOption);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SortComponent.prototype, "sortingOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SortComponent.prototype, "currentSortingOption", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SortComponent.prototype, "currentSortingOptionChange", void 0);
    SortComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sort',
            template: __webpack_require__(/*! ./sort.component.html */ "./src/app/catalog/sort/sort.component.html"),
            styles: [__webpack_require__(/*! ./sort.component.sass */ "./src/app/catalog/sort/sort.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], SortComponent);
    return SortComponent;
}());



/***/ }),

/***/ "./src/app/currency.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/currency.pipe.ts ***!
  \**********************************/
/*! exports provided: CurrencyFormatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyFormatPipe", function() { return CurrencyFormatPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CurrencyFormatPipe = /** @class */ (function () {
    function CurrencyFormatPipe() {
    }
    CurrencyFormatPipe.prototype.transform = function (value, currencySign, decimalLength, chunkDelimiter, decimalDelimiter, chunkLength) {
        if (currencySign === void 0) { currencySign = '€'; }
        if (decimalLength === void 0) { decimalLength = 2; }
        if (chunkDelimiter === void 0) { chunkDelimiter = '.'; }
        if (decimalDelimiter === void 0) { decimalDelimiter = ','; }
        if (chunkLength === void 0) { chunkLength = 3; }
        var result = '\\d(?=(\\d{' + chunkLength + '})+' + (decimalLength > 0 ? '\\D' : '$') + ')';
        var num = value.toFixed(Math.max(0, Math.floor(decimalLength)));
        return ((decimalDelimiter ? num.replace('.', decimalDelimiter) : num).replace(new RegExp(result, 'g'), '$&' + chunkDelimiter) + currencySign);
    };
    CurrencyFormatPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'currencyFormat'
        })
    ], CurrencyFormatPipe);
    return CurrencyFormatPipe;
}());



/***/ }),

/***/ "./src/app/mock-products.ts":
/*!**********************************!*\
  !*** ./src/app/mock-products.ts ***!
  \**********************************/
/*! exports provided: PRODUCTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCTS", function() { return PRODUCTS; });
var PRODUCTS = [
    {
        id: 0,
        name: 'T-Shirt',
        imgPath: 'assets/images/0.png',
        category: 'men',
        price: 5,
        sizes: ['xl', 'l'],
        colors: ['#165eb9', '#ffe637', '#535253']
    },
    {
        id: 1,
        name: 'Pants Forclaz',
        imgPath: 'assets/images/1.png',
        category: 'men',
        price: 30,
        sizes: ['30', '32'],
        colors: []
    },
    {
        id: 2,
        name: 'Backpack',
        imgPath: 'assets/images/2.png',
        category: 'men',
        price: 60,
        sizes: ['10Litri'],
        colors: []
    },
    {
        id: 3,
        name: 'Giacket',
        imgPath: 'assets/images/3.png',
        category: 'women',
        price: 60,
        sizes: ['m', 'l'],
        colors: []
    },
    {
        id: 4,
        name: 'Trekking shoes',
        imgPath: 'assets/images/4.png',
        category: 'women',
        price: 80,
        sizes: ['38', '39', '40'],
        colors: []
    },
    {
        id: 5,
        name: 'T-Shirt',
        imgPath: 'assets/images/5.png',
        category: 'women',
        price: 20,
        sizes: ['s', 'm'],
        colors: ['#d3a7ac', '#eeeeee']
    },
    {
        id: 6,
        name: 'T-Shirt',
        imgPath: 'assets/images/0.png',
        category: 'children',
        price: 20,
        sizes: ['s', 'm'],
        colors: ['#d3a7ac', '#eeeeee']
    },
    {
        id: 7,
        name: 'T-Shirt',
        imgPath: 'assets/images/0.png',
        category: 'men',
        price: 5,
        sizes: ['xl', 'l'],
        colors: ['#165eb9', '#ffe637', '#535253']
    },
    {
        id: 8,
        name: 'Pants Forclaz',
        imgPath: 'assets/images/1.png',
        category: 'men',
        price: 30,
        sizes: ['30', '32'],
        colors: []
    },
    {
        id: 9,
        name: 'Backpack',
        imgPath: 'assets/images/2.png',
        category: 'children',
        price: 60,
        sizes: ['10Litri'],
        colors: []
    },
    {
        id: 10,
        name: 'Giacket',
        imgPath: 'assets/images/3.png',
        category: 'women',
        price: 60,
        sizes: ['m', 'l'],
        colors: []
    },
    {
        id: 11,
        name: 'Trekking shoes',
        imgPath: 'assets/images/4.png',
        category: 'women',
        price: 80,
        sizes: ['38', '39', '40'],
        colors: []
    },
    {
        id: 12,
        name: 'T-Shirt',
        imgPath: 'assets/images/5.png',
        category: 'women',
        price: 20,
        sizes: ['s', 'm'],
        colors: ['#d3a7ac', '#eeeeee']
    },
    {
        id: 13,
        name: 'Giacket',
        imgPath: 'assets/images/3.png',
        category: 'women',
        price: 60,
        sizes: ['m', 'l'],
        colors: []
    }
];


/***/ }),

/***/ "./src/app/pipe.module.ts":
/*!********************************!*\
  !*** ./src/app/pipe.module.ts ***!
  \********************************/
/*! exports provided: PipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeModule", function() { return PipeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _currency_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency.pipe */ "./src/app/currency.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipeModule = /** @class */ (function () {
    function PipeModule() {
    }
    PipeModule_1 = PipeModule;
    PipeModule.forRoot = function () {
        return {
            ngModule: PipeModule_1,
            providers: [],
        };
    };
    PipeModule = PipeModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_currency_pipe__WEBPACK_IMPORTED_MODULE_1__["CurrencyFormatPipe"]],
            exports: [_currency_pipe__WEBPACK_IMPORTED_MODULE_1__["CurrencyFormatPipe"]]
        })
    ], PipeModule);
    return PipeModule;
    var PipeModule_1;
}());



/***/ }),

/***/ "./src/app/product/product.module.ts":
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product/product.component.ts");
/* harmony import */ var _pipe_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipe.module */ "./src/app/pipe.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
                _pipe_module__WEBPACK_IMPORTED_MODULE_4__["PipeModule"].forRoot()
            ],
            declarations: [_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"]],
            exports: [_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"]]
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/product/product/product.component.html":
/*!********************************************************!*\
  !*** ./src/app/product/product/product.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top\">\r\n  <div class=\"container\">\r\n    <div class=\"back\" (click)=\"goBack()\">\r\n      <fa-icon [icon]=\"faChevronLeft\"></fa-icon>\r\n      <span>Back to catalog</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"name\">\r\n    <span>{{product.name}}</span>\r\n    <hr>\r\n  </div>\r\n  <div class=\"product\">\r\n    <div class=\"image\">\r\n      <img src=\"{{product.imgPath}}\" alt=\"Product\">\r\n    </div>\r\n    <div class=\"info\">\r\n      <table>\r\n        <tr>\r\n          <td>{{product.price | currencyFormat}}</td>\r\n          <td>Price</td>\r\n        </tr>\r\n        <tr *ngIf=\"product.colors.length\">\r\n          <td>\r\n            <div class=\"colors\">\r\n              <div *ngFor=\"let item of product.colors\" [ngStyle]=\"{'background-color': item}\"></div>\r\n            </div>\r\n          </td>\r\n          <td>Colors</td>\r\n        </tr>\r\n        <tr *ngIf=\"product.sizes.length\">\r\n          <td>{{product.sizes.join()}}</td>\r\n          <td>Sizes</td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/product/product/product.component.sass":
/*!********************************************************!*\
  !*** ./src/app/product/product/product.component.sass ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top {\n  background-color: #f5f6f7;\n  margin-bottom: 80px; }\n  .top .back {\n    height: 143px;\n    line-height: 143px;\n    cursor: pointer;\n    text-transform: uppercase;\n    font-size: 18px; }\n  .top .back span {\n      margin-left: 30px; }\n  .name {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 90px; }\n  .name span {\n    text-transform: uppercase;\n    font-size: 20px;\n    white-space: nowrap; }\n  .name hr {\n    width: 92%;\n    margin-right: 0;\n    margin-left: 10px;\n    height: 2px;\n    border: none;\n    background-color: #cccccc; }\n  .product {\n  display: flex;\n  padding: 80px 30px;\n  border: 6px solid #aa9b77;\n  border-radius: 3px;\n  margin-bottom: 90px; }\n  .product .image {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-basis: 70%; }\n  .product .image img {\n      max-width: 100%;\n      max-height: 100%; }\n  .product .info {\n    flex-basis: 30%; }\n  table {\n  text-transform: uppercase;\n  font-size: 22px; }\n  table tr {\n    height: 50px; }\n  table td:first-child {\n    text-align: right;\n    padding-right: 40px; }\n  .colors {\n  display: flex;\n  justify-content: flex-end;\n  height: 21px; }\n  .colors div {\n    width: 21px;\n    border-radius: 50%;\n    margin-left: 5px; }\n"

/***/ }),

/***/ "./src/app/product/product/product.component.ts":
/*!******************************************************!*\
  !*** ./src/app/product/product/product.component.ts ***!
  \******************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../products.service */ "./src/app/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductComponent = /** @class */ (function () {
    function ProductComponent(route, productsService, location) {
        this.route = route;
        this.productsService = productsService;
        this.location = location;
        this.faChevronLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faChevronLeft"];
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.getProduct();
    };
    ProductComponent.prototype.getProduct = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.productsService
            .getProduct(id)
            .subscribe(function (product) { return (_this.product = product); });
    };
    ProductComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.sass */ "./src/app/product/product/product.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/products.service.ts":
/*!*************************************!*\
  !*** ./src/app/products.service.ts ***!
  \*************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mock_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-products */ "./src/app/mock-products.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsService = /** @class */ (function () {
    function ProductsService() {
    }
    ProductsService.prototype.getProducts = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock_products__WEBPACK_IMPORTED_MODULE_2__["PRODUCTS"]);
    };
    ProductsService.prototype.getProduct = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock_products__WEBPACK_IMPORTED_MODULE_2__["PRODUCTS"].find(function (product) { return product.id === id; }));
    };
    ProductsService.prototype.getSortingOptions = function () {
        return ['price', 'name'];
    };
    ProductsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Bolzan\Study\github\angular-catalog\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map