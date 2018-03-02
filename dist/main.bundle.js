webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_products_products_component__ = __webpack_require__("./src/app/dashboard/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_products_product_product_component__ = __webpack_require__("./src/app/dashboard/products/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_shopping_cart_shopping_cart_component__ = __webpack_require__("./src/app/dashboard/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_login_login_component__ = __webpack_require__("./src/app/dashboard/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_signup_signup_component__ = __webpack_require__("./src/app/dashboard/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_shopping_cart_checkout_checkout_component__ = __webpack_require__("./src/app/dashboard/shopping-cart/checkout/checkout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_products_products_component__["a" /* ProductsComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_6__dashboard_signup_signup_component__["a" /* SignupComponent */] },
    { path: 'shopping-cart', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */] },
    { path: 'payment', component: __WEBPACK_IMPORTED_MODULE_7__dashboard_shopping_cart_checkout_checkout_component__["a" /* CheckoutComponent */] },
    { path: ':catName', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_products_products_component__["a" /* ProductsComponent */] },
    { path: ':catName/:id', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_products_product_product_component__["a" /* ProductComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-dashboard></app-dashboard>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["initializeApp"]({
            apiKey: 'AIzaSyBvtkZfyJEUAxLqcXZ-6K5n-3b9G1Avxa8',
            authDomain: 'arzachal-buy-these.firebaseapp.com'
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_products_products_component__ = __webpack_require__("./src/app/dashboard/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_shopping_cart_shopping_cart_component__ = __webpack_require__("./src/app/dashboard/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_products_product_product_component__ = __webpack_require__("./src/app/dashboard/products/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_removespaces_pipe__ = __webpack_require__("./src/app/pipes/removespaces.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_namechanger_pipe__ = __webpack_require__("./src/app/pipes/namechanger.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_filter_pipe__ = __webpack_require__("./src/app/pipes/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_sum_pipe__ = __webpack_require__("./src/app/pipes/sum.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_sort_pipe__ = __webpack_require__("./src/app/pipes/sort.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dashboard_signup_signup_component__ = __webpack_require__("./src/app/dashboard/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__dashboard_login_login_component__ = __webpack_require__("./src/app/dashboard/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__dashboard_auth_service__ = __webpack_require__("./src/app/dashboard/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__dashboard_shopping_cart_checkout_checkout_component__ = __webpack_require__("./src/app/dashboard/shopping-cart/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pipes_total_pipe__ = __webpack_require__("./src/app/pipes/total.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dashboard_products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */],
                __WEBPACK_IMPORTED_MODULE_9__dashboard_products_product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pipes_removespaces_pipe__["a" /* RemoveSpacesPipe */],
                __WEBPACK_IMPORTED_MODULE_12__pipes_namechanger_pipe__["a" /* NameChangerPipe */],
                __WEBPACK_IMPORTED_MODULE_13__pipes_filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_15__pipes_sum_pipe__["a" /* SumPipe */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_sort_pipe__["a" /* ArraySortPipe */],
                __WEBPACK_IMPORTED_MODULE_21__pipes_total_pipe__["a" /* TotalPipe */],
                __WEBPACK_IMPORTED_MODULE_17__dashboard_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_18__dashboard_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_20__dashboard_shopping_cart_checkout_checkout_component__["a" /* CheckoutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_19__dashboard_auth_service__["a" /* AuthService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = /** @class */ (function () {
    function AppService(http) {
        var _this = this;
        this.http = http;
        this.loading = true;
        this.products = [];
        this.shoppingCartProducts = [];
        this.http.get('https://arzachal-buy-these.firebaseio.com/products.json')
            .subscribe(function (response) {
            _this.products = response;
            _this.loading = false;
        });
    }
    AppService.prototype.consolidateShoppingCart = function () {
        var _this = this;
        this.shoppingCartProducts.forEach(function (product, i) {
            var name = product.name;
            for (var j = 0; j < _this.shoppingCartProducts.length; j++) {
                if (_this.shoppingCartProducts[j].name === name && i !== j) {
                    product.amount = _this.shoppingCartProducts[j].amount;
                    _this.shoppingCartProducts.splice(j, 1);
                }
            }
        });
    };
    AppService.prototype.addProductToShoppingCart = function (product) {
        this.shoppingCartProducts.push(product);
        this.consolidateShoppingCart();
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/dashboard/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);

var AuthService = /** @class */ (function () {
    function AuthService() {
        this.token = null;
    }
    AuthService.prototype.signupUser = function (email, password) {
        __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().createUserWithEmailAndPassword(email, password)
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.loginUser = function (email, password) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().signInWithEmailAndPassword(email, password)
            .then(function (response) {
            __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().currentUser.getIdToken()
                .then(function (token) { return _this.token = token; });
        })
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().signOut();
        this.token = null;
    };
    AuthService.prototype.getToken = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().currentUser.getIdToken()
            .then(function (token) { return _this.token = token; });
        return this.token;
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.token !== null;
    };
    return AuthService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"!appService.loading\">\n    <router-outlet ></router-outlet>\n</div>\n\n<div class=\"container\" *ngIf=\"appService.loading\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h1>LOADING...</h1>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(appService) {
        this.appService = appService;
    }
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched.ng-dirty,\r\ntextarea.ng-invalid.ng-touched.ng-dirty {\r\n    border: 1px solid red;\r\n}\r\n.proceed {\r\n    background-color:  green;\r\n    color: white;\r\n    padding: 5px;\r\n    border: none;\r\n    width: 100px;\r\n    -webkit-transition: 0.2s;\r\n    transition: 0.2s;\r\n}\r\n.proceed:hover {\r\n    background-color: rgb(0, 90, 0);\r\n    -webkit-transition: 0.2s;\r\n    transition: 0.2s;\r\n}\r\n.signup {\r\n    margin-left: 10px;\r\n    -webkit-transition: 0.2s;\r\n    transition: 0.2s;\r\n    padding: 6px;\r\n}\r\n.signup:hover {\r\n    color: rgb(179, 177, 177);\r\n    background-color: rgba(0, 128, 0, 0.400);\r\n    -webkit-transition: 0.2s;\r\n    transition: 0.2s;\r\n}\r\n.signup, .signup:link, .signup:visited, .signup:active  {\r\n    color: black;\r\n    text-decoration: none;\r\n  }"

/***/ }),

/***/ "./src/app/dashboard/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<hr>\n<div class=\"row\">\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <form (ngSubmit)=\"onLogin(f)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"email\">E-Mail</label>\n        <input type=\"email\" id=\"email\" name=\"email\" required email ngModel class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" id=\"password\" name=\"password\" required password [minlength]='6' [maxlength]='20' ngModel class=\"form-control\">\n      </div>\n      <button class=\"proceed\" type=\"submit\" [disabled]=\"!f.valid && !f.pristine && f.touched\">Log In</button><a [routerLink]=\"'/signup'\" class=\"signup\">Signup</a>\n    </form>\n  </div>\n  <div class=\"col-sm-4\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/dashboard/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.onLogin = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.authService.loginUser(email, password);
        this.router.navigate(['']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/dashboard/login/login.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/products/product/product.component.css":
/***/ (function(module, exports) {

module.exports = ".product-img {\r\n    min-width: 100%;\r\n    min-height: 540px;\r\n    width: 100%;\r\n    height: 540px;\r\n}\r\n.price {\r\n    font-size: 250%;\r\n    vertical-align: middle;\r\n}\r\n.minusplus {\r\n    width: 45px;\r\n    height: 45px;\r\n    font-size: 150%;\r\n    border: none;\r\n    text-align: center;\r\n    background-color: rgb(245, 245, 245);\r\n    padding-bottom: 5px;\r\n    border-radius: 2.5px;\r\n}\r\n.amountinput {\r\n    width: 50px;\r\n    height: 50px;\r\n    font-size: 150%;\r\n    border: none;\r\n    text-align: center;\r\n}\r\n.amountinput:focus {\r\n    outline: none;\r\n}\r\n.addtocartbutton {\r\n    width: 200px;\r\n    height: 50px;\r\n    background-color: green;\r\n    color: white;\r\n    font-size: 150%;\r\n    border: none;\r\n    border-radius: 2.5px;\r\n    -webkit-transition: 0.2s;\r\n    transition: 0.2s;\r\n}\r\n.addtocartbutton:hover {\r\n    background-color: rgb(0, 90, 0);\r\n    -webkit-transition: 0.2s;\r\n    transition: 0.2s;\r\n}\r\n.addtocartbutton-disabled {\r\n    width: 200px;\r\n    height: 50px;\r\n    background-color: rgb(107, 107, 107);\r\n    color: rgb(190, 190, 190);\r\n    font-size: 150%;\r\n    border: none;\r\n    border-radius: 2.5px;\r\n    cursor: default;\r\n}\r\n "

/***/ }),

/***/ "./src/app/dashboard/products/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<hr>\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <h6 style=\"font-style: italic;\">Home - {{ product.category }} - {{ product.name }}</h6>\n  </div>\n</div>\n<hr>\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <img class=\"product-img\" [src]=\"product.imagePath\" alt=\"{{product.name}}\">\n  </div>\n  <div class=\"col-sm-6\">\n    <h4>{{product.name}}\n      <span *ngIf=\"product.available === false\" style=\"font-size: 50%; color:red;\">Out of Stock</span>\n    </h4>\n    <span style=\"font-size: 75%; color: rgb(85, 85, 85);\">Product ID: {{id}}</span>\n    <hr>\n    <div>\n      <p class=\"price\">{{product.price | currency: 'USD':'symbol-narrow'}}</p>\n        <label style=\"font-size: 150%; margin-right: 10px;\">Amount</label>\n        <button class=\"minusplus\" (click)=\"amountDecrease()\">-</button>\n        <input class=\"amountinput\" type=\"number\" value=\"1\" min=\"1\" [(ngModel)]=\"buyAmount\">\n        <button class=\"minusplus\" (click)=\"amountIncrease()\">+</button>\n        <button class=\"addtocartbutton-disabled\" *ngIf=\"product.available === false\" disabled>Add to Cart</button>\n        <button class=\"addtocartbutton\" *ngIf=\"product.available === true\" (click)=\"onAddToShoppingCart()\">Add to Cart</button>\n    </div>\n    <hr>\n    <p>Available as {{product.feature1}}</p>\n    <hr>\n    <p>{{product.description}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/products/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductComponent = /** @class */ (function () {
    function ProductComponent(appService, route, router, http) {
        this.appService = appService;
        this.route = route;
        this.router = router;
        this.http = http;
        this.product = null;
        this.buyAmount = 1;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.product = {
            name: '', id: null, url: '', description: '', category: '', imagePath: '',
            price: 0, amount: 0, feature1: '', available: true
        };
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.http.get('https://arzachal-buy-these.firebaseio.com/products/' + (_this.id - 1) + '.json')
                .subscribe(function (response) {
                _this.product = response;
            });
        });
    };
    ProductComponent.prototype.ngOnDestroy = function () {
        this.buyAmount = 1;
    };
    ProductComponent.prototype.amountDecrease = function () {
        if (this.buyAmount !== 1) {
            this.buyAmount = this.buyAmount - 1;
        }
    };
    ProductComponent.prototype.amountIncrease = function () {
        this.buyAmount = this.buyAmount + 1;
    };
    ProductComponent.prototype.onAddToShoppingCart = function (product) {
        this.product.amount += this.buyAmount;
        this.appService.addProductToShoppingCart(this.product);
        this.router.navigate(['/shopping-cart']);
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product',
            template: __webpack_require__("./src/app/dashboard/products/product/product.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/products/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/products/products.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.minprice {\r\n  width: 70px;\r\n}\r\n.maxprice {\r\n  width: 70px;\r\n  margin-bottom: 5px;\r\n}\r\n.buttonx {\r\n  background-color: white;\r\n  color: grey;\r\n  font-weight: bolder;\r\n  border: none;\r\n}\r\n.priceapply {\r\n  background-color: green;\r\n  border: none;\r\n  height: 30px;\r\n  color: white;\r\n}\r\n.sortselect:focus, .sortselect:active, .sortselect:target {\r\n  outline: none;\r\n}\r\n.product {\r\n    max-width: 215px;\r\n    width: 215px;\r\n    max-height: 280px;\r\n    height: 340px;\r\n    margin: 2.5px;\r\n    padding: 2.5px;\r\n    display: inline-block;\r\n}\r\n.product > a >img {\r\n    min-width: 100%;\r\n    min-height: 208px;\r\n    width: 100%;\r\n    height: 208px;\r\n}\r\n.product > span {\r\n    padding-left: 12.5px;\r\n    padding-right: 12.5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<hr>\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <h6 style=\"font-style: italic;\">Home {{ catName != null ? ('- ' + catName | namechanger) : '' }}</h6>\n  </div>\n</div>\n<hr>\n<div class=\"row\">\n  <div class=\"col-sm-3\">\n    <h4>Filters</h4>\n    <hr>\n    <h5>Available As</h5>\n    <div *ngFor=\"let filterItem of filterItems; let i = index;\" class=\"form-check\">\n      <label class=\"form-check-label\">\n        <input type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"filterItem.checked\" [value]=\"filterItem.feature\">{{filterItem.feature}}\n      </label>\n    </div>\n    <hr>\n    <h5>Price Filter</h5>\n    <div *ngIf=\"priceFormSubmitted\">\n        <span>{{prices.minPrice > 0 ? (prices.minPrice | currency: 'USD':'symbol-narrow') : ('0' | currency: 'USD':'symbol-narrow') }}\n          {{prices.maxPrice !== null ? '-' : '' }}\n          {{prices.maxPrice !== null ? (prices.maxPrice | currency: 'USD':'symbol-narrow') : 'or above'}}</span>\n        <button class=\"buttonx\" (click)=\"onResetPrice()\">X</button>\n    </div>\n    <form [formGroup]=\"priceForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"!priceFormSubmitted\">\n        <input type=\"number\" min=\"0\" placeholder=\"Min\" formControlName=\"minPrice\" class=\"minprice\">\n        <input type=\"number\" min=\"0\" placeholder=\"Max\" formControlName=\"maxPrice\" class=\"maxprice\">\n      <button type=\"submit\" class=\"priceapply\">Apply</button>\n    </form>\n  </div>\n  <div class=\"col-sm-9\">\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <span>Sort by</span>\n        <select class=\"sortselect\" (change)=\"onChangeSort($event.target.value)\">\n          <option [value]=\"'name'\">Name</option>\n          <option [value]=\"'price'\">Price</option>\n          <option [value]=\"'feature1'\">Feature</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"row\">\n      <ng-container *ngFor=\"let product of products | filter: { feature1: ''} : checked() : false | sort: property ;\">\n        <div *ngIf=\"((catName === product.url) || (catName === undefined) ) &&\n        ((product.price >= prices.minPrice) && (prices.maxPrice >= product?.price) ||\n        (prices.minPrice === null) && (prices.maxPrice === null) ||\n        (product.price >= prices.minPrice) && (prices.maxPrice === null) ||\n        (prices.minPrice === null) && (prices.maxPrice >= product.price))\" class=\"product\">\n          <a [routerLink]=\"[(catName === undefined) ? product.url + '/' + product.id : product.id]\">\n            <img [src]=\"product.imagePath\" alt=\"{{ product.name }} image\">\n          </a>\n          <span>{{ product.name }} </span> <span>{{product.feature1}}</span>\n          <span *ngIf=\"product.available === false\" style=\"font-size: 75%; color:red;\">Out of Stock</span>\n          <br>\n          <span *ngIf=\"product.available === true\">{{product.price | currency: 'USD':'symbol-narrow'}}</span>\n          <span *ngIf=\"product.available === false\" style=\"color: rgb(109, 108, 108);\">\n            {{product.price | currency: 'USD':'symbol-narrow'}}\n          </span>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(appService, route, changeRef, appRef, http) {
        this.appService = appService;
        this.route = route;
        this.changeRef = changeRef;
        this.appRef = appRef;
        this.http = http;
        this.filterItems = [
            { feature: 'CD', checked: false },
            { feature: 'Floppy Disk', checked: false },
            { feature: 'Digital Copy', checked: false }
        ];
        this.prices = { minPrice: null, maxPrice: null };
        this.priceFormSubmitted = false;
        this.property = 'name';
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.catName = params['catName'];
        });
        this.initForm();
        this.products = this.appService.products;
    };
    ProductsComponent.prototype.initForm = function () {
        var formMinPrice = null;
        var formMaxPrice = null;
        this.priceForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            'minPrice': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](formMinPrice),
            'maxPrice': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](formMinPrice)
        });
    };
    ProductsComponent.prototype.onSubmit = function () {
        this.prices = this.priceForm.value;
        this.priceFormSubmitted = true;
        this.priceForm.reset();
    };
    ProductsComponent.prototype.onResetPrice = function () {
        this.priceFormSubmitted = false;
        this.priceForm.reset();
        this.prices.minPrice = null;
        this.prices.maxPrice = null;
    };
    ProductsComponent.prototype.checked = function () {
        return this.filterItems.filter(function (product) { return product.checked; });
    };
    ProductsComponent.prototype.onChangeSort = function (value) {
        this.property = value;
    };
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-products',
            template: __webpack_require__("./src/app/dashboard/products/products.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/shopping-cart/checkout/checkout.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/shopping-cart/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-2\"></div>\r\n    <div class=\"col-sm-5\">\r\n        <form>\r\n            <h5>Total Payment: {{shoppingCartProducts | total: 'amount': 'price' | currency: 'USD':'symbol-narrow'}}</h5>\r\n            <h5>Card Number</h5>\r\n            <input class=\"form-control\" type=\"number\" placeholder=\"**** **** **** ****\">\r\n            <h5>Name and Surname</h5>\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Card Owner\">\r\n            <h5>Valid Thru</h5>\r\n            <input class=\"form-control\" type=\"number\" placeholder=\"Month\">\r\n            <input class=\"form-control\" type=\"number\" placeholder=\"Year\">\r\n            <h5>CVC/CVC2</h5>\r\n            <button type=\"submit\">Buy</button>\r\n        </form>\r\n    </div>\r\n    <div class=\"col-sm-5\">\r\n        \r\n    </div>\r\n    <div class=\"col-sm-2\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/shopping-cart/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(appService) {
        this.appService = appService;
        this.shoppingCartProducts = this.appService.shoppingCartProducts;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    CheckoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-checkout',
            template: __webpack_require__("./src/app/dashboard/shopping-cart/checkout/checkout.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/shopping-cart/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/shopping-cart/shopping-cart.component.css":
/***/ (function(module, exports) {

module.exports = ".total-panel {\r\n  border: gray solid 1px;\r\n  height: 150px;\r\n}\r\n.product {\r\n  padding: 1%;\r\n}\r\n.image {\r\n  min-width: 60px;\r\n  min-height: 60px;\r\n  width: 60px;\r\n  height: 60px;\r\n  background-color: rgb(240, 240, 240);\r\n}\r\n.amount {\r\n  width: 35px;\r\n  text-align: center;\r\n  margin-left: 20%;\r\n}\r\n.price {\r\n  border: gray solid 1 px;\r\n}\r\n.totalprice {\r\n  margin-top: 25px;\r\n  text-align: center;\r\n}\r\n.goshopping {\r\n  background-color: green;\r\n  -webkit-transition: 0.2s;\r\n  transition: 0.2s;\r\n  border: none;\r\n  color: white;\r\n  width: 200px;\r\n  height: 45px;\r\n}\r\n.goshopping:hover {\r\n  background-color: rgb(0, 90, 0);\r\n  -webkit-transition: 0.2s;\r\n  transition: 0.2s;\r\n}\r\n.checkout {\r\n  background-color: green;\r\n  -webkit-transition: 0.2s;\r\n  transition: 0.2s;\r\n  border: none;\r\n  color: white;\r\n  width: 100%;\r\n  height: 45px;\r\n  margin-top: 10px;\r\n  font-size: 120%;\r\n}\r\n.disabled {\r\n  background-color: rgb(107, 107, 107);\r\n  color: rgb(190, 190, 190);\r\n  width: 100%;\r\n  height: 45px;\r\n  margin-top: 10px;\r\n  font-size: 120%;\r\n  border: none;\r\n  cursor: not-allowed;\r\n}\r\n.checkout:hover {\r\n  background-color: rgb(0, 90, 0);\r\n  -webkit-transition: 0.2s;\r\n  transition: 0.2s;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/shopping-cart/shopping-cart.component.html":
/***/ (function(module, exports) {

module.exports = "<hr>\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <h3>Shopping Cart</h3>\n  </div>\n</div>\n<hr>\n<div class=\"row\">\n  <div class=\"col-sm-8\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <h5>Product{{(shoppingCartProducts | sum:'amount') === 1 ? '' : 's' }}</h5>\n      </div>\n      <div class=\"col-sm-2\">\n        <h5>Amount</h5>\n      </div>\n      <div class=\"col-sm-2\">\n        <h5>Price</h5>\n      </div>\n      <div class=\"col-sm-2\">\n        <h5>Total</h5>\n      </div>\n    </div>\n    <hr>\n    <div class=\"row product\" *ngFor=\"let product of shoppingCartProducts; let i = index\">\n      <div class=\"col-sm-2\">\n        <img class=\"image\" [src]=\"product.imagePath\" alt=\" \">\n      </div>\n      <div class=\"col-sm-4\">\n        <h6>\n          <a [routerLink]=\"''+ '/'+ product.url + '/' + product.id\">{{product.name}}</a>\n        </h6>\n        <a (click)=\"onRemoveProduct()\">Remove</a>\n      </div>\n      <div class=\"col-sm-2\">\n        <input \n          class=\"amount\" \n          type=\"number\" \n          value=\"{{product.amount}}\" \n          #input \n          [(ngModel)]=\"product.amount\" \n          (keyup.enter)=\"update(input.value, i)\" \n          (blur)=\"update(input.value, i)\"\n          > \n      </div>\n      <div class=\"col-sm-2\">\n        <span class=\"price\">{{product.price | currency: 'USD':'symbol-narrow'}}</span>\n      </div>\n      <div class=\"col-sm-2\">\n        <span class=\"price\">{{product.amount * product.price| currency: 'USD':'symbol-narrow'}}</span>\n      </div>\n    </div>\n    <div class=\"row product\" *ngIf=\"shoppingCartProducts.length === 0\">\n      <div class=\"col-sm-12\">\n        <span>No products here!</span>\n      </div>\n    </div>\n    <span style=\"color: red;\" *ngIf=\"amountAlert === true\">Amount cannot be under 1! Amount changed to 1!</span>\n    <hr>\n    <div class=\"row product\"><button class=\"goshopping\" [routerLink]=\"''\">Continue Shopping</button></div>\n    \n  </div>\n  <div class=\"col-sm-4 total-panel\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <h5 class=\"totalprice\">\n          Subtotal ({{shoppingCartProducts.length > 0 ? (shoppingCartProducts | total:'amount': '') : 'no' }} product{{(shoppingCartProducts\n          | sum:'amount') > 1 ? 's' : '' }}):\n          <strong>\n            {{shoppingCartProducts.length > 0 ? ((shoppingCartProducts | total:'amount': 'price') | currency: 'USD':'symbol-narrow')\n            : ('0' | currency: 'USD':'symbol-narrow')}}</strong>\n        </h5>\n        <button *ngIf=\"shoppingCartProducts.length > 0\" class=\"checkout\" [routerLink]=\"'/payment'\">Buy these!</button>\n        <button *ngIf=\"shoppingCartProducts.length === 0\" class=\"disabled\">No product</button>\n        \n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/shopping-cart/shopping-cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(appService) {
        this.appService = appService;
        this.amountAlert = false;
        this.shoppingCartProducts = this.appService.shoppingCartProducts;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
    };
    ShoppingCartComponent.prototype.update = function (value, index) {
        var _this = this;
        if (value < 1) {
            this.shoppingCartProducts[index].amount = 1;
            this.amountAlert = true;
            setTimeout(function () { _this.amountAlert = false; }, 2500);
        }
        console.log(this.shoppingCartProducts[index].amount);
    };
    ShoppingCartComponent.prototype.onRemoveProduct = function (index) {
        console.log(index);
        this.shoppingCartProducts.splice(index, 1);
    };
    ShoppingCartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-shopping-cart',
            template: __webpack_require__("./src/app/dashboard/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/shopping-cart/shopping-cart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched.ng-dirty,\r\ntextarea.ng-invalid.ng-touched.ng-dirty {\r\n    border: 1px solid red;\r\n}\r\n.proceed {\r\n    background-color: orangered;\r\n    color: white;\r\n    padding: 5px;\r\n    border: none;\r\n    width: 100px;\r\n    -webkit-transition: 0.2s;\r\n    transition: 0.2s;\r\n}\r\n.proceed:hover {\r\n    background-color: rgb(202, 54, 0);\r\n    -webkit-transition: 0.2s;\r\n    transition: 0.2s;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<hr>\n<div class=\"row\">\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <form (ngSubmit)=\"onLogin(f)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"email\">E-Mail</label>\n        <input type=\"email\" id=\"email\" name=\"email\" required email ngModel class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" id=\"password\" name=\"password\" required password [minlength]='6' [maxlength]='20' ngModel class=\"form-control\">\n      </div>\n      <button class=\"proceed\" type=\"submit\" [disabled]=\"!f.valid && !f.pristine && f.touched\">Sign Up</button>\n    </form>\n  </div>\n  <div class=\"col-sm-4\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/dashboard/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SignupComponent.prototype.onSignup = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.authService.signupUser(email, password);
        this.authService.loginUser(email, password);
        this.router.navigate(['']);
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/dashboard/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".logo, .logo:link, .logo:visited, .logo:active  {\r\n  color: black;\r\n  text-decoration: none;\r\n  text-align: center;\r\n}\r\n.logo:hover {\r\n  color: rgb(51, 51, 51);\r\n}\r\n.category > button {\r\n  color: black;\r\n  background-color: white;\r\n  text-decoration: none;\r\n  text-align: center;\r\n  border-radius: 2.5px;\r\n  border: none;\r\n  width: 100%;\r\n  height: 40px;\r\n  cursor: pointer;\r\n  -webkit-transition: 0.2s;\r\n  transition: 0.2s;\r\n}\r\n.category > button:hover {\r\n  background-color: rgb(240, 240, 240);\r\n  -webkit-transition: 0.2s;\r\n  transition: 0.2s;\r\n}\r\n.active > button {\r\n  background-color: rgb(245, 245, 245);\r\n}\r\n.menubutton {\r\n  color: black;\r\n  background-color: white;\r\n  text-decoration: none;\r\n  text-align: center;\r\n  border-radius: 2.5px;\r\n  border: none;\r\n  width: 100%;\r\n  height: 40px;\r\n  cursor: pointer;\r\n  -webkit-transition: 0.2s;\r\n  transition: 0.2s;\r\n}\r\n.menubutton:hover {\r\n  background-color: rgb(240, 240, 240);\r\n  -webkit-transition: 0.2s;\r\n  transition: 0.2s;\r\n}\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <a class=\"logo\" [routerLink]=\"''\">\n        <h2>BUY THE BEST VIDEO GAMES</h2>\n      </a>\n    </div>\n  </div>\n  <hr>\n  <div\n    class=\"row\" \n    *ngIf=\"!pay\">\n    <div class=\"col-sm-2\">\n      <div \n        class=\"category\" \n        [class.active]=\"router.url === '/strategy'\">\n        <button \n          routerLinkActive=\"active\" \n          [routerLink]=\"'strategy'\">Strategy</button>\n      </div>\n    </div>\n    <div class=\"col-sm-2\">\n      <div \n        class=\"category\" \n        [class.active]=\"router.url === '/adventure-rpg'\">\n        <button \n          routerLinkActive=\"active\" \n          [routerLink]=\"'adventure-rpg'\">Adventure/RPG</button>\n      </div>\n    </div>\n    <div class=\"col-sm-2\">\n      <div \n        class=\"category\" \n        [class.active]=\"router.url === '/action-fps'\">\n        <button \n          routerLinkActive=\"active\" \n          [routerLink]=\"'action-fps'\">Action/FPS</button>\n      </div>\n    </div>\n    <div class=\"col-sm-2\">\n      <div \n        class=\"category\" \n        [class.active]=\"router.url === '/racing'\">\n        <button \n          [routerLink]=\"'racing'\">Racing</button>\n      </div>\n    </div>\n    <div class=\"col-sm-2\"></div>\n    <div class=\"col-sm-1\">\n      <ng-template [ngIf]=\"!authService.isAuthenticated()\">\n          <button \n            [routerLink]=\"'login'\" \n            class=\"menubutton\">Login</button>\n      </ng-template>\n        <button \n          *ngIf=\"authService.isAuthenticated()\" \n          (click)=\"onLogout()\" \n          class=\"menubutton\">Logout</button>\n    </div>\n    <div class=\"col-sm-1\">\n        <button \n          [routerLink]=\"'shopping-cart'\" \n          class=\"menubutton\">\n            Cart{{cartProducts.length > 0 ? '('+ (cartProducts | sum:'amount') + ')' : null }}\n        </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_auth_service__ = __webpack_require__("./src/app/dashboard/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__("./src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, appService, router) {
        this.authService = authService;
        this.appService = appService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.cartProducts = this.appService.shoppingCartProducts;
    };
    HeaderComponent.prototype.ngDoCheck = function () {
        if (this.router.url === '/shopping-cart' ||
            this.router.url === '/payment') {
            return this.pay = true;
        }
        else {
            return this.pay = false;
        }
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dashboard_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (products, filter, filterItems, isAnd) {
        if (filter && Array.isArray(products) && filterItems) {
            var filterKeys_1 = Object.keys(filter);
            var checkedItems_1 = filterItems.filter(function (product) { return product.checked; });
            if (!checkedItems_1 || checkedItems_1.length === 0) {
                return products;
            }
            if (isAnd) {
                return products.filter(function (product) {
                    return filterKeys_1.reduce(function (acc1, keyName) {
                        return (acc1 && checkedItems_1.reduce(function (acc2, checkedItem) {
                            return acc2 && new RegExp(product[keyName], 'gi').test(checkedItem.feature) || checkedItem.feature === '';
                        }, true));
                    }, true);
                });
            }
            else {
                return products.filter(function (product) {
                    return filterKeys_1.some(function (keyName) {
                        return checkedItems_1.some(function (checkedItem) {
                            return new RegExp(product[keyName], 'gi').test(checkedItem.feature) || checkedItem.feature === '';
                        });
                    });
                });
            }
        }
        else {
            return products;
        }
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/pipes/namechanger.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NameChangerPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NameChangerPipe = /** @class */ (function () {
    function NameChangerPipe() {
    }
    NameChangerPipe.prototype.transform = function (value) {
        return value
            .replace('strategy', 'Strategy')
            .replace('adventure-rpg', 'Adventure/RPG')
            .replace('action-fps', 'Action/FPS')
            .replace('racing', 'Racing');
    };
    NameChangerPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'namechanger'
        })
    ], NameChangerPipe);
    return NameChangerPipe;
}());



/***/ }),

/***/ "./src/app/pipes/removespaces.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveSpacesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RemoveSpacesPipe = /** @class */ (function () {
    function RemoveSpacesPipe() {
    }
    RemoveSpacesPipe.prototype.transform = function (value) {
        return value.replace(/ /g, '_');
    };
    RemoveSpacesPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'removespaces'
        })
    ], RemoveSpacesPipe);
    return RemoveSpacesPipe;
}());



