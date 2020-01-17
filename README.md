# font-awesome

React components of [font-awesome](https://fontawesome.com/) icons. Icons are transformed to react component by `@fortawesome/fontawesome-free`(v5.12.0).

If you want to see what icons `font-awesome` has, please browse this [site](https://fontawesome.com/icons).

## Installatoin

```
npm install @fedlinker/font-awesome

yarn add @fedlinker/font-awesome
```

## Usage

### Base

```jsx
import React from 'react';
import { Brands500px } from '@fedlinker/font-awesome';

export default () => {
  return <Brands500px />;
};
```

### Changing size and color

```jsx
import React from 'react';
import { Brands500px } from '@fedlinker/font-awesome';

export default () => {
  return <Brands500px style={{ fontSize: '16px', color: '#ccc' }} />;
};
```

## (Changelog)[https://github.com/fedlinker/font-awesome/blob/master/CHANGELOG.md]
