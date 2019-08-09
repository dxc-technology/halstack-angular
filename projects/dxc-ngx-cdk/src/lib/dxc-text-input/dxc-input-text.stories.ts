import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import inputMD from "./README.md";
import { boolean, select, array, text } from "@storybook/addon-knobs";
import "hammerjs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { DXCInputTextModule } from "./dxc-input-text.module";
const inputValue = '';
storiesOf("Form Components|Input Text", module)
  .addDecorator(
    moduleMetadata({
      imports: [DXCInputTextModule, BrowserModule, BrowserAnimationsModule]
    })
  )
  .add(
    "Types",
    () => ({
      
      template: `
    <h3 style="display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;"
    >Light</h3>
      <h4> Normal Input  with Assistive Text </h4>
        <dxc-input-text  
        [label]="'Normal Input'"
        [assistiveText]="'I am a hint'"
        >
        </dxc-input-text>
        <h4> Normal Input  data binding </h4>
        <dxc-input-text  
        [label]="'Normal Input'"
        [(value)] = inputValue
        [assistiveText]="'I am a hint'"
        >
        </dxc-input-text>
<label> The value is : {{inputValue}}</label>


      <h4> Inalid Input  </h4>
          <dxc-input-text  
          [label]="'Invalid Input'"
          [invalid] = true
          [assistiveText]="'I am an error '"
          >
          </dxc-input-text>
      <h4> Required Input  </h4>
          <dxc-input-text  
          [label]="'First Name'"
          [required] = true
          >
      </dxc-input-text>
      <h4> Disabled Input  </h4>
      <dxc-input-text  
      [label]="'First Name'"
      [disabled] = true
      >
      </dxc-input-text>
      <h4> Input  with prefix and suffix </h4>
          <dxc-input-text  
          [suffixIconSrc]="suffixIconSrc"
          [prefixIconSrc]="prefixIconSrc"
          [suffix]="suffix"
          [prefix]="prefix"
          [label]="label"
          [invalid]="invalid"
          [assistiveText]="'Format: XXX XX XX XX'"
          [theme]="theme"
          [disabled]="disabled"
          [required]="required"
          (blur)="onBlur($event)"
          (change)="valueChanged($event)"
          >
          </dxc-input-text>
        
    <h3 style="display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;"
    >Dark</h3>

    <div style="background: black;
     width: calc(100% - 380px); 
      margin-right: 200px;
      padding: 20px;
      margin-left: 45px;" >            

      <h4 style="color:white"> Normal Input  with Assistive Text </h4>
      <dxc-input-text  
      [label]="'Normal Input'"
      [theme] = "'dark'"
      [assistiveText]="'I am a hint'"
      >
      </dxc-input-text>
      <h4 style="color:white"> Normal Input  data binding </h4>
      <dxc-input-text  
      [label]="'Normal Input'"
      [theme] = "'dark'"
      [(value)] = inputValue
      [assistiveText]="'I am a hint'"
      >
      </dxc-input-text>
<label style = "color:white;"> The value is : {{inputValue}}</label>


    <h4 style="color:white"> Inalid Input  </h4>
        <dxc-input-text  
        [label]="'Invalid Input'"
        [invalid] = true
        [theme] = "'dark'"
        [assistiveText]="'I am an error '"
        >
        </dxc-input-text>
    <h4 style="color:white"> Required Input  </h4>
        <dxc-input-text  
        [label]="'First Name'"
        [theme] = "'dark'"
        [required] = true
        >
    </dxc-input-text>
    <h4 style="color:white"> Disabled Input  </h4>
    <dxc-input-text  
    [theme] = "'dark'"
    [label]="'First Name'"
    [disabled] = true
    >
    </dxc-input-text>
    <h4 style="color:white"> Input  with prefix and suffix </h4>
        <dxc-input-text  
        [suffixIconSrc]="suffixIconSrc"
        [prefixIconSrc]="prefixIconSrc"
        [suffix]="suffix"
        [prefix]="prefix"
        [label]="label"
        [invalid]="invalid"
        [assistiveText]="'Format: XXX XX XX XX'"
        [disabled]="disabled"
        [required]="required"
        [theme] ="'dark'"
        (blur)="onBlur($event)"
        (change)="valueChanged($event)"
        >
        </dxc-input-text>


    </div>
      `,

      props: {
        suffix: text("Suffix"),
        prefix: text("Prefix", "(+34)"),
        suffixIconSrc: text("suffixIconSrc", "/telephone.svg"),
        prefixIconSrc: text("prefixIconSrc", ""),

        invalid: boolean("Invalid", false),
        assisteText: text("I am an assistive text"),
        valueChange: action("option selected!"),
        required: boolean("required", false),
        disabled: boolean("disabled", false),
        theme: select("theme", { light: "light", dark: "dark" }, "light"),
        onBlur: action("blur fired!")
      }
    }),
    
    {
      notes: { markdown: inputMD }
    }
  );

storiesOf("Form Components|Input Text", module)
  .addDecorator(
    moduleMetadata({
      imports: [DXCInputTextModule, BrowserModule, BrowserAnimationsModule]
    })
  )
  .add(
    "Knobs example",
    () => ({
      template: `<div [ngStyle]= "{'background':theme==='dark' ? 'black' : '#FFFFFF'}" >
                       <dxc-input-text  
                       [suffixIconSrc]="suffixIconSrc"
                       [prefixIconSrc]="prefixIconSrc"
                       [suffix]="suffix"
                       [prefix]="prefix"
                       [label]="label"
                       [invalid]="invalid"
                       [assistiveText]="assistiveText"
                       [theme]="theme"
                       [disabled]="disabled"
                       [required]="required"
                       (blur)="onBlur($event)"
                       (change)="valueChanged($event)"
                       >
                       </dxc-input-text>
  
                     </div>
                        `,
      props: {
        suffix: text("Suffix", ""),
        prefix: text("Prefix", "(+34)"),
        suffixIconSrc: text("suffixIconSrc", "/telephone.svg"),
        prefixIconSrc: text("prefixIconSrc", ""),
        label: text("label", "Phone Number"),
        invalid: boolean("Invalid", false),
        assistiveText: text("Assistive Text", "I am an assistive text"),
        valueChange: action("option selected!"),
        required: boolean("required", false),
        disabled: boolean("disabled", false),
        theme: select("theme", { light: "light", dark: "dark" }, "light"),
        onBlur: action("blur fired!"),
        valueChanged: action("input string fired!")
      }
    }),
    {
      notes: { markdown: inputMD }
    }
  );
