import { useState } from 'react'

import RegisterPage from './Pages/RegisterPage'
import LoginPage from './Pages/LoginPage'


function App() {
  const[isRegister,setIsRegister]=useState(false)

  return (
    <>
    {isRegister ? (<LoginPage/>) : ( <RegisterPage setIsRegister={setIsRegister} />)}
      {/*<RegisterPage/>
      <LoginPage/>*/}
    </>
  )
}

export default App
