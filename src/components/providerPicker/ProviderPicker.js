import React from 'react';

export const ProviderPicker = ({providers, setProvider}) => {
  let count = 0;
  return (
    <div>
      <label>Choose a Provider</label><br/>
      <select name="providers" id="providers" onChange={e => setProvider(e.target.value)}>
        {providers.map(provider => {
          count += 1;
          return <option value={provider.username} key={count}>{provider.name}</option>
        })}
      </select>
    </div>
  )
}