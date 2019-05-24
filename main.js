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
/* harmony import */ var _nova_transacao_nova_transacao_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nova-transacao/nova-transacao.component */ "./src/app/nova-transacao/nova-transacao.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _configuracao_configuracao_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./configuracao/configuracao.component */ "./src/app/configuracao/configuracao.component.ts");






var controleFinanceiroRoutes = [
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'resumo', component: _nova_transacao_nova_transacao_component__WEBPACK_IMPORTED_MODULE_3__["NovaTransacaoComponent"] },
    { path: 'configuracao', component: _configuracao_configuracao_component__WEBPACK_IMPORTED_MODULE_5__["ConfiguracaoComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(controleFinanceiroRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "<app-menu></app-menu>\n\n<div class=\"row container\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'controle-financeiro';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _nova_transacao_nova_transacao_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nova-transacao/nova-transacao.component */ "./src/app/nova-transacao/nova-transacao.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _controle_financeiro_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controle-financeiro.service */ "./src/app/controle-financeiro.service.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _configuracao_configuracao_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./configuracao/configuracao.component */ "./src/app/configuracao/configuracao.component.ts");







//import { ExtratoTransacaoComponent } from './extrato-transacao/extrato-transacao.component';




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
                _nova_transacao_nova_transacao_component__WEBPACK_IMPORTED_MODULE_6__["NovaTransacaoComponent"],
                //ExtratoTransacaoComponent,
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _configuracao_configuracao_component__WEBPACK_IMPORTED_MODULE_10__["ConfiguracaoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            providers: [_controle_financeiro_service__WEBPACK_IMPORTED_MODULE_8__["ControleFinanceiroService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/configuracao/configuracao.component.html":
/*!**********************************************************!*\
  !*** ./src/app/configuracao/configuracao.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Falta Criar Configurações!\n</p>\n<p>\n  Clique em resumo.\n</p>\n"

/***/ }),

/***/ "./src/app/configuracao/configuracao.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/configuracao/configuracao.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYWNhby9jb25maWd1cmFjYW8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/configuracao/configuracao.component.ts":
/*!********************************************************!*\
  !*** ./src/app/configuracao/configuracao.component.ts ***!
  \********************************************************/
/*! exports provided: ConfiguracaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracaoComponent", function() { return ConfiguracaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfiguracaoComponent = /** @class */ (function () {
    function ConfiguracaoComponent() {
    }
    ConfiguracaoComponent.prototype.ngOnInit = function () {
    };
    ConfiguracaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-configuracao',
            template: __webpack_require__(/*! ./configuracao.component.html */ "./src/app/configuracao/configuracao.component.html"),
            styles: [__webpack_require__(/*! ./configuracao.component.scss */ "./src/app/configuracao/configuracao.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfiguracaoComponent);
    return ConfiguracaoComponent;
}());



/***/ }),

/***/ "./src/app/controle-financeiro.service.ts":
/*!************************************************!*\
  !*** ./src/app/controle-financeiro.service.ts ***!
  \************************************************/
/*! exports provided: ControleFinanceiroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControleFinanceiroService", function() { return ControleFinanceiroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


//import { ExtratoTransacaoComponent } from './extrato-transacao/extrato-transacao.component';
var ControleFinanceiroService = /** @class */ (function () {
    //total: number;
    function ControleFinanceiroService() {
        this.transacaoList = [];
        this.retornoObj = [];
    }
    ControleFinanceiroService.prototype.lerTransacao = function () {
        var lerTransacaoJson = window.localStorage.getItem("novaTransacao");
        if (lerTransacaoJson == null) {
            lerTransacaoJson = null;
            console.log("Local Storage vazio!");
        }
        else {
            this.retornoObj = JSON.parse(lerTransacaoJson);
            console.log("Ler", this.retornoObj);
            return this.retornoObj;
        }
    };
    ControleFinanceiroService.prototype.salvarTransacao = function (form) {
        this.transacaoList.push(form);
        var formJson = JSON.stringify(this.transacaoList); //transforma objeto em string
        //location.reload();
        var resultado = window.localStorage.setItem("novaTransacao", formJson);
    };
    ControleFinanceiroService.prototype.inserirTotal = function () {
        var total = this.retornoObj.reduce(function (soma, atual) {
            return ((soma) + (+atual.valor));
        }, null);
        return total;
    };
    ControleFinanceiroService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ControleFinanceiroService);
    return ControleFinanceiroService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Falta Criar painel de controle!\n</p>\n<p>\n    Clique em resumo.\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav>\n    <div class=\"nav-wrapper\">\n        \n      \n            <a>Controle Financeiro</a>\n     \n\n      <a href=\"#\" data-target=\"mobile\" class=\"sidenav-trigger\"><i class=\"material-icons\">menu</i></a>\n      <!--Desktop-->\n      <ul class=\"right hide-on-med-and-down\">\n\n        <li routerLinkActive=\"active\">\n           <a [routerLink]=\"['/dashboard']\">Dashboard</a>\n        </li>\n\n        <li routerLinkActive=\"active\">\n          <a [routerLink]=\"['/resumo']\">Resumo</a>\n        </li>\n\n        <li routerLinkActive=\"active\">\n          <a [routerLink]=\"['/configuracao']\">Configurações</a></li>\n      </ul>\n    </div>\n  </nav>\n  \n  \n  <!-- Mobile-->\n  <ul class=\"sidenav\" id=\"mobile\">\n    <li routerLinkActive=\"active\">\n       <a [routerLink]=\"['/dashboard']\">Dashboard</a>\n    </li>\n\n    <li routerLinkActive=\"active\">\n       <a [routerLink]=\"['/resumo']\">Resumo</a>\n    </li>\n    \n    <li routerLinkActive=\"active\">\n       <a [routerLink]=\"['/configuracao']\">Configurações</a>\n    </li>\n  </ul>\n  \n  \n     \n       \n\n  <!--\n\n    botao fechar\n    <div class=\"nav-wrapper\">\n                <a href=\"#\" class=\"nav-toggle nav-close\" data-action=\"close\">\n                    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n                </a>\n    </div>\n\n<nav>\n  <div class=\"nav-wrapper\">\n     \n    <h6> Controle financeiro</h6>\n    <a href=\"\" class=\"button-collapse\" data-activates=\"moblile\">\n        \n        <i class=\"material-icons\">dehaze</i>\n       \n    </a>\n    \n   \n    <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n\n        <li routerLinkActive=\"active\">\n           <a routerLink=\"\">Dashboard</a>\n        </li>\n\n        <li routerLinkActive=\"active\">\n            <a routerLinkActive=\"active\" routerLink=\"\">Resumo</a>\n        </li>\n\n        <li routerLinkActive=\"active\">\n           <a routerLinkActive=\"active\" routerLink=\"\">Configurações</a>\n        </li>\n\n    </ul>\n  \n  </div>\n</nav>\n-->"

/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-wrapper {\n  background-color: #DCDCDC; }\n\n.nav-wrapper a {\n  color: #1C1C1C;\n  font-family: lato; }\n\n.sidenav {\n  background-color: #1C1C1C; }\n\n.sidenav li a {\n  color: #DCDCDC;\n  font-family: lato; }\n\n.sidenav li > a:hover {\n  background-color: #DCDCDC;\n  color: #1C1C1C;\n  font-family: lato; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9DOlxcUHJvamV0b3NcXGN1cnNvLWFuZ3VsYXIyXFxjb250cm9sZS1maW5hbmNlaXJvL3NyY1xcYXBwXFxtZW51XFxtZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSx5QkFBeUI7RUFDekIsY0FBZTtFQUNmLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi13cmFwcGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEQ0RDREM7XHJcbn1cclxuLm5hdi13cmFwcGVyIGF7XHJcbiAgY29sb3I6ICMxQzFDMUM7XHJcbiAgZm9udC1mYW1pbHk6IGxhdG87XHJcbn1cclxuXHJcbi5zaWRlbmF2e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxQzFDMUM7XHJcbn1cclxuLnNpZGVuYXYgbGkgYXtcclxuICBjb2xvcjogI0RDRENEQztcclxuICBmb250LWZhbWlseTogbGF0bztcclxufVxyXG4uc2lkZW5hdiBsaSA+IGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEQ0RDREM7XHJcbiAgY29sb3I6ICAjMUMxQzFDO1xyXG4gIGZvbnQtZmFtaWx5OiBsYXRvO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('.sidenav').sidenav();
        });
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/nova-transacao/nova-transacao.component.html":
/*!**************************************************************!*\
  !*** ./src/app/nova-transacao/nova-transacao.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"row nova-transacao col s12 col m12 col l6 col xl6\">\n  <h5 class=\"center-align\">Nova Transação</h5><br>\n  <form #f=\"ngForm\" (ngSubmit)=\"setLocalStorageTransacao(f)\">\n      <div class=\"validate input-field\">\n        <select name=\"transacao\" ngModel>\n          <option value=\"\" disabled>Escolha uma opção</option>\n            <option>Compra</option>\n            <option>Venda</option>\n          </select>\n          <label>Tipo de transação</label>\n      </div>\n\n      <div class=\"input-field\">\n        <input id=\"nome\" type=\"text\" class=\"validate\" name=\"nome\" ngModel required>\n        <label class=\"active\" for=\"nome\">Nome da Mercadoria</label>\n      </div>\n\n      <div class=\"input-field\">\n        <input id=\"valor\" type=\"text\" class=\"validate\" name=\"valor\" ngModel required>\n        <label class=\"active\" for=\"valor\">Valor</label>\n      </div>\n      \n      <button type=\"submit\" \n              class=\"btn btn-small\" \n              name=\"adicionar-transacao\">\n              Adicionar transação\n      </button>\n  </form><br>\n</div>\n\n\n<!--<app-extrato-transacao></app-extrato-transacao>-->\n\n<div class=\"extrato-transacao col s12 col m12 col l6 col xl6\">\n    \n    <h5 class=\"center-align\">Extrato de transações</h5>\n\n    <div class=\"col s12\">\n       <h6 class=\"col s10\">Mercadoria</h6>\n       <h6 class=\"col s2\">Valor</h6>\n    </div>\n\n    <div>\n        <ul *ngFor=\"let retorno of retornoObj\" class=\"collection\">\n             <li class=\"collection-item\">{{retorno.nome}}<span class=\"badge\">{{retorno.valor}}</span></li>\n        </ul>\n       <h6 class=\"col s10\">Total</h6>\n       <h6 class=\"col s2\">{{total}}<br><span>[Lucro]</span></h6>\n       \n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/nova-transacao/nova-transacao.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/nova-transacao/nova-transacao.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nova-transacao {\n  border: 2px solid #e0e0e0; }\n\n.nova-transacao h5 {\n  color: #1C1C1C;\n  font-family: lato;\n  font-weight: bold; }\n\n.btn {\n  background-color: #1C1C1C;\n  color: #DCDCDC;\n  font-family: lato; }\n\n.btn-small {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm92YS10cmFuc2FjYW8vQzpcXFByb2pldG9zXFxjdXJzby1hbmd1bGFyMlxcY29udHJvbGUtZmluYW5jZWlyby9zcmNcXGFwcFxcbm92YS10cmFuc2FjYW9cXG5vdmEtdHJhbnNhY2FvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksY0FBYztFQUNkLGlCQUFpQjtFQUNqQixpQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25vdmEtdHJhbnNhY2FvL25vdmEtdHJhbnNhY2FvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdmEtdHJhbnNhY2Fve1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2UwZTBlMDtcclxufVxyXG4ubm92YS10cmFuc2FjYW8gaDV7XHJcbiAgICBjb2xvcjogIzFDMUMxQztcclxuICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxufVxyXG5cclxuLmJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQzFDMUM7XHJcbiAgICBjb2xvcjogI0RDRENEQztcclxuICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xyXG59XHJcbi5idG4tc21hbGx7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/nova-transacao/nova-transacao.component.ts":
/*!************************************************************!*\
  !*** ./src/app/nova-transacao/nova-transacao.component.ts ***!
  \************************************************************/
/*! exports provided: NovaTransacaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovaTransacaoComponent", function() { return NovaTransacaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _controle_financeiro_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controle-financeiro.service */ "./src/app/controle-financeiro.service.ts");



