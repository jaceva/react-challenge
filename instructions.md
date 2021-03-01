# Build an Appointments App

## Overview
Instead of a step-by-step tutorial, this project contains a series of open-ended requirements which describe the project you'll be building. There are many possible ways to correctly fulfill all of these requirements, and you should expect to use the internet, Codecademy, and other resources when you encounter a problem that you cannot easily solve.

## Project Goals
In this project you will use functional React components to create an app that manages contacts and appointments. The app consists of two pages: one to view and add contacts and one to view and add appointments.

![Component Diagram](./images/components.png)

You will work with stateful and stateless functional React components using hooks. The following task descriptions will walk through implementing the app from the top most component down. If you would like to implement it in a different order feel free to do what is comfortable for you.

## Setup Instructions
If you choose to do this project on your computer instead of Codecademy, you can download what you'll need by clicking the "Download" button below. Make sure you have [Node installed on your computer](https://www.codecademy.com/articles/setting-up-node-locally) and then, inside the project's root directory, run `npm install`. Finally, run `npm start` which will automatically open up a new tab in your browser with your running application. If a new tab does not appear, you can visit [http://localhost:3000/](http://localhost:3000/).

## Task Group #1 Prerequisites
### Task #1 
To complete this project, you should have completed the Codecademy lessons from [Learn React](https://www.codecademy.com/learn/react-101) including:
- JSX
- React Components
- Components Interacting
- Stateless Components From Stateful Components
- Advanced React
- Hooks

## Task Group #2 Project Requirements

### Task #2 
The application code starts with **App.js**, **ContactsPage.js** and **AppointmentsPage.js**. These are the three stateful components you will work with in this project.

`App` is a stateful component that handles the routing between the two pages, `ContactsPage` and `AppointmentsPage`. This is already implemented using [React Router](https://reactrouter.com/web/guides/quick-start).

> Note: You do not need to be familiar with React Router to complete this project.

Based on the given requirements, implement `App` as a stateful component that maintains appointments and contacts. It should also pass those values, along with callback functions to update those state values, to its child components.

In this component:
- Keep track of the contacts and appointments data, each being an array of objects.
- Define a callback function that, given a name, phone number, and email, adds a new contact object with that data to the array of contacts. 
- Define a callback function that, given a title, contact, date, and time, adds a new appointment object with that data to the array of appointments. 
- Pass the array of contacts and the appropriate callback function as props to the `ContactsPage` component.
- Pass the appointments array, contacts array, and the add appointment function as props to the `AppointmentsPage` component.

### Hint
To maintain state values in the `App` component:
- Add `{ useState }` to the `'react'` import statement
- Create empty arrays for contacts and appointments using `useState([])`
- In the callback functions, set the new state with the setter function using the spread operator
```js
[...oldStateArray, newArrayObject]
```


### Task #3 

Based on the given requirements, implement `ContactsPage` as a stateful component to handle the logic for adding new contacts and listing current contacts.

This component will:
- Receive two props: 
  - The current list of contacts
  - A callback function for adding a new contact
- Keep track of three local state values: the current name, phone, and email entered into the form.
- Check for duplicates whenever the name in the form changes and indicate the name is a duplicate.
- Only add a new contact on form submission if it does not duplicate an existing contact's name.
- A successful submission should clear the form.
- Render a `ContactForm` with the following passed via `props`:
  - local state variables
  - local state variable setter functions
  - `handleSubmit` callback function
- Render a `TileList` with the contact array passed via `props`.

### Hint

- Add `{ useState, useEffect }` to the `'react'` import statement
- Import `ContactForm` and `TileList`
- Extract the array of contacts and the callback for adding contacts from the `props` value passed as an argument to `ContactsPage`
- The three state variables holding the form's contact data should each default to an empty string using `useState('')`
- Use a fourth local state variable to track a duplicate name. It should be `false` by default using `useState(false)`
- To check for duplicates, implement a call to `useEffect` that sets the duplicate state variable to `true` if the name state variable is already in the contacts list
- Within `handleSubmit()`, if the duplicate state variable is `false`, call the callback function for adding a new contact (passed via `props`) using the data from the form. Then reset the contact info state variables to their default state.

### Task #4 

Based on the given requirements, implement `ContactForm` as a stateless component that renders a web form to collect the necessary contact information.

This component will:
- Render a `form` with:
  - The `onSubmit` attribute set
  - 3 controlled `<input>` elements, one for each piece of contact data
  - A submit button
- Include a `pattern` attribute to the phone `<input>` with [a regex](https://regexlib.com/Search.aspx?k=phone&c=-1&m=-1&ps=20) that matches the phone locale of your preference.

### Hint

- Use `<form onSubmit={callback} >` to create the html form, where `callback` is the function passed via `props` for handling the form submission
- The children of the form should be `<input>` elements, each with one of the following `type` attributes: `'text'`, `'tel'`, `'email'` and `'submit'`
- The `value` attribute of the 3 controlled `<input>` elements should be set to the associated variable passed via `props`
- The `onChange` attributes of the 3 controlled `<input>` elements should be set to a callback function that passes `e.target.value` to the associated setter function from `props`
- One example of a phone regex is the US locale: `"[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"`

### Task #5 

Based on the given requirements, implement `TileList` as a stateless component that renders a list of `Tile` components using an array of objects. 

This component will:

- Receive one prop:
  - An array to render as a list
- Use the array passed via `props` to iteratively render `Tile` components, passing each object in the array as a prop to each rendered `Tile` component.

The requirements for the `TileList` component are generalized and allow it to be shared by the `ContactsPage` and `AppointmentsPage` components. As long as an array of objects with either the contact data or appointments data is passed then the content will be handled appropriately.

### Hint

- Import the `Tile` component
- Extract the array of data from the `props` value passed as an argument to `TileList`
- Use the `map()` method on the array prop
- The `map()` callback function should have an object from the array as the first parameter and that object's index as the second parameter
- The callback should return a `Tile` component with the object parameter passed as a prop and the index parameter used as the component's `key`.

### Task #6 

Based on the given requirements, implement `Tile` as a stateless component that renders the data from an object.

This component will:
- Receive one prop: 
  - An object
- Iterate over the values in the object, passed in via props, and render a `<p>` element for each value.

Just like the `TileList` component, the `Tile` component is generalized to work with data from any object. This allows it to be used in both the `ContactsPage` and `AppointmentsPage` components.

### Hint

- Extract the data object from the `props` value passed as an argument to `Tile`
- You may use the `Object.values()` [method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values) to generate an array of the object's values and then use `map()` to iterate over the array.
- Use the `map()` callback to render a `<p>` element for each of the object's values. If you used `Object.values()`, use the value's index as the `key` for the `<p>` element.

### Task #7

Based on the given requirements, implement `AppointmentsPage` as a stateful component that handles the logic for adding new appointments and listing current appointments.

This component will:
- Receive three props:
  - The current list of appointments
  - The current list of contacts
  - A callback function for adding a new appointment.
- Keep track of the current title, contact, date and time entered into the form.
- Add a new appointment on form submission.
- Clear the form on submission. 
- Render a `AppointmentForm` with the following passed via `props`:
  - local state variables
  - local state variable setter functions
  - `handleSubmit` callback function
- Render a `TileList` with the appointment array passed via `props`.

### Hint

- Add `{ useState }` to the `'react'` import statement
- Import `AppointmentForm` and `TileList`
- Extract the array of appointments and the callback for adding appointments from the `props` value passed as an argument to `AppointmentsPage`
- The four state variables holding the form's appointment data  should each default to an empty string using `useState('')`
- The `handleSubmit()` function should call the callback function for adding a new appointment with the data from the form. It should also reset the appointment info state variables to their default values.

### Task #8

Based on the given requirements, implement `AppointmentForm` as a stateless component that renders a web form to collect the necessary appointment information.

This component will:
- Render a `form` with:
  - The `onSubmit` attribute set to the callback function passed in via `props`
  - 3 controlled `<input>` elements, to be used for the title, date and time appointment data
  - A `ContactPicker` component with the contacts list passed in via props
  - A submit button
- Use `getTodayString()` to set the `min` attribute of the date `<input>`.

### Hint

- Import the `ContactPicker` component
- Use `<form onSubmit={callback} >` to create the html form, where `callback` is the function passed via `props` for handling the form submission
- The children of the form should be `<input>` elements of `type` text, date, time and submit
- The `value` attribute of the `<input>` fields should be set to the associated variable in `props`
- The `onChange` attribute for each of the `<input>` elements and the `ContactPicker` should be set to a callback function that passes `e.target.value` to the associated setter function

### Task #9

Based on the given requirements, implement `ContactPicker` as a stateless component that renders a drop down list of all contact names.

This component will:
- Receive 2 props:
  - The array of contacts
  - A callback function to handle when the `onChange` event is triggered
- Render a `select` element with the `onChange` attribute set to the callback passed in via props.
- Have a default first `option` element that indicates no contact is selected.
- Iteratively add `option` elements using the values from the contacts array passed in via props.

### Hint

- Extract the array of contacts and the callback for handling `onChange` events from the `props` value passed as an argument to `ContactPicker`
- The default `<option>` should have `key` and `value` attributes
- The default `<option>` should have `selected="selected"` attribute
- Use `map()` on the contact array in `props` to render an `<option>` for each contact with `key` and `value` attributes set to the contact name

## Task Group #3 Solution
### Task #

Great work! Visit [our forums](https://discuss.codecademy.com/c/project/challenge-projects/1867) to compare your project to our sample solution code. You can also learn how to host your own solution on GitHub so you can share it with other learners! Your solution might look different from ours, and that's okay! There are multiple ways to solve these projects, and you'll learn more by seeing others' code.
