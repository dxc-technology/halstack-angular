# DXC Footer Component

## Props

<table>
    <tr style="background-color: grey">
        <td>Name</td>
        <td>Default</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>@Input<br>theme: 'light' | 'dark'</td>
        <td><code>'light'</code></td>
        <td>Uses one of the available component themes.</td>
    </tr>
    <tr>
        <td>@Input<br>underline: boolean</td>
        <td><code>false</code></td>
        <td>Wether a contrast line should appear at the bottom of the header.</td>
    </tr>
    <tr>
        <td>@Input<br>logoSrc: string</td>
        <td></td>
        <td>The path of an icon to replace the default dxc logo.</td>
    </tr>
    <tr>
        <td>@Output<br>onClick: EventEmitter</td>
        <td></td>
        <td>This event will be triggered when the user clicks the logo.</td>
    </tr>
</table>

