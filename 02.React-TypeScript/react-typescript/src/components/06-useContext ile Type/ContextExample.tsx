import React from 'react'
import { useContext } from 'react'
import {ThemeContext} from './ContextType';

function ContextExample() {
    const theme = useContext(ThemeContext);
  return (
    <div style={{backgroundColor: theme.primary.main}}>
        useContext Example with Theme
        <p style={{color: theme.secondary.text}}>useContext ile provider oluşturup bu kapsayıcı ile başka componentleri sararak context'in propertylerini geçirebiliriz.</p>
    </div>
  )
}

export default ContextExample