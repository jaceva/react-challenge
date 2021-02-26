# Build an Appointments App

## Overview
This project is slightly different than others you have encountered thus far on Codecademy. Instead of a step-by-step tutorial, this project contains a series of open-ended requirements which describe the project you'll be building. There are many possible ways to correctly fulfill all of these requirements, and you should expect to use the internet, Codecademy, and other resources when you encounter a problem that you cannot easily solve.

## Project Goals
In this project you will use functional React components to create an app that manages contacts and appointments. The app consists of two pages: one to view and add contacts and one to view and add appointments.

You will work with stateful and stateless functional React components using hooks. The following task descriptions will walk through implementing the app from the top most component down. If you would like to implement it in a different order feel free to do what is comfortable for you.

## Setup Instructions
If you choose to do this project on your computer instead of Codecademy, you can download what you'll need by clicking the "Download" button below. Make sure you have [Node installed on your computer](https://www.codecademy.com/articles/setting-up-node-locally) and then, inside the project's root directory, run `npm install`. Finally, run `npm start` which will automatically open up a new tab in your browser with your running application. If a new tab does not appear, you can visit [http://localhost:3000/](http://localhost:3000/).

## Task Group #1 Prerequisites
### Task #1 
To complete this project, you should have completed the Codecademy lessons from [Learn React](https://www.codecademy.com/learn/react-101) including:
- JSX
- Functional Components
- React Hooks
- Stateless vs. Stateful Components
- State sharing with parent, child and sibling components
- Container vs Presentational Components
- React Forms  

## Task Group #2 Project Requirements

### Task #2 
The application code starts with **App.js**, **ContactsPage.js** and **AppointmentsPage.js**. These are the three stateful components you will work with in this project.

`App` is a stateful component that handles the routing between the two pages, `ContactsPage` and `AppointmentsPage`. This is already implemented using [React Router](https://reactrouter.com/web/guides/quick-start).

Based on the given requirements, implement `App` as a stateful component to handle the logic for the contacts and appointments data.

This component will:
- Keep track of the contacts and appointments data, each being an array of objects.
- Define a function to add data to the contacts array
- Define a function to add data to the appointments array.
- Add the contacts array and the add contact function to the props of the `ContactsPage` component.
- Add the appointments array, contacts array and the add appointment function to the props of `AppointmentsPage` component.

### Hint

- Add `{ useState }` to the `'react'` import statement
- Create empty arrays for contacts and appointments using `useState([])`
- Set the new state with the setter function using the spread operator.
```js
[...oldStateArray, newArrayObject]
```


### Task #3 

Based on the given requirements, implement `ContactsPage` as a stateful component to handle the logic for adding new contacts and listing current contacts.

This component will:
- Have two props: 
  - The current list of contacts
  - A function for adding a new contact
- Render a `ContactForm` and a `TileList`.
- Keep track of the current name, phone, and email entered into the form.
- Check for duplicates whenever the name in the form changes and indicate the name is a duplicate.
- Only add a new contact on form submission if it does not duplicate an existing contact's name.
- A successful submission should clear the form.

### Hint

- Add `{ useState, useEffect }` to the `'react'` import statement
- Import `ContactForm` and `TileList`
- Make `props` a function parameter
- The contact info state variables should default to an empty string using `useState('')`
- The state variable to track a duplicate name should be set to false using `useState(false)`
- Implement a call to `useEffect`, where the callback function sets the duplicate state variable to `true` if the name state variable is already in the contacts list
- An `if` statement should be added to `handleSubmit` that checks the duplicate state variable is `false`. The body of the `if` statement should call the add contact function in `props` and set the contact info state variables to `''` 

### Task #4 

Based on the given requirements, implement `ContactForm` as a stateless component that renders a web form to collect the necessary contact information.

This component will:
- Have 7 props: 
  - The variables for contact name, phone and email 
  - The setters for contact name, phone and email 
  - The function that handles the form submission
- Render a `form` with:
  - The `onSubmit` attribute set
  - 3 controlled `input` components, one for each piece of contact data
  - A submit button
- Include a `pattern` attribute to the phone `input` with [a regex](https://regexlib.com/Search.aspx?k=phone&c=-1&m=-1&ps=20) that matches the phone locale of your preference.

### Hint

- Make `props` a function parameter
- Use `<form onSubmit={props.handlerFunction} >` to create the html form
- The children of the form should be `<input>`s of `type` `text`, `tel`, `email` and `submit`
- The `value` attribute of the 3 controlled `input`s should be set to the associated variable in `props`
- The `onChange` attributes of the 3 controlled `input`s should be set to a callback function that passes `e.target.value` to the the associated setter function
- One example of a phone regex is the US locale: `"[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"`

### Task #5 

Based on the given requirements, implement `TileList` as a stateless component that renders a list of `Tile` components using an array of objects.

This component will:

- Have one prop:
  - An array to render as a list
- Use the array in props to iteratively render `Tile` components.
- Add the objects in the array to the props of the `Tile` component.

### Hint

- Import the `Tile` component
- Make `props` a function parameter
- Use the `map()` method on the array prop
- The `map()` callback function has a data object and an index as parameters
- The callback should return a `Tile` component with the data object added to `props` and set the component `key` to the index 

### Task #6 

Based on the given requirements, implement `Tile` as a stateless component that renders the data from an object.

This component will:
- Have one prop: 
  - An object
- Use the `Object.values()` [method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values) to iteratively render the data in the object.

### Hint

- Make `props` a function parameter
- `map()` over the array of values from the object in `props` using `Object.values()`
- Use the `map()` callback to render each value in the array on a separate line

### Task #7

Based on the given requirements, implement `AppointmentsPage` as a stateful component that handles the logic for adding new appointments and listing current appointments.

This component will:
- Have three props:
  - The current list of appointments
  - The current list of contacts
  - A function for adding a new appointment.
- Render an `AppointmentForm` and a `TileList`.
- Keep track of the current title, contact, date and time entered into the form.
- Add a new appointment on form submission.
- Clear the form on submission. 

### Hint

- Add `{ useState }` to the `'react'` import statement
- Import `AppointmentForm` and `TileList`
- Make `props` a function parameter
- The appointment info state variables should default to an empty string using `useState('')`
- The handle submit function should add contact function and set the contact info state variable to `''` 

### Task #8

Based on the given requirements, implement `AppointmentForm` as a stateless component that renders a web form to collect the necessary appointment information.

This component will:
- Have 9 props:
  - The variables for appointment title, contact, date and time
  - The setter functions for appointment title, contact, date and time
  - The function that handles the form submission.
- Render a `form` with:
  - The `onSubmit` attribute set
  - 3 controlled `input` components, one for each piece of appointment data
  - a `ContactPicker` component with the contacts list as its props.
  - A submit button
- Use `getTodayString()` to set the minimum date of the data `input`.

### Hint

- Import the `ContactPicker` component
- Make `props` a function parameter
- Use `<form onSubmit={props.handler} >` for the form
- The children of the form should be `<input>`s of `type` text, date, time and submit
- The `value` attribute of the input fields should be set to the associated variable in `props`
- The `onChange` attributes of the input fields should be set to a callback function that passes `e.target.value` to the the associated setter function

### Task #9

Based on the given requirements, implement `ContactPicker` as a stateless component that renders a drop down list of all contact names.

This component will:
- Have 2 props:
  - The array of contacts
  - A function to handle `onChange`.
- Render a `select` element that defines the `onChange` attribute.
- Have a default first `option` element that indicates no contact is selected.
- Iteratively add `option` elements using the contacts array.

### Hint

- Make `props` a function parameter
- Use `<select>` with the `onChange` attribute set to the handler in `props`
- The default `<option>` should have `key` and `value` attributes
- The default `<option>` should have `selected="selected"` attribute
- Use `map()` on the contact array in `props` to render an `<option>` for each contact with `key` and `value` attributes set to the contact name

## Task Group #3 Solution
### Task #

Great work! Visit [our forums](https://discuss.codecademy.com/c/project/challenge-projects/1867) to compare your project to our sample solution code. You can also learn how to host your own solution on GitHub so you can share it with other learners! Your solution might look different from ours, and that's okay! There are multiple ways to solve these projects, and you'll learn more by seeing others' code.
