import { storiesOf, moduleMetadata } from "@storybook/angular";
import dialogMD from "./README.md";
import { boolean, array, text, object } from "@storybook/addon-knobs";
import { DXCDialogModule } from "./dxc-dialog.module";
import { DxcButtonModule } from "../dxc-button/dxc-button.module";

let visible1 = false;
let visible2 = false;
storiesOf("Form Components|Dialog", module)
  .addDecorator(
    moduleMetadata({
      imports: [DXCDialogModule, DxcButtonModule]
    })
  )
  .add(
    "Types",
    () => ({
      template: `
      <div>
        <dxc-button label="click me" (onClick)="onClick($event)"></dxc-button>
        <dxc-dialog [overlay]="false" [isCloseVisible]="true" [isVisible]="visible1" (onClose)="onClick($event)">
          <div style="height:100px;overflow:auto;">
            Lorem ipsum dolor sit amet consectetur adipiscing elit curae, sodales ac sapien consequat augue vitae id suscipit rhoncus, nunc auctor nisl faucibus mattis dapibus sociis. Senectus sociis viverra laoreet ligula habitant nullam potenti lectus tortor sodales, vulputate semper erat mauris fringilla natoque diam praesent scelerisque eget, mattis facilisi dapibus nibh interdum donec condimentum venenatis sollicitudin. Sociosqu taciti class diam placerat aliquam imperdiet tempus, metus natoque euismod convallis dictum ac dapibus suscipit, a molestie pulvinar gravida viverra faucibus. Dis ad quis tincidunt facilisi neque nunc, ligula odio rhoncus non nibh elementum, massa lacinia mollis inceptos molestie.
            Lorem ipsum dolor sit amet consectetur adipiscing elit curae, sodales ac sapien consequat augue vitae id suscipit rhoncus, nunc auctor nisl faucibus mattis dapibus sociis. Senectus sociis viverra laoreet ligula habitant nullam potenti lectus tortor sodales, vulputate semper erat mauris fringilla natoque diam praesent scelerisque eget, mattis facilisi dapibus nibh interdum donec condimentum venenatis sollicitudin. Sociosqu taciti class diam placerat aliquam imperdiet tempus, metus natoque euismod convallis dictum ac dapibus suscipit, a molestie pulvinar gravida viverra faucibus. Dis ad quis tincidunt facilisi neque nunc, ligula odio rhoncus non nibh elementum, massa lacinia mollis inceptos molestie.
          </div>
        </dxc-dialog>

        <dxc-button label="click me" (onClick)="onClick2($event)"></dxc-button>
        <dxc-dialog [overlay]="true" [isCloseVisible]="true" [isVisible]="visible2" (onClose)="onClick2($event)">
          <span>Lorem ipsum dolor sit amet consectetur adipiscing elit curae, sodales ac sapien consequat augue vitae id suscipit rhoncus, nunc auctor nisl faucibus mattis dapibus sociis. Senectus sociis viverra laoreet ligula habitant nullam potenti lectus tortor sodales, vulputate semper erat mauris fringilla natoque diam praesent scelerisque eget, mattis facilisi dapibus nibh interdum donec condimentum venenatis sollicitudin. Sociosqu taciti class diam placerat aliquam imperdiet tempus, metus natoque euismod convallis dictum ac dapibus suscipit, a molestie pulvinar gravida viverra faucibus. Dis ad quis tincidunt facilisi neque nunc, ligula odio rhoncus non nibh elementum, massa lacinia mollis inceptos molestie.</span>
        </dxc-dialog>
      </div>
      `,

      props: {
        onClick: function( event ) {
          this.visible1 = !this.visible1;
        },
        onClick2: function( event ) {
          this.visible2 = !this.visible2;
        }
      }
    }),
    {
      notes: { markdown: dialogMD }
    }
  );

storiesOf("Form Components|Dialog", module)
  .addDecorator(
    moduleMetadata({
      imports: [DXCDialogModule, DxcButtonModule]
    })
  )
  .add(
    "Knobs example",
    () => ({
      template: `
      <div >
        <dxc-button label="click me" (onClick)="onClick($event)"></dxc-button>
        <dxc-dialog [isCloseVisible]="isCloseVisible" [overlay]="overlay" [isVisible]="visible1" (onClose)="onClick($event)">
          Lorem ipsum dolor sit amet consectetur adipiscing elit curae, sodales ac sapien consequat augue vitae id suscipit rhoncus, nunc auctor nisl faucibus mattis dapibus sociis. Senectus sociis viverra laoreet ligula habitant nullam potenti lectus tortor sodales, vulputate semper erat mauris fringilla natoque diam praesent scelerisque eget, mattis facilisi dapibus nibh interdum donec condimentum venenatis sollicitudin. Sociosqu taciti class diam placerat aliquam imperdiet tempus, metus natoque euismod convallis dictum ac dapibus suscipit, a molestie pulvinar gravida viverra faucibus. Dis ad quis tincidunt facilisi neque nunc, ligula odio rhoncus non nibh elementum, massa lacinia mollis inceptos molestie.
        </dxc-dialog>
      </div>
      `,
      props: {
        overlay: boolean("Overlay", false),
        isCloseVisible: boolean("Is Close Visible", false),
        visible1: boolean("Is Visible", false),
        onClick: function( event ) {
          this.visible1 = !this.visible1;
        }
      }
    }),
    {
      notes: { markdown: dialogMD }
    }
  );
