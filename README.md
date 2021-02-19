## Codecademy React Challenge Project

#### Notes 2/16/21
- react-datepicker: I was able to grab the css from *node_modules* for this component and put it in **index.html**. Will the LE have access to it the react-datepicker component though? I will create a date validation field if necessary.
- I am curious how css is going to work. I feel I will need to describe how to include CSS in the project description. The design with class names will be needed before finalizing the instructions, correct?
- I lifted up the state for the appointments and contacts arrays, but felt that the validation state should be in each of the form components. Thoughts?
- I didn't include time yet. I can activate it on the installed react-datepicker component or will need to create time field if necessary.

The app is a 2 page appointments app. You can add and see your appointments on the Appointments page and add and see your contacts on the Contacts page. 

Components
- `appointments`: page that renders the appointment form and the appointments list
- `contactForm`: page that renders the contacts form and the contacts list
- `appointmentForm`: form to add an appointment. Validates `title` and `contact` are not empty strings to submit
- `contactForm`: form to add a contact. Validates the phone number and email fields using regex. Validates `name` is not empty and `phone` and `email` are valid to submit
- `contactPicker`: `<select>` list of contacts.
- `tile`: displays generic data using values of object in `appointments` or `contacts` arrays
- `tileList`: lists tile objects using the `appointments` or `contacts` arrays