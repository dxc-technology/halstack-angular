import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import { AssetsPipe } from './assets.pipe';


@NgModule({
  declarations:[AssetsPipe], 
  imports:[CommonModule],
  exports:[AssetsPipe] 
})

export class AssetsPipeModule{}