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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _guards_AuthGuard_auth_guard_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/AuthGuard/auth-guard.guard */ "./src/app/guards/AuthGuard/auth-guard.guard.ts");
/* harmony import */ var _guards_Login_login_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/Login/login.guard */ "./src/app/guards/Login/login.guard.ts");








var routes = [
    { path: "", redirectTo: '/login', pathMatch: 'full', canActivate: [_guards_Login_login_guard__WEBPACK_IMPORTED_MODULE_7__["LoginGuard"]] },
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], canActivate: [_guards_Login_login_guard__WEBPACK_IMPORTED_MODULE_7__["LoginGuard"]] },
    { path: "home", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], canActivate: [_guards_AuthGuard_auth_guard_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuardGuard"]] },
    { path: "register", component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"], canActivate: [_guards_Login_login_guard__WEBPACK_IMPORTED_MODULE_7__["LoginGuard"]] },
    { path: "**", redirectTo: '/login', pathMatch: 'full', canActivate: [_guards_Login_login_guard__WEBPACK_IMPORTED_MODULE_7__["LoginGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _services_login_service_login_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/login-service/login-service.service */ "./src/app/services/login-service/login-service.service.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [_services_login_service_login_service_service__WEBPACK_IMPORTED_MODULE_11__["LoginServiceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark bg-dark\" style=\"z-index: 99999;\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/login']\">NarenAuth v0.0</a>\n  <button class=\"navbar-toggler d-lg-none\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavId\"\n    aria-controls=\"collapsibleNavId\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"toggleMenuBar()\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavId\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" *ngIf=\"!isLoggedIn\">\n        <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n      </li>\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" *ngIf=\"!isLoggedIn\">\n        <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\" *ngIf=\"isLoggedIn\">\n        <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_login_service_login_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login-service/login-service.service */ "./src/app/services/login-service/login-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_loginService, _router) {
        var _this = this;
        this._loginService = _loginService;
        this._router = _router;
        this.isLoggedIn = false;
        this._loginService.authSub.subscribe(function (data) {
            _this.isLoggedIn = data;
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.isLoggedIn = this._loginService.getAuthStatus();
    };
    HeaderComponent.prototype.toggleMenuBar = function () {
        if (document.getElementById("collapsibleNavId").style.display == "block") {
            document.getElementById("collapsibleNavId").style.display = "none";
        }
        else {
            document.getElementById("collapsibleNavId").style.display = "block";
        }
    };
    HeaderComponent.prototype.logout = function () {
        this._loginService.logoutUser();
        this._router.navigate(['/login']);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_login_service_login_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card card-container\">\n    <div *ngIf=\"this.tfa.secret\">\n\n      <h5 style=\"border-bottom: 1px solid #a8a8a8; padding-bottom: 5px;\">Current Settings</h5>\n\n      <img [src]=\"tfa.dataURL\" alt=\"\" class=\"img-thumbnail\" style=\"display:block;margin:auto\">\n\n      <p>Secret Key - {{tfa.secret || tfa.tempSecret}}</p>\n\n      <p>Auth Type - Time Based - OTP</p>\n\n      <button class=\"btn btn-lg btn-danger btn-block btn-signin\" (click)=\"disabledTfa()\">Disable TFA</button>\n    </div>\n    <div *ngIf=\"!tfa.secret\">\n\n      <h5 style=\"border-bottom: 1px solid #a8a8a8; padding-bottom: 5px;\">Setup TFA</h5>\n\n      <span *ngIf=\"!!tfa.tempSecret\">\n\n        <p>Scan the QR code or enter the secret key in Google Authenticator</p>\n\n        <img [src]=\"tfa.dataURL\" alt=\"\" class=\"img-thumbnail\" style=\"display:block;margin:auto\">\n\n        <p>Secret Key - {{tfa.tempSecret}}</p>\n\n        <p>Auth Type - Time Based - OTP</p>\n\n        <form class=\"form-group\" (ngSubmit)=\"confirm()\" #otpForm=\"ngForm\">\n          <input name=\"authcode\" type=\"number\" #iauthcode=\"ngModel\" class=\"form-control\" maxlength=\"6\"\n            placeholder=\"Enter the Auth Code\" id=\"authcode\" autocomplete=\"off\" [(ngModel)]=\"authcode\" required>\n          <br>\n          <button type=\"Submit\" class=\"btn btn-lg btn-primary btn-block btn-signin\"\n            [disabled]=\"iauthcode?.errors?.required\">Enable TFA</button>\n        </form>\n        <p class=\"text-danger\" style=\"text-align:center;\" *ngIf=\"errorMessage\">{{errorMessage}}</p>\n      </span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_login_service_login_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login-service/login-service.service */ "./src/app/services/login-service/login-service.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_loginService) {
        this._loginService = _loginService;
        this.tfa = {};
        this.authcode = "";
        this.errorMessage = null;
        this.getAuthDetails();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.getAuthDetails = function () {
        var _this = this;
        this._loginService.getAuth().subscribe(function (data) {
            var result = data.body;
            if (data['status'] === 200) {
                console.log(result);
                if (result == null) {
                    _this.setup();
                }
                else {
                    _this.tfa = result;
                }
            }
        });
    };
    HomeComponent.prototype.setup = function () {
        var _this = this;
        this._loginService.setupAuth().subscribe(function (data) {
            var result = data.body;
            if (data['status'] === 200) {
                console.log(result);
                _this.tfa = result;
            }
        });
    };
    HomeComponent.prototype.confirm = function () {
        var _this = this;
        this._loginService.verifyAuth(this.authcode).subscribe(function (data) {
            var result = data.body;
            if (result['status'] === 200) {
                console.log(result);
                _this.errorMessage = null;
                _this.tfa.secret = _this.tfa.tempSecret;
                _this.tfa.tempSecret = "";
            }
            else {
                _this.errorMessage = result['message'];
            }
        });
    };
    HomeComponent.prototype.disabledTfa = function () {
        var _this = this;
        this._loginService.deleteAuth().subscribe(function (data) {
            var result = data.body;
            if (data['status'] === 200) {
                console.log(result);
                _this.authcode = "";
                _this.getAuthDetails();
            }
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_login_service_login_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginServiceService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card card-container\">\n    <img id=\"profile-img\" class=\"profile-img-card\" src=\"assets/images/avatar_2x.png\" />\n    <form class=\"form-signin\" (ngSubmit)=\"loginUser()\" #loginForm=\"ngForm\">\n      <input type=\"text\" id=\"uname\" class=\"form-control\" name=\"uname\" autocomplete=\"off\" #uname=\"ngModel\"\n        [(ngModel)]=\"userObject.uname\" placeholder=\"Username\" title=\"Please enter the username\" required autofocus>\n      <input type=\"password\" id=\"upass\" class=\"form-control\" name=\"upass\" autocomplete=\"off\" #upass=\"ngModel\"\n        [(ngModel)]=\"userObject.upass\" placeholder=\"Password\" title=\"Please enter the password\" required>\n      <input type=\"text\" id=\"authcode\" class=\"form-control\" *ngIf=\"this.tfaFlag\" name=\"authcode\" autocomplete=\"off\"\n        #authcode=\"ngModel\" [(ngModel)]=\"userObject.authcode\" placeholder=\"Two-Factor Auth code\"\n        title=\"Please enter the code\" required>\n      <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\"\n        [disabled]=\"uname?.errors?.required || upass?.errors?.required || (this.tfaFlag && authcode?.errors?.required)\">Sign\n        in</button>\n      <p style=\"text-align:center;\">Want to reset login? <a [routerLink]=\"['/register']\">Register\n          here</a></p>\n      <p class=\"text-danger\" style=\"text-align:center;\" *ngIf=\"errorMessage\">{{errorMessage}}</p>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_login_service_login_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login-service/login-service.service */ "./src/app/services/login-service/login-service.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_loginService, _router) {
        this._loginService = _loginService;
        this._router = _router;
        this.tfaFlag = false;
        this.userObject = {
            uname: "",
            upass: ""
        };
        this.errorMessage = null;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        this._loginService.loginAuth(this.userObject).subscribe(function (data) {
            _this.errorMessage = null;
            if (data.body['status'] === 200) {
                _this._loginService.updateAuthStatus(true);
                _this._router.navigateByUrl('/home');
            }
            if (data.body['status'] === 206) {
                _this.tfaFlag = true;
            }
            if (data.body['status'] === 403) {
                _this.errorMessage = data.body['message'];
            }
            if (data.body['status'] === 404) {
                _this.errorMessage = data.body['message'];
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_login_service_login_service_service__WEBPACK_IMPORTED_MODULE_3__["LoginServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card card-container\">\n    <img id=\"profile-img\" class=\"profile-img-card\" src=\"assets/images/avatar_2x.png\" />\n    <form class=\"form-signin\" (ngSubmit)=\"registerUser()\" #registerForm=\"ngForm\">\n      <input type=\"text\" id=\"uname\" class=\"form-control\" name=\"uname\" #uname=\"ngModel\" [(ngModel)]=\"userObject.uname\"\n        placeholder=\"Username\" title=\"Please enter the username\" autocomplete=\"off\" required autofocus>\n      <input type=\"password\" id=\"upass\" class=\"form-control\" name=\"upass\" placeholder=\"Password\"\n        title=\"Please enter the password\" #upass=\"ngModel\" autocomplete=\"off\" [(ngModel)]=\"userObject.upass\" required>\n      <input type=\"password\" id=\"confirmpass\" class=\"form-control\" name=\"confirmpass\" placeholder=\"Confirm password\"\n        title=\"Please re-enter the password\" #uconfirmpass=\"ngModel\" autocomplete=\"off\" [(ngModel)]=\"confirmPass\"\n        required>\n      <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\"\n        [disabled]=\"(uname?.errors?.required || upass?.errors?.required || uconfirmpass?.errors?.required) || (upass.value !== uconfirmpass.value)\">Sign\n        up</button>\n        <p style=\"text-align:center;\">Remember credentials? <a [routerLink]=\"['/login']\">Login\n          here</a></p>\n      <p class=\"text-success\" style=\"text-align:center;\" *ngIf=\"errorMessage\">{{errorMessage}}</p>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_login_service_login_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login-service/login-service.service */ "./src/app/services/login-service/login-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_loginService, _router) {
        this._loginService = _loginService;
        this._router = _router;
        this.errorMessage = null;
        this.userObject = {
            uname: "",
            upass: ""
        };
        this.confirmPass = "";
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerUser = function () {
        var _this = this;
        if (this.userObject.uname.trim() !== "" && this.userObject.upass.trim() !== "" && (this.userObject.upass.trim() === this.confirmPass))
            this._loginService.registerUser(this.userObject).subscribe(function (data) {
                var result = data.body;
                if (result['status'] === 200) {
                    _this.errorMessage = result['message'];
                    setTimeout(function () {
                        _this._router.navigate(['/login']);
                    }, 2000);
                }
            });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_login_service_login_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/guards/AuthGuard/auth-guard.guard.ts":
/*!******************************************************!*\
  !*** ./src/app/guards/AuthGuard/auth-guard.guard.ts ***!
  \******************************************************/
/*! exports provided: AuthGuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardGuard", function() { return AuthGuardGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_login_service_login_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login-service/login-service.service */ "./src/app/services/login-service/login-service.service.ts");




var AuthGuardGuard = /** @class */ (function () {
    function AuthGuardGuard(_loginService, _router) {
        this._loginService = _loginService;
        this._router = _router;
    }
    AuthGuardGuard.prototype.canActivate = function (next, state) {
        if (this._loginService.getAuthStatus()) {
            return true;
        }
        this._router.navigate(['/login']);
        return false;
    };
    AuthGuardGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_login_service_login_service_service__WEBPACK_IMPORTED_MODULE_3__["LoginServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardGuard);
    return AuthGuardGuard;
}());



/***/ }),

/***/ "./src/app/guards/Login/login.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/guards/Login/login.guard.ts ***!
  \*********************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_login_service_login_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login-service/login-service.service */ "./src/app/services/login-service/login-service.service.ts");




var LoginGuard = /** @class */ (function () {
    function LoginGuard(_loginService, _router) {
        this._loginService = _loginService;
        this._router = _router;
    }
    LoginGuard.prototype.canActivate = function (next, state) {
        if (!this._loginService.getAuthStatus()) {
            return true;
        }
        this._router.navigate(['/home']);
        return false;
    };
    LoginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_login_service_login_service_service__WEBPACK_IMPORTED_MODULE_3__["LoginServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/services/login-service/login-service.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/login-service/login-service.service.ts ***!
  \*****************************************************************/
/*! exports provided: LoginServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginServiceService", function() { return LoginServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var LoginServiceService = /** @class */ (function () {
    function LoginServiceService(_http) {
        this._http = _http;
        this.headerOptions = null;
        this._isLoggedIn = false;
        this.authSub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    LoginServiceService.prototype.loginAuth = function (userObj) {
        if (userObj.authcode) {
            console.log('Appending headers');
            this.headerOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-tfa': userObj.authcode
            });
        }
        return this._http.post("http://localhost:3000/login", { uname: userObj.uname, upass: userObj.upass }, { observe: 'response', headers: this.headerOptions });
    };
    LoginServiceService.prototype.setupAuth = function () {
        return this._http.post("http://localhost:3000/tfa/setup", {}, { observe: 'response' });
    };
    LoginServiceService.prototype.registerUser = function (userObj) {
        return this._http.post("http://localhost:3000/register", { uname: userObj.uname, upass: userObj.upass }, { observe: "response" });
    };
    LoginServiceService.prototype.updateAuthStatus = function (value) {
        this._isLoggedIn = value;
        this.authSub.next(this._isLoggedIn);
        localStorage.setItem('isLoggedIn', value ? "true" : "false");
    };
    LoginServiceService.prototype.getAuthStatus = function () {
        this._isLoggedIn = localStorage.getItem('isLoggedIn') == "true" ? true : false;
        return this._isLoggedIn;
    };
    LoginServiceService.prototype.logoutUser = function () {
        this._isLoggedIn = false;
        this.authSub.next(this._isLoggedIn);
        localStorage.setItem('isLoggedIn', "false");
    };
    LoginServiceService.prototype.getAuth = function () {
        return this._http.get("http://localhost:3000/tfa/setup", { observe: 'response' });
    };
    LoginServiceService.prototype.deleteAuth = function () {
        return this._http.delete("http://localhost:3000/tfa/setup", { observe: 'response' });
    };
    LoginServiceService.prototype.verifyAuth = function (token) {
        return this._http.post("http://localhost:3000/tfa/verify", { token: token }, { observe: 'response' });
    };
    LoginServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginServiceService);
    return LoginServiceService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ADMIN\Downloads\angular-node-mfauth-master\angular-node-mfauth-master\front-end\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map