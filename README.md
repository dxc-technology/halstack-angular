# Assure Angular CDK

Assure Angular CDK is a npm library of reusable Angular components, made with the purpose of helping Angular developers with the task of implementing User Interfaces following the DXC Design Guidelines.
- It increases visual and behavioral consistency across the applications using the library.
- It cuts down development efforts, taking the responsability of following the Design Guidelines away from the developer, and allowing him to focus on providing business value.

## Usage
___
Assure Angular CDK is a set of reusable components distributed as a npm library. See the [documentation site](http://design-system-angular-cdk-site.s3-website.us-east-2.amazonaws.com) for details on how to use it.

## Contributing
---
Before opening new issues or pull requests, please refer to [CONTRIBUTING.MD](https://github.dxc.com/DIaaS/diaas-angular-cdk/blob/master/README.md).
## Development Setup
___
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

The project is divided in two main folders. One is for the actual library, and the other one is a Angular application using the library.
### Library
Contained in the projects/dxc-ngx-cdk.
````
cd projects/dxc-ngx-cdk/
````
Install the library dependencies.
````
npm install
````
Build the cdk library on the root application folder.

If you are using mac or linux architecture, run the following npm command:
````
npm run install-lib
````
If you are using windows architecture, run the following npm command:
````
npm run install-lib-win
````

### Example Application
Contained in `diaas-angular-cdk` folder.

````
cd diaas-angular-cdk
````
Istall the application dependencies. The Assure Angular CDK dependency is linked to the local lib file in `dist/dxc-ngx-cdk` and named as `diaas-dxc-ngx-cdk-{version-number}.tgz` and check if `package.json` the name of the lib file is exactly the same as the lib folder. This one must have been previously built.
````
npm install
````
Start the application
````
ng serve
````
## Running the test

