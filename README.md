# create-react-npm-package
Boilerplate code to bundle a React component as an NPM package

# Usage
## Clone
```
git clone https://github.com/skflowne/create-react-npm-package
```
## Install, build and link your package
```
yarn && yarn build && yarn link
```
## Go to test app and link your package
```
cd example
yarn link [package-name]
```
## Dev
Will start rollup in watch mode
```
yarn start
```
Then start test app in another terminal
```
cd example
yarn start
```
You can now dev your package and see your changes as soon as your hit save

