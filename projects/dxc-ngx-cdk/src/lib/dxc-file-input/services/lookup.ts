export declare class Lookup {
}
export declare enum ELookupType {
    SINGLE = 0,
    MULTI = 1
}
export declare enum Mode {
    SELECT = 0,
    GRID = 1
}
export declare enum GridMode {
    SELECT = 0,
    MODAl = 1
}
export interface Code {
    id: number;
    table: string;
    shortCode: string;
    desc: string;
}
export declare enum EUserLookupOptions {
    MyUsers = 0,
    Users = 1,
    Groups = 2
}
