import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, FormControl, UntypedFormGroup } from '@angular/forms';
import { List } from 'immutable';
import { Button, DxcCrudTableComponent, DxcResizeService } from '@dxc-technology/halstack-angular';
import { EFieldsType, EMethod, IFieldsBaseProperties, IRequest, ITextEditorproperties } from '@dxc-technology/halstack-angular';

@Component({
  selector: 'app-crud-grid',
  templateUrl: './crud-grid.component.html',
  styleUrls: ['./crud-grid.component.scss']
})
export class CrudGridComponent implements OnInit {
  @ViewChild('crudgridcomponent', {static: false}) crudGridComponent: DxcCrudTableComponent;
  testForm: UntypedFormGroup;
  message:{ [key: string]: string };
  columns: Array<string>;
  gridToolbarList: List<Button>;

  constructor( private fb: UntypedFormBuilder, private resizeSvc: DxcResizeService ) {
    
   }

  ngOnInit(): void {
    this.columns = ['textEditorString','planeText'];
    this.testForm = this.fb.group({
      crudDataList: [[{ option: "", value: "" }]]
      });

    this.message = {
      deleteSuccess: 'Deleted Succesfully',
      saveSuccess: 'Saved Successfully',
      textEditorString: 'Text Editor String',
      planeText: 'Plane Text',
    }

    let data = [{
      id:1,
      textEditorString: "Test 1",
      planeText: "To Custom File Only",
    },
    {
      id:2,
      textEditorString: "Test 2",
      planeText: "To Printer and Custom File Only",
    },
    {
      id:3,
      textEditorString: "Test 3",
      planeText: "To Printer Only , To File Only",
    }]
    this.testForm.controls["crudDataList"].setValue(data);
    this.setGridToolbar();
  }

  textEditorField: ITextEditorproperties = {
    valueProperty: 'textEditorString',
    disabled: false,
    readonly: false,
    label: 'planeText',
    id: '',
    result: '',
    style: '',
    visible: true,
    required: false,
    name: 'textEditorString',
    planeText: 'planeText',
    fieldType: EFieldsType.textEditor,
    inlineToolbar: false,
    columnSize: 6,
  };

  upsertFields: List<IFieldsBaseProperties> = List([
    this.textEditorField,
  ]);

  private setGridToolbar() {
    this.gridToolbarList = List<Button>([
      {   
      rel: 'add',
      title: 'Add',
      iconName: 'add',
      label: 'Add',
      order: 0,
      accessKey: "c"
    },
    {   
      rel: 'edit',
      title: 'Edit',
      iconName: 'mode_edit',
      label: 'Edit',
      order: 1, 
      accessKey: "e"
    },
    {   
      rel: 'delete',
      title: 'Delete',
      iconName: 'delete',
      label: 'Delete',
      order: 3,
      accessKey: "d"
    },
    {   
      rel: 'reload',
      title: 'Reload',
      iconName: 'restore',
      label: 'Reload',
      order: 4,
      accessKey: "r"
    }]);
  }

}
