## react-native-design-utlity

I've been using [Tailwind](https://github.com/tailwindcss/tailwindcss) lately for the web. Loved it, but I didn't find any solution like this for react-native. So I build one who look like it but more for react-native design styling.

## Installation

```
yarn add react-native-design-utility
```

You must add the provider in your root component

```js
import { UtilityThemeProvider } from 'react-native-design-utility';

class App extends Component {
  render() {
    return (
      <UtilityThemeProvider>
        ...rest of your app
      </UtilityThemeProvider>
    )
  }
}
```

## Custom Theme

For initialize the theme you can run. This will come with some basic space etc. Also this library provide lot of custom color coming from [Material color ](https://www.materialpalette.com/colors)

```
node ./node_modules/react-native-design-utility/dist/init.js
```

Add the theme to the provider as a props

```js
import { UtilityThemeProvider } from 'react-native-design-utility';

import { theme } from './theme';

class App extends Component {
  render() {
    return (
      <UtilityThemeProvider theme={theme}>
        ...rest of your app
      </UtilityThemeProvider>
    )
  }
}
```

After you can custom any color or size etc. Dont play too much with the key, but you have freedom on the value.

## Usage

```js
import { Box, Text } from 'react-native-design-utility'

class MyComponent extends Component {
  render() {
    return (
      <Box>
        <Box bg="red" p="sm" mb="lg">
          <Text border={1} size="lg" color="blueDarker" center bold>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            officiis quae deserunt exercitationem beatae nam atque nesciunt.
            Dolore animi eum magni doloremque velit culpa accusamus
            voluptatem, vero quos ea incidunt?
          </Text>
        </Box>
        <Box w={1} bg="blue" mb="sm" center py="sm">
          <Text size="xl" bold>
            Hello
          </Text>
        </Box>
        <Box border={2} center h={200} w={1 / 2} bg="red">
          <Box h={1 / 3} w={1 / 2} bg="blue" />
        </Box>
      </Box>
    )
  }
}
```

### Box

| Props  | Value                            | Description              |
| ------ | -------------------------------- | ------------------------ |
| m      | xs, sm, md, lg, xl or any number | margin                   |
| mt     | xs, sm, md, lg, xl or any number | marginTop                |
| mb     | xs, sm, md, lg, xl or any number | marginBottom             |
| mr     | xs, sm, md, lg, xl or any number | marginRight              |
| ml     | xs, sm, md, lg, xl or any number | marginLeft               |
| my     | xs, sm, md, lg, xl or any number | marginVertical           |
| mx     | xs, sm, md, lg, xl or any number | marginHorizontal         |
| p      | xs, sm, md, lg, xl or any number | padding                  |
| pt     | xs, sm, md, lg, xl or any number | paddingTop               |
| pb     | xs, sm, md, lg, xl or any number | paddingBottom            |
| pr     | xs, sm, md, lg, xl or any number | paddingRight             |
| pl     | xs, sm, md, lg, xl or any number | paddingLeft              |
| py     | xs, sm, md, lg, xl or any number | paddingVertical          |
| px     | xs, sm, md, lg, xl or any number | paddingHorizontal        |
| center | boolean                          | center element with flex |
| border | number                           | give border at index     |
| h      | number, fraction or string       | height                   |
| w      | number, fraction or string       | width                    |
| bg     | string                           | backgroundColor          |
| style  | stylesheet                       | any other style          |

### Text

| Props  | Value                            | Description          |
| ------ | -------------------------------- | -------------------- |
| m      | xs, sm, md, lg, xl or any number | margin               |
| mt     | xs, sm, md, lg, xl or any number | marginTop            |
| mb     | xs, sm, md, lg, xl or any number | marginBottom         |
| mr     | xs, sm, md, lg, xl or any number | marginRight          |
| ml     | xs, sm, md, lg, xl or any number | marginLeft           |
| my     | xs, sm, md, lg, xl or any number | marginVertical       |
| mx     | xs, sm, md, lg, xl or any number | marginHorizontal     |
| p      | xs, sm, md, lg, xl or any number | padding              |
| pt     | xs, sm, md, lg, xl or any number | paddingTop           |
| pb     | xs, sm, md, lg, xl or any number | paddingBottom        |
| pr     | xs, sm, md, lg, xl or any number | paddingRight         |
| pl     | xs, sm, md, lg, xl or any number | paddingLeft          |
| py     | xs, sm, md, lg, xl or any number | paddingVertical      |
| px     | xs, sm, md, lg, xl or any number | paddingHorizontal    |
| center | boolean                          | text-align center    |
| left   | boolean                          | text-align left      |
| right  | boolean                          | text-align right     |
| border | number                           | give border at index |
| color  | string                           | color                |
| size   | xs, sm, md, lg, xl or any number | fontSize             |
| weight | light, normal, bold              | fontWeight           |
| ls     | tight, normal, wide              | letter-spacing       |
| style  | stylesheet                       | any other style      |