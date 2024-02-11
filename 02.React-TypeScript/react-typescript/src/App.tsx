import React from 'react';
import './App.css';
import Home from './components/01-Props-Geçmek/01-Home';
import Instructor from './components/01-Props-Geçmek/02-InstructorObject';
import ArrayList from './components/01-Props-Geçmek/03-ArrayList';
import Request from './components/01-Props-Geçmek/04-Request';
import EventActions from './components/02-HandleEvents/EventActions';
import StateType from './components/04-useState ile Type/StateType';
import ReducerType from './components/05-useReducer ile Type/ReducerType';
import ContextExample from './components/06-useContext ile Type/ContextExample';
import { ThemeContextProvider } from './components/06-useContext ile Type/ContextType';
import RefType from './components/07-useRef ile Type/RefType';


function App() {

  // object'i componente props olarak geçiyoruz.
  const instructor = {
    fistName: "Kenan",
    lastName: "Cibo",
    id: 0,
  }
  // Array'i componente props olarak geçiyoruz.
  const arrayList = [{
    firstName: "Kenan",
    lastName: "Cibo",
    id: 1,
  },
  {
    firstName: "Ozan",
    lastName: "Cibo",
    id: 2,
  },
  {
    firstName: "Canan",
    lastName: "Cibo",
    id: 3,
  },
  {
    firstName: "Ali",
    lastName: "Cibo",
    id: 4,
  }
  ]

  return (
    <div className="App">
      {/* Props */}
      <div className='props'>
        <h3 className='props-example'>Props</h3>
        <Home
          name="Home in Page"
          courseNumber={20}
          isBest={false}
        />
        <Instructor
          instructorNameLastName={instructor}
        />
        <ArrayList
          arrayListNameLastName={arrayList}
        />
        <Request status="success" />
        <h3 className='props-example'>Props</h3>
      </div>

      {/* Handle Events */}
      <div className='handleEvents'>
        <h3 className='events'>Handle Events</h3>
        <EventActions />
        <h3 className='events'>Handle Events</h3>

        {/* useState with Type */}
        <div className='useState'>
          <h5 className='useStateEx'>useState with Type</h5>
        <StateType />
        <h5 className='useStateEx'>useState with Type</h5>
        </div>

        {/* useReducer with Type */}
        <div className='useReducer'>
          <h5 className='useReducerEx'>useReducer with Type</h5>
          <ReducerType />
          <h5 className='useReducerEx'>useReducer with Type</h5>
        </div>

         {/* useContext with Type */}
         <div className='useContext'>
          <h5 className='useContextEx'>useContext with Type</h5>
          <ThemeContextProvider>
          <ContextExample />
          </ThemeContextProvider>
          
          <h5 className='useContextEx'>useContext with Type</h5>
        </div>

         {/* useRef with Type */}
         <div className='useRef'>
          <h5 className='useRefEx'>useRef with Type</h5>
          <RefType />
          
          <h5 className='useRefEx'>useRef with Type</h5>
        </div>
      </div>

    </div>
  );
}

export default App;
