## Codecademy React Challenge Project

This project will ask the learner to design an appointment app that resembles those of medical offices like LabCorp and Quest Diagnostics. The app will allow users logged in as Providers to view appointments and users logged in as Patients can make an available appointment. 

Application Components:
- `AppointmentCard`: Displays an appointment including provider/patient name, date and time.
- `AppointmentPicker`: Patient appointment selector, containes ProviderPicker, DatePicker and TimePicker components.
- `DatePicker`: Supplied with the project. Might be combined with the TimePicker depending on which one is selected for the project.
- `LoginForm`: Prompt and field(s) for login.
- `Navbar`: Top of page display with App Logo, Patient Info or Provider info.
- `NewUserForm`: New user form to submit username and info of providers and patients. 
- `ProviderPicker`: Lists available providers. 
- `TimePicker`: Supplied with the project. Might be combined with the DatePicker depending on which one is selected for the project.

Application Containers:
- `App`: Root of the application and contains the routes and navbar. This container is supplied with starter code and will include route logic.
- `Login`: User can log in as a Patient or Provider or 
- `NewPatient`: Fill out a form to add a patient.
- `Provider`: Provider page can view appointments made by patients
- `Patient`: Patient can add appointments for a selected provider. Patient appointments are listed.

**data.js** acts as a database where data is retrieved and added.

Fake Credentials:

Providers:
username: 'heretohelp'
password: '1!2@3#4$'

username: 'totalcare'
password: '12341234'

username: 'staywell'
password: '011235813'

Patients:
username: 'johnsmith'
password: '09876543'