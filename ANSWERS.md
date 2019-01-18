1) What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes are used to verify that data being passed down as props is of the type (and/or shape) expected. This is important because javascript is dynamically typed which means that a string or object might end up in the same variable. Wrong typed data can cause errors that would otherwise be difficult to track down. Checking data will cause more meaningful error messages to be produced and prevent unwanted behavior of applications which is good for security and reliability.

2) Describe a life-cycle event in React?

React Components have 3 phases of existence: Mounting, Updating, and Unmounting.

During the Mounting phase the constructor method executes and sets up state using data from props or other sources. Next the render method executes which places changes on the virtual DOM and renders them to the actual DOM accordingly. Once that is completed the componentDidMount method executes and the Mounting phase is complete.

During the Updating phase the component waits for changes to props or state (or a call to forceUpdate()). If props or state change the component determines if a render is necessary and if so the render method executes. The previous state of the DOM is stored and changes are rendered to the virtual DOM. Any changes between the virtual DOM and the DOM are implemented. Finally componentDidUpdate is executed.

The final phase is the Unmounting phase. The component is removed from the DOM and componentWillUnmount is executed. Any listeners associated with the component's elements should be cleaned up by componentWillUnmount.

3) Explain the details of a Higher Order Component?

A Higher Order Component is a special type of component which receives one or more components as input and returns a component depending on logic implemented within the HOC. This is useful for conditionally rendering a component.

4) What are three different ways to style components in React? Explain some of the benefits of each.

The most basic way to style Reac components is to use className to set class names and use plain css in an 'include'ed file. This method breaks component styling into an associated css file and may be preferable for organizational purposes. A preprocessor can be used on top of this setup.

Another way is to use the styled-components library. This allows for styling of the component within a javascript file, either within the component's file or abstracted to imported files. This allows for reusable styling for similar components and can make conditional styling easier to implement.

A third way is to use a library like reactstrap. Reactstrap has a baseline of styled components pre-built so implementing them is a matter of importing the desired components and mapping content appropriately. This can be an extremely streamlined way to implement a react app but customization can be difficult. 
