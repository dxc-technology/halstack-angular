[![npm version](https://badge.fury.io/js/%40dxc-technology%2Fhalstack-angular.svg)](https://www.npmjs.com/@dxc-technology/halstack-angular)
[![GitHub license](https://img.shields.io/badge/license-apache-blue.svg)](https://github.com/fxc-technology/halstack-angular/blob/master/LICENSE.md) 
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/dxc-technology/halstack-angular/blob/master/CONTRIBUTING.md)
![Publish Next Version](https://github.com/dxc-technology/halstack-angular/workflows/Publish%20Next%20Version/badge.svg)
![Publish Release](https://github.com/dxc-technology/halstack-angular/workflows/Publish%20Release/badge.svg)
## Halstack Angular CDK ## # #
 
Halstack Angular CDK is a npm library of reusable Angular components, made with the purpose of helping Angular developers with the task of implementing User Interfaces following the DXC Design Guidelines.

- It increases visual and behavioral consistency across the applications using the library.
  
- It cuts down development efforts, taking the responsability of following the Design Guidelines away from the developer, and allowing him to focus on providing business value.

## Usage

Halstack Angular CDK is a set of reusable components distributed as a npm library. See the [documentation site](https://developer.dxc.com/tools/angular/) for details on how to use it.

## Contributing

Before opening new issues or pull requests, please refer to [CONTRIBUTING.MD](https://github.com/dxc-technology/halstack-angular/blob/master/CONTRIBUTING.md).

## Development Setup

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

The project is divided in two main folders. One is for the actual library, and the other one is a Angular application using the library.

### Library

Contained in the `projects\dxc-ngx-cdk`.

```bash
cd projects\dxc-ngx-cdk
```

Install the library dependencies.

```bash
npm install
```

Run the build process into `dist` folder, detecting and automatically building changes in src.

```bash
npm run build-lib:watch
```

Or if there is no need to watch for changes, run the build process and pack it to generate the library.

```bash
npm run generate-lib
```

### Example Application

Contained in `projects\dxc-ngx-cdk-examples` folder.

```bash
cd projects/dxc-ngx-cdk-examples
```

Install the application dependencies.

```bash
npm install
```

The Halstack Angular CDK needs to be linked to the application (from the folder `dist\dxc-ngx-cdk`). This one must have been previously built as shown before.

```bash
npm run link-lib
```

Start the application

```bash
npm run start
```

If you are watching for changes, anytime you make a change to the library or the app, `angular cli` will live-reload your local dev server so you can iterate on your component in real-time.

## Running the test

Run the tests from the library folder `projects\dxc-ngx-cdk` after the library dependencies have been installed.

```bash
cd projects\dxc-ngx-cdk
npm run test
```
