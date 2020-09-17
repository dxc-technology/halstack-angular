# DXC Date Component

## Props

<table>
    <tr style="background-color: grey">
        <td>Name</td>
        <td>Default</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>@Input<br>value: date</td>
        <td></td>
        <td>The value of the date component. Must be a Date object.</td>
    </tr>
     <tr>
        <td>@Input<br>min: date</td>
        <td></td>
        <td>The min date to be able to select using datepicker</td>
    </tr>
    <tr>
     <tr>
        <td>@Input<br>max: date</td>
        <td></td>
        <td>The max date to be able to select using datepicker</td>
    </tr>
    <tr>
    <tr>
        <td>@Input<br>format: string</td>
        <td></td>
        <td>The format in which the date value will be displayed. User must use this format when editing the input.</td>
    </tr>
       <tr>
        <td>@Input<br>showMask: boolean</td>
        <td> false</td>
        <td>Boolean to show or not the mask</td>
    </tr>
    <tr>
        <td>@Input<br>label: string</td>
        <td></td>
        <td>Text to be placed next to the date component.</td>
    </tr>
    <tr>
        <td>@Input<br>name: string</td>
        <td></td>
        <td>Name attribute of the input element.</td>
    </tr>
    <tr>
        <td>@Input<br>iconSrc: string</td>
        <td></td>
        <td>The path of an icon to replace the default calendar icon.</td>
    </tr>
    <tr>
        <td>@Input<br>disabled: boolean</td>
        <td><code>false</code></td>
        <td>If true, the component will be disabled.</td>
    </tr>
    <tr>
        <td>@Input<br>required: boolean</td>
        <td><code>false</code></td>
        <td>If true, a red asterisk will appear before the label to indicate to the user that the field is required.</td>
    </tr>
    <tr>
        <td>@Input<br>assistiveText: string</td>
        <td></td>
        <td>Assistive text to be placed at the bottom of the input.</td>
    </tr>
    <tr>
        <td>@Input<br>invalid: boolean</td>
        <td><code>false</code></td>
        <td>If true, the input will change its appearence, showing that the value is not valid.</td>
    </tr>
    <tr>
        <td>@Input<br>disableRipple: boolean</td>
        <td><code>false</code></td>
        <td>If true, the ripple effect will be disabled.</td>
    </tr>
    <tr>
        <td>@Output<br>valueChange: function</td>
        <td></td>
        <td>This event will be triggered when the user inputs a valid date in the given format. This is, when he selects a date from the date picker or when he types a letter completing a valid date. The new date object will be passed as a parameter.<br>
        </td>
    </tr>
    <tr>
        <td>@Output<br>inputChange: function</td>
        <td></td>
        <td>This event will be triggered when the user types within the input. A string with the current value will be passed as a parameter.<br>
        </td>
    </tr>
</table>

## Available date formats

Although there are a lot of date formats for differents countries and languages we only suppor the ones that are widely used (see ISO 8601)

```typescript
export enum Formats {
  "MM/DD/YYYY",
  "DD/MM/YYYY",
  "YYYY/MM/DD",
  "YYYY-MM-DD",
  "DD-MM-YYYY",
  "MM-DD-YYYY",
  "DD.MM.YYYY",
  "MM.DD.YYYY",
  "YYYY.MM.DD"
}
```