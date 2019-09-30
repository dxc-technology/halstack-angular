import { storiesOf, moduleMetadata } from "@storybook/angular";
import footerMD from "./README.md";
import { boolean, array, text, object } from "@storybook/addon-knobs";
import { DXCFooterModule } from "./dxc-footer.module";
import { DXCInputTextModule } from "../dxc-text-input/dxc-input-text.module";
import { arrayExpression } from '@babel/types';


const social = [
  {
    href: "https://www.linkedin.com/company/dxctechnology",
    logoSrc: "./linkedin.svg"
  },
  {
    href: "https://twitter.com/dxctechnology",
    logoSrc: "./twitter.svg"
  },
  {
    href: "https://www.facebook.com/DXCTechnology/",
    logoSrc: "./facebook.svg"
  }
];

const bottom = [
  {
    href: "https://www.linkedin.com/company/dxctechnology",
    text: "Linkedin"
  },
  {
    href: "https://twitter.com/dxctechnology",
    text: "Twitter"
  },
  {
    href: "https://www.facebook.com/DXCTechnology/",
    text: "Facebook"
  }
];
storiesOf("Form Components|Footer", module)
  .addDecorator(
    moduleMetadata({
      imports: [
        DXCFooterModule,
        DXCInputTextModule
      ]
    })
  )
  .add(
    "Types",
    () => ({
      template: `
      <dxc-footer [socialLinks]="social" [bottomLinks]="bottom" [copyright]="'© DXC Technology 2019. All rights reserved.'">
      </dxc-footer>
      <div style="margin-top: 20px">
        <dxc-footer [socialLinks]="social" [bottomLinks]="bottom" [copyright]="'© DXC Technology 2019. All rights reserved.'">
          <dxc-input-text  
          [label]="'Normal Input'"
          [theme] = "'dark'"
          [assistiveText]="'I am a hint'"
          >
          </dxc-input-text>
          <dxc-input-text  
          [label]="'Normal Input'"
          [theme] = "'dark'"
          [assistiveText]="'I am a hint'"
          >
          </dxc-input-text>
        </dxc-footer>
      </div>
      `,

      props: {
        social: array("Social", social),
        bottom: array("Bottom", bottom)
      }
    }),
    {
      notes: { markdown: footerMD }
    }
  );

storiesOf("Form Components|Footer", module)
  .addDecorator(
    moduleMetadata({
      imports: [  DXCFooterModule]
    })
  ) 
  .add(
    "Knobs example",
    () => ({
      template: 
      `<div >
      </div>
      `,
      props: {
        
      }
    }),
    {
      notes: { markdown: footerMD }
    }
  );
