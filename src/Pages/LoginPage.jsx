import React from 'react'

const LoginPage = () => {
  return (
    <div className='container w-40 shadow-lg p-3 mb-5 bg-body rounded'>
    <form>
      <h1>Login form</h1>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="InputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="Check1"/>
    <label className="form-check-label" htmlFor="Check1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Login</button>
</form>
</div>
  )
}

export default LoginPage