/***/ }),

/***/ "./src/app/pipes/sort.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArraySortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ArraySortPipe = /** @class */ (function () {
    function ArraySortPipe() {
    }
    ArraySortPipe.prototype.transform = function (array, args) {
        if (array !== undefined) {
            array.sort(function (a, b) {
                if (a[args] < b[args]) {
                    return -1;
                }
                else if (a[args] > b[args]) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
        return array;
    };
    ArraySortPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'sort'
        })
    ], ArraySortPipe);
    return ArraySortPipe;
}());



/***/ }),

/***/ "./src/app/pipes/sum.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SumPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SumPipe = /** @class */ (function () {
    function SumPipe() {
    }
    SumPipe.prototype.transform = function (items, attr) {
        return items.reduce(function (a, b) { return a + b[attr]; }, 0);
    };
    SumPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'sum'
        })
    ], SumPipe);
    return SumPipe;
}());



/***/ }),

/***/ "./src/app/pipes/total.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TotalPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TotalPipe = /** @class */ (function () {
    function TotalPipe() {
    }
    TotalPipe.prototype.transform = function (items, attr1, attr2) {
        if (attr2 === '') {
            return items.reduce(function (a, b) { return a + b[attr1]; }, 0);
        }
        if (attr2 !== '') {
            return items.reduce(function (a, b) { return a + b[attr1] * b[attr2]; }, 0);
        }
    };
    TotalPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'total',
            pure: false
        })
    ], TotalPipe);
    return TotalPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map