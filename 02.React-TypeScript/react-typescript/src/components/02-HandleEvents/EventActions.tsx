import React, { useState } from 'react'

function EventActions() {
    const [state,setState] = useState(0);
    const [value, setValue] = useState("");

    // Buton içerisine yazdığımız Click handleEventinin içerisinde ki işlevin type'ını belirlememiz gerekiyor.
    const incrementButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setState(state + 1);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

  return (
    <div>
        <p>{state}</p>
        <button onClick={incrementButton}>increment</button>
        <input type='text' value={value} onChange={handleChange}/>
    </div>
  )
}

export default EventActions