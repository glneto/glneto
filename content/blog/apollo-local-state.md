---
title: Apollo Local State
language: en-US
date: 2020-12-27T11:02:47.144Z
subtitle: An architecture suggestion for local state fields with Apollo Client 3
tags: apollo, graphql, local state, reactive, variables, vars
---
#### Why?

Using Apollo Local State can be useful to avoid having to add new State management libraries (i.e.: Redux) to your project. **Its not a robust state management solution, but it can replace Redux in simple apps.**

#### When not to?

If your solution strongly relies on setting up middlewares, using actions logic with redux-thunk or any kind of Redux driven logic, it may be preferable to use Redux rather than having to manually implement those flows.

#### When should I?

If your goal is only to share values between components without having to drill-down the props, Apollo local state may fit you well and will not require as much boilerplate code as Redux or other state management libraries.

Also, if you are already using GraphQL (I assume you are), Apollo has a nice way of integrating those local state values to the queries you make.

#### How?

With Apollo 3, you can use [Reactive Variables](https://www.apollographql.com/docs/react/local-state/reactive-variables/)

With Apollo 2.x, you can use [Local Resolvers](https://www.apollographql.com/docs/react/v2/data/local-state/)

#### Reactive variables

Local state management became really simple since the introduction of Reactive variables.
The only thing you have to do is use the **makeVar** function available in **@apollo/client library**.

```javascript
import { makeVar } from '@apollo/client';
const sharedValue = makeVar('initial value');
```

Simple as that, you can now access your value using:

```
sharedValue()
```

And you can modify it using:

```
sharedValue(newValue)
```

Ok, that's great, but the thing is: it's not very intuitive, right? It's not how React does with useState and it feels weird to have different patterns for setting and reading values across our code.

So here's a **suggestion**:

```
import { makeVar } from '@apollo/client';

// Create the reactive variable. It should be global
// and should only be instantiated once in your code, otherwise
// you will be creating a new reference. That's why it's not a part
// of the hook code.
const sharedValue = makeVar('initial value');

// This is the public part. This is how our components will
// use our reactive variable.
const useSharedValue = () => [sharedValue(), sharedValue]
export { useSharedValue }
```

Now you can import and read/write to sharedValue in any component, like a shared useState call:

```
import React from 'react';
import { useSharedValue } from '../local-state/shared-value';

const MyComponent = () => {
  const [sharedValue, setSharedValue] = useSharedValue();

  return <button onClick={() => setSharedValue('Changed')}>
    {sharedValue}
  </button>
}
```



#### Local Resolvers

Explanation