export interface ILookup {
    ClaimantEid: string;
    CoverageKey: string;
    CovgSeqNum: string;
    CovTypeCodeId: string;
    CurrentPageNumber: string;
    DeptEId: string;
    DescriptionSearch: string;
    EventDate: string;
    EventId: string;
    FieldName: string;
    Filter: string;
    FormName: string;
    Index: string;
    InsuredEid: string;
    IsFFPmt: string;
    Jurisdiction: string;
    LOB: string;
    LookupString: string;
    LookupType: string;
    LossTypeCodeId: string;
    orgLevel: string;
    ParentCodeID: string;
    PolicyId: string;
    PolicyLOB: string;
    PolUnitRowId: string;
    RcRowId: string;
    RsvStatusParent: string;
    SessionClaimId: string;
    SessionLOB: string;
    sPayCol: string;
    Title: string;
    TransId: string;
    TransSeqNum: string;
    TriggerDate: string;
    TypeLimits: string;
}
export interface ICodes {
    id: number;
    shortCode: string;
    desc: string;
    codeTable?: string;
    display?: string;
}
export interface ICodeLookup {
    bIsMobileAdjuster: string;
    bIsMobilityAdjuster: string;
    ClaimantEid: string;
    CoverageKey: string;
    CovgSeqNum: string;
    CovTypeCodeId: string;
    DeptEId: string;
    EventDate: string;
    EventId: string;
    FieldName: string;
    Filter: string;
    FormName: string;
    InsuredEid: string;
    IsFFPmt: string;
    Jurisdiction: string;
    LOB: string;
    LossTypeCodeId: string;
    PageNumber: string;
    ParentCodeID: string;
    PolicyId: string;
    PolicyLOB: string;
    PolUnitRowId: string;
    RcRowId: string;
    RecordCount: string;
    RsvStatusParent: string;
    SessionClaimId: string;
    SessionLOB: string;
    ShowCheckBox: string;
    SortColumn: string;
    SortOrder: string;
    sPayCol: string;
    TableName: string;
    Title: string;
    TransId: string;
    TransSeqNum: string;
    TriggerDate: string;
    TypeLimits: string;
    ClaimType: string;
    CountryID: string;
}
export interface ILookupResponse {
    codes: Array<any>;
}
export interface ILookupParams {
    tableName: string;
    fieldName: string;
    fieldTitle: string;
    search: string;
    filter: string;
    key: string;
}
export interface IUsers {
    id: number;
    name: string;
    email: string;
    type: string;
}
export declare type LookupType = 'codelookuptext' | 'codelookuptext';
