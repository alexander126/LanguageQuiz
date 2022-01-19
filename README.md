## Table of contents

1. [Installation](#installation)
1. [Tech Stack](#teckstack)

## Installation

The default brach for developing the app is `develop`. Make sure you switch to this branch before doing any changes and always check that all merges are done into this branch.

First, pull all the latest changes and install all the required dependencies:

```bash
$ git pull && npm install
```

For iOS, make sure you install the necessary pods by either:

```bash
$ cd ios && pod install
```

or

```bash
$ npx pod-install
```

## Tech Stack

The app uses react-native version 0.66.4 (Latest as of 19/01/2022) & react versin 17.0.2. To provide the requried firebase functionality the app relies on
`"@react-native-firebase/app": "^14.2.2"` and `"@react-native-firebase/firestore": "^14.2.2"` libraries. For styling the app uses `styled-components: ^5.3.3`.
