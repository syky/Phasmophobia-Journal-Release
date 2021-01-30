(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\workspace\PhasmophobiaJournal\src\main.ts */"zUnb");


/***/ }),

/***/ "3hai":
/*!**************************!*\
  !*** ./src/app/ghost.ts ***!
  \**************************/
/*! exports provided: Ghost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ghost", function() { return Ghost; });
class Ghost {
    constructor(name) {
        this.isDisplayed = true;
        this.description = '';
        this.evidences = [];
        this.name = name;
    }
    addEvidence(evidence) {
        this.evidences.push(evidence);
        return this;
    }
}


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "R9fi":
/*!***************************************!*\
  !*** ./src/app/evidence-type.enum.ts ***!
  \***************************************/
/*! exports provided: EvidenceType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceType", function() { return EvidenceType; });
var EvidenceType;
(function (EvidenceType) {
    EvidenceType[EvidenceType["EMF5"] = 0] = "EMF5";
    EvidenceType[EvidenceType["FINGERPRINT"] = 1] = "FINGERPRINT";
    EvidenceType[EvidenceType["FREEZING"] = 2] = "FREEZING";
    EvidenceType[EvidenceType["ORB"] = 3] = "ORB";
    EvidenceType[EvidenceType["GHOST_WRITING"] = 4] = "GHOST_WRITING";
    EvidenceType[EvidenceType["SPIRIT_BOX"] = 5] = "SPIRIT_BOX";
})(EvidenceType || (EvidenceType = {}));


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _evidence__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./evidence */ "vEZa");
/* harmony import */ var _ghost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ghost */ "3hai");
/* harmony import */ var _evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./evidence-type.enum */ "R9fi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");