var NovaTransacaoComponent = /** @class */ (function () {
    function NovaTransacaoComponent(controleFinanceiroService) {
        this.controleFinanceiroService = controleFinanceiroService;
        this.transacaoList = [];
        this.retornoObj = [];
        this.total = null;
    }
    NovaTransacaoComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('select').formSelect();
            M.updateTextFields();
        });
        this.getLocalStorageTransacao();
        this.inserirTotal();
    };
    NovaTransacaoComponent.prototype.setLocalStorageTransacao = function (f) {
        var novaTransacao = f.value;
        if ((((novaTransacao.nome === "") || (novaTransacao.nome == null) ||
            ((novaTransacao.valor === "") || (novaTransacao.valor == null))))) {
            return alert("Preencher todos os dados são obrigatórios!");
        }
        else {
            this.controleFinanceiroService.salvarTransacao(novaTransacao);
            f.reset();
            this.getLocalStorageTransacao();
            this.inserirTotal();
        }
    };
    NovaTransacaoComponent.prototype.getLocalStorageTransacao = function () {
        this.retornoObj = this.controleFinanceiroService.lerTransacao();
        return this.retornoObj;
    };
    NovaTransacaoComponent.prototype.inserirTotal = function () {
        this.total = this.controleFinanceiroService.inserirTotal();
        console.log("Total preenchido: ", this.total);
        return this.total;
    };
    NovaTransacaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nova-transacao',
            template: __webpack_require__(/*! ./nova-transacao.component.html */ "./src/app/nova-transacao/nova-transacao.component.html"),
            styles: [__webpack_require__(/*! ./nova-transacao.component.scss */ "./src/app/nova-transacao/nova-transacao.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_controle_financeiro_service__WEBPACK_IMPORTED_MODULE_2__["ControleFinanceiroService"]])
    ], NovaTransacaoComponent);
    return NovaTransacaoComponent;
}());

/*
setLocalStorageTransacao2(form){
        
        let novaTransacao = form.value;

        this.transacaoList.push(novaTransacao);

        let formJson = JSON.stringify(this.transacaoList); //transforma objeto em string

        let resultado = localStorage.setItem("novaTransacao", formJson);
        
        console.log("salvar",resultado);

        form.reset();

    }
*/


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

module.exports = __webpack_require__(/*! C:\Projetos\curso-angular2\controle-financeiro\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map