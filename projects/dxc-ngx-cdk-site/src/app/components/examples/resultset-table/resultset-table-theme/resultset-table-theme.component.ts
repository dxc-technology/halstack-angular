import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'resultset-table-theme',
  templateUrl: './resultset-table-theme.component.html',
  styleUrls: ['./resultset-table-theme.component.scss']
})
export class ResultsetTableThemeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToRoute() {
    this.router.navigate(
      ["components/table"]
    );
  }

}
