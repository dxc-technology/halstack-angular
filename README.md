# Adding new components

The projects auto-generate the routes and the navside links. You only have to care about :
- Create the component wher you want to place the info about the component
- Add  some info in **src/app/components.ts**
- For each component you have to specify:
    - name to show in sidenav
    - the route you want to navigate when click in that link
    - the component wher you have been added the info for the component
```typescript
 {
        name: 'Button',
        route: 'button',
        component: ButtonInfoComponent
    },
```
# DxcAngularCdk

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
