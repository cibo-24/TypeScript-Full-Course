import React from 'react';
import {inst} from '../03-Typeları Export ile Dışarıda Tanımlamak/propsTypes';

// React'te TypeScript ile Object props'u geçmek

function Instructor(props: inst) {
  return (
    <div>
        {props.instructorNameLastName.fistName} {props.instructorNameLastName.lastName}
    </div>
  )
}

export default Instructor