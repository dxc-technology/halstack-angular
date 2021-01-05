import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-api',
  templateUrl: './header-api.component.html',
  styleUrls: ['./header-api.component.scss']
})
export class HeaderApiComponent implements OnInit {

  constructor(private router: Router) {}

  navigateToRoute() {
    this.router.navigate(
      ["components/dropdown"]
    );
  }

  ngOnInit(): void {
  }

}
