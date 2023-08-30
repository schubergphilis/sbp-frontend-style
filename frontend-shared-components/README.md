# Schuberg Philis Cloud Style

Finally it has arrived! A common design component library for all front-end platforms in the making. Are you using **ReactJS**...Let's go! Running **NextJS**... no sweat! Are you using **VueJS** *(or Nuxt)*... We've got you coverd aswell. :grin:

With this platform it's easy to use and re-use default components without having to maintain them yourself. This platform will give you freedom by using a lot of pre-styled components for you website together with the ease of use of conventional platforms.

We've chosen to style everything for internal use and projects that need SBP styling as default. But don't judge a book by its cover. It's possible to use a lot of predefined style variants and customize the components with use styling variables. *(do not mistake them with css-variables)*

## Platforms

This project is running on ReactJS together with some react based packages needed for styling. But our goal is that this can be used on multiple platforms:

|Platform|native|extra|
|---|---|---|
|ReactJS| true| |
|NextJS| true| |
|VueJS| false| use: [vuera]("https://npmjs.org/package/vuera", "_blank")|
|NuxtJS| false | use: [vuera]("http://npmjs.org/package/vuera", "_blank")

## Implementation

Using these components you only need to add this package to your project

### Install

```bash
yarn add @sbp-cloud-style

# Or with npm: 

npm install @sbp-cloud-style
```

### React

Within the base of the application it needs a Style wrapper **\<CloudStyle\>** to set the default styling and this will also be the input for customizing the componenst for your needs.

```jsx
import { ActionButton, CloudStyle } from 'sbp-cloud-style'

const App = ()=> {
  return (
    <CloudStyle>
        <ActionButton variant='cta' isRounded>Welcome</ActionButton>
    </CloudStyle>
  )
}

export default App
```

### VueJS

The basis of this style package is based upon React together wiht Styled-Components. When using this package inside a VueJS application there are some small differences and additional packages needed to format the properies towards the correct state.



## CloudStyle settings

Within the CloudStyle component it is possible to make changes to the overall components. It also contains some base styling rules and it will reset/normalize all HTML components to a base setup. 
["CSS Reset / Normalize"]("https://www.joshwcomeau.com/css/custom-css-reset/", "_blank")

|Property| type|Default | Optional | Description
|----|---|---|---|---|
|isDarkMode| boolean| false | true | Changing the styling between dark mode and light mode
|isLargeMode| boolean|false| true| Changing the base font size from **16px** to **24px**. All components are based on **em** and **rem** and will scale up accordingly
|lightStyle| DefaultStyle | undefined | true| based upon **DefaultStyle** interface it's possible to overwrite the default styling of each component
|darkStyle| DefaultStyle | undefined| true| based upon **DefaultStyle** interface it's possible to overwrite the default darkStyle. It will keep in mind the overall styling and the changes that've been done within **lightStyle** property.
|Childeren| JSX.Element \| JSX.Element[] \| React.ReactNode| null | false| Children are mandatory and can can be all types of components


## Startup Development

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [https://localhost:3005](https://localhost:3005) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
