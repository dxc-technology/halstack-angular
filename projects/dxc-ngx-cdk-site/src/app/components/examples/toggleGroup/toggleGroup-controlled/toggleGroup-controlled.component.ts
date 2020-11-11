import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-toggleGroup-controlled",
  templateUrl: "./toggleGroup-controlled.component.html",
  styleUrls: ["./toggleGroup-controlled.component.scss"],
})
export class ToggleGroupControlledComponent implements OnInit {
  options = [
    {
      label: "Facebook",
      value: 1,
    },
    {
      label: "Twitter",
      value: 2,
    },
    {
      label: "Linkedin",
      value: 3,
    },
    {
      label: "Facebook",
      value: 4,
    },
    {
      label: "Twitter",
      value: 5,
    },
    {
      label: "Linkedin",
      value: 6,
    },
  ];

  selected = 3;

  onChange($event) {
    console.log($event);
    if ($event !== 1) {
      this.selected = $event;
    }
  }

  constructor() {}

  ngOnInit() {}
}
