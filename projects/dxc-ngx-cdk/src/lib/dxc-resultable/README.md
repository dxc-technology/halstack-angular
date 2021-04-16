# DXC Resultset Table Component

## Overview

The DXC Resultset Table Component show information in cells and columns with a paginator component.

## Usage

```html
<dxc-resultset-table itemsPerPage="4" [collectionResource]="data" margin="medium">
  <ng-container dxcColumnDef="id">
    <td *dxcCellDef="let item">
        {{item['id']}}
    </td>
  </ng-container>
  <ng-container dxcColumnDef="name" [sortable]="{isSortable:true, propertyName:'name'}">
    <td *dxcCellDef="let item">
        {{item['name']}}
    </td>
</dxc-resultset-table>
```

Include the **DxcResultsetTableModule** into **app.module.ts** to use the resultset table component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcResultsetTableModule } from "@dxc-technology/halstack-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [DxcResultsetTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## API reference

The API properties are the following:

<table>
    <tr style="background-color: grey">
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>@Input<br>margin: any (string | object)</td>
        <td></td>
        <td>
            Size of the margin to be applied to the component ('xxsmall' | 
            'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You 
            can pass an object with 'top', 'bottom', 'left' and 'right' properties 
            in order to specify different padding sizes.
        </td>
    </tr>
    <tr>
        <td>@Input<br>itemsPerPage: number</td>
        <td><code>5</code></td>
        <td>
            Number of items per page.
        </td>
    </tr>
    <tr>
        <td>@Input<br>collectionResource: object[]</td>
        <td><code>[]</code></td>
        <td>
            An array of objects with the values to display in the table. 
            The key is the column and the value is the property to be displayed in the cell.
        </td>
    </tr>
</table>

## Directives

Directives are used to add functionality and new syntax into HTML components. The following directives are customized and you can use them on this component.

<table>
    <tr style="background-color: grey">
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>sortable: object[]</td>
        <td>
            <code>
                <p>isSortable:false</p>
                <p>propertyName:''</p>
            </code>
        </td>
        <td>
            An array of objects representing if the column is going to be sorted and the key value.
            <ul>
                <li>
                    <b>isSortable</b>: boolean value if it is sorteable.
                </li>
                <li>
                    <b>propertyName</b>: string with the key from the array of objects.
                </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>dxcColumnDef: string</td>
        <td></td>
        <td>
            Column definition.
        </td>
    </tr>
    <tr>
        <td>dxcCellDef: Iterable&lt;string&gt; </td>
        <td></td>
        <td>
            Cell definition. It selects the value from the array.
        </td>
    </tr>
    <tr>
      <td>@Input<br>tabIndexValue: number</td>
      <td><code>0</code></td>
      <td>
        Value of the tabindex for the sortable icon.
      </td>
    </tr>
</table>

## Theming

As the resultset table component is composed by a table component, the tokens for customization are the same. You can find them [here](../dxc-table/README.md).
