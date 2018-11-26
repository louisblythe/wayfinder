/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from './nav';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../navigation/view-controller';
import * as import9 from '../../navigation/nav-controller';
import * as import10 from '../app/app';
import * as import11 from '../../config/config';
import * as import12 from '../../util/keyboard';
import * as import13 from '@angular/core/src/linker/element_ref';
import * as import14 from '@angular/core/src/zone/ng_zone';
import * as import15 from '@angular/core/src/linker/component_factory_resolver';
import * as import16 from '../../gestures/gesture-controller';
import * as import17 from '../../transitions/transition-controller';
import * as import18 from '../../navigation/deep-linker';
import * as import19 from '../../util/dom-controller';
import * as import20 from '@angular/core/src/linker/query_list';
import * as import21 from '@angular/core/src/linker/view_container';
export var Wrapper_Nav = (function () {
    function Wrapper_Nav(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12) {
        this._changed = false;
        this.context = new import0.Nav(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12);
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
        this._expr_2 = import1.UNINITIALIZED;
    }
    Wrapper_Nav.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_Nav.prototype.ngOnDestroy = function () {
    };
    Wrapper_Nav.prototype.check_root = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.root = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_Nav.prototype.check_rootParams = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.rootParams = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_Nav.prototype.check_swipeBackEnabled = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.swipeBackEnabled = currValue;
            this._expr_2 = currValue;
        }
    };
    Wrapper_Nav.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_Nav.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_Nav.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_Nav.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_Nav;
}());
var renderType_Nav_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_Nav_Host0 = (function (_super) {
    __extends(View_Nav_Host0, _super);
    function View_Nav_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_Nav_Host0, renderType_Nav_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckAlways);
    }
    View_Nav_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ion-nav', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_Nav0(this.viewUtils, this, 0, this._el_0);
        this._Nav_0_3 = new Wrapper_Nav(this.injectorGet(import8.ViewController, this.parentIndex, null), this.injectorGet(import9.NavController, this.parentIndex, null), this.injectorGet(import10.App, this.parentIndex), this.injectorGet(import11.Config, this.parentIndex), this.injectorGet(import12.Keyboard, this.parentIndex), new import13.ElementRef(this._el_0), this.injectorGet(import14.NgZone, this.parentIndex), this.renderer, this.injectorGet(import15.ComponentFactoryResolver, this.parentIndex), this.injectorGet(import16.GestureController, this.parentIndex), this.injectorGet(import17.TransitionController, this.parentIndex), this.injectorGet(import18.DeepLinker, this.parentIndex, null), this.injectorGet(import19.DomController, this.parentIndex));
        this.compView_0.create(this._Nav_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._Nav_0_3.context);
    };
    View_Nav_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Nav) && (0 === requestNodeIndex))) {
            return this._Nav_0_3.context;
        }
        return notFoundResult;
    };
    View_Nav_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Nav_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Nav_0_3.context.ngAfterViewInit();
            }
        }
    };
    View_Nav_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_Nav_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_Nav_Host0;
}(import2.AppView));
export var NavNgFactory = new import7.ComponentFactory('ion-nav', View_Nav_Host0, import0.Nav);
var styles_Nav = [];
var renderType_Nav = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, styles_Nav, {});
export var View_Nav0 = (function (_super) {
    __extends(View_Nav0, _super);
    function View_Nav0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_Nav0, renderType_Nav, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckAlways);
    }
    View_Nav0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._viewQuery_viewport_0 = new import20.QueryList();
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'nav-viewport', ''), null);
        this._vc_0 = new import21.ViewContainer(0, null, this, this._el_0);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'nav-decor'), null);
        this._viewQuery_viewport_0.reset([this._vc_0.vcRef]);
        this.context._vp = this._viewQuery_viewport_0.first;
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1
        ]), null);
        return null;
    };
    View_Nav0.prototype.detectChangesInternal = function (throwOnChange) {
        this._vc_0.detectChangesInNestedViews(throwOnChange);
    };
    View_Nav0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
    };
    return View_Nav0;
}(import2.AppView));
//# sourceMappingURL=nav.ngfactory.js.map