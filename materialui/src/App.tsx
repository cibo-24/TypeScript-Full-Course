import React from 'react';
import './App.css';
import { TypographyLesson } from './components/01-Typography';
import { LessonButton } from './components/02-Button';
import LessonButtonGroup from './components/03-ButtonGroup';
import LessonTextField from './components/04-TextField';
import LessonRadioGroup from './components/05-RadioGroup';
import RadioGroupExample from './components/06-RadioGroupExample';
import SelectLesson from './components/07-Select';
import SelectMultiple from './components/08-SelectMultiple';
import CheckboxLesson from './components/09-Checkbox';
import CheckBoxMultiple from './components/10-CheckBoxMultiple';
import AutoComplateLesson from './components/11-AutoComplate';
import BoxLesson from './components/12-Box';
import StackLesson from './components/13-Stack';
import GridLesson from './components/14-Grid';
import CardLesson from './components/15-Card';

function App() {
  return (
    <div className="App">
      {/* <TypographyLesson /> */}
      {/* <LessonButton /> */}
      {/* <LessonButtonGroup /> */}
      {/* <LessonTextField /> */}
      {/* <LessonRadioGroup /> */}
      {/* <RadioGroupExample /> */}
      {/* <SelectLesson /> */}
      {/* <SelectMultiple /> */}
      {/* <CheckboxLesson /> */}
      {/* <CheckBoxMultiple /> */}
      {/* <AutoComplateLesson /> */}
      {/* <BoxLesson /> */}
      {/* <StackLesson /> */}
      {/* <GridLesson /> */}
      <CardLesson />
    </div>
  );
}

export default App;
