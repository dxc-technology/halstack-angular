import { storiesOf, moduleMetadata } from "@storybook/angular";
import uploadMD from "./README.md";
import {} from "@storybook/addon-knobs";
import { DXCUploadModule } from "./dxc-upload.module";
import { arrayExpression } from "@babel/types";

storiesOf("Form Components|Upload", module)
  .addDecorator(
    moduleMetadata({
      imports: [DXCUploadModule]
    })
  )
  .add(
    "Types",
    () => ({
      template: `
      <dxc-upload [uploadCallback]="onUpload">
      </dxc-upload>
      `,
      props: {
        onUpload: async function(file) {
          const result = await new Promise(resolve =>
            setTimeout(resolve, 8000)
          );
          return result;
        }
      }
    }),
    {
      notes: { markdown: uploadMD }
    }
  );

storiesOf("Form Components|Upload", module)
  .addDecorator(
    moduleMetadata({
      imports: [DXCUploadModule]
    })
  )
  .add(
    "Knobs example",
    () => ({
      template: `<div >
      </div>
      `,
      props: {}
    }),
    {
      notes: { markdown: uploadMD }
    }
  );
