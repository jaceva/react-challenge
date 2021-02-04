
export const Login = (isProvider=false) => {
  let title = "Patient";
  if (isProvider == true){
    title = "Provider";
  }
  return (
  <div>
    <label for="name">{title} Name:</label>
    <input type="text" id="name" />
  </div>
  )
}