export const getProviders = () => users
  .filter(user => user.type === 'provider')
  .map(user => ({
    name: user.firstname,
    username: user.username
  }));

export const getPatients = () => users
  .filter(user => user.type === 'patient')
  .map(user => ({
    firstname: user.firstname,
    lastname: user.lastname,
  }));

export const getUser = username => users
  .filter(user => user.username === username)
  .map(user => ({
    firstname: user.firstname,
    lastname: user.lastname,
    username: user.username,
    type: user.type
  }))[0]

export const checkCredentials = (username, password) =>
  users.filter(user => 
    user.username === username &&
    user.password === password).length === 1

export const getAvialableTimes  = (username, date) => {
  const appointments = getProviderAppointments(username);
  const appointmentTimes = appointments
    .filter(appointment => 
      new Date(appointment.date).getMonth() === date.getMonth() &&
      new Date(appointment.date).getDate() === date.getDate() &&
      new Date(appointment.date).getYear() === date.getYear()
    )
    .map(appointment => appointment.time);
    return times
    .filter(time => !appointmentTimes.includes(time))
    .map(time => time);
}

export const getPatientAppointments = username => appointments
  .filter(appointment => appointment.patient === username)
  .map(appointment => {
    const provider = getUser(appointment.provider);
    return {
      provider: provider.firstname,
      date: appointment.date,
      time: appointment.time,
      id: appointment.id
    }
});  

export const getProviderAppointments = username => appointments
  .filter(appointment => appointment.provider === username)
  .map(appointment => {
    const patient = getUser(appointment.patient);
    return {
      firstname: patient.firstname,
      lastname: patient.lastname,
      date: appointment.date,
      time: appointment.time,
      id: appointment.id
    }
});  

export const getProviderDate = username => providerDates
  .filter(obj => obj.provider === username)
  .map(obj => obj.endDate) 

export const setProviderDate = (username, newDate) => {
  const date = providerDates.find(obj => obj.provider === username);
  date.endDate = newDate;
}

export const addAppointment = (patient, provider, date, time) => {
  const id = appointments.length;
  appointments.push({
    id: id,
    patient: patient,
    provider: provider,
    date: date,
    time: time
  })
}

export const addPatient = (firstname, lastname, username, password) => {
  const id = users.length;
  users.push({
    id: id,
    firstname: firstname,
    lastname: lastname,
    type: 'patient',
    username: username,
    password: password
  })
}

let appointments = [
  {
    id: 0,
    patient: "johnsmith",
    provider: "heretohelp",
    date: new Date(),
    time: "4:00pm"
  },
  {
    id: 1,
    patient: "johnsmith",
    provider: "heretohelp",
    date: new Date(),
    time: "3:00pm"
  }
];

let users = [
  {
    firstname: 'Here To Help',
    lastname: '',
    type: 'provider',
    username: 'heretohelp',
    password: '1!2@3#4$'
  },
  {
    firstname: 'Total Care',
    lastname: '',
    type: 'provider',
    username: 'totalcare',
    password: '12341234'
  },
  {
    firstname: 'Stay Well',
    lastname: '',
    type: 'provider',
    username: 'staywell',
    password: '011235813'
  },
  {
    firstname: 'John',
    lastname: 'Smith',
    type: 'patient',
    username: 'johnsmith',
    password: '09876543'
  }
];

const providerDates = [
  {
    provider: "heretohelp",
    endDate: undefined
  },
  {
    provider: "totalcare",
    endDate: undefined
  },
  {
    provider: "staywell",
    endDate: undefined
  },
]

const times = [
  '9:00am', '9:30am',
  '10:00am', '10:30am',
  '11:00am', '11:30am',
  '12:00pm', '12:30pm',
  '1:00pm', '1:30pm',
  '2:00pm', '2:30pm',
  '3:00pm', '3:30pm',
  '4:00pm', '4:30pm',
];
