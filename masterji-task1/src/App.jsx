import React from 'react'

import Batches from './Pages/Batches'
import OTPForm from './Pages/OTPForm'
import DragDrop from './Pages/DragDrop'
import {
  createBrowserRouter,
  Routes,Route
 
} from "react-router-dom";

const App = () => {
  return(

    <>
    <Routes>

      <Route path ='/' element ={<OTPForm/>} />
      <Route path ='/course-list' element ={<DragDrop/>} />
      <Route path ='/batches' element ={<Batches/>} />
    </Routes>
    </>
  )


 
}

export default App
