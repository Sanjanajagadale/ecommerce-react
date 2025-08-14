import { useState } from 'react'

import RegisterPage from './Pages/RegisterPage'
import LoginPage from './Pages/LoginPage'
import Dashboard from './Pages/Dashboard'
import Authprovider from


function App() {
  const[isRegister,setIsRegister]=useState(false)

  return (
    <>
    <Authprovider>
    {isRegister ? (<LoginPage/>) : ( <RegisterPage setIsRegister={setIsRegister} />)}
      {/*<RegisterPage/>
      <LoginPage/>*/}
      <Dashboard/>
     </Authprovider>
    </>
  )
}

export default App
