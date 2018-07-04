webpackJsonp([0],{

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModule", function() { return DetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetailPageModule = /** @class */ (function () {
    function DetailPageModule() {
    }
    DetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detail__["a" /* DetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detail__["a" /* DetailPage */]),
            ],
        })
    ], DetailPageModule);
    return DetailPageModule;
}());

//# sourceMappingURL=detail.module.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_note_service__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailPage = /** @class */ (function () {
    function DetailPage(navCtrl, navParams, noteService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.noteService = noteService;
        this.alertCtrl = alertCtrl;
        this.newNoteFlag = false;
        this.deleteNoteFlag = false;
        this.note = this.navParams.get('noteParam');
        this.userId = this.navParams.get('userId');
        if (!this.note) {
            this.note = {
                id: "",
                date: "",
                title: "",
                content: ""
            };
            this.newNoteFlag = true;
        }
        console.log('nav-param', this.note);
        console.log('title', this.note.title);
        //this.note.content = '<img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/292px-Wikipedia_%28mythology%29_Titans_Watlas.jpg" />';
        console.log('content', this.note.content);
        //this.message = '<h1>Hello World</h1>';
        //this.message = '<img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/292px-Wikipedia_%28mythology%29_Titans_Watlas.jpg" />';
        this.message = this.note.content;
    }
    DetailPage.prototype.onTrash = function () {
        var _this = this;
        console.log('onTrash');
        var confirm = this.alertCtrl.create({
            title: 'Delete ?',
            message: 'Are you sure you want to delete this note:"${this.note.title} ?"',
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Confirm',
                    handler: function () {
                        _this.noteService.removeNote(_this.note, _this.userId);
                        _this.deleteNoteFlag = true;
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        confirm.present();
    };
    DetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailPage');
    };
    DetailPage.prototype.ionViewWillLeave = function () {
        if (this.note.title === "" && this.note.date === "" && this.note.content === "") {
        }
        else if (this.newNoteFlag) {
            this.noteService.addNote(this.note, this.userId);
            console.log("add note");
        }
        else if (this.deleteNoteFlag) {
            this.noteService.removeNote(this.note, this.userId);
            console.log("delete note");
        }
        else {
            this.noteService.editNote(this.note, this.userId);
            console.log("edit note");
        }
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"/Users/luismanalac/Documents/IonicTutorial/NotableNotes-v.4/src/pages/detail/detail.html"*/'<!--\n  Generated template for the DetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{note.title}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="onTrash()" *ngIf="!newNoteFlag">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <!--<ion-label fixed>Title</ion-label>-->\n      <ion-input type="text" [(ngModel)]="note.title"></ion-input>\n      <!--<ion-input type="text" [(ngModel)]="note.title" value=""></ion-input>-->\n    </ion-item>\n\n\n    <ion-item>\n      <!--<ion-label fixed>Date</ion-label>-->\n      <ion-datetime type="text" [(ngModel)]="note.date"></ion-datetime>\n    </ion-item>\n\n\n    <ion-item>\n      <p [innerHTML]="message">\n      </p>\n    </ion-item>\n\n    <ion-item>\n      <ion-textarea placeholder="Content" [(ngModel)]="note.content"></ion-textarea>\n    </ion-item>\n\n\n\n\n  </ion-list>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/luismanalac/Documents/IonicTutorial/NotableNotes-v.4/src/pages/detail/detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__app_note_service__["a" /* NoteService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ })

});
//# sourceMappingURL=0.js.map