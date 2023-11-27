[![npm version](https://badge.fury.io/js/%40dxc-technology%2Fhalstack-angular.svg)](https://www.npmjs.com/@dxc-technology/halstack-angular)
[![GitHub license](https://img.shields.io/badge/license-apache-blue.svg)](https://github.com/fxc-technology/halstack-angular/blob/master/LICENSE.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/dxc-technology/halstack-angular/blob/master/CONTRIBUTING.md)
![Publish Next Version](https://github.com/dxc-technology/halstack-angular/workflows/Publish%20Next%20Version/badge.svg)
![Publish Release](https://github.com/dxc-technology/halstack-angular/workflows/Publish%20Release/badge.svg)


# ⚠️ Halstack Angular - Discontinuation Notice ⚠️

Dear Community,

We have decided to discontinue active maintenance and development of [Project Name].

**Key Points:**

1. **No Further Updates:**
   - we will no longer actively maintain or release new versions of [Halstack Angular. This decision is based on various factors, including shifts in project priorities and resource allocation.

2. **GitHub Repository:**
   - The GitHub repository will remain accessible. While we won't actively address issues or pull requests, you are welcome to fork the project and continue its development independently.

3. **No New npm Versions:**
   - We will not be publishing any new versions of halstack-angular on npm. Existing versions will still be available for use in [npm](https://www.npmjs.com/package/@dxc-technology/halstack-angular?activeTab=readme).

4. **Thank You:**
   - We want to express our gratitude for the support and contributions from the Halstack Angular community. Your involvement has been invaluable, and we appreciate the journey we've shared.

- **Archived Status:**
  - We will eventually archive the GitHub repository to signify its inactive status. This is a standard practice for projects that are no longer actively maintained.



Once again, thank you for being a part of the Halstack Angular community. We appreciate your understanding, and we look forward to the continued success of projects built upon the foundation of Halstack.


-----------------------


# Halstack Angular CDK

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

Once the build is done copy the necessary files.

```bash
npm run post-build-lib
```

or

```bash
npm run post-build-lib-win
```

for windows based terminals.

Or if there is no need to watch for changes, run the build process and pack it to generate the library.

```bash
npm run generate-lib
```

or

```bash
npm run generate-lib-win
```

for windows based terminals.

### Documentation Application

Contained in `projects\dxc-ngx-cdk-site` folder.

Install the application dependencies.

```bash
npm install
```

The Halstack Angular CDK needs to be linked to the application (from the folder `dist\dxc-ngx-cdk`). This one must have been previously built as shown before.

```bash
npm run link-lib
```

or

```bash
npm run unlink-lib
```

in case it needs to be unlinked.

You can create your own application and link it to the dist folder.

```bash
npm link PATH-TO-DIST-FOLDER
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
