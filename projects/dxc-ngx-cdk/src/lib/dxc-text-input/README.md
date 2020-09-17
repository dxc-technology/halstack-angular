# DXC Input Text Component

## API reference

<table>
    <tr style="background-color: grey">
        <td>Name</td>
        <td>Default</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>@Input<br>value: string</td>
        <td><code></code></td>
        <td>The value of the input element.</td>
    </tr>
    <tr>
        <td>@Input<br>label: string</td>
        <td></td>
        <td>Text to be placed next to the input.</td>
    </tr>
    <tr>
        <td>@Input<br>assistiveText: string</td>
        <td></td>
        <td>Assistive text to be placed at the bottom of the input.</td>
    </tr>
      <tr>
        <td>@Input<br>multiline: boolean</td>
        <td>false</td>
        <td>Boolean to display an input with multiples lines (text area or not)</td>
    </tr>
    <tr>
        <td>@Input<br>prefix: string</td>
        <td></td>
        <td>A prefix to be placed before the input value. Use prefixIconSrc in case the prefix needs to be an icon.</td>
    </tr>
    <tr>
        <td>@Input<br>suffix: string</td>
        <td></td>
        <td>A suffix to be placed after the input value. Use suffixIconSrc in case the suffix needs to be an icon.</td>
    </tr>
    <tr>
        <td>@Input<br>prefixIconSrc: string</td>
        <td></td>
        <td>The path of an icon to be placed before the input value.</td>
    </tr>
    <tr>
        <td>@Input<br>suffixIconSrc: string</td>
        <td></td>
        <td>The path of an icon to be placed after the input value.</td>
    </tr>
    <tr>
        <td>@Input<br>name: string</td>
        <td></td>
        <td>Name attribute of the input element.</td>
    </tr>
    <tr>
        <td>@Input<br>disabled: boolean</td>
        <td><code>false</code></td>
        <td>If true, the component will be disabled.</td>
    </tr>
    <tr>
        <td>@Input<br>required: boolean</td>
        <td><code>false</code></td>
        <td>If true, the input will change its appearence, showing that the value is required.</td>
    </tr>
    <tr>
        <td>@Input<br>invalid: boolean</td>
        <td><code>false</code></td>
        <td>If true, the input will change its appearence, showing that the value is invalid.</td>
    </tr>
    <tr>
        <td>@Output<br>valueChange: EventEmitter</td>
        <td></td>
        <td>This event will be triggered when the user changes the value of the input. The new value will be passed as a parameter.</td>
    </tr>
    <tr>
        <td>@Output<br>blur: EventEmitter</td>
        <td></td>
        <td>This event will be triggered when the focus moves away from the input. The input value will be passed as a parameter.</td>
    </tr>
</table>