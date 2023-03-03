import { HttpParams, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ELookupType, Mode, GridMode, EUserLookupOptions } from './lookup';
import { ICodes } from './lookup.model';
export interface IConfig {
    SERVER: {
        [key: string]: string;
    };
    TIMEOUT: string;
    AUTHENTICATIONKEY: string;
    HELPLINK: string;
    REQUIRED: RequiredFormat;
    ButtonIcon: {
        [key: string]: string;
    };
    Settings: {
        [key: string]: any;
    };
    Resources: {
        [key: string]: {
            description: string;
            type: string;
        };
    };
    ThemeInfo?: BehaviorSubject<IThemeInfo>;
}
export declare enum RequiredFormat {
    UNDERLINE = 0,
    STAR = 1,
    BORDER = 2
}
export declare enum ViewMode {
    NONE = 0,
    TAB = 1,
    ACCORDIAN = 2
}
export interface IFormat {
    addressConfig: IAddressAutocomplete;
    commonValidations: any;
    regionalFormats: any;
    settings: ISetting;
}
interface IAddressAutocomplete {
    apiTypeVendor: ICodes;
    minLength: number;
    useAutoComplete: boolean;
}
interface ISetting {
    allowNoteClaimantLevel: boolean;
    allowSaveState: boolean;
    attachment: string;
    baseCurrency: ICodes;
    buildVersion: string;
    globalsetting: GlobalSetting;
    gridType: string;
    gstnLength: string;
    isAllowNotification: boolean;
    memoHeight: string;
    notificationDuration: number;
    notificationPopupDuration: number;
    toasterDisplayTime: number;
    typeaheadEntity: string;
    typeaheadOthers: number;
    userlocal: ILocaleI;
    utilitySetting: IUtility;
    windowPopupCount: string;
}
interface GlobalSetting {
    isEntityRoleOn: boolean;
}
interface ILocaleI {
    culture: string;
    dateFormat: string;
    languageId: string;
    languageName: string;
    timeFormat: string;
}
interface IUtility {
    isNoRequiredField: boolean;
}
export declare enum EAction {
    ADD = 0,
    ONLOAD = 1,
    ONREADY = 2,
    REMOVE = 3,
    SELECT = 4,
    CHANGE = 5,
    DELETE = 6,
    BLUR = 7,
    FOCUS = 8,
    PANELOPEN = 9,
    AUTOCOMPLETEINIT = 10,
    NOSELECTEDROW = 11,
    BEFORESAVE = 12,
    EDIT = 13,
    CLEAR = 14,
    FORMDIRTY = 15,
    DELETEANDSAVE = 16,
    ONRENDER = 17,
    ONCLOSEPOPUP = 18,
    CHECKED = 19,
    ONCUSTOMEDIT = 20,
    UNCHECKED = 21,
    ONPANELCLOSE = 22,
    ONROWCHECKED = 23,
    ONUNLOAD = 24
}
export interface IRequest {
    url: string;
    methodtype: EMethod;
    params?: HttpParams;
    body?: any;
    serverSideFilter?: boolean;
    headers?: HttpHeaders;
}
export interface IResponse {
    _embedded: Array<any>;
    count: number;
    pageSize: number;
    currentPageNumber: number;
    start: number;
    total: number;
    _links: any;
}
export interface IAdditionalParams {
    gridId: string;
    totalCount: number;
    pageSize: number;
}
export declare enum EMethod {
    GET = 0,
    POST = 1,
    PATCH = 2,
    PUT = 3,
    DELETE = 4
}
export interface OrghEntity {
    shortCode: string;
    label: string;
    value: number;
}
export interface Button {
    rel: string;
    title: string;
    hidden?: boolean;
    iconName?: string;
    label?: string;
    type?: string;
    disabled?: boolean;
    request?: IRequest;
    order: number;
    accessKey?: string;
}
export interface IDropdownOption {
    label?: string;
    value: any;
    fieldname?: any;
    iconSrc?: string;
}
export declare enum EFieldsType {
    codeLookup = 0,
    userLookup = 1,
    dropdown = 2,
    textInput = 3,
    date = 4,
    checkbox = 5,
    textArea = 6,
    orghLookup = 7,
    crudLookup = 8,
    supplementalGrid = 9,
    textEditor = 10,
    number = 11
}
export interface ICodeLookupProperties extends IFieldsBaseProperties {
    lookupType: ELookupType;
    mode: Mode;
    gridMode: GridMode;
    key: string;
    codeRequest: IRequest;
    isApplyChangeEvent?: boolean;
    autosearchrequired?: boolean;
    addrequired?: boolean;
    supplementalgridstateRequest?: IRequest;
    allowServerFilter?: boolean;
    minimumColumns?: number;
    maximumColumns?: number;
}
export interface IOrghLookupProperties extends IFieldsBaseProperties {
    lookupType: ELookupType;
    removeiconarialabel: string;
    mode: Mode;
    gridMode: GridMode;
    key: string;
    topnode: any;
    treerequest: IRequest;
    orghStateRequest: IRequest;
    orghresourceRequest: IRequest;
    level?: string;
    isApplyChangeEvent?: boolean;
}
export interface ITextEditorproperties extends IFieldsBaseProperties {
    id?: string;
    result?: string;
    planeText?: string;
    columnSize: number;
    inlineToolbar: boolean;
    minHeight?: string;
    maxHeight?: string;
}
export interface INumberProperties extends IFieldsBaseProperties {
    decimalPlace?: number;
    allowDecimal?: boolean;
    minValue?: number;
    maxValue?: number;
    maxLength?: number;
}
export interface IUserLookupProperties extends IFieldsBaseProperties {
    lookupType: ELookupType;
    mode: Mode;
    gridMode: GridMode;
    key: string;
    userLookupOptions: Array<EUserLookupOptions>;
}
export interface IDropdownProperties extends IFieldsBaseProperties {
    theme?: string;
    multiple: boolean;
    options: IDropdownOption[];
    disableRipple?: boolean;
    iconPosition?: string;
    viewValue: string;
    margin: any;
    isApplyChangeEvent: boolean;
}
export interface ICheckboxProperties extends IFieldsBaseProperties {
    id: string;
    theme: string;
    value: string;
    checked: boolean;
    arialabelledby: string;
    disableRipple: boolean;
    labelPosition: string;
    margin: string;
    size: any;
}
export interface ITextInputProperties extends IFieldsBaseProperties {
    prefix?: string;
    suffix?: string;
    prefixIconSrc?: string;
    suffixIconSrc?: string;
    theme?: string;
    multiline: boolean;
    invalid?: boolean;
    assistiveText?: string;
    margin?: any;
    size?: string;
    type?: string;
    columnSize: number;
    maxLength?: number;
    minLength?: number;
}
export interface ITextAreaInputProperties extends IFieldsBaseProperties {
    id: string;
    autosizeMaxRows: number;
    autosizeMinRows: number;
    textareaAutosize?: boolean;
    value: string;
    maxLength: number;
    columnSize: number;
    size?: string;
}
export interface IDateProperties extends IFieldsBaseProperties {
    format: string;
    theme: string;
    iconSrc?: string;
    assistiveText?: string;
    invalid: boolean;
    disableRipple: boolean;
    margin?: string;
    size?: string;
}
export interface IFieldsBaseProperties {
    disabled: boolean;
    readonly: boolean;
    label: string;
    style: string;
    visible: boolean;
    required: boolean;
    name: string;
    valueProperty: string;
    fieldType: EFieldsType;
    controlChangeRequest?: IRequest;
}
export interface IFormUpdateEventFormat {
    action: EAction;
    columns: any;
    data: any;
    control: any;
    form: FormGroup;
    error: {
        isError: false;
        msg: "";
    };
}
export interface IThemeInfo {
    "isDarkMode": boolean;
    "isTransparent": boolean;
    "themeColors": {
        'color': {
            'primary': string;
            'effect': string;
            'custom': boolean;
        };
        active: boolean;
    }[];
    "backgrounds": {
        'id': string;
        'title': string;
        'background': string;
        'active': boolean;
    }[];
}
export {};
