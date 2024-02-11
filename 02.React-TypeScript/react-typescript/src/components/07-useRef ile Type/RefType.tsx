import React, { useEffect, useRef } from 'react'

function RefType() {

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

  return (
    <div>
        <input type='text' ref={inputRef} />
    </div>
  )
}

export default RefType