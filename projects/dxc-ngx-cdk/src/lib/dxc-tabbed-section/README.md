# DXC Tabs Component

## Tab Group Props

<table>
    <tr style="background-color: grey">
        <td>Name</td>
        <td>Default</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>sections: object[]</td>
        <td><code>[]</code></td>
        <td>
          An array of objects representing the tabs/sections. Each of them has
          the following properties:
          <ul>
            <li>
              <b>tabLabel</b>: Tab label.
            </li>
            <li>
              <b>section</b>: React component for the section that will be
              linked to the tab. Each section will be rendered right bellow the
              previous one, and clicking in the tab will scroll the user to its associated
              section.
            </li>
          </ul>
        </td>
    </tr>
    <tr>
        <td>stickAtPx: number</td>
        <td>0</td>
        <td>The number of pixels from the top of the parent container, where the tabs will stick when scrolling.</td>
    </tr>
</table>