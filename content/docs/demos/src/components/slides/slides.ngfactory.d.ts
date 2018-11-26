/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
import * as import0 from './slides';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import7 from '@angular/core/src/linker/component_factory';
export declare class Wrapper_Slide {
    _eventHandler: Function;
    context: import0.Slide;
    _changed: boolean;
    _expr_0: any;
    constructor(p0: any, p1: any);
    ngOnDetach(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    check_zoom(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    ngDoCheck(view: import2.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import2.AppView<any>, _eventHandler: any): void;
}
export declare class Wrapper_Slides {
    _eventHandler: Function;
    context: import0.Slides;
    _changed: boolean;
    _expr_0: any;
    _expr_1: any;
    _expr_2: any;
    _expr_3: any;
    _expr_4: any;
    subscription0: any;
    subscription1: any;
    subscription2: any;
    constructor(p0: any, p1: any, p2: any);
    ngOnDetach(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    check_options(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_pager(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_zoom(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_zoomDuration(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_zoomMax(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    ngDoCheck(view: import2.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import2.AppView<any>, _eventHandler: any, emit0: boolean, emit1: boolean, emit2: boolean): void;
}
export declare class Wrapper_SlideLazy {
    _eventHandler: Function;
    context: import0.SlideLazy;
    _changed: boolean;
    constructor();
    ngOnDetach(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    ngDoCheck(view: import2.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import2.AppView<any>, _eventHandler: any): void;
}
export declare const SlideNgFactory: import7.ComponentFactory<import0.Slide>;
export declare class View_Slide0 extends import2.AppView<import0.Slide> {
    _el_0: any;
    constructor(viewUtils: import3.ViewUtils, parentView: import2.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import7.ComponentRef<any>;
}
export declare const SlidesNgFactory: import7.ComponentFactory<import0.Slides>;
export declare class View_Slides0 extends import2.AppView<import0.Slides> {
    _el_0: any;
    _el_1: any;
    _el_2: any;
    _expr_3: any;
    constructor(viewUtils: import3.ViewUtils, parentView: import2.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import7.ComponentRef<any>;
    detectChangesInternal(throwOnChange: boolean): void;
}
