import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-support',
  templateUrl: './overview-support.component.html',
  styleUrls: ['./overview-support.component.scss']
})
export class OverviewSupportComponent implements OnInit {

  imgGithub: string;

  constructor() { }

  ngOnInit() {
    this.imgGithub = 'assets/img/github-logo.svg';
  }

}
