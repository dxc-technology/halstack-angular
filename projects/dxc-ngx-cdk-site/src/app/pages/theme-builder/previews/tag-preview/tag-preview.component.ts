import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tag-preview",
  templateUrl: "./tag-preview.component.html",
})
export class TagPreviewComponent implements OnInit {
  dxcLogoPath = "./assets/img/dxclogo.png";
  imgGithub = "./assets/img/github-logo.svg";

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    console.log("click");
  }
}
