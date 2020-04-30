# Assure Angular CDK

Assure Angular CDK is a npm library of reusable Angular components, made with the purpose of helping Angular developers with the task of implementing User Interfaces following the DXC Design Guidelines.

- It increases visual and behavioral consistency across the applications using the library.
  
- It cuts down development efforts, taking the responsability of following the Design Guidelines away from the developer, and allowing him to focus on providing business value.

## Usage

___
Assure Angular CDK is a set of reusable components distributed as a npm library. See the [documentation site](http://design-system-angular-cdk-site.s3-website.us-east-2.amazonaws.com) for details on how to use it.

## Contributing

___
Before opening new issues or pull requests, please refer to [CONTRIBUTING.MD](https://github.dxc.com/DIaaS/diaas-angular-cdk/blob/master/README.md).

## Development Setup

___
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

The project is divided in two main folders. One is for the actual library, and the other one is a Angular application using the library.

### Library

Contained in the `projects/dxc-ngx-cdk`.

```bash
cd projects/dxc-ngx-cdk/
```

Install the library dependencies.

```bash
npm install
```

Build the cdk library on the root application folder.

````bash
npm run build-lib
````

Or if you want it to automatically detect changes:

````bash
npm run build-lib:watch
````

### Example Application

Contained in `diaas-angular-cdk` folder.

````bash
cd diaas-angular-cdk
````

Install the application dependencies. The Assure Angular CDK dependency is linked to the local lib file in `dist/dxc-ngx-cdk`. This one must have been previously built as shown before.

````bash
npm install
````

Start the application

````bash
ng serve
````

## Running the test

___
You run the tests from the library folder `projects/dxc-ngx-cdk`.

```bash
cd projects/dxc-ngx-cdk/
```

For running the tests after the library dependencies has been installed

```bash
npm run test
```
