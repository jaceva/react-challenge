import React from 'react';

export const TimePicker = ({times, setTime}) => {
  let count = 0;
  return (
    <>
      <label>Choose an Available Time</label><br/>
      <select name="times" id="times" onChange={e => setTime(e.target.value)}>
      {times.map(time => {
      count += 1;
      return <option value={time} key={count}>{time}</option>
      })}
      </select>
    </>
  )
}