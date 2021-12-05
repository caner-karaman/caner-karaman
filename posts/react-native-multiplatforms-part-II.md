---
title: "Styling RNW Application with Styled Components"
date: "28-11-2021"
description: "There are a few opportunities styling react native web applications. How we integrate styled components to react native web applications."
tags: "react-native, react-native-web, typescript"
---
This is the second part of our react native web blog series. If you want to review the first post(React Native Web Part I: Setup) of our series: [https://canerk.medium.com/react-native-multi-platforms-part-i-14f85b058663](https://canerk.medium.com/react-native-multi-platforms-part-i-14f85b058663) 

In this post, we will look at how to integrate styled components into our react native web application.

First of all, let's look at the difference and similarity between react and react native styling. On React for styling;

- Inline styles
- Css files
- Css-in-js pattern

we used. On React Native for styling;

- StyleSheet(React native class for styling)
- Inline styles

In this project infrastructure, we will use styled-components to combine platforms with two different styling methods. Styled component is a library that helps us to do styling in javascript file. Let's start coding quickly

First, let's install the library into our project.

```jsx
npm install --save styled-components
npm install --save-dev @types/styled-components
```

After the installation, Let's try to use it as written in the document. 

```jsx
// App.tsx

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View
} from 'react-native';
// import styled components
import styled from "styled-components";

// Create Wrapper element
const Wrapper = styled(View)`
  background-color: red;
  align-items: center;
`

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle='dark-content' />
      <Wrapper>
        <Text style={{fontSize: 24}}>React Native Web App Example</Text>
      </Wrapper>
    </SafeAreaView>
  );
};

export default App;
```

When the code is written in this way, I expect the styling to be done without problems, but the styling on the web side is not working at the moment. I expected the background to be red.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/aa18729b-ac9c-4035-83ee-902a63793c69/Untitled.png)

To fix this problem, we need to add a line of code to our webpack.config file. In line 65 of our webpack config file, we should add this statement.

```jsx
'styled-components': 'styled-components/native',
```

After adding the code it will look like this:

```jsx
resolve: {
    extensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.web.js', '.js'],
    alias: {
      'react-native$': 'react-native-web',
      'styled-components': 'styled-components/native', // NEW Statement
    },
  },
```

Now we can test again. This is how our code will run without any problems. If it doesn't work, stop webpack and try again.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ce75db0e-46fd-46ff-8861-7151808deb67/Untitled.png)

### References:

[styled-components](https://styled-components.com/)