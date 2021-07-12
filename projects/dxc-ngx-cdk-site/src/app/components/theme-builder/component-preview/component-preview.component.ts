import { Component, OnInit, HostBinding } from "@angular/core";
import { Stylable } from "../model/stylable";
import { ThemeBuilderService } from "../service/theme-builder.service";
import { css } from "emotion";

@Component({
  selector: "theme-builder-component-preview",
  templateUrl: "./component-preview.component.html",
})
export class ComponentPreviewComponent implements OnInit, Stylable {
  @HostBinding("class") className;

  constructor(public themeBuilderService: ThemeBuilderService) {}

  capitalizeText = (text) => text.charAt(0).toUpperCase() + text.slice(1);

  ngOnInit(): void {
    this.className = this.getDynamicStyle();
  }

  getComponentTitle = (name: string) =>
    `${this.capitalizeText(name)} component`;

  getDynamicStyle = () =>
    css`
      width: 100%;
      .tbComponentPreviewContainer {
        flex-grow: 1;
        /* width */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
          background: #d9d9d9;
          border-radius: 26px;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: #666666;
          border-radius: 26px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      }
      .tbPreviewContainer {
        margin-left: 8%;
        padding-right: 8%;
        margin-bottom: 25px;
      }
      .tbComponentHeader {
        margin: 36px 8% 0 8%;
        display: flex;
      }
    `;
}
