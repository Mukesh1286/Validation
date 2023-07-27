import React from 'react'

const LoginForm = () => {
  return (
    <div>
        <div className=" wrapper bg-dark d-flex align-items-center justify-content-center w-100">
    <div className='login'>
      <h2 className='mb-3'>Login Form</h2>
      <form className="needs-validation">
      <div className="form-group was-validated mb-2">
        <label htmlFor="email" className="form-label">Email Address</label>
        <input type="email" className="from-control" required/>
        <div className="invalid-feedback">
          Please Enter your email
        </div>
      </div>
      <div className="form-group was-validated mb-2">
        <label htmlFor="password" className="form-label">password</label>
        <input type="password"  className="from-control" required/>
        <div className="invalid-feedback">
          Please Enter your password
        </div>
      </div>
      <button type="submit" className="btn btn-primary mt-2 block w-100">Sign In</button>
      </form>
    </div>
    </div>
    </div>
  )
}

export default LoginForm