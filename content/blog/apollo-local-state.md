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

With Apollo 3, you can use [Reactive Variables](https://www.apollographql.com/docs/react/local-state/reactive-variables/)\
With Apollo 2.x, you can use [Local Resolvers](https://www.apollographql.com/docs/react/v2/data/local-state/)

#### Reactive variables

Explanation

#### Local Resolvers

Explanation