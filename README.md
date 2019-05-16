# React Native Starter

This is an opionated starter for React Native, styled-components & Redux (among other things). 

## Requirements
Before start, make sure you installed:

- [Node](https://nodejs.org) and [React Native CLI](http://facebook.github.io/react-native/docs/getting-started.html): React Native Dev Environment


- [Xcode](https://developer.apple.com/xcode/), [CocoaPods](https://cocoapods.org/) : iOS Dev Environment
- [Android Studio](https://developer.android.com/studio/index.html) : Android Dev Environment
- [FBSDK](https://origincache.facebook.com/developers/resources/?id=facebook-ios-sdk-current.zip): Download the SDK and unzip the archive to `~/Documents/FacebookSDK`.

## Project structure

- [assets](./src/assets): Everything static like fonts, images, videos or static HTML files you may have goes here
    - [assets/fonts](./src/assets/auth): This is where you’ll find the functions like sign-in, sign-out
    - [assets/images](./src/assets/images): This is where you’ll find the functions like sign-in, sign-out
    - [assets/html](./src/assets/html): This is where you’ll find the functions like sign-in, sign-out

- [components](./src/components): Stateless React components we use trough the app 
- [modules](./src/modules): Any code that’s used in multiple places or the ones not directly engaging with the view layer should be here.
    - [modules/auth](./src/modules/auth): This is where you’ll find the functions like sign-in, sign-out
    - [modules/firebase](./src/modules/firebase): Put Firebase-related functions here
    - [modules/fcm](./src/modules/fcm): Firebase Cloud Messages-related functions are here
    - [modules/sagas](./src/modules/sagas): Generic sagas or helpers for sagas
    - [modules/style](./src/modules/style): Put common styles in here
    - [modules/utils](./src/modules/utils): Utility functions should be here
- [scenes](./src/scenes): Containers of the scenes are here. Also the routes are created in the index file of this directory. Some scenes have sub scenes in them, you’ll the containers for them inside the main scene.
- [modules](./src/modules): Redux modules. Details are explained in the next section.
- [store](./src/store): Redux-related code are kept here.
- [Setup.js](./src/Setup.js): Where we connect the store and setup React. We also configure Microsoft’s code-push here.
- [App.js](./src/App.js): The main React component is here. Try to keep it stateless. 

### Module structure 

A module usually has these files in it, they are required to have an index file. Never keep a functions itself in that file tho, keep it in other files (as explained below). Try to keep modules separate and independent. Only exports things you’ll use outside of the file. Exports things that will be used outside of the module from the index.

- **api.js**: async functions to use mainly in Sagas
- **sagas.js**: Saga’s related to the module, only export
- **reducer.js**: Redux reducer
- **subscribers.js**: Event channels for Saga
- **actions.js**: Pure Redux actions

## Running development version

To run it in Xcode you’ll first need to complete the [Step 3 of installing Facebook iOS SDK](https://developers.facebook.com/docs/ios/getting-started).
Also make sure to have Cocoapods installed on your Mac also using yarn instead of NPM is recommended since we have a lock file for yarn in the project.

* Install dependencies 

  ```bash
  $ yarn # or npm install if that's your thing
  $ cd ios && pods install
  ```

* Open `ios/Proco.xcworkspace` with Xcode.
* Select the device you want to run on (if you connect a real device via USB, it'll appear on the list) ([Screenshot](https://cloud.githubusercontent.com/assets/698079/20267596/20b61b60-aa84-11e6-8959-13489e930f10.png))
  
This will fire a Terminal and run react-native's packager. You should keep the packager running for app to be able to run on the device (or simulator). If you don't like Macos' default Terminal app, you can run the packager manually by

  ```bash
  $ npm start 
  # If you have problems with imports, try
  $ npm start -- --reset-cache
  ```


## Credits

Code here is released under the [MIT license](LICENSE). 


### Contributors

- F. Batuhan Icoz, _Founder_ at NOD
- Batuhan  Ozgur Ozdemir, __ at NOD


### [NOD.DIGITAL](https://nod.digital/?ref=_nod-github_)


We help you plan, design & build your digital products.

We've been helping our clients turn their ideas into products since 2014.

Don't hesitate to contact us at [hey@nod.digital](mailto:hey@nod.digital)

If you are looking to work with the stack used in this project, you might consider [joining us](https://nod.digital/join-us).

<img src="https://nod.digital/images/logo.png" height="25px" />
