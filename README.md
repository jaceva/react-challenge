## Codecademy React Challenge Project

I am adding this line.

This project will ask the learner to design an appointment app that resembles those of medical offices like LabCorp and Quest Diagnostics. The app will allow users logged in as Providers to add appointment availability and users logged in as Patients" to reserve an available appointment. 

Application Components:
- `ApptCard`: Displays an appointment including provider/patient name, date and time.
- `ApptPicker`: Patient appointment selector, containes ProviderPicker, DatePicker and TimePicker components.
- `ApptSubmitter`: Provider appointment submission, containes 2 DatePicker and 2 TimePicker components to submit avaiable appointment ranges.
- `DatePicker`: Supplied with the project. Might be combined with the TimePicker depending on which one is selected for the project.
- `LoginForm`: Prompt and field(s) for login.
- `Navbar`: Top of page display with App Logo, Patient Info or Provider info.
- `NewUserForm`: New user form to submit username and info of providers and patients. 
- `ProviderPicker`: Lists available providers. 
- `TimePicker`: Supplied with the project. Might be combined with the DatePicker depending on which one is selected for the project.

Application Containers:
- `App`: Root of the application and contains the routes and navbar. This container is supplied with starter code and will include route logic.
- `UserMain`: The main app page where the user chooses to login as a Patient or Provider. This container is supplied with starter code and will include redirect logic.
- `Login`: User can log in as a Patient or Provider or fill out a form to add a patient or provider. This container is not supplied with starter code.
- `Appointments`: Patient can pick from available appointments for a selected provider. Patient appointments are listed. A provider can pick range of dates and time to make appointments available. Appointments with active provider are listed. This container is not supplied with starter code.

Container State:
- App
  - `navbarInfo`: The navbar can display either the App name and logo, patient info or provider info based on the user type and login state of the app.
- UserMain: 
  - `loggedIn`: Is the user logged in. The page will redirect to the appropriate appointments page if logged in.
  - `userType`: either patient or provider sent to appointments page for the correct rendering.
- Login:
  - `usernameField`: The username field text of the new user form. Used for validation such as length and uniqueness.
- Appointments:
  - `appointments`: List of the appointments for the patient or provider. Newly created appointments for the patient will update on the page right away. 

A fake API will be provided to handle appointment creation, reading and deletion. The API may come with some hard coded Patients and Providers so the learner can start working on any point of the app.