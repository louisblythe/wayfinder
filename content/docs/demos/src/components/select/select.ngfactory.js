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
import * as import0 from './select';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/query_list';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../app/app';
import * as import10 from '../../util/form';
import * as import11 from '../../config/config';
import * as import12 from '@angular/core/src/linker/element_ref';
import * as import13 from '../item/item';
import * as import14 from '../../navigation/nav-controller';
import * as import15 from '@angular/forms/src/directives/control_value_accessor';
import * as import16 from '@angular/core/src/linker/view_container';
import * as import17 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import18 from '../button/button';
import * as import19 from '../button/button.ngfactory';
import * as import20 from '@angular/core/src/linker/template_ref';
import * as import21 from '@angular/common/src/directives/ng_if';
export var Wrapper_Select = (function () {
    function Wrapper_Select(p0, p1, p2, p3, p4, p5, p6) {
        this._changed = false;
        this.context = new import0.Select(p0, p1, p2, p3, p4, p5, p6);
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
        this._expr_2 = import1.UNINITIALIZED;
        this._expr_3 = import1.UNINITIALIZED;
        this._expr_4 = import1.UNINITIALIZED;
        this._expr_5 = import1.UNINITIALIZED;
        this._expr_6 = import1.UNINITIALIZED;
        this._expr_7 = import1.UNINITIALIZED;
        this._expr_8 = import1.UNINITIALIZED;
        this._expr_9 = import1.UNINITIALIZED;
    }
    Wrapper_Select.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_Select.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
        (this.subscription0 && this.subscription0.unsubscribe());
        (this.subscription1 && this.subscription1.unsubscribe());
    };
    Wrapper_Select.prototype.check_cancelText = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.cancelText = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_Select.prototype.check_okText = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.okText = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_Select.prototype.check_placeholder = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.placeholder = currValue;
            this._expr_2 = currValue;
        }
    };
    Wrapper_Select.prototype.check_selectOptions = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_3, currValue))) {
            this._changed = true;
            this.context.selectOptions = currValue;
            this._expr_3 = currValue;
        }
    };
    Wrapper_Select.prototype.check_interface = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_4, currValue))) {
            this._changed = true;
            this.context.interface = currValue;
            this._expr_4 = currValue;
        }
    };
    Wrapper_Select.prototype.check_selectedText = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_5, currValue))) {
            this._changed = true;
            this.context.selectedText = currValue;
            this._expr_5 = currValue;
        }
    };
    Wrapper_Select.prototype.check_mode = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_6, currValue))) {
            this._changed = true;
            this.context.mode = currValue;
            this._expr_6 = currValue;
        }
    };
    Wrapper_Select.prototype.check_multiple = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_7, currValue))) {
            this._changed = true;
            this.context.multiple = currValue;
            this._expr_7 = currValue;
        }
    };
    Wrapper_Select.prototype.check_disabled = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_8, currValue))) {
            this._changed = true;
            this.context.disabled = currValue;
            this._expr_8 = currValue;
        }
    };
    Wrapper_Select.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_Select.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_9 = this.context._disabled;
        if (import3.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            view.renderer.setElementClass(el, 'select-disabled', currVal_9);
            this._expr_9 = currVal_9;
        }
    };
    Wrapper_Select.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context._click($event) !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'keyup.space')) {
            var pd_sub_1 = (this.context._keyup() !== false);
            result = (pd_sub_1 && result);
        }
        return result;
    };
    Wrapper_Select.prototype.subscribe = function (view, _eventHandler, emit0, emit1) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.ionChange.subscribe(_eventHandler.bind(view, 'ionChange')));
        }
        if (emit1) {
            (this.subscription1 = this.context.ionCancel.subscribe(_eventHandler.bind(view, 'ionCancel')));
        }
    };
    return Wrapper_Select;
}());
var renderType_Select_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_Select_Host0 = (function (_super) {
    __extends(View_Select_Host0, _super);
    function View_Select_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_Select_Host0, renderType_Select_Host, import7.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckAlways);
    }
    Object.defineProperty(View_Select_Host0.prototype, "_NG_VALUE_ACCESSOR_0_4", {
        get: function () {
            if ((this.__NG_VALUE_ACCESSOR_0_4 == null)) {
                (this.__NG_VALUE_ACCESSOR_0_4 = [this._Select_0_3.context]);
            }
            return this.__NG_VALUE_ACCESSOR_0_4;
        },
        enumerable: true,
        configurable: true
    });
    View_Select_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ion-select', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_Select0(this.viewUtils, this, 0, this._el_0);
        this._Select_0_3 = new Wrapper_Select(this.injectorGet(import9.App, this.parentIndex), this.injectorGet(import10.Form, this.parentIndex), this.injectorGet(import11.Config, this.parentIndex), new import12.ElementRef(this._el_0), this.renderer, this.injectorGet(import13.Item, this.parentIndex, null), this.injectorGet(import14.NavController, this.parentIndex, null));
        this._query_Option_0_0 = new import6.QueryList();
        this.compView_0.create(this._Select_0_3.context);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray4(4, 'click', null, 'keyup.space', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), [disposable_0]);
        return new import8.ComponentRef_(0, this, this._el_0, this._Select_0_3.context);
    };
    View_Select_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Select) && (0 === requestNodeIndex))) {
            return this._Select_0_3.context;
        }
        if (((token === import15.NG_VALUE_ACCESSOR) && (0 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_0_4;
        }
        return notFoundResult;
    };
    View_Select_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Select_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        if (!throwOnChange) {
            if (this._query_Option_0_0.dirty) {
                this._query_Option_0_0.reset([]);
                this._Select_0_3.context.options = this._query_Option_0_0;
                this._query_Option_0_0.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Select_0_3.context.ngAfterContentInit();
            }
        }
        this._Select_0_3.checkHost(this, this.compView_0, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    };
    View_Select_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._Select_0_3.ngOnDestroy();
    };
    View_Select_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_Select_Host0.prototype.handleEvent_0 = function (eventName, $event) {
        this.compView_0.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._Select_0_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_Select_Host0;
}(import2.AppView));
export var SelectNgFactory = new import8.ComponentFactory('ion-select', View_Select_Host0, import0.Select);
var styles_Select = [];
var renderType_Select = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, styles_Select, {});
export var View_Select0 = (function (_super) {
    __extends(View_Select0, _super);
    function View_Select0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_Select0, renderType_Select, import7.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_13 = import1.UNINITIALIZED;
        this._expr_14 = import1.UNINITIALIZED;
        this._expr_15 = import1.UNINITIALIZED;
    }
    View_Select0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_0 = new import16.ViewContainer(0, null, this, this._anchor_0);
        this._TemplateRef_0_5 = new import20.TemplateRef_(this, 0, this._anchor_0);
        this._NgIf_0_6 = new import17.Wrapper_NgIf(this._vc_0.vcRef, this._TemplateRef_0_5);
        this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_1 = new import16.ViewContainer(1, null, this, this._anchor_1);
        this._TemplateRef_1_5 = new import20.TemplateRef_(this, 1, this._anchor_1);
        this._NgIf_1_6 = new import17.Wrapper_NgIf(this._vc_1.vcRef, this._TemplateRef_1_5);
        this._el_2 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'select-icon'), null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'select-icon-inner'), null);
        this._el_4 = import3.createRenderElement(this.renderer, parentRenderNode, 'button', new import3.InlineArray8(6, 'aria-haspopup', 'true', 'class', 'item-cover', 'ion-button', 'item-cover'), null);
        this.compView_4 = new import19.View_Button0(this.viewUtils, this, 4, this._el_4);
        this._Button_4_3 = new import19.Wrapper_Button('item-cover', this.parentView.injectorGet(import11.Config, this.parentIndex), new import12.ElementRef(this._el_4), this.renderer);
        this.compView_4.create(this._Button_4_3.context);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._anchor_0,
            this._anchor_1,
            this._el_2,
            this._el_3,
            this._el_4
        ]), null);
        return null;
    };
    View_Select0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import20.TemplateRef) && (0 === requestNodeIndex))) {
            return this._TemplateRef_0_5;
        }
        if (((token === import21.NgIf) && (0 === requestNodeIndex))) {
            return this._NgIf_0_6.context;
        }
        if (((token === import20.TemplateRef) && (1 === requestNodeIndex))) {
            return this._TemplateRef_1_5;
        }
        if (((token === import21.NgIf) && (1 === requestNodeIndex))) {
            return this._NgIf_1_6.context;
        }
        if (((token === import18.Button) && (4 === requestNodeIndex))) {
            return this._Button_4_3.context;
        }
        return notFoundResult;
    };
    View_Select0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = !this.context._text;
        this._NgIf_0_6.check_ngIf(currVal_0_0_0, throwOnChange, false);
        this._NgIf_0_6.ngDoCheck(this, this._anchor_0, throwOnChange);
        var currVal_1_0_0 = this.context._text;
        this._NgIf_1_6.check_ngIf(currVal_1_0_0, throwOnChange, false);
        this._NgIf_1_6.ngDoCheck(this, this._anchor_1, throwOnChange);
        if (this._Button_4_3.ngDoCheck(this, this._el_4, throwOnChange)) {
            this.compView_4.markAsCheckOnce();
        }
        this._vc_0.detectChangesInNestedViews(throwOnChange);
        this._vc_1.detectChangesInNestedViews(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Button_4_3.context.ngAfterContentInit();
            }
        }
        var currVal_13 = this.context.id;
        if (import3.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setElementProperty(this._el_4, 'id', currVal_13);
            this._expr_13 = currVal_13;
        }
        var currVal_14 = this.context._labelId;
        if (import3.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementAttribute(this._el_4, 'aria-labelledby', ((currVal_14 == null) ? null : currVal_14.toString()));
            this._expr_14 = currVal_14;
        }
        var currVal_15 = this.context._disabled;
        if (import3.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setElementAttribute(this._el_4, 'aria-disabled', ((currVal_15 == null) ? null : currVal_15.toString()));
            this._expr_15 = currVal_15;
        }
        this.compView_4.detectChanges(throwOnChange);
    };
    View_Select0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
        this._vc_1.destroyNestedViews();
        this.compView_4.destroy();
    };
    View_Select0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 4) && (ngContentIndex == 0))) { }
    };
    View_Select0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 0)) {
            return new View_Select1(this.viewUtils, this, 0, this._anchor_0, this._vc_0);
        }
        if ((nodeIndex == 1)) {
            return new View_Select2(this.viewUtils, this, 1, this._anchor_1, this._vc_1);
        }
        return null;
    };
    return View_Select0;
}(import2.AppView));
var View_Select1 = (function (_super) {
    __extends(View_Select1, _super);
    function View_Select1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_Select1, renderType_Select, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_2 = import1.UNINITIALIZED;
    }
    View_Select1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'select-placeholder select-text'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_Select1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = import3.inlineInterpolate(1, '', this.parentView.context.placeholder, '');
        if (import3.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_Select1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_Select1;
}(import2.AppView));
var View_Select2 = (function (_super) {
    __extends(View_Select2, _super);
    function View_Select2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_Select2, renderType_Select, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_2 = import1.UNINITIALIZED;
    }
    View_Select2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'select-text'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_Select2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = import3.inlineInterpolate(1, '', (this.parentView.context.selectedText || this.parentView.context._text), '');
        if (import3.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_Select2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_Select2;
}(import2.AppView));
//# sourceMappingURL=select.ngfactory.js.map