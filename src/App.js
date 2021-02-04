import { UserSelect } from './features/userSelect/UserSelect';
import { Login } from './features/login/Login';
import { UserForm } from './features/userForm/UserForm';
import { Scheduler } from './features/scheduler/Scheduler';

function App() {
  return (
    <div>
      <UserSelect />
      <Login />
      <UserForm />
      <Scheduler />
    </div>
  );
}

export default App;
