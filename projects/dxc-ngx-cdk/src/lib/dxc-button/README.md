# DXC Button Component

## Overview

The DXC Button Component is a button which could have different style depending on its type.

## Usage

To use the component, add the following selector to any template:

<table style="border-radius: 10px">
    <tr>
        <td style="background-color: black; color: white">Selector</td>
        <td>dxc-button</td>
    </tr>
</table>

## API

The API properties are the following:

<table>
    <tr style="background-color: grey">
        <td>Property</td>
        <td>Type</td>
        <td>Values</td>
        <td>Required</td>
        <td>Default</td>
    </tr>
    <tr>
        <td>type</td>
        <td>string</td>
        <td>{basic, outlined, raised, flat}</td>
        <td>No</td>
        <td>basic</td>
    </tr>
    <tr>
        <td>disabled</td>
        <td>boolean | string</td>
        <td>-</td>
        <td>No</td>
        <td>false</td>
    </tr>
    <tr>
        <td>disableRipple</td>
        <td>boolean | string</td>
        <td>-</td>
        <td>No</td>
        <td>false</td>
    </tr>
</table>

## Example

```html
<dxc-button type="basic" (click)="showAlert()">
  Button 1
</dxc-button>
<dxc-button type="outlined" disabled>
  Button 2
</dxc-button>
<dxc-button type="raised" disableRipple>
  Button 3
</dxc-button>
```
