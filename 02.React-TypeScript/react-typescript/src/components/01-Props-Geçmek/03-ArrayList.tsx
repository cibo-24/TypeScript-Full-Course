import React from 'react'
import {arrayProps} from '../03-Typeları Export ile Dışarıda Tanımlamak/propsTypes';

// React'te TypeScript ile Array'i props olarak geçmek. 
// Array'i props olarak atadıktan sonra bunu map ile içersinde döndükten sonra basmamız gerekiyor.

function ArrayList(props: arrayProps) {
  return (
    <div>
      {props.arrayListNameLastName.map(item => {
        return (
          <h3 key={item.id}>{item.firstName}  {item.lastName}</h3>
        )
      })}
    </div>
  )
}

export default ArrayList