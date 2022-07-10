---
title: 'The most common errors in React'
date: '2022-06-28'
---

**Errors**, those annoying messages that comes to you whenever you are expecting some successful results.

First of all, let's be honest! **No one** writes a code without errors, because no one writes perfect code, and we're happy that React helps us out in revealing those **Bugs**.

However, what is important is how to react (lowercase r xd) to these errors.
Coming across them, searching them on Google and fixing your code based on other's experiences is one way.

Another way — and perhaps, a better one — is to understand the issue and why does it happen in the first place.

In this post, we will go over some of the most common React error messages and maybe how to fix them ?

Alright list some of them : 

- [Warning: Each child in a list should have a unique key prop.](https://sentry.io/answers/unique-key-prop/)

&nbsp;&nbsp;When creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its’ children, for example : [el, el, el].map(e=><div key={e.id}>{e}</div>).
&nbsp;&nbsp;&nbsp;React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered.

&nbsp;&nbsp;&nbsp;It is not recommended to use the index of the array as the key prop if you know the array will not be static. If the key is an index, reordering an item in the array changes it. Then React will get confused and re-render the incorrect element.

&nbsp;&nbsp;&nbsp;Keys do not have to be unique globally. They just need to be unique across sibling elements.



- [Adjacent JSX elements must be wrapped in an enclosing tag](https://stackoverflow.com/questions/31284169/parse-error-adjacent-jsx-elements-must-be-wrapped-in-an-enclosing-tag).

- [Objects are not valid as a React child / Functions are not valid as a React child](https://www.g2i.co/blog/understanding-the-objects-are-not-valid-as-a-react-child-error-in-react#:~:text=out%20this%20article.-,The%20%22Objects%20are%20not%20valid%20as%20a%20React%20child%22%20error,to%20create%20and%20return%20JSX.).

- [Too many re-renders. React limits the number of renders to prevent an infinite loop](https://bobbyhadz.com/blog/react-too-many-re-renders-react-limits-the-number).

- [Prevent usage of Array index in keys](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md).

**Final thoughts** : 

Coming across errors during development is an inevitable part of the process, no matter the amount of experience you have. However, the way you handle these error messages is also indicative of your ability as a React developer. To do so properly, it’s necessary to understand these errors and know why they’re happening.

**Error boundaries** : For a better understanding of react errors visit this website [**Error Boundaries**](https://reactjs.org/docs/error-boundaries.html).

