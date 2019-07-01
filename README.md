## W6D1  -- Intro To React

Welcome to your first day of React

### What is React?

Techically react is a library BUT . . . in the context of:

  - a framework is a software where you plug your code into
  - a library is a software that you plug into your code

React is a frontend framework. Frameworks are a subset of libraries. React makes it easier to build frontend due to how it abstracts.

Main React Abstraction is: Components!!!!

### What is a Component?

```jsx
import React, {Component} from 'react';

class Hello extends Component {
  //...

  // must have a render function
  render() {
    return (
      <div>
        <h1>
          Hello World :D !!!
        </h1>
      </div>
    )
  }
}
// if you are planning to use this component as an import, you must export it.
export default Hello;
```

Components are just peices of visual bits that we will create in order to build our apps. Components are also reusable. Some examples of components are: `NavBar`, `Menu`, `MenuItem (item inside of a menu`, `Card(a picture with some text)`, etc.

To create a react component we must define a `class` with a class name, which extends `Component`
ie:

```
import React, {Component} from 'react';

class SomeComponent extends Component {
  //...
}

export default SomeComponent;
```

Components can have other components nested as children. A parent component can pass props down to a child component. Each component has its own state.

### JSX = Javascript + XML

JSX is a superset of Javascript. It lets embed Javascript in the HTML that we want our components to return. There are some rules to writing valid JSX. Here are some of them:

1) All Tags must close
Good!

```jsx
  render() {
    <div>
      <div> closed</div>
      <p>Closed paragraph</p>
      <Hello/>
      <Hello></Hello>
    < /div >
  }
```

Bad!

```jsx
  render() {
    <div>
      <div >closed<div>
      <p>not Closed paragraph
      <Hello>
    </div>
  }

```

2) There absolutely MUST BE A ROOT TAG. `render()` cannot return multiple siblings components.

Good!!!

```jsx
  render() {
    <div>
      <p>1</p>
      <p>2</p>
      <p>3</p>
    </div>
  }
```

Bad
```jsx
  render() {
    <p>1</p>
    <p>2</p>
    <p>3</p>
  }
```

3) A jsx tag can only show a single expression (remember no if and for loops inside)

### Functions Can return JSX and Arrays can store JSX into them!

```jsx
const greeting = () => {
  return (
    <div>
      <p>This is my component</p>
    </div>
  )
}
```

Storing an array full of JSX `p` tags.
```jsx
  const arr [1,2,3,4,5]
  let array = arr.map( element => <p>{element}</p> )
```
