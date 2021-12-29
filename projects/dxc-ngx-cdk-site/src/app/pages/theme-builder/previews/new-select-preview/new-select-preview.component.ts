import { Component, OnInit } from '@angular/core';
import { Option } from '@dxc-technology/halstack-angular/lib/dxc-select/interfaces/option.interface';
import { OptionGroup } from '@dxc-technology/halstack-angular/lib/dxc-select/interfaces/optionGroup.interface';

@Component({
  selector: 'app-new-select',
  templateUrl: './new-select-preview.component.html'
})
export class NewSelectPreviewComponent implements OnInit {

  array1: Option[] = [
    {
      label: "label1",
      value: "1",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M3,7v2h5v2H4v2h4v2H3v2h5c1.1,0,2-0.9,2-2v-1.5c0-0.83-0.67-1.5-1.5-1.5c0.83,0,1.5-0.67,1.5-1.5V9c0-1.1-0.9-2-2-2H3z M21,11v4c0,1.1-0.9,2-2,2h-5c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h5c1.1,0,2,0.9,2,2h-7v6h5v-2h-2.5v-2H21z"/></g></g></svg>',
    },
    { label: "label2", value: "2" },
    { label: "label6", value: "6" },
    { label: "label9", value: "9" },
    { label: "aida", value: "10" },
    { label: "pepe", value: "11" },
    { label: "pepe", value: "12" },
    { label: "pepe", value: "13" },
    { label: "pepe", value: "14" },
    { label: "pepe", value: "15" },
    { label: "pepe", value: "16" },
  ];

  array2: OptionGroup[] = [
    {
      label: "Group label 1",
      options: [
        { label: "label3", value: "3" },
        { label: "label4", value: "4" },
        {
          label: "label5",
          value: "5",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M3,7v2h5v2H4v2h4v2H3v2h5c1.1,0,2-0.9,2-2v-1.5c0-0.83-0.67-1.5-1.5-1.5c0.83,0,1.5-0.67,1.5-1.5V9c0-1.1-0.9-2-2-2H3z M21,11v4c0,1.1-0.9,2-2,2h-5c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h5c1.1,0,2,0.9,2,2h-7v6h5v-2h-2.5v-2H21z"/></g></g></svg>',
        },
      ],
    },
    {
      label: "Group label 2",
      options: [
        { label: "label7", value: "7" },
        { label: "label8", value: "8" },
      ],
    },
    {
      label: "Group label 3",
      options: [
        { label: "label9", value: "9" },
        { label: "label10", value: "10" },
      ],
    },
    {
      label: "Group label 4",
      options: [
        { label: "label11", value: "11" },
        { label: "label12", value: "12" },
      ],
    },
  ];

  arrayValue = ['1','2'];

  value = "1";

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event){
    console.log("onchange:", event);
  }

  onBlur(event){
    console.log("onBlur:", event);
  }

}
