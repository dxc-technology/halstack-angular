export class Lookup {
}

export enum ELookupType {
  SINGLE,
  MULTI
}

export enum Mode {
  SELECT,
  GRID
}

export enum GridMode {
  SELECT,
  MODAl
}


export interface Code {
  id: number;
  table: string;
  shortCode: string;
  desc: string;
}

export enum EUserLookupOptions
{
  MyUsers,
  Users,
  Groups
}