function AppComponent_mat_button_toggle_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-button-toggle", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AppComponent_mat_button_toggle_5_Template_mat_button_toggle_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.selectEvidence($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ev_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ev_r2)("disabled", !ev_r2.isEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ev_r2.label);
} }
function AppComponent_div_11_mat_card_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const evidence_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.getEvidenceLabel(evidence_r8));
} }
function AppComponent_div_11_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AppComponent_div_11_mat_card_1_div_10_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ghost_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ghost_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ghost_r5.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ghost_r5.evidences);
} }
function AppComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AppComponent_div_11_mat_card_1_Template, 11, 3, "mat-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ghost_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ghost_r5.isDisplayed);
} }
class AppComponent {
    constructor() {
        this.title = 'PhasmophobiaJournal';
        this.evidences = [];
        this.ghosts = [];
        this.selectedEvidence = [];
    }
    ngOnInit() {
        this.evidences.push(new _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"](_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].EMF5, 'EMF Level 5'));
        this.evidences.push(new _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"](_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].FINGERPRINT, 'Fingerprints'));
        this.evidences.push(new _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"](_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].FREEZING, 'Freezing Temperature'));
        this.evidences.push(new _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"](_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].ORB, 'Ghost Orb'));
        this.evidences.push(new _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"](_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].GHOST_WRITING, 'Ghost Writing'));
        this.evidences.push(new _evidence__WEBPACK_IMPORTED_MODULE_0__["Evidence"](_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].SPIRIT_BOX, 'Sprit Box'));
        let sprit = new _ghost__WEBPACK_IMPORTED_MODULE_1__["Ghost"]('Spirit')
            .addEvidence(_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].FINGERPRINT)
            .addEvidence(_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].GHOST_WRITING)
            .addEvidence(_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].SPIRIT_BOX);
        let wraith = new _ghost__WEBPACK_IMPORTED_MODULE_1__["Ghost"]('Wraith')
            .addEvidence(_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].FINGERPRINT)
            .addEvidence(_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].FREEZING)
            .addEvidence(_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].SPIRIT_BOX);
        let phantom = new _ghost__WEBPACK_IMPORTED_MODULE_1__["Ghost"]('Phantom')
            .addEvidence(_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].EMF5)
            .addEvidence(_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].FREEZING)
            .addEvidence(_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].ORB);
        let banshee = new _ghost__WEBPACK_IMPORTED_MODULE_1__["Ghost"]('Banshee')
            .addEvidence(_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].EMF5)
            .addEvidence(_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].FINGERPRINT)
            .addEvidence(_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].FREEZING);
        let jinn = new _ghost__WEBPACK_IMPORTED_MODULE_1__["Ghost"]('Jinn')
            .addEvidence(_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].EMF5)
            .addEvidence(_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].ORB)
            .addEvidence(_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].SPIRIT_BOX);
        let mare = new _ghost__WEBPACK_IMPORTED_MODULE_1__["Ghost"]('Mare')
            .addEvidence(_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].FREEZING)
            .addEvidence(_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].ORB)
            .addEvidence(_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].SPIRIT_BOX);
        let revenant = new _ghost__WEBPACK_IMPORTED_MODULE_1__["Ghost"]('Revenant')
            .addEvidence(_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].EMF5)
            .addEvidence(_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].FINGERPRINT)
            .addEvidence(_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].GHOST_WRITING);
        let shade = new _ghost__WEBPACK_IMPORTED_MODULE_1__["Ghost"]('Shade')
            .addEvidence(_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].EMF5)
            .addEvidence(_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].ORB)
            .addEvidence(_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].GHOST_WRITING);
        let deamon = new _ghost__WEBPACK_IMPORTED_MODULE_1__["Ghost"]('Demon')
            .addEvidence(_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].FREEZING)
            .addEvidence(_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].GHOST_WRITING)
            .addEvidence(_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].SPIRIT_BOX);
        let yurei = new _ghost__WEBPACK_IMPORTED_MODULE_1__["Ghost"]('Yurei')
            .addEvidence(_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].FREEZING)
            .addEvidence(_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].GHOST_WRITING)
            .addEvidence(_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].SPIRIT_BOX);
        let oni = new _ghost__WEBPACK_IMPORTED_MODULE_1__["Ghost"]('Oni')
            .addEvidence(_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].EMF5)
            .addEvidence(_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].GHOST_WRITING)
            .addEvidence(_evidence_type_enum__WEBPACK_IMPORTED_MODULE_2__["EvidenceType"].SPIRIT_BOX);
        sprit.description = "A Spirit is the most common Ghost you will come across, but it is still very powerful and dangerous. It is usually discovered at one of its hunting grounds after an unexplained death. It has no special strengths. Smudge sticks affect Spirits by preventing them from hunting for about three minutes.";
        wraith.description = "A Wraith is one of the most dangerous ghosts you will find. It is the only known Ghost that has the ability of flight, and has sometimes been known to see through doors and go through walls. Salt is toxic to a Wraith.";
        phantom.description = "A Phantom is a fear-inducing ghost, quickly draining the sanity of those who view it. Taking a picture of it will make it disappear temporarily. Although rumored to possess the living, it has no ability to actually do so. It is said to be commonly summoned by a Ouija Board, although players cannot summon one themselves, nor does a Phantom's presence guarantee that a Ouija Board will spawn.";
        this.ghosts.push(sprit);
        this.ghosts.push(wraith);
        this.ghosts.push(phantom);
        this.ghosts.push(banshee);
        this.ghosts.push(jinn);
        this.ghosts.push(mare);
        this.ghosts.push(revenant);
        this.ghosts.push(shade);
        this.ghosts.push(deamon);
        this.ghosts.push(yurei);
        this.ghosts.push(oni);
    }
    getEvidenceLabel(evidence) {
        let find = this.evidences.find(value => value.name === evidence);
        if (find == null) {
            return 'NOT_FOUND';
        }
        return find.label;
    }
    selectEvidence($event) {
        let isRemove = !$event.source.checked;
        if (isRemove) {
            let find = this.selectedEvidence.find(value => value.name == $event.value);
            if (find != null) {
                this.selectedEvidence.splice(this.selectedEvidence.indexOf(find), 1);
            }
        }
        else {
            let find = this.evidences.find(value => value.name == $event.value);
            if (find != null) {
                this.selectedEvidence.push(find);
            }
        }
        this.updateGhosts();
        this.updateAvailableEvidence();
    }
    updateGhosts() {
        for (const ghost of this.ghosts) {
            if (!ghost.isDisplayed) {
                ghost.isDisplayed = true;
            }
            for (const evidence of this.selectedEvidence) {
                if (ghost.evidences.indexOf(evidence.name) < 0) {
                    ghost.isDisplayed = false;
                    break;
                }
            }
        }
    }
    updateAvailableEvidence() {
        for (const evidence of this.evidences) {
            evidence.isEnabled = false;
        }
        let activeGhosts = this.ghosts.filter(value => value.isDisplayed);
        for (const activeGhost of activeGhosts) {
            for (const ghostEvidence of activeGhost.evidences) {
                let evidence = this.evidences.find(value => value.name === ghostEvidence);
                if (evidence != null) {
                    evidence.isEnabled = true;
                }
            }
        }
    }
    reset() {
        this.selectedEvidence = [];
        for (const evidence of this.evidences) {
            evidence.isEnabled = true;
        }
        for (const ghost of this.ghosts) {
            ghost.isDisplayed = true;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 4, consts: [[1, "example-button-row"], ["name", "fontStyle", "aria-label", "Font Style", 3, "multiple", "ngModel", "ngModelChange"], ["color", "primary", 3, "value", "disabled", "change", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["style", "padding-top: 10px;", 4, "ngFor", "ngForOf"], ["color", "primary", 3, "value", "disabled", "change"], [2, "padding-top", "10px"], ["class", "example-card", "style", "border: lightgray solid", 4, "ngIf"], [1, "example-card", 2, "border", "lightgray solid"], ["mat-card-avatar", "", 1, "example-header-image"], [4, "ngFor", "ngForOf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Evidences");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-button-toggle-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_mat_button_toggle_group_ngModelChange_4_listener($event) { return ctx.selectedEvidence = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AppComponent_mat_button_toggle_5_Template, 2, 3, "mat-button-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_6_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Ghosts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AppComponent_div_11_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("multiple", true)("ngModel", ctx.selectedEvidence);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.evidences);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.ghosts);
    } }, directives: [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardActions"]], styles: [".example-card[_ngcontent-%COMP%] {\r\n  width: 400px;\r\n}\r\n\r\n.example-header-image[_ngcontent-%COMP%] {\r\n  \r\n  background-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUZBQXVGO0VBQ3ZGLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gIHdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICAvKmJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpOyovXHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]] }); })();


/***/ }),

/***/ "vEZa":
/*!*****************************!*\
  !*** ./src/app/evidence.ts ***!
  \*****************************/
/*! exports provided: Evidence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Evidence", function() { return Evidence; });
class Evidence {
    constructor(name, label) {
        this.isEnabled = true;
        this.name = name;
        this.label = label;
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map