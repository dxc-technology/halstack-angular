export enum Action {
  SAVE,
  RESTORE,
  EXCEL,
  PDF,
  EDIT,
  VISIBILTY,
  REFRESH
}

export const gridaction = [
  {
    value: Action.SAVE,
    iconName: 'save',
    label: 'save',
    hide: true
  },
  {
    value: Action.EDIT,
    iconName: 'create',
    label: 'edit',
    hide: true
  },
  {
    value: Action.RESTORE,
    iconName: 'restore',
    label: 'Reload',
    hide: true,
    name: 'tltrefresh',
  },
  {
    value: Action.VISIBILTY,
    iconName: 'remove_red_eye',
    label: 'hideshow',
    hide: true
  },
  {
    value: Action.PDF,
    iconName: 'picture_as_pdf',
    label: 'PDF',
    hide: false,
    name: 'lblpdf'
  },
  {
    value: Action.EXCEL,
    iconName: 'insert_drive_file',
    label: 'Excel',
    hide: false,
    name: 'lblexcel'
  },
];

export enum PagingAction {
  First,
  Next,
  Prev,
  Last
}


