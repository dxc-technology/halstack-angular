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
      label: "Instagram",
      value: 4,
    },
    {
      label: "Discord",
      value: 5,
    },
    {
      label: "Tiktok",
      value: 6,
    },
  ];

  selected = 3;

  onChange($event) {
    console.log($event);
    this.selected = $event;
  }

  constructor() {}

  ngOnInit() {}
}
