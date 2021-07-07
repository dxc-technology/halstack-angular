import { Action } from './../dxc-grid/gridaction';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { IRequest, EMethod, EAction } from './../models/startup/configuration.model';
import { OrgTreeService } from '../services/org-tree.service';
import { Component, OnInit, Input, Output, EventEmitter, forwardRef, OnChanges, SimpleChanges } from '@angular/core';
import { TreeNode, CheckboxProp } from './dxc-tree.interface';
declare var $: any;

@Component({
  selector: 'dxc-tree',
  templateUrl: './dxc-tree.component.html',
  styleUrls: ['./dxc-tree.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DxcTreeComponent),
    multi: true
  }]
})
export class DxcTreeComponent implements OnInit, OnChanges, ControlValueAccessor {
  resultValue: TreeNode | Array<TreeNode>;

  errorText = '';

  @Input('treerequest') treeRequest: IRequest;
  @Input('topnode') topNode = new Array<TreeNode>();
  @Input('allowmultipleselection') allowMultipleSelection = false;
  @Input() reload = false;
  @Input() allowCheckbox = false;
  @Input() checkboxProperty: CheckboxProp = {
    three_state: false,
    whole_node: false,
    tie_selection: false
  };
  @Input() treeData: any;
  @Output() treeDataChange: EventEmitter<any> = new EventEmitter<any>();
  @Input() resource: { [key: string]: string };
  @Output() action = new EventEmitter<EAction>();

  @Output()
  resultChange: EventEmitter<TreeNode | Array<TreeNode>> =
    new EventEmitter<TreeNode | Array<TreeNode>>();


  @Input()
  get result() {
    return this.resultValue;
  }


  set result(val) {
    this.resultValue = val;
    this.resultChange.emit(this.resultValue);
    this.registerOnChangeFn(this.resultValue);
  }

  registerOnChangeFn = (val) => { };
  registerOnTouchFn = () => { };

  constructor(private helper: OrgTreeService) {
  }

