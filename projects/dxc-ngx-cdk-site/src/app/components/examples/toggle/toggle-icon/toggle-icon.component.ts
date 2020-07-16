import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-icon',
  templateUrl: './toggle-icon.component.html',
  styleUrls: ['./toggle-icon.component.scss']
})
export class ToggleIconComponent implements OnInit {

  selectedFav: boolean;
  selectedVis: boolean
  favoriteIcon: string;
  visibilityIcon: string;

  constructor() { }

  ngOnInit() {
    this.selectedFav = false;
    this.selectedVis = false;
    this.favoriteIcon = "./assets/img/favorite.svg";
    this.visibilityIcon = "./assets/img/visibility.svg";
  }

  onClickFav() {
    this.selectedFav = !this.selectedFav;
  }

  onClickVis() {
    this.selectedVis = !this.selectedVis;
  }

}
