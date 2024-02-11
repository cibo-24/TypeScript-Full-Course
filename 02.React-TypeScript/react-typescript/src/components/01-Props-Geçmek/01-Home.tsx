import React from 'react'

// Props geçmek için, propsun bir type değeri alması gerekmektedir. Bu type'ı önceden ismini verip aldığı props ismine type değeri atarız.
// Daha sonra func içerisinde "props: Data" ile props'u geçeriz.

// Data içerisine Parents içerisinde ki props'un ismi ne ise onu geçiyoruz.
type Data = {
    name: string;
    courseNumber: number;
    isBest: boolean;
}

function Home(props: Data) {
  return (
    <div>{props.name} and Course Number: {props.courseNumber} is Course Active: {props.isBest ? <p>Active</p> : <p>Close</p>}</div>
  )
}

export default Home;