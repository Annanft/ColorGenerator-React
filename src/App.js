import React from 'react';
import Values from 'values.js';
import { useState } from 'react';
import ColorList from './components/ColorList';
import Form from './components/Form';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const[colors,setColors] = useState(new Values('#FF6000').all(10))

  const addColor = (y)=>{
    try {
      const ww = new Values(y).all(10)
      setColors(ww)
    } catch (error) {
      toast.error(error.message)
    }
  }


 

  return (
    <main>
    <Form addColor={addColor}/>
    <ColorList colors={colors} />
    <ToastContainer />
      
    
      
    </main>
  );
}

export default App;