  ngOnInit(): void {
    this.populateTree();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.reload !== undefined && (changes.reload.firstChange ||
      (changes.reload.currentValue !== changes.reload.previousValue))) {
      if (this.reload) {
        if(this.allowCheckbox == true)
          $('#treecontainer').jstree('destroy');
        this.populateTree(null, null, { reload: true });
        this.reload = false;
      }
    }
  }


  private populateTree(level?, type?, config?) {
    this.helper.getTreeList(this.treeRequest).subscribe((response) => {
      let topNode = this.topNode;
      topNode[0].children = response.client;
      this.errorText = response.errorText;
      this.treeData = response;
      this.treeDataChange.emit(response);
      this.treeDOM(topNode, config);
      this.action.emit(EAction.ONREADY);
    });
  }



  treeDOM(data, config) {
    if (config && config.reload) {
      if (!$('#treecontainer').jstree(true)) {
        this.CreateTreeDOM(data);
      } else {
        let self = this;
        $('#treecontainer').jstree(true).settings.core.data = function (obj, cb) {
          if (obj.id === '#') {
            cb.call(this, data);
            $('#treecontainer').jstree(true)._data.core.state.core.open = [];
          } else {
            // this.rghChildNode.parentFuncId = obj.original.id;
            let requestI: IRequest = {
              url: obj.original._links.children.href,
              methodtype: EMethod.GET
            };
            self.helper.childNodeList(requestI).subscribe((childNode) => {
              cb.call(this, childNode);
            });
          }
        };
        $('#treecontainer').jstree().refresh();
      }
    } else {
      this.CreateTreeDOM(data);
    }
  }

  CreateTreeDOM(data) {
    var self = this;
    $('#treecontainer').jstree({
      core: {
        multiple: this.allowMultipleSelection,
        data: function (obj, cb) {
          if (obj.id === '#') {
            cb.call(this, data);
          } else {
            let requestI: IRequest = {
              url: obj.original._links.children.href,
              methodtype: EMethod.GET
            }
            self.helper.childNodeList(requestI).subscribe((childNode) => {
              cb.call(this, childNode);
            });
          }
        }
      },
      themes: {
        theme: 'classic',
        dots: true,
        icons: true
      },
      checkbox: this.getCheckboxProperties(),
      plugins: this.getPlugins(),
      contextmenu: {
        select_node: false,
        items: this.reportMenu
      }

    });

    $('#treecontainer').on('changed.jstree', (e, node) => {
      if (this.allowCheckbox != true) {
        if (node.action === 'select_node') {
          this.result = node.node.original as TreeNode;
          this.action.emit(EAction.SELECT);
        }
      }
    });

    $('#treecontainer').on('click', '.jstree-disabled', (e, data) => {
      if (this.allowCheckbox != true) {
        let nodeModel = new Object();
        const nodeId = e.currentTarget.id.split('_')[0];
        if (nodeId) {
          const jstreeDomModel = $('#treecontainer').jstree(true)._model.data;
          if (jstreeDomModel) {
            nodeModel = jstreeDomModel[nodeId].original;
          }
        }

        if (nodeModel['id']) {
          this.result = nodeModel as TreeNode;
          this.action.emit(EAction.SELECT);
        }
      }
    });

    $('#treecontainer').on('open_node.jstree', function (e, data) {
      console.log('event', e);
      console.log('event data', data);
      // orghierarchyService.getTreeDetails().then(function (response) {
      //        data.instance.create_node(data.node, [{ "id": 2, "text": "Child node 1", "children": true },{ "id": 3, "text": "Child node 2" }])
      //     // cb.call(this,
      //     //     ['Root 22', 'Root 2']);
      // })
    });

    $('#treecontainer').on("check_node.jstree uncheck_node.jstree", (e, data) => {
      if (this.allowMultipleSelection == true) {
        this.result = [];
        let selectedNodes = $('#treecontainer').jstree(true).get_checked();
        selectedNodes.forEach(element => {
          (this.result as TreeNode[]).push($('#treecontainer').jstree(true)._model.data[element].original as TreeNode);
        });
      }
      else {
        if (data.node.state.checked)
          this.result = data.node.original as TreeNode;
        else
          this.result = {} as TreeNode;
        this.action.emit(EAction.CHECKED);
      }
    });
  }

  getPlugins() {
    let plugins = ['contextmenu', 'themes', 'json_data'];
    if (this.allowCheckbox == true) {
      plugins.push("checkbox");
    }
    return plugins;
  }

  getCheckboxProperties() {
    let properties = {};
    if (this.allowCheckbox == true && this.checkboxProperty != null && Object.keys(this.checkboxProperty).length > 0) {
      Object.assign(properties, this.checkboxProperty);
    }
    return properties;
  }

  writeValue(val: any): void {
    this.resultValue = val;
  }

  registerOnChange(fn: any): void {
    this.registerOnChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.registerOnTouchFn = fn;
  }

  reportMenu(node) {
    // build your menu depending on node id
    return {
      createItem: {
        label: 'Expand',
        // "action": function (obj) { alert(obj.text()) },
        _class: 'class',
        submenu: {
          company: {
            label: 'Comapny',
            action: (node) => { this.expandTreeNode(node); },
            _class: 'class',
            level: { value: 'CO', text: 'Company', id: 1006, level: 2 },
            _disabled: (node) => {
              return this.disableNodeLevel(node);
            }
          },
          operation: {
            label: 'Operation',
            action: (node) => { this.expandTreeNode(node) },
            _class: 'class',
            level: { value: 'O', text: 'Operation', id: 1007, level: 3 },
            _disabled: (node) => {
              return this.disableNodeLevel(node);
            }
          },
          region: {
            label: 'Region',
            action: (node) => { this.expandTreeNode(node) },
            _class: 'class',
            level: { value: 'R', text: 'Region', id: 1008, level: 4 },
            _disabled: (node) => {
              return this.disableNodeLevel(node);
            }
          },
          division: {
            label: 'Division',
            action: (node) => { this.expandTreeNode(node) },
            _class: 'class',
            level: { value: 'D', text: 'Division', id: 1009, level: 5 },
            _disabled: (node) => {
              return this.disableNodeLevel(node);
            }
          },
          location: {
            label: 'Location',
            action: (node) => { this.expandTreeNode(node) },
            _class: 'class',
            level: { value: 'L', text: 'Location', id: 1010, level: 6 },
            _disabled: (node) => {
              return this.disableNodeLevel(node);
            }
          },
          facility: {
            label: 'Facility',
            action: (node) => { this.expandTreeNode(node); },
            _class: 'class',
            level: { value: 'F', text: 'Facility', id: 1011, level: 7 },
            _disabled: (node) => {
              return this.disableNodeLevel(node);
            }
          },
          department: {
            label: 'Department',
            action: (node) => { this.expandTreeNode(node) },
            _class: 'class',
            level: { value: 'DT', text: 'Department', id: 1012, level: 8 },
            _disabled: (node) => {
              return this.disableNodeLevel(node);
            }
          }
        }
      }
    };
  }

  expandTreeNode(node) {
    let inst = $.jstree.reference(node.reference)
      , item = inst.get_node(node.reference)
      , level = node.item.level
  }

  disableNodeLevel(node) {
    var inst = $.jstree.reference(node.reference)
      , item = inst.get_node(node.reference)
      , level = node.item.level


  }


}
