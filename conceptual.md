### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?<br />
  React is a front-end JavaScript library. It allows using HTML-like syntax within JavaScript code, enabling developers to create reusable components. It can also manage the state of the application.<br />

- What is Babel?<br />
  Babel is a JavaScript transpiler that converts the newest JavaScript into older ES5 JavaScript that can run in older browsers. Babel is often used to transform ECMAScript 2015+ code into a backwards-compatible version of JavaScript.<br />

- What is JSX?<br />
  JSX stands for JavaScript XML. React uses JSX to render content. JSX allows users to write HTML in React.<br />

- How is a Component created in React?<br />
  Components in React serve as reusable code blocks for User Interface elements. Components in React can be created using JSX functional component or a class component. React functional components can be any JavaScript function that returns the HTML. Functional components can accept “props”, properties or data. The class components have the same features as function components, but it must include “extends React.Component” to pass data from one class component to another.<br />

- What are some difference between state and props?<br />
  Props are passed to a component from its parent and are read-only. Whereas State is managed within the component and can be changed using setState(). The main difference is that the props pass the data or properties(props) from one component to other components while the state is the real-time data available to use only within that component.<br />

- What does "downward data flow" refer to in React?<br />
  It means data in a React application should be passed down from parent components to child components through props, rather than child components directly accessing parent data. It means changes in a component do not impact components higher in the hierarchy. This ensures a manageable state flow.<br />

- What is a controlled component?<br />
  A controlled component is an input where the value is controlled by React state. Changes to the input values are through updating the state.<br />

- What is an uncontrolled component?<br />
  An uncontrolled component is a input that maintains its own internal state, and React does not manage its state. Uncontrolled components use the DOM itself to handle data.<br />

- What is the purpose of the `key` prop when rendering a list of components?<br />
  The 'Key' prop is a unique identifier that React uses to manage and update elements within a list. "Key" helps React identify which items have been changed, added, or removed. This is for better tracking purposes.<br />

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?<br />
  If the key is an index, reordering an item in the array changes it. This can lead to issues where React misidentify components.<br />

- Describe useEffect. What use cases is it used for in React components?<br />
  The useEffect Hook allows one to perform side effects in omponents, such as data fetching from APIs, timers etc.<br />

- What does useRef do? Does a change to a ref value cause a rerender of a component?<br />
  useRef is a React hook that returns a mutable reference object that persists for the full duration in the component. Changes to a ref value do not trigger a re-render of the component. The primary purpose of useRef is to access and interact with the DOM directly.<br />

- When would you use a ref? When wouldn't you use one?<br />
  You would use a ref when direct access to a DOM is needed, such as storing a mutable value that doesn't require a re-render. You wouldn't use a ref for values that would trigger a re-render when they change.<br />

- What is a custom hook in React? When would you want to write one?<br />
  React custom hooks are reusable functions that a React Javascript developer can use to add special functionality. This function starts with "use" and can also call other hooks.<br />